/* eslint-disable jsx-a11y/anchor-is-valid */
import axios, {AxiosResponse} from 'axios'
import clsx from 'clsx'
import {FC, useEffect, useState} from 'react'
import Swal from 'sweetalert2'
import {API_URL} from './ApiUrl'
import {Button} from './Button'
import {SettingsName} from './SettingsName'

const Localization: FC = () => {
  const [values, setValue] = useState<any>({
    date_format: '',
    time_format: '',
    timezone: '',
    language: '',
  })

  const [errors, setErrors] = useState<any>({
    date_format: '',
    time_format: '',
    timezone: '',
    language: '',
  })

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    await axios
      .get(`${API_URL}/localization`)
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
    if (values.date_format == '') {
      setErrors({...errors, date_format: 'Date format is required'})
      return
    }
    if (values.time_format == '') {
      setErrors({...errors, time_format: 'Time format is required'})
      return
    }
    if (values.timezone == '') {
      setErrors({...errors, timezone: 'Timezone is required'})
      return
    }

    if (values.language == '') {
      setErrors({...errors, language: 'Language is required'})
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

  return (
    <div className='d-flex flex-column flex-lg-row'>
      <SettingsName active={'localization'} />
      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card p-10' id='kt_chat_messenger'>
          <form noValidate className='form' onSubmit={onSubmit}>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Date Format</label>
                <select
                  // {...formik.getFieldProps('name')}
                  name='date_format'
                  value={values.date_format}
                  placeholder='Select a date format'
                  onChange={onChange}
                  className={clsx(
                    'form-select mb-3 mb-lg-0',
                    {'is-invalid': errors.date_format != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                >
                  <option></option>
                  <option>d-m-Y</option>
                  <option>d/m/Y</option>
                  <option>m-d-Y</option>
                  <option>m.d.Y</option>
                  <option>m/d/Y</option>
                  <option>Y-m-d</option>
                  <option>d.m.Y</option>
                </select>
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.date_format}
                    </span>
                  </div>
                </div>
                {/* )} */}
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Time Format</label>
                <select
                  placeholder='Enter a domain name'
                  // {...formik.getFieldProps('name')}
                  name='time_format'
                  value={values.time_format}
                  onChange={onChange}
                  className={clsx(
                    'form-select mb-3 mb-lg-0',
                    {'is-invalid': errors.time_format != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                >
                  <option></option>
                  <option>24 hours</option>
                  <option>12 hours</option>
                </select>
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.time_format}
                    </span>
                  </div>
                </div>
                {/* )} */}
              </div>
            </div>
            <div className='d-flex flex-wrap gap-5 mb-10'>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Default Timezone</label>
                <select
                  placeholder='Enter allowed file types'
                  // {...formik.getFieldProps('name')}
                  name='timezone'
                  value={values.timezone}
                  onChange={onChange}
                  className={clsx(
                    'form-select mb-3 mb-lg-0',
                    {'is-invalid': errors.timezone != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                >
                  <option></option>
                  <option>d-m-Y</option>
                  <option>d/m/Y</option>
                  <option>m-d-Y</option>
                  <option>m.d.Y</option>
                  <option>m/d/Y</option>
                  <option>Y-m-d</option>
                  <option>d.m.Y</option>
                </select>
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.timezone}
                    </span>
                  </div>
                </div>
              </div>
              <div className='fv-row w-100 flex-md-root'>
                <label className='required fw-bold fs-6 mb-2'>Default Language</label>
                <select
                  placeholder='Enter allowed file types'
                  // {...formik.getFieldProps('name')}
                  name='language'
                  value={values.language}
                  onChange={onChange}
                  className={clsx(
                    'form-select mb-3 mb-lg-0',
                    {'is-invalid': errors.language != ''}
                    // {
                    //   'is-valid': formik.touched.name && !formik.errors.name,
                    // }
                  )}
                  autoComplete='off'
                  // disabled={formik.isSubmitting || isUserLoading}
                >
                  <option></option>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                {/* {formik.touched.name && formik.errors.name && ( */}
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert' className='text-danger'>
                      {errors.language}
                    </span>
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

export {Localization}
