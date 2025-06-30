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
}: FormFieldProps) => {
  // Generate unique id for input-label association
  const id = `field-${name}`;
  
  return (
    <Field.Root invalid={!!error}>
      <Field.Label htmlFor={id} color="primary.700">{label}</Field.Label>
      <Input
        id={id}
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
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        required
      />
      {error && (
        <Field.ErrorText id={`${id}-error`}>
          {error}
        </Field.ErrorText>
      )}
    </Field.Root>
  );
});

FormField.displayName = 'FormField'; 