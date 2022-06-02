import {Form, Formik} from 'formik'
import React, {FC, useEffect, useState} from 'react'
import PasswordStrengthBar from 'react-password-strength-bar'
import Swal from 'sweetalert2'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  FeedsWidget5,
  FeedsWidget6,
  ChartsWidget1,
  ListsWidget5,
  ListsWidget2,
} from '../../../../_metronic/partials/widgets'
import {
  getPermissions,
  getRoles,
  updateUser,
} from '../../../pages/staff-management/users-list/core/_requests'
import {useAuth} from '../../auth'

type Props = {
  staff: any
  setStaff: any
}

export const Overview: FC<Props> = ({staff, setStaff}) => {
  console.log(staff, 'staff')
  const [showPassword, setShowPassword] = useState(false)
  const {saveAuth, setCurrentUser, auth} = useAuth()
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
        if (staff.role_id) {
          setSelectedRole(newData.find((x: any) => x.id == staff.role_id))
        }
        setRoles(newData)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }, [])

  const handleChange = (e: any) => {
    const {name, value} = e.target
    setStaff({...staff, [name]: value})
  }

  const submit = async () => {
    const data: any = await updateUser(staff)
    saveAuth(data)
    setCurrentUser(data)
    Swal.fire({
      title: 'Success!',
      text: `Profile Updated!`,
      icon: 'success',
      confirmButtonText: 'Okay',
    })
  }

  const onCheckbox = (e: any, id: number) => {
    const {checked, name} = e.target
    let perm: any = [...staff.permissions]
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
    setStaff({...staff, permissions: perm})
  }

  return (
    <div className='row g-5 g-xxl-8'>
      <div className='col-xl-6'>
        <div className={`card mb-5 mb-xxl-8`}>
          {/* begin::Body */}
          <div className='card-body pb-0'>
            <div className='w-100'>
              <div className='fv-row mb-7'>
                <label className='d-block form-label'>Avatar</label>
                <div className='image-input image-input-outline' data-kt-image-input='true'>
                  <div className=''>
                    <img
                      src={
                        staff?.profile_image?.name
                          ? URL.createObjectURL(staff?.profile_image)
                          : staff?.profile_image != null
                          ? staff?.profile_image
                          : toAbsoluteUrl('/media/svg/avatars/blank.svg')
                      }
                      alt='avatar'
                      className='image-input-wrapper w-125px h-125px'
                    />
                  </div>
                  <label
                    className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                    data-kt-image-input-action='change'
                    data-bs-toggle='tooltip'
                    title='Change avatar'
                  >
                    <i className='bi bi-pencil-fill fs-7'></i>
                    <input
                      type='file'
                      name='profile_image'
                      accept='.png, .jpg, .jpeg'
                      onChange={(e: any) => {
                        setStaff({...staff, profile_image: e.currentTarget.files[0]})
                      }}
                    />
                    <input type='hidden' name='avatar_remove' />
                  </label>
                  {staff.profile_image !== null && (
                    <button
                      className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                      data-kt-image-input-action='remove'
                      data-bs-toggle='tooltip'
                      title='Remove avatar'
                      type='button'
                      onClick={() => setStaff({...staff, profile_image: null})}
                    >
                      <i className='bi bi-x fs-2'></i>
                    </button>
                  )}
                </div>
                <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
              </div>

              <div className='fv-row w-100 mb-10'>
                <label className='form-label required'>First Name</label>

                <input
                  name='first_name'
                  value={staff?.first_name}
                  onChange={handleChange}
                  className='form-control mb-2'
                  placeholder={'Enter First Name'}
                />
                {/* <div className='text-danger mt-2'>
                <ErrorMessage name='first_name' />
              </div> */}
              </div>
              <div className='fv-row w-100 mb-10'>
                <label className='d-flex align-items-center form-label'>
                  <span className='required'>Last Name</span>
                </label>

                <input
                  name='last_name'
                  value={staff.last_name}
                  className='form-control mb-2'
                  placeholder={'Enter Last Name'}
                  onChange={handleChange}
                />
                <div className='text-danger mt-2'>{/* <ErrorMessage name='last_name' /> */}</div>
              </div>

              <div className='fv-row w-100 mb-10'>
                <label className='fs-6 fw-bold form-label required'>Email</label>

                <input
                  name='email'
                  value={staff.email}
                  onChange={handleChange}
                  className='form-control mb-2'
                  placeholder={'Enter Valid Email'}
                  // validate={validateEmail}
                />
                {/* {errors.email ? (
                <div className='text-danger mt-2'>{errors.email}</div>
              ) : (
                <div className='text-danger mt-2'>
                  <ErrorMessage name='email' />
                </div>
              )} */}
              </div>

              <div className='fv-row w-100 mb-10'>
                <label className='d-flex align-items-center form-label'>
                  <span className='required'>Phone Number</span>
                </label>

                <input
                  name='phone_number'
                  type={'number'}
                  value={staff.phone_number}
                  onChange={handleChange}
                  className='form-control mb-2'
                  placeholder={'Enter Valid Phone Number'}
                />
                <div className='text-danger mt-2'>{/* <ErrorMessage name='phone_number' /> */}</div>
              </div>

              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center form-label'>
                  <span className='required'>Password</span>
                </label>
                <div style={{flexDirection: 'row', display: 'flex'}} className='mb-2 gap-5'>
                  <div className='position-relative w-100'>
                    <input
                      name='password'
                      value={staff.password}
                      onChange={handleChange}
                      type={!showPassword ? 'password' : 'text'}
                      className='form-control mb-2'
                      placeholder={'Enter Strong Password Or Generate'}
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2'
                      data-kt-password-meter-control='visibility'
                    >
                      {!showPassword ? (
                        <i className='bi bi-eye-slash fs-2'></i>
                      ) : (
                        <i className='bi bi-eye fs-2'></i>
                      )}
                    </button>
                  </div>
                  <button
                    type='button'
                    className='btn btn-lg btn-light-primary w-50 p-0 fs-15'
                    onClick={() => {
                      setStaff({
                        ...staff,
                        password: Math.random()
                          .toString(36)
                          .slice(2),
                      })
                    }}
                  >
                    Generate Password
                  </button>
                </div>
                <PasswordStrengthBar password={staff?.password} />
                <div className='text-danger'>{/* <ErrorMessage name='password' /> */}</div>
              </div>

              <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-15 mb-10'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='admin'
                  value={staff.admin}
                  checked={staff.admin == 1}
                  onChange={(e) => {
                    setStaff({...staff, admin: e.target.checked ? 1 : 0})
                  }}
                />
                <span className='form-check-label fs-15 fw-bold'>Administrator</span>
              </label>

              <div className='d-flex flex-stack mb-10'>
                <div className='mr-2'></div>

                <div>
                  <button type='button' onClick={submit} className='btn btn-lg btn-primary me-3'>
                    <span className='indicator-label'>
                      Update
                      {/* <KTSVG
                        path='/media/icons/duotune/arrows/arr064.svg'
                        className='svg-icon-3 ms-2 me-0'
                      /> */}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-xl-6'>
        <div className={`card mb-5 mb-xxl-8`}>
          {/* begin::Body */}
          <div className='card-body pb-0'>
            <div className='w-100'>
              <div className='fv-row mb-10'>
                <label className='form-label required'>Role</label>

                <select
                  name='role_id'
                  className='form-select mb-2'
                  data-control='select2'
                  data-hide-search='true'
                  data-placeholder='Select an option'
                  // onChange={onSelect}
                >
                  {roles.map((item: any, i: any) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {/* {values.role_id == null && <option></option>} */}

                {/* <div className='text-danger mt-2'>
          <ErrorMessage name='role_id' />
        </div> */}
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
                              <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  checked={
                                    staff.permissions?.find((x: any) => x.permission_id == item.id)
                                      ?.can_view
                                  }
                                  disabled={
                                    staff.permissions?.find((x: any) => x.permission_id == item.id)
                                      ?.can_view_own == true
                                  }
                                  name='can_view'
                                  onChange={(e: any) => onCheckbox(e, item.id)}
                                />
                                <span className='form-check-label'>View</span>
                              </label>
                              <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  checked={
                                    staff.permissions?.find((x: any) => x.permission_id == item.id)
                                      ?.can_view_own
                                  }
                                  name='can_view_own'
                                  disabled={
                                    staff.permissions?.find((x: any) => x.permission_id == item.id)
                                      ?.can_view == true
                                  }
                                  onChange={(e: any) => onCheckbox(e, item.id)}
                                />
                                <span className='form-check-label'>View(Own)</span>
                              </label>
                              <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  checked={
                                    staff.permissions?.find((x: any) => x.permission_id == item.id)
                                      ?.can_create
                                  }
                                  name='can_create'
                                  onChange={(e: any) => onCheckbox(e, item.id)}
                                />
                                <span className='form-check-label'>Create</span>
                              </label>
                              <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  checked={
                                    staff.permissions?.find((x: any) => x.permission_id == item.id)
                                      ?.can_edit
                                  }
                                  name='can_edit'
                                  onChange={(e: any) => onCheckbox(e, item.id)}
                                />
                                <span className='form-check-label'>Edit</span>
                              </label>
                              <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  checked={
                                    staff.permissions?.find((x: any) => x.permission_id == item.id)
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
              <div className='d-flex flex-stack mb-10'>
                <div className='mr-2'></div>
                <div>
                  <button type='button' onClick={submit} className='btn btn-lg btn-primary me-3'>
                    <span className='indicator-label'>
                      Update
                      {/* <KTSVG
                        path='/media/icons/duotune/arrows/arr064.svg'
                        className='svg-icon-3 ms-2 me-0'
                      /> */}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ListsWidget5 className='mb-5 mb-xxl-8' />
      </div>
    </div>
  )
}
