export type AUTH_FORM_VALUE = {
  value: string
  isValid: boolean
}

export type AUTH_FORM_KEY = "email" | "nickname" | "password" | "passwordConfirmation"

export interface AuthResponse {
  accessToken: string
  user: AuthUser
}

export interface AuthUser {
  id: number
  email: string
  description: string
  image: string | null
  teamId: string
  nickname: string
  updatedAt: string
  createdAt: string
}

export type SignupForm = { [key in AUTH_FORM_KEY]: string }
