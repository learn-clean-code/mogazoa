import {
  emailValidation,
  nicknameValidation,
  passwordConfirmValidation,
  passwordValidation,
} from "@/shared/@common/utils"
import type { DefaultValues } from "../types/signup.type"
import { AuthApiInstance } from "@/shared/@common/services"
import { AxiosError } from "axios"

export const validate = (values: DefaultValues) => {
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
}

export const defaultValues: DefaultValues = {
  email: "",
  nickname: "",
  password: "",
  passwordConfirm: "",
}
