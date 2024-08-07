import { FormControl } from "@common/components"
import { FormRegisterType } from "@common/types"
import { DefaultValues } from "@/features/auth/types"

interface Props<T> {
  register: FormRegisterType<T>
}

export default function SignupFormPasswordConfirm({ register }: Props<DefaultValues>) {
  return (
    <FormControl {...register("passwordConfirm")} id="passwordConfirm">
      <FormControl.Layout>
        <FormControl.Label>비밀번호 확인</FormControl.Label>
        <FormControl.Password placeholder="비밀번호를 다시 입력해주세요" />
        <FormControl.ErrorMessage />
      </FormControl.Layout>
    </FormControl>
  )
}
