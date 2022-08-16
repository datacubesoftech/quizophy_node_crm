import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_metronic/helpers'
import {Role, PermissionQueryResponse} from './_models'

// const API_URL = process.env.REACT_APP_THEME_API_URL
const API_URL = 'https://quiz.datacubeindia.com/api/common'
const ROLE_URL = `${API_URL}/staff`

const getUsers = (query: string): Promise<PermissionQueryResponse> => {
  return axios
    .get(`${ROLE_URL}?${query}`)
    .then((d: AxiosResponse<PermissionQueryResponse>) => d.data)
}

const getRoles = (): Promise<PermissionQueryResponse> => {
  return axios.get(`${ROLE_URL}/roles`).then((d: AxiosResponse<PermissionQueryResponse>) => d.data)
}

const getPermissions = (): Promise<PermissionQueryResponse> => {
  return axios
    .get(`${API_URL}/role/permissions`)
    .then((d: AxiosResponse<PermissionQueryResponse>) => d.data)
}

const checkEmail = (email: string): Promise<PermissionQueryResponse> => {
  return axios
    .get(`${ROLE_URL}/checkEmail?email=${email}`)
    .then((d: AxiosResponse<PermissionQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<Role | undefined> => {
  return axios
    .get(`${ROLE_URL}/${id}`)
    .then((response: AxiosResponse<Response<Role>>) => response.data)
    .then((response: Response<Role>) => response.data)
}

const createUser = (role: Role): Promise<Role | undefined> => {
  debugger
  const fd = new FormData()
  const admin: any = role.admin
  fd.append('first_name', role.first_name)
  fd.append('last_name', role.last_name)
  fd.append('email', role.email)
  fd.append('phone_number', role.phone_number)
  fd.append('password', role.password)
  fd.append('profile_image', role.profile_image)
  fd.append('admin', admin)
  fd.append('role_id', role.role_id)
  fd.append('permissions', JSON.stringify(role.permissions))
  return axios
    .post(ROLE_URL, fd)
    .then((response: AxiosResponse<Response<Role>>) => response.data)
    .then((response: Response<Role>) => response.data)
}

const updateUser = (role: Role): Promise<Role | undefined> => {
  debugger
  const fd = new FormData()
  const admin: any = role.admin
  fd.append('first_name', role.first_name)
  fd.append('last_name', role.last_name)
  fd.append('email', role.email)
  fd.append('phone_number', role.phone_number)
  fd.append('password', role.password)
  fd.append('profile_image', role.profile_image)
  fd.append('admin', admin)
  fd.append('role_id', role.role_id)
  fd.append('permissions', JSON.stringify(role.permissions))
  return axios
    .put(`${ROLE_URL}/${role.id}`, fd)
    .then((response: AxiosResponse<Response<Role>>) => response.data)
    .then((response: Response<Role>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${ROLE_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${ROLE_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getUsers,
  deleteUser,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateUser,
  getPermissions,
  getRoles,
  checkEmail,
}
