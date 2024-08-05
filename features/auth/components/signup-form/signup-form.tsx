import { useCallback } from "react"
import { Button, FormControl } from "@common/components"
import { useForm } from "@common/hooks"
import { emailValidation, nicknameValidation, passwordConfirmValidation, passwordValidation } from "@common/utils"
import { AuthApiInstance } from "@/shared/@common/services"
import { AxiosError } from "axios"

interface DefaultValues {
  email: string
  nickname: string
  password: string
  passwordConfirm: string
}

export default function SignupForm() {
  const { register, handleSubmit, handleSetError, isFormError } = useForm<DefaultValues>({
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordConfirm: "",
    },
    validate: useCallback((values) => {
      const error: Partial<DefaultValues> = {
        email: "",
        nickname: "",
        password: "",
        passwordConfirm: "",
      }

      if (!emailValidation(values.email)) error.email = "이메일 형식이 유효하지 않습니다."
      if (!nicknameValidation(values.nickname)) error.nickname = "닉네임 형식이 유효하지 않습니다."
      if (!passwordValidation(values.password)) error.password = "비밀번호 형식이 유효하지 않습니다."
      if (!passwordConfirmValidation(values.password, values.passwordConfirm))
        error.passwordConfirm = "비밀번호가 일치하지 않습니다."

      return error
    }, []),
  })

  const submitter = async (values: DefaultValues) => {
    try {
      await AuthApiInstance.signup({
        email: values.email,
        nickname: values.nickname,
        password: values.password,
        passwordConfirmation: values.passwordConfirm,
      })
    } catch (err) {
      const error = err as AxiosError<{ message: string }, any>
      handleSetError({
        email: error.response!.data.message || "알 수 없는 에러가 발생했어요",
      })
    }
  }

  return (
    <form className="w-[640px] flex flex-col gap-y-10" onSubmit={handleSubmit(submitter)}>
      <FormControl {...register("email")} id="email">
        <FormControl.Layout>
          <FormControl.Label>이메일</FormControl.Label>
          <FormControl.Input type="text" placeholder="이메일을 입력해주세요" />
          <FormControl.ErrorMessage />
        </FormControl.Layout>
      </FormControl>
      <FormControl {...register("nickname")} id="nickname">
        <FormControl.Layout>
          <FormControl.Label>닉네임</FormControl.Label>
          <FormControl.Input type="text" placeholder="닉네임을 입력해주세요" />
          <FormControl.ErrorMessage />
        </FormControl.Layout>
      </FormControl>
      <FormControl {...register("password")} id="password">
        <FormControl.Layout>
          <FormControl.Label>비밀번호</FormControl.Label>
          <FormControl.Password placeholder="비밀번호를 입력해주세요" />
          <FormControl.ErrorMessage />
        </FormControl.Layout>
      </FormControl>
      <FormControl {...register("passwordConfirm")} id="passwordConfirm">
        <FormControl.Layout>
          <FormControl.Label>비밀번호 확인</FormControl.Label>
          <FormControl.Password placeholder="비밀번호를 다시 입력해주세요" />
          <FormControl.ErrorMessage />
        </FormControl.Layout>
      </FormControl>

      <Button
        className="gradient w-full h-[65px] rounded-lg mt-[20px] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:bg-none"
        type="submit"
        disabled={isFormError}
      >
        가입하기
      </Button>
    </form>
  )
}
