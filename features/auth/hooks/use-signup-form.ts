import { FormEventHandler, useState } from "react"
import { AUTH_FORM_KEY, AUTH_FORM_VALUE } from "@common/types"
import { AuthApiInstance } from "@common/services"
import axios, { AxiosError } from "axios"

type Props<T extends string, U> = {
  [key in T]: U
} & {
  onFormError: (error: any) => void
}

export default function useSignupForm({
  email,
  nickname,
  password,
  passwordConfirmation,
  onFormError,
}: Props<AUTH_FORM_KEY, AUTH_FORM_VALUE>) {
  const [isLoading, setIsLoading] = useState(false)
  const isFormValid = email.isValid && nickname.isValid && password.isValid && passwordConfirmation.isValid

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    setIsLoading(true)
    if (!isFormValid) return

    try {
      return await AuthApiInstance.signup({
        email: email.value,
        nickname: nickname.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
      })
    } catch (err) {
      const error = err as AxiosError<{ message: string }, any>
      onFormError({ data: error.response!.data, status: error.response!.status })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    onSubmit,
    isLoading,
    isFormValid,
  }
}
