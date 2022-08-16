import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL
const LOCAL_API_URL = process.env.API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `https://quiz.datacubeindia.com/api/common/staff/login`
export const VERIFY_URL = `https://quiz.datacubeindia.com/api/common/staff/verifyOtp`
export const RESEND_URL = `https://quiz.datacubeindia.com/api/common/staff/resendOtp`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login (email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}

export function verify (phone_number: string, otp: string) {
  return axios.post<AuthModel>(VERIFY_URL, {
    phone_number,
    otp,
  })
}

export function resend (phone_number: string) {
  return axios.post<AuthModel>(RESEND_URL, {
    phone_number,
  })
}

// Server should return AuthModel
export function register (
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword (email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken (token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}
