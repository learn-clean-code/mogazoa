import React, { ChangeEvent, FocusEvent } from "react"
import { useForm } from "@common/hooks"
import { FormProps } from "@common/types"

export default function Form<T>(props: FormProps<T>) {
  const formValue = useForm<T>({
    defaultValues: props.defaultValues,
    validate: props.validate,
    onSubmit: props.onSubmit,
  })

  return (
    <form className={props.className} onSubmit={formValue.handleSubmit}>
      {props.children(formValue)}
    </form>
  )
}
