/* eslint-disable jsx-a11y/anchor-is-valid */
import axios, {AxiosResponse} from 'axios'
import clsx from 'clsx'
import React, {FC, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Dropdown1, ChatInner} from '../../../../../_metronic/partials'
import {API_URL} from './ApiUrl'
import {Button} from './Button'
import {SettingsName} from './SettingsName'

const PaymentGateway: FC = () => {
  const [values, setValue] = useState<any>({
    active: '',
    label: '',
    key: '',
    salt: '',
    description: '',
    currency: '',
    enable: '',
    selected: '',
  })

  const [errors, setErrors] = useState<any>({
    active: '',
    label: '',
    key: '',
    salt: '',
    currency: '',
    enable: '',
    selected: '',
  })

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    await axios
      .get(`${API_URL}/payment-gateways`)
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
    if (values.active == '') {
      setErrors({...errors, active: 'Active is required'})
      return
    }
    if (values.label == '') {
      setErrors({...errors, label: 'Label is required'})
      return
    }
    if (values.key == '') {
      setErrors({...errors, key: 'Key is required'})
      return
    }

    if (values.salt == '') {
      setErrors({...errors, salt: 'Salt is required'})
      return
    }
    if (values.currency == '') {
      setErrors({...errors, currency: 'Currency is required'})
      return
    }
    if (values.enable == '') {
      setErrors({...errors, enable: 'Test mode is required'})
      return
    }

    if (values.selected == '') {
      setErrors({...errors, selected: 'Selected is required'})
      return
    }

    const payload = {
      name: 'payment-gateways',
      value: JSON.stringify(values),
      auto_load: 0,
    }
    await axios
      .post(API_URL, payload)
      .then((data: AxiosResponse<any>) => {
        getInfo()
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
      <SettingsName active={'payment-gateways'} />
      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card p-10' id='kt_chat_messenger'>
          <div className='d-flex'>
            <h4>RazorPay</h4>
          </div>
          <div className='separator separator-dashed my-5'></div>
          <form noValidate className='form' onSubmit={onSubmit}>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Active</label>
                <div className='form-check form-check-custom form-check-solid gap-3'>
                  <input
                    name='active'
                    type={'radio'}
                    value='0'
                    onChange={onChange}
                    checked={values.active == '0'}
                    id='active_yes'
                    className={clsx('form-check-input mb-3 mb-lg-0')}
                    autoComplete='off'
                  />
                  <label className='form-check-label' htmlFor='active_yes'>
                    <div className='fw-bolder text-gray-800'>Yes</div>
                  </label>
                  <input
                    name='active'
                    type={'radio'}
                    onChange={onChange}
                    checked={values.active == '1'}
                    value='1'
                    id='active_no'
                    className={clsx('form-check-input mb-3 mb-lg-0')}
                    autoComplete='off'
                  />
                  <label className='form-check-label' htmlFor='active_no'>
                    <div className='fw-bolder text-gray-800'>No</div>
                  </label>
                </div>
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.active}
                    </span>
                  </div>
                </div>
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Label</label>
                <input
                  name='label'
                  onChange={onChange}
                  value={values.label}
                  className={clsx('form-control mb-3 mb-lg-0', {'is-invalid': errors.active != ''})}
                  autoComplete='off'
                />
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Key</label>
                <input
                  placeholder='Enter a razorpay key'
                  name='key'
                  onChange={onChange}
                  value={values.key}
                  className={clsx('form-control mb-3 mb-lg-0', {'is-invalid': errors.key != ''})}
                  autoComplete='off'
                />
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.key}
                    </span>
                  </div>
                </div>
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Salt</label>
                <input
                  placeholder='Enter a razorpay salt'
                  name='salt'
                  onChange={onChange}
                  value={values.salt}
                  className={clsx('form-control mb-3 mb-lg-0', {'is-invalid': errors.salt != ''})}
                  autoComplete='off'
                />
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.salt}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='fw-bold fs-6 mb-2'>Gateway Dashbord Payment Description</label>
                <textarea
                  placeholder='Enter a description'
                  rows={3}
                  name='description'
                  onChange={onChange}
                  value={values.description}
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
                {/* )} */}
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Currency</label>
                <input
                  placeholder='Enter a currency'
                  name='currency'
                  onChange={onChange}
                  value={values.currency}
                  className={clsx('form-control mb-3 mb-lg-0', {
                    'is-invalid': errors.currency != '',
                  })}
                  autoComplete='off'
                />
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.currency}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Enable Test Mode</label>
                <div className='form-check form-check-custom form-check-solid gap-3'>
                  <input
                    name='enable'
                    type={'radio'}
                    onChange={onChange}
                    checked={values.enable == '0'}
                    value='0'
                    id='yes'
                    className={clsx('form-check-input mb-3 mb-lg-0')}
                    autoComplete='off'
                  />
                  <label className='form-check-label' htmlFor='yes'>
                    <div className='fw-bolder text-gray-800'>Yes</div>
                  </label>
                  <input
                    name='enable'
                    type={'radio'}
                    value='1'
                    id='no'
                    onChange={onChange}
                    checked={values.enable == '1'}
                    className={clsx('form-check-input mb-3 mb-lg-0')}
                    autoComplete='off'
                  />
                  <label className='form-check-label' htmlFor='no'>
                    <div className='fw-bolder text-gray-800'>No</div>
                  </label>
                </div>
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.enable}
                    </span>
                  </div>
                </div>
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Selected by default on invoice</label>
                <div className='form-check form-check-custom form-check-solid gap-3'>
                  <input
                    name='selected'
                    type={'radio'}
                    value='0'
                    onChange={onChange}
                    checked={values.selected == '0'}
                    id='on_yes'
                    className={clsx('form-check-input mb-3 mb-lg-0')}
                    autoComplete='off'
                  />
                  <label className='form-check-label' htmlFor='on_yes'>
                    <div className='fw-bolder text-gray-800'>Yes</div>
                  </label>
                  <input
                    name='selected'
                    type={'radio'}
                    value='1'
                    onChange={onChange}
                    checked={values.selected == '1'}
                    id='on_no'
                    className={clsx('form-check-input mb-3 mb-lg-0')}
                    autoComplete='off'
                  />
                  <label className='form-check-label' htmlFor='on_no'>
                    <div className='fw-bolder text-gray-800'>No</div>
                  </label>
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert' className='text-danger'>
                        {errors.selected}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button />
          </form>
        </div>
      </div>
    </div>
  )
}

export {PaymentGateway}
