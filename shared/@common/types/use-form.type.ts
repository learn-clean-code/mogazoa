import React, { ChangeEvent, FocusEvent } from "react"

export interface UseForm<T> {
  defaultValues: T
  validate: (values: T) => Partial<T>
  onSubmit: (values: T) => void | Promise<void>
}

export type FormRegisterType<T> = (field: keyof T) => {
  value: T[keyof T]
  hasError: string | NonNullable<Partial<T>[keyof T]>
  onBlur: (event: FocusEvent<HTMLInputElement>) => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface FormValue<T> {
  values: T
  errors: Partial<T>
  isTouched: Partial<T>
  register: FormRegisterType<T>
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  handleSetError: (error: Partial<T>) => void
  isFormError: boolean
}

export type FormChildrenType<T> = (formValue: FormValue<T>) => JSX.Element

export type FormProps<T> = UseForm<T> & { className: string; children: FormChildrenType<T> }
