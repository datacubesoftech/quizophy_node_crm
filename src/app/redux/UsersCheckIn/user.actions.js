import {GET, UPDATE, SUBMIT, DELETE} from './user.types'

export const submitForm = (formData) => {
  return {type: SUBMIT, payload: formData}
}

export const updateForm = (formData) => {
  return {type: UPDATE, payload: formData}
}

export const getFormData = () => {
  return {type: GET}
}

export const deleteFormData = (i) => {
  return {type: DELETE, payload: i}
}

export const InsertNewUser = (user) => (dispatch) => {}
