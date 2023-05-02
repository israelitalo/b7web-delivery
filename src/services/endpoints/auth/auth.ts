import { api } from '../../api'

type LoginParams = {
  email: string;
  password: string;
}
const login = <T>(params: LoginParams) => api.post<T>('/login', params);

type ForgotParams = {
  email: string;
}
const forgot = <T>(params: ForgotParams) => api.post<T>('/forgot', params);

type ChangePasswordParams = {
  password: string;
  confirmPassword: string;
}
const changePassword = <T>(params: ChangePasswordParams) => api.post<T>('/change-password', params);

export { login, forgot, changePassword };