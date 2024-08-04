'use client'
import { useState } from 'react'

import Input from '@/components/input/Input'

export default function SignUpClient() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form>
        <Input
          id="email"
          name="email"
          value={email}
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          name="password"
          value={password}
          label="비밀번호"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  )
}
