'use client'

import { useState, useCallback, FormEvent } from 'react'
import { useUser } from '@/context/User'
import { ProfileModal } from '@/components/ui/ProfileModal'

export function UserGate({ children }: { children: React.ReactNode }) {
  const {
    userInfo,
    saveUserInfo,
    isProfileComplete,
    isLoading,
    isEditing,
  } = useUser()

  const [formValues, setFormValues] = useState({
    username: userInfo.username,
    jobTitle: userInfo.jobTitle,
  })
  const [errors, setErrors] = useState({
    username: '',
    jobTitle: '',
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormValues((fv) => ({ ...fv, [name]: value }))
      if (errors[name as keyof typeof errors]) {
        setErrors((errs) => ({ ...errs, [name]: '' }))
      }
    },
    [errors]
  )

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      const newErrors = {
        username: formValues.username ? '' : 'Username is required',
        jobTitle: formValues.jobTitle ? '' : 'Job title is required',
      }
      setErrors(newErrors)
      if (!newErrors.username && !newErrors.jobTitle) {
        saveUserInfo({
          username: formValues.username,
          jobTitle: formValues.jobTitle,
        })
      }
    },
    [formValues, saveUserInfo]
  )

  if (isLoading) return null
  if (isProfileComplete && !isEditing) return <>{children}</>

  return (
    <ProfileModal
      formValues={formValues}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isEditing={isEditing}
      isProfileComplete={isProfileComplete}
    />
  )
} 