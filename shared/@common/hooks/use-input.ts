import { ChangeEventHandler, useState } from "react"

type Validation = (value: string) => boolean

interface Props {
  validation?: Validation
  defaultValue?: string
  formError?: boolean
  onFormResetError?: () => void
}

export default function useInput(props: Props) {
  const [value, setValue] = useState(props.defaultValue || "")
  const [isTouched, setIsTouched] = useState(false)

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
    props.onFormResetError && props.onFormResetError()
  }
  const onInputReset = () => setValue("")
  const onInputBlur = () => setIsTouched(true)

  const isValid = props.validation ? props.validation(value) : true
  const hasError = props.formError ? true : !isValid && isTouched

  return {
    value,
    isValid,
    hasError,
    onInputChange,
    onInputReset,
    onInputBlur,
  }
}
