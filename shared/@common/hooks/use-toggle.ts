import { useState } from "react"

export default function useToggle<T>(defaultValue?: boolean) {
  const [isToggle, setIsToggle] = useState(defaultValue || false)

  const onToggle = () => setIsToggle((prevToggle) => !prevToggle)
  const onOpenToggle = () => setIsToggle(true)
  const onCloseToggle = () => setIsToggle(false)

  return {
    isToggle,
    onToggle,
    onOpenToggle,
    onCloseToggle,
  }
}
