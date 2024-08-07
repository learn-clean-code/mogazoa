import { FormControl } from "@common/components"
import { FormRegisterType } from "@common/types"
import { DefaultValues } from "@/features/auth/types"

interface Props<T> {
  register: FormRegisterType<T>
}

export default function SignupFormEmail({ register }: Props<DefaultValues>) {
  return (
    <FormControl {...register("email")} id="email">
      <FormControl.Layout>
        <FormControl.Label>이메일</FormControl.Label>
        <FormControl.Input type="text" placeholder="이메일을 입력해주세요" />
        <FormControl.ErrorMessage />
      </FormControl.Layout>
    </FormControl>
  )
}
