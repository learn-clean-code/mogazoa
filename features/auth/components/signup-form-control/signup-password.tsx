import { FormControl } from "@common/components"
import { FormControlContextType } from "@common/components/form-control/form-control.type"

export default function SignupPassowrd(props: FormControlContextType) {
  return (
    <FormControl {...props}>
      <FormControl.Layout>
        <FormControl.Label>비밀번호</FormControl.Label>
        <FormControl.Password placeholder="비밀번호를 입력해주세요" />
        <FormControl.ErrorMessage>비밀번호 형식이 유효하지 않습니다.</FormControl.ErrorMessage>
      </FormControl.Layout>
    </FormControl>
  )
}
