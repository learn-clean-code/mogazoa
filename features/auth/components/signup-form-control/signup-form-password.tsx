import { FormControl } from "@common/components"
import { FormRegisterType } from "@common/types"
import { DefaultValues } from "@/features/auth/types"

interface Props<T> {
  register: FormRegisterType<T>
}

export default function SignupFormPassword({ register }: Props<DefaultValues>) {
  return (
    <FormControl {...register("password")} id="password">
      <FormControl.Layout>
        <FormControl.Label>비밀번호</FormControl.Label>
        <FormControl.Password placeholder="비밀번호를 입력해주세요" />
        <FormControl.ErrorMessage />
      </FormControl.Layout>
    </FormControl>
  )
}
