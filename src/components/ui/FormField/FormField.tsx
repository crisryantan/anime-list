'use client';

import { Field, Input } from '@chakra-ui/react';
import React, { memo } from 'react';

export interface FormFieldProps {
  label: string
  name: 'username' | 'jobTitle'
  value: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormField = memo(({
  label,
  name,
  value,
  error = '',
  onChange
}: FormFieldProps) => (
  <Field.Root invalid={!!error}>
    <Field.Label color="primary.700">{label}</Field.Label>
    <Input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${label.toLowerCase()}`}
      borderColor="primary.100"
      _focus={{ borderColor: 'primary.500', boxShadow: '0 0 0 1px var(--chakra-colors-primary-500)' }}
      _placeholder={{ color: 'gray.400' }}
      color="primary.700"
      bg="white"
      p={2}
    />
    {error && (
      <Field.ErrorText>
        {error}
      </Field.ErrorText>
    )}
  </Field.Root>
));

FormField.displayName = 'FormField'; 