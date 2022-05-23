/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Dropdown1, ChatInner} from '../../../../../_metronic/partials'
import {SettingsName} from './SettingsName'
import {Field, ErrorMessage, useFormik} from 'formik'
import clsx from 'clsx'
import {Button} from './Button'
import axios, {AxiosResponse} from 'axios'
import Swal from 'sweetalert2'
import {API_URL} from './ApiUrl'
import * as Yup from 'yup'

const editUserSchema = Yup.object().shape({
  dark_logo: Yup.string().required('logo is required'),
  light_logo: Yup.string().required('logo is required'),
  favicon: Yup.string().required('logo is required'),
  name: Yup.string().required('company name is required'),
  domain: Yup.string().required('domain domain is required'),
  file_type: Yup.string().required('file type is required'),
})

const General: FC = () => {
  const [values, setValue] = useState<any>({
    dark_logo: '',
    light_logo: '',
    favicon: '',
    name: '',
    domain: '',
    file_type: '',
  })
  const [errors, setErrors] = useState<any>({
    name: '',
    domain: '',
    file_type: '',
  })

  useEffect(() => {
    axios
      .get(`${API_URL}/general`)
      .then((data: AxiosResponse<any>) => {
        if (data.data != null) {
          const newvalues = JSON.parse(data.data.value)
          setValue(newvalues)
        }
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }, [])

  const uploadImage = async (e: any) => {
    const {name} = e.currentTarget
    const file = e.currentTarget.files[0]
    const fd = new FormData()
    fd.append('image', file)
    await axios
      .post(`${API_URL}/upload`, fd)
      .then((data: AxiosResponse<any>) => {
        setValue({...values, [name]: data.data})
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    if (values.name == '') {
      setErrors({...errors, name: 'Company Name is required'})
      return
    }
    if (values.domain == '') {
      setErrors({...errors, domain: 'Company Domain is required'})
      return
    }
    if (values.file_type == '') {
      setErrors({...errors, file_type: 'File types is required'})
      return
    }
    const payload = {
      name: 'general',
      value: JSON.stringify(values),
      auto_load: 0,
    }
    await axios
      .post(API_URL, payload)
      .then((data: AxiosResponse<any>) => {
        Swal.fire({
          title: 'Success!',
          text: `Settings Updated!`,
          icon: 'success',
          confirmButtonText: 'Okay',
        })
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  const onChange = (e: any) => {
    const {name, value} = e.target
    setValue({...values, [name]: value})
    setErrors({...errors, [name]: ''})
  }

  return (
    <div className='d-flex flex-column flex-lg-row'>
      <SettingsName active={'general'} />
      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card p-10' id='kt_chat_messenger'>
          <form className='form' onSubmit={onSubmit}>
            <div className='d-flex flex-wrap mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='d-block form-label'>Logo Dark</label>
                <div className='image-input image-input-outline' data-kt-image-input='true'>
                  <div className=''>
                    <img
                      src={
                        values.dark_logo != ''
                          ? values.dark_logo
                          : toAbsoluteUrl('/media/svg/avatars/blank.svg')
                      }
                      alt='dark_logo'
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
                      // {...formik.getFieldProps('dark_logo')}
                      name='dark_logo'
                      accept='.png, .jpg, .jpeg'
                      onChange={(e: any) => {
                        uploadImage(e)
                      }}
                    />
                    <input type='hidden' name='avatar_remove' />
                  </label>
                  {values.dark_logo != '' && (
                    <button
                      className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                      data-kt-image-input-action='remove'
                      data-bs-toggle='tooltip'
                      title='Remove avatar'
                      type='button'
                      onClick={() => setValue({...values, dark_logo: ''})}
                    >
                      <i className='bi bi-x fs-2'></i>
                    </button>
                  )}
                </div>
                <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='d-block form-label'>Logo Light</label>
                <div className='image-input image-input-outline' data-kt-image-input='true'>
                  <div className=''>
                    <img
                      src={
                        values.light_logo != ''
                          ? values.light_logo
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
                      name='light_logo'
                      accept='.png, .jpg, .jpeg'
                      onChange={(e: any) => {
                        uploadImage(e)
                      }}
                    />
                    <input type='hidden' name='avatar_remove' />
                  </label>
                  {values.light_logo != '' && (
                    <button
                      className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                      data-kt-image-input-action='remove'
                      data-bs-toggle='tooltip'
                      title='Remove avatar'
                      type='button'
                      onClick={() => setValue({...values, light_logo: ''})}
                    >
                      <i className='bi bi-x fs-2'></i>
                    </button>
                  )}
                </div>
                <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='d-block form-label'>Fav icon</label>
                <div className='image-input image-input-outline' data-kt-image-input='true'>
                  <div className=''>
                    <img
                      src={
                        values.favicon != ''
                          ? values.favicon
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
                      name='favicon'
                      accept='.png, .jpg, .jpeg'
                      onChange={(e: any) => {
                        uploadImage(e)
                      }}
                    />
                    <input type='hidden' name='avatar_remove' />
                  </label>
                  {values.favicon != '' && (
                    <button
                      className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                      data-kt-image-input-action='remove'
                      data-bs-toggle='tooltip'
                      title='Remove avatar'
                      type='button'
                      onClick={() => setValue({...values, favicon: ''})}
                    >
                      <i className='bi bi-x fs-2'></i>
                    </button>
                  )}
                </div>
                <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
              </div>
            </div>
            <div className='fv-row mb-7'>
              <label className='required fw-bold fs-6 mb-2'>Company Name</label>
              <input
                placeholder='Enter a company name'
                // {...formik.getFieldProps('name')}
                type='text'
                name='name'
                className={clsx(
                  'form-control mb-3 mb-lg-0',
                  {'is-invalid': errors.name != ''}
                  // {
                  //   'is-valid': formik.touched.name && !formik.errors.name,
                  // }
                )}
                onChange={onChange}
                value={values.name}
                autoComplete='off'
                // disabled={formik.isSubmitting}
              />
              {/* {formik.touched.name && formik.errors.name && ( */}
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert' className='text-danger'>
                    {errors.name}
                  </span>
                </div>
              </div>
              {/* )} */}
            </div>
            <div className='fv-row mb-7'>
              <label className='required fw-bold fs-6 mb-2'>Company Main Domain</label>
              <input
                placeholder='Enter a domain name'
                // {...formik.getFieldProps('domain')}
                type='text'
                name='domain'
                onChange={onChange}
                value={values.domain}
                className={clsx(
                  'form-control mb-3 mb-lg-0',
                  {'is-invalid': errors.domain != ''}
                  // {
                  //   'is-valid': formik.touched.name && !formik.errors.name,
                  // }
                )}
                autoComplete='off'
                // disabled={formik.isSubmitting}
              />
              {/* {formik.touched.name && formik.errors.name && ( */}
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert' className='text-danger'>
                    {errors.domain}
                  </span>
                </div>
              </div>
              {/* )} */}
            </div>
            <div className='fv-row mb-7'>
              <label className='required fw-bold fs-6 mb-2'>Allowed file types</label>
              <input
                placeholder='Enter allowed file types'
                // {...formik.getFieldProps('file_types')}
                type='text'
                name='file_type'
                onChange={onChange}
                value={values.file_type}
                className={clsx(
                  'form-control mb-3 mb-lg-0',
                  {'is-invalid': errors.file_type != ''}
                  // {
                  //   'is-valid': formik.touched.name && !formik.errors.name,
                  // }
                )}
                autoComplete='off'
                // disabled={formik.isSubmitting}
              />
              {/* {formik.touched.name && formik.errors.name && ( */}
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert' className='text-danger'>
                    {errors.file_type}
                  </span>
                </div>
              </div>
              {/* )} */}
            </div>
            <Button />
          </form>
        </div>
      </div>
    </div>
  )
}

export {General}
