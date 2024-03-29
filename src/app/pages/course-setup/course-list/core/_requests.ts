import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_metronic/helpers'
import {User, UsersQueryResponse} from './_models'

const COURSE_URL = 'https://quiz.datacubeindia.com/api/common/course'

const getUsers = (query: string): Promise<UsersQueryResponse> => {
  return axios
    .get(`${COURSE_URL}/getAll?${query}`)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}

const getAllCourses = (): Promise<any> => {
  return axios.get(`${COURSE_URL}`).then((d: AxiosResponse<any>) => d.data)
}

const getUserById = (id: ID): Promise<User | undefined> => {
  return axios
    .get(`${COURSE_URL}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const createUser = (user: User): Promise<User | undefined> => {
  return axios
    .post(COURSE_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateStatus = (status: any, id: ID): Promise<User | undefined> => {
  return axios
    .put(`${COURSE_URL}/${id}`, status)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${COURSE_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${COURSE_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getUsers,
  deleteUser,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateStatus,
  getAllCourses,
}
