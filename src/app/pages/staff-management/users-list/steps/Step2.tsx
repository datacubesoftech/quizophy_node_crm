import React, {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import {getPermissions, getRoles} from '../core/_requests'

type Props = {
  values: any
  setFieldValue: any
}

const Step2: FC<Props> = ({values, setFieldValue}) => {
  console.log(values, 'values')
  const [permissions, setPermissions] = useState([])
  const [roles, setRoles] = useState<any[]>([])
  const [selectedRole, setSelectedRole] = useState<any>()

  useEffect(() => {
    getPermissions()
      .then((data) => {
        let newData: any
        newData = data.data
        setPermissions(newData)
      })
      .catch((err) => {
        console.log(err, 'err')
      })

    getRoles()
      .then((data) => {
        let newData: any
        newData = data.data
        if (values.role_id) {
          setSelectedRole(newData.find((x: any) => x.id == values.role_id))
        }
        setRoles(newData)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }, [])

  useEffect(() => {
    if (selectedRole?.permissions.length > 0 && values.id == undefined) {
      setFieldValue('permissions', selectedRole.permissions)
    }
  }, [selectedRole])

  const onCheckbox = (e: any, id: number) => {
    const {checked, name} = e.target
    let perm: any = values.permissions
    const index = perm?.findIndex((x: any) => x.permission_id == id)
    if (index !== -1) {
      perm[index] = {...perm[index], [name]: checked}
    } else {
      perm?.push({
        permission_id: id,
        can_view: name == 'can_view' && checked ? true : false,
        can_view_own: name == 'can_view_own' && checked ? true : false,
        can_create: name == 'can_create' && checked ? true : false,
        can_edit: name == 'can_edit' && checked ? true : false,
        can_delete: name == 'can_delete' && checked ? true : false,
      })
    }
    setFieldValue('permissions', perm)
  }

  const onSelect = (e: any) => {
    setSelectedRole(roles.find((x) => x.id == e.target.value))
    setFieldValue('role_id', parseInt(e.target.value))
  }

  return (
    <div className='w-100'>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Role</label>

        <Field
          as='select'
          name='role_id'
          className='form-select mb-2'
          data-control='select2'
          data-hide-search='true'
          data-placeholder='Select an option'
          onChange={onSelect}
        >
          {values.role_id == null && <option></option>}
          {roles.map((item: any, i: any) => (
            <option key={i} value={item.id}>
              {item.name}
            </option>
          ))}
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='role_id' />
        </div>
      </div>

      <div className='mb-10 fv-row'>
        <label className='fw-bold fs-6 mb-2'>Permissions</label>
        <div className='table-responsive'>
          <table className='table align-middle table-row-dashed fs-6 gy-5'>
            <tbody className='text-gray-600 fw-bold'>
              {permissions?.map((item: any, i) => (
                <tr key={i}>
                  <td className='text-gray-800'>{item?.name}</td>
                  <td style={{paddingLeft: 35}}>
                    <div className='d-flex'>
                      <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-10'>
                        <Field
                          className='form-check-input'
                          type='checkbox'
                          checked={
                            values.permissions?.find((x: any) => x.permission_id == item.id)
                              ?.can_view
                          }
                          disabled={
                            values.permissions?.find((x: any) => x.permission_id == item.id)
                              ?.can_view_own == true
                          }
                          name='can_view'
                          onChange={(e: any) => onCheckbox(e, item.id)}
                        />
                        <span className='form-check-label'>View</span>
                      </label>
                      <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-10'>
                        <Field
                          className='form-check-input'
                          type='checkbox'
                          checked={
                            values.permissions?.find((x: any) => x.permission_id == item.id)
                              ?.can_view_own
                          }
                          name='can_view_own'
                          disabled={
                            values.permissions?.find((x: any) => x.permission_id == item.id)
                              ?.can_view == true
                          }
                          onChange={(e: any) => onCheckbox(e, item.id)}
                        />
                        <span className='form-check-label'>View(Own)</span>
                      </label>
                      <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-10'>
                        <Field
                          className='form-check-input'
                          type='checkbox'
                          checked={
                            values.permissions?.find((x: any) => x.permission_id == item.id)
                              ?.can_create
                          }
                          name='can_create'
                          onChange={(e: any) => onCheckbox(e, item.id)}
                        />
                        <span className='form-check-label'>Create</span>
                      </label>
                      <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-10'>
                        <Field
                          className='form-check-input'
                          type='checkbox'
                          checked={
                            values.permissions?.find((x: any) => x.permission_id == item.id)
                              ?.can_edit
                          }
                          name='can_edit'
                          onChange={(e: any) => onCheckbox(e, item.id)}
                        />
                        <span className='form-check-label'>Edit</span>
                      </label>
                      <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-10'>
                        <Field
                          className='form-check-input'
                          type='checkbox'
                          checked={
                            values.permissions?.find((x: any) => x.permission_id == item.id)
                              ?.can_delete
                          }
                          name='can_delete'
                          onChange={(e: any) => onCheckbox(e, item.id)}
                        />
                        <span className='form-check-label'>Delete</span>
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export {Step2}
