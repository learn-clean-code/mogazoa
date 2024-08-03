import { FormControl } from "@common/components"
import { FormControlContextType } from "@common/components/form-control/form-control.type"

export default function SignupEmail(
  props: FormControlContextType & { formError: null | { data: { message: string } } }
) {
  return (
    <FormControl {...props}>
      <FormControl.Layout>
        <FormControl.Label>이메일</FormControl.Label>
        <FormControl.Input type="text" placeholder="이메일을 입력해주세요" />
        <FormControl.ErrorMessage>
          {props.formError?.data.message || "이메일 형식이 유효하지 않습니다."}
        </FormControl.ErrorMessage>
      </FormControl.Layout>
    </FormControl>
  )
}
