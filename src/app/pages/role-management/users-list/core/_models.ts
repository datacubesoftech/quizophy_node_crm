import {ID, Response} from '../../../../../_metronic/helpers'
export type Role = {
  id?: ID
  name?: string,
  role_permission?: any[]
}

export type PermissionQueryResponse = Response<Array<Role>>

export const initialRole: Role = {
  name: '',
  role_permission: []
}
