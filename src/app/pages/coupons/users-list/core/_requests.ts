import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_metronic/helpers'
import {User, UsersQueryResponse} from './_models'

const API_URL = 'https://quiz.datacubeindia.com/api/common'
const USER_URL = `${API_URL}/coupon`

const getUsers = (query: string): Promise<UsersQueryResponse> => {
  return axios.get(`${USER_URL}?${query}`).then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<User | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const createUser = (user: User): Promise<User | undefined> => {
  return axios
    .post(USER_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateSetting = (user: User): Promise<User | undefined> => {
  return axios
    .post(`${USER_URL}/update`, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateStatus = (status: any, id: ID): Promise<User | undefined> => {
  return axios
    .put(`${USER_URL}/${id}`, status)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getUsers,
  deleteUser,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateSetting,
  updateStatus,
}
