import { useState, FocusEventHandler, ChangeEventHandler, useEffect, useCallback, FormEvent } from "react"
import type { UseForm, Submitter } from "@common/types"

export default function useForm<T>({ defaultValues, validate }: UseForm<T>) {
  const [values, setValues] = useState(defaultValues)
  const [isTouched, setIsTouched] = useState<Partial<T>>({})
  const [errors, setErrors] = useState<Partial<T>>({})

  const isFormError = Object.values(errors).some((error) => !!error)

  const handleSubmit = (submitter: Submitter<T>) => async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isFormError) return

    try {
      const result = await submitter(values)
    } catch (err) {
      const error = err as Partial<T>
      handleSetError(error)
    }
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) =>
    setIsTouched((prevState) => ({
      ...prevState,
      [event.target.name]: true,
    }))

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))

  const runValidator = useCallback(() => validate(values), [validate, values])

  useEffect(() => {
    const errors = runValidator()
    setErrors(errors)
  }, [runValidator, values])

  const handleSetError = (error: Partial<T>) => {
    setErrors((prevState) => ({ ...prevState, ...error }))
  }

  const register = (field: keyof T) => {
    const value = values[field]
    const hasError = (isTouched[field] && errors[field]) || ""
    return {
      value,
      hasError,
      onBlur: handleBlur,
      onChange: handleChange,
    }
  }

  return {
    values,
    errors,
    isTouched,
    register,
    handleSubmit,
    handleSetError,
    isFormError,
  }
}
