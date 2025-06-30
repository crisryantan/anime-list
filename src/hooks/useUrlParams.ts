import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { MediaSort } from '@/graphql/anilist'
import { sortOptions } from './useMediaSortOptions'

const labelToEnum = Object.fromEntries(
  sortOptions.map(({ label, value }) => [label, value])
) as Record<string, MediaSort>

const enumToLabel = Object.fromEntries(
  sortOptions.map(({ label, value }) => [value, label])
) as Record<MediaSort, string>

function parseParams(
  params: URLSearchParams,
  defaultSort: MediaSort
): { page: number; search: string; sort: MediaSort } {
  const page = parseInt(params.get('page') ?? '1', 10)
  const search = params.get('search') ?? ''
  const raw = params.get('sort') ?? ''
  const sort =
    labelToEnum[raw] ||
    (Object.values(MediaSort).includes(raw as MediaSort)
      ? (raw as MediaSort)
      : defaultSort)
  return { page, search, sort }
}

function buildQuery(
  { page, search, sort }: { page: number; search: string; sort: MediaSort },
  defaultSort: MediaSort
) {
  const q = new URLSearchParams()
  if (page > 1) q.set('page', String(page))
  if (search) q.set('search', search)
  if (sort !== defaultSort) q.set('sort', enumToLabel[sort])
  return q.toString()
}

export function useUrlParams(
  defaultSort: MediaSort = MediaSort.POPULARITY_DESC
): [
  { page: number; search: string; sort: MediaSort },
  (up: Partial<{ page: number; search: string; sort: MediaSort }>) => void
] {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const prev = useRef('')

  const urlFilters = useMemo(
    () => parseParams(searchParams, defaultSort),
    [searchParams, defaultSort]
  )

  const [filters, setFilters] = useState(urlFilters)

  useEffect(() => {
    const query = buildQuery(filters, defaultSort)
    const url = query ? `${pathname}?${query}` : pathname
    if (url !== prev.current) {
      prev.current = url
      router.replace(url)
    }
  }, [filters, pathname, router, defaultSort])

  useEffect(() => {
    setFilters(urlFilters)
    prev.current = `${pathname}${searchParams.toString() ? `?${searchParams}` : ''}`
  }, [urlFilters, pathname, searchParams])

  const update = useCallback(
    (update: Partial<{ page: number; search: string; sort: MediaSort }>) => {
      setFilters((f) => {
        const next = { ...f, ...update }
        if (
          (update.search != null && update.search !== f.search) ||
          (update.sort != null && update.sort !== f.sort)
        ) {
          next.page = 1
        }
        return next
      })
    },
    []
  )

  return [filters, update]
}
