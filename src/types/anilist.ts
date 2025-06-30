export type MediaTitle = {
  romaji: string
  english: string | null
  native: string
}

export type MediaCoverImage = {
  large: string
  medium: string
  color: string | null
}

export type Media = {
  id: number
  title: MediaTitle
  coverImage: MediaCoverImage
  bannerImage: string | null
  description: string | null
  episodes: number | null
  status: string
  genres: string[]
  averageScore: number | null
  popularity: number
  seasonYear: number | null
  format: string | null
}

export type PageInfo = {
  total: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  perPage: number
}

export type MediaListResponse = {
  Page: {
    pageInfo: PageInfo
    media: Media[]
  }
}

export type MediaResponse = {
  Media: Media & {
    source: string | null
    trailer: {
      id: string
      site: string
      thumbnail: string
    } | null
    startDate: {
      year: number
      month: number
      day: number
    } | null
    endDate: {
      year: number
      month: number
      day: number
    } | null
    studios: {
      nodes: {
        id: number
        name: string
      }[]
    }
  }
}

export type MediaType = 'ANIME' | 'MANGA'

export enum MediaFormat {
  TV = 'TV',
  TV_SHORT = 'TV_SHORT',
  MOVIE = 'MOVIE',
  SPECIAL = 'SPECIAL',
  OVA = 'OVA',
  ONA = 'ONA',
  MUSIC = 'MUSIC',
  MANGA = 'MANGA',
  NOVEL = 'NOVEL',
  ONE_SHOT = 'ONE_SHOT'
} 