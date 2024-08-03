import { createContext, useContext } from "react"
import Image from "next/image"
import { useToggle } from "@common/hooks"
import type {
  FormControlContextType,
  FormControlProps,
  LabelProps,
  InputProps,
  ErrorMessageProps,
  LayoutProps,
  EyeProps,
} from "./form-control.type"
import EyeOpenIcon from "@/public/images/icons/eye-open.svg"
import EyeCloseIcon from "@/public/images/icons/eye-close.svg"

export const FormControlContext = createContext<FormControlContextType>({
  id: "",
  value: "",
  hasError: false,
  onInputChange: () => {},
  onInputBlur: () => {},
})

function useFormControlContext() {
  const formControlContext = useContext(FormControlContext)
  if (!formControlContext) throw new Error("FormControl Context에서 사용해주세요.")
  return formControlContext
}

export function FormControl(props: FormControlProps) {
  return <FormControlContext.Provider value={{ ...props }}>{props.children}</FormControlContext.Provider>
}

export function Label(props: LabelProps) {
  const formControlContext = useFormControlContext()
  return (
    <label htmlFor={formControlContext.id} className="text-base">
      {props.children}
    </label>
  )
}

export function Input(props: InputProps) {
  const formControlContext = useFormControlContext()
  const errorClassName = formControlContext.hasError ? "border-red" : ""
  return (
    <input
      type={props.type || "text"}
      placeholder={props.placeholder}
      id={formControlContext.id}
      onChange={formControlContext.onInputChange}
      onBlur={formControlContext.onInputBlur}
      value={formControlContext.value}
      className={`text-base h-[70px] text-gray-50 rounded-lg px-5 placeholder:text-gray-200 bg-input-background border border-input-border ${errorClassName} ${props.className}`}
    />
  )
}

export function ErrorMessage(props: ErrorMessageProps) {
  const formControlContext = useFormControlContext()
  if (!formControlContext.hasError) return null
  return <p className={`text-sm ${props.className}`}>{props.children}</p>
}

export function Layout(props: LayoutProps) {
  const formControlContext = useFormControlContext()
  const errorClassName = formControlContext.hasError ? "text-red" : ""
  return <div className={`relative flex flex-col gap-y-2 ${errorClassName} ${props.className}`}>{props.children}</div>
}

export function EyeToggle(props: EyeProps) {
  const icon = props.isToggle ? EyeOpenIcon : EyeCloseIcon
  const alt = props.isToggle ? "비밀번호 보기" : "비밀번호 가리기"

  return (
    <button className={`w-6 h-6 absolute right-5 top-[50%] -translate-y-[50%]`} onClick={props.onToggle} type="button">
      <Image src={icon} alt={alt} />
    </button>
  )
}

export function Password(props: InputProps) {
  const formControlContext = useFormControlContext()
  const errorClassName = formControlContext.hasError ? "border-red" : ""
  const { isToggle, onToggle } = useToggle()

  return (
    <div className="relative">
      <input
        type={isToggle ? "text" : "password"}
        placeholder={props.placeholder}
        id={formControlContext.id}
        onChange={formControlContext.onInputChange}
        onBlur={formControlContext.onInputBlur}
        value={formControlContext.value}
        className={`w-full text-base h-[70px] text-gray-50 rounded-lg px-5 placeholder:text-gray-200 bg-input-background border border-input-border ${errorClassName} ${props.className}`}
      />
      <EyeToggle isToggle={isToggle} onToggle={onToggle} />
    </div>
  )
}

FormControl.Layout = Layout
FormControl.Label = Label
FormControl.Input = Input
FormControl.ErrorMessage = ErrorMessage
FormControl.Password = Password
