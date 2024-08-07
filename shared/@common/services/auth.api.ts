import { axiosInstance } from "@/config"
import type { AuthResponse, SignupForm } from "@common/types"
import axios from "axios"

class AuthAPI {
  async signup(signupForm: SignupForm) {
    return (await axiosInstance.post<AuthResponse>("auth/signup", signupForm)).data
  }
}

const AuthApiInstance = new AuthAPI()

export default AuthApiInstance
