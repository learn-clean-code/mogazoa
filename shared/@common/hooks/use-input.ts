import { ChangeEventHandler, useState } from "react"

type Validation = (value: string) => boolean

interface Props {
  validation?: Validation
  defaultValue?: string
}

export default function useInput(props: Props) {
  const [value, setValue] = useState(props.defaultValue || "")
  const [isTouched, setIsTouched] = useState(false)

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => setValue(event.target.value)
  const onInputReset = () => setValue("")
  const onInputBlur = () => setIsTouched(true)

  const isValid = props.validation && props.validation(value)
  const hasError = !isValid && isTouched

  return {
    value,
    isValid,
    hasError,
    onInputChange,
    onInputReset,
    onInputBlur,
  }
}
