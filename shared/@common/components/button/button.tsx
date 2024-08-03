import React, { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: () => void
}

export default function Button(props: Props) {
  return (
    <button type={props.type || "button"} className={props.className} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  )
}
