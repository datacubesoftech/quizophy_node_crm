/* eslint-disable jsx-a11y/anchor-is-valid */
import axios, {AxiosResponse} from 'axios'
import clsx from 'clsx'
import React, {FC, useEffect, useState} from 'react'
import Swal from 'sweetalert2'
import {API_URL} from './ApiUrl'
import {Button} from './Button'
import {SettingsName} from './SettingsName'

const CompanyInfo: FC = () => {
  const [values, setValue] = useState<any>({
    address: '',
    city: '',
    state: '',
    name: '',
    country_code: '',
    zip_code: '',
    phone: '',
    gst: '',
  })

  const [errors, setErrors] = useState<any>({
    address: '',
    city: '',
    state: '',
    name: '',
    country_code: '',
    zip_code: '',
    phone: '',
  })

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    await axios
      .get(`${API_URL}/company-information`)
      .then((data: AxiosResponse<any>) => {
        if (data.data != null) {
          const newvalues = JSON.parse(data.data.value)
          setValue(newvalues)
        }
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

  const onSubmit = async (e: any) => {
    e.preventDefault()
    if (values.name == '') {
      setErrors({...errors, name: 'Company Name is required'})
      return
    }
    if (values.address == '') {
      setErrors({...errors, address: 'Address is required'})
      return
    }
    if (values.city == '') {
      setErrors({...errors, city: 'City is required'})
      return
    }
    if (values.state == '') {
      setErrors({...errors, state: 'State is required'})
      return
    }
    if (values.zip_code == '') {
      setErrors({...errors, zip_code: 'Zip code is required'})
      return
    }
    if (values.country_code == '') {
      setErrors({...errors, country_code: 'Country code is required'})
      return
    }
    if (values.phone == '') {
      setErrors({...errors, country_code: 'Phone Number is required'})
      return
    }
    const payload = {
      name: 'company-information',
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

  return (
    <div className='d-flex flex-column flex-lg-row'>
      <SettingsName active='company-information' />
      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card p-10' id='kt_chat_messenger'>
          <span className='text-muted mb-10'>
            These information will be displayed on invoices/estimates/payments and other PDF
            documents where company info is required
          </span>
          <form className='form' onSubmit={onSubmit} noValidate>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Company Name</label>
                <input
                  placeholder='Enter a company name'
                  // {...formik.getFieldProps('name')}
                  type='text'
                  name='name'
                  required
                  onChange={onChange}
                  value={values.name}
                  className={clsx(
                    'form-control mb-3 mb-lg-0',
                    {'is-invalid': errors.name != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
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
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Address</label>
                <input
                  placeholder='Enter address'
                  // {...formik.getFieldProps('name')}
                  type='text'
                  name='address'
                  required
                  onChange={onChange}
                  value={values.address}
                  className={clsx(
                    'form-control mb-3 mb-lg-0',
                    {'is-invalid': errors.address != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                />
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.address}
                    </span>
                  </div>
                </div>
                {/* )} */}
              </div>
            </div>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>City</label>
                <input
                  placeholder='Enter city'
                  // {...formik.getFieldProps('name')}
                  type='text'
                  name='city'
                  required
                  onChange={onChange}
                  value={values.city}
                  className={clsx(
                    'form-control mb-3 mb-lg-0',
                    {'is-invalid': errors.city != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                />
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.city}
                    </span>
                  </div>
                </div>
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>State</label>
                <input
                  placeholder='Enter state'
                  // {...formik.getFieldProps('name')}
                  type='text'
                  name='state'
                  required
                  onChange={onChange}
                  value={values.state}
                  className={clsx(
                    'form-control mb-3 mb-lg-0',
                    {'is-invalid': errors.state != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                />
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.state}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Country Code</label>
                <input
                  placeholder='Enter country code'
                  // {...formik.getFieldProps('name')}
                  type='text'
                  name='country_code'
                  required
                  onChange={onChange}
                  value={values.country_code}
                  className={clsx(
                    'form-control mb-3 mb-lg-0',
                    {'is-invalid': errors.country_code != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                />
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.country_code}
                    </span>
                  </div>
                </div>
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Zip Code</label>
                <input
                  placeholder='Enter zip code'
                  // {...formik.getFieldProps('name')}
                  type='text'
                  name='zip_code'
                  required
                  onChange={onChange}
                  value={values.zip_code}
                  className={clsx(
                    'form-control mb-3 mb-lg-0',
                    {'is-invalid': errors.zip_code != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                />
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.zip_code}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Phone</label>
                <input
                  placeholder='Enter phone number'
                  // {...formik.getFieldProps('name')}
                  type='text'
                  required
                  name='phone'
                  onChange={onChange}
                  value={values.phone}
                  className={clsx(
                    'form-control mb-3 mb-lg-0',
                    {'is-invalid': errors.phone != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                />
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.phone}
                    </span>
                  </div>
                </div>
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='fw-bold fs-6 mb-2'>GST Number</label>
                <input
                  placeholder='Enter gst number'
                  // {...formik.getFieldProps('name')}
                  type='text'
                  name='gst'
                  onChange={onChange}
                  value={values.gst}
                  className={clsx(
                    'form-control mb-3 mb-lg-0'
                    // {'is-invalid': formik.touched.name && formik.errors.name},
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                />
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    {/* <span role='alert'>{formik.errors.name}</span> */}
                  </div>
                </div>
              </div>
            </div>
            {/* )} */}
            <Button />
          </form>
        </div>
      </div>
    </div>
  )
}

export {CompanyInfo}
