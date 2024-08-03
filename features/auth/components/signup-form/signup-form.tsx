import { useState } from "react"
import { Button } from "@common/components"
import { useInput } from "@common/hooks"
import { emailValidation, nicknameValidation, passwordConfirmValidation, passwordValidation } from "@common/utils"
import { useSignupForm } from "@/features/auth/hooks"
import { SignupEmail, SignupNickname, SignupPassowrd, SignupPasswordConfirm } from "@/features/auth/components"

export default function SignupForm() {
  const [formError, setFormError] = useState<null | { data: { message: string }; status: number }>(null)
  const onFormError = (error: any) => setFormError(error)
  const onFormResetError = () => setFormError(null)

  const emailStates = useInput({ validation: emailValidation, formError: !!formError, onFormResetError })
  const nicknameStates = useInput({ validation: nicknameValidation })
  const passwordStates = useInput({ validation: passwordValidation })
  const passwordConfirmStates = useInput({
    validation: (value: string) => passwordConfirmValidation(passwordStates.value, value),
  })

  const formStates = useSignupForm({
    email: emailStates,
    nickname: nicknameStates,
    password: passwordStates,
    passwordConfirmation: passwordConfirmStates,
    onFormError,
  })

  return (
    <form className="w-[640px] flex flex-col gap-y-10" onSubmit={formStates.onSubmit}>
      <SignupEmail {...emailStates} id="email" formError={formError} />
      <SignupNickname {...nicknameStates} id="nickname" />
      <SignupPassowrd {...passwordStates} id="password" />
      <SignupPasswordConfirm {...passwordConfirmStates} id="password-confirm" />
      <Button
        className="gradient w-full h-[65px] rounded-lg mt-[20px]"
        type="submit"
        disabled={!formStates.isFormValid}
      >
        가입하기
      </Button>
    </form>
  )
}
