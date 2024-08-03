import { ChangeEvent, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react"

export interface FormControlContextType {
  id: string
  value: string
  hasError: boolean
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onInputBlur: () => void
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

export interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  errorMessage?: { status: number | undefined; data: { message: string } } | null
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface EyeProps {
  isToggle: boolean
  onToggle: () => void
}
