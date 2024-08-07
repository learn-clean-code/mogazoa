import { ChangeEvent, FocusEvent, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react"

export interface FormControlContextType {
  id: string
  value: string
  hasError: string | boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: FocusEvent<HTMLInputElement>) => void
}

export interface FormControlProps extends FormControlContextType {
  children: ReactNode
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface EyeProps {
  isToggle: boolean
  onToggle: () => void
}
