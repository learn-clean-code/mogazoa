import { useState, ChangeEvent } from 'react'
import Icon from '@/components/icon/Icon'
import styles from './Input.module.scss'

import classNames from 'classnames'

interface InputProps {
  id: string
  label: string
  labelVisible?: boolean
  name?: string
  value?: string
  email?: string
  password?: string
  placeholder?: string
  readOnly?: boolean
  disabled?: boolean
  error?: { message: string }
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  id,
  label,
  labelVisible,
  name = '',
  value,
  email,
  password,
  placeholder = '',
  readOnly,
  disabled,
  error,
  onChange,
}: InputProps) {
  const [inputValue, setInputValue] = useState(value ? value : '')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const checkType = () => {
    if (email) {
      return 'email'
    }

    if (password) {
      return isPasswordVisible ? 'text' : 'password'
    }

    return 'text'
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange(e)
  }

  const iconType = isPasswordVisible ? 'show' : 'hide'
  const iconLabel = `비밀번호 ${isPasswordVisible ? '표시' : '감춤'}`

  return (
    <div className={styles.container}>
      <label
        className={classNames(styles.label, labelVisible || styles.labelHidden)}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={classNames(
          styles.inputWrapper,
          error && styles.inputWrapperError,
        )}
      >
        <input
          className={styles.input}
          type={checkType()}
          id={id}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          onChange={handleChange}
        />
        {password ? (
          <button
            className={styles.button}
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            disabled={disabled}
          >
            <Icon type={iconType} alt={iconLabel} title={iconLabel} />
          </button>
        ) : null}
      </div>
      {error && <span role="alert">{error.message}</span>}
    </div>
  )
}
