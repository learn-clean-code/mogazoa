import { Button, Form } from "@common/components"
import { validate, defaultValues, onSubmit } from "@/features/auth/logic"
import type { DefaultValues } from "@/features/auth/types"
import {
  SignupFormEmail,
  SignupFormNickname,
  SignupFormPassword,
  SignupFormPasswordConfirm,
} from "@/features/auth/components"

export default function SignupForm() {
  return (
    <Form<DefaultValues>
      defaultValues={defaultValues}
      validate={validate}
      onSubmit={onSubmit}
      className="w-[640px] flex flex-col gap-y-10"
    >
      {({ register, isFormError }) => (
        <>
          <SignupFormEmail register={register} />
          <SignupFormNickname register={register} />
          <SignupFormPassword register={register} />
          <SignupFormPasswordConfirm register={register} />
          <Button
            className="gradient w-full h-[65px] rounded-lg mt-[20px] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:bg-none"
            type="submit"
            disabled={isFormError}
          >
            가입하기
          </Button>
        </>
      )}
    </Form>
  )
}
