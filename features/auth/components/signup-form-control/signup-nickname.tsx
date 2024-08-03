import { FormControl } from "@common/components"
import { FormControlContextType } from "@common/components/form-control/form-control.type"

export default function SignupNickname(props: FormControlContextType) {
  return (
    <FormControl {...props}>
      <FormControl.Layout>
        <FormControl.Label>닉네임</FormControl.Label>
        <FormControl.Input type="text" placeholder="닉네임을 입력해주세요" />
        <FormControl.ErrorMessage>닉네임 형식이 유효하지 않습니다.</FormControl.ErrorMessage>
      </FormControl.Layout>
    </FormControl>
  )
}
