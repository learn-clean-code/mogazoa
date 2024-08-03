import { FormControl } from "@common/components"
import { FormControlContextType } from "@common/components/form-control/form-control.type"

export default function SignupPasswordConfirm(props: FormControlContextType) {
  return (
    <FormControl {...props}>
      <FormControl.Layout>
        <FormControl.Label>비밀번호 확인</FormControl.Label>
        <FormControl.Password placeholder="비밀번호를 다시 입력해주세요" />
        <FormControl.ErrorMessage>비밀번호가 일치하지 않습니다.</FormControl.ErrorMessage>
      </FormControl.Layout>
    </FormControl>
  )
}
