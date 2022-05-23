import React, {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage, Formik} from 'formik'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import PasswordStrengthBar from 'react-password-strength-bar'
import axios, {AxiosResponse} from 'axios'
import {API_URL} from '../../../settings/components/ApiUrl'
import Select from 'react-select'
// import {checkEmail} from '../core/_requests'

type Props = {
  setFieldValue: any
  values: any
  touched: any
  setFieldError: any
  errors: any
}

const Step1: FC<Props> = ({setFieldValue, values, touched, setFieldError, errors}) => {
  const [showPassword, setPasswordShow] = useState(false)

  const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ]

  return (
    <div className='w-100'>
      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Question Type</span>
          </label>
          <Field
            as='select'
            name='question_type'
            className='form-select mb-2'
            data-control='select2'
            data-hide-search='true'
            placeholder='Select an option'
          >
            <option></option>
            <option>Single</option>
            <option>MCQ</option>
          </Field>
          <div className='text-danger'>
            <ErrorMessage name='question_type' />
          </div>
        </div>
        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Question Level</span>
          </label>
          <Field
            as='select'
            name='level'
            className='form-select mb-2'
            data-control='select2'
            data-hide-search='true'
            placeholder='Select an option'
          >
            <option></option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </Field>
          <div className='text-danger'>
            <ErrorMessage name='level' />
          </div>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Courses</span>
          </label>
          <Select
            isMulti
            name='courses'
            options={options}
            className='basic-multi-select'
            classNamePrefix='select'
          />
          <div className='text-danger'>
            <ErrorMessage name='courses' />
          </div>
        </div>
        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Subject</span>
          </label>
          <Field
            as='select'
            name='subject_id'
            className='form-select mb-2'
            data-control='select2'
            data-hide-search='true'
            placeholder='Select an option'
          >
            <option></option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </Field>
          <div className='text-danger'>
            <ErrorMessage name='subject_id' />
          </div>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='fs-6 fw-bold form-label required'>Marks</label>

          <Field
            name='marks.marks'
            type='number'
            className='form-control mb-2'
            placeholder={'Enter Question Marks'}
            // validate={validateEmail}
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='marks.marks' />
          </div>
        </div>

        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Negitive Marks</span>
          </label>

          <Field
            name='marks.negitive_mark'
            type={'number'}
            className='form-control mb-2'
            placeholder={'Enter negitive mark'}
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='marks.negitive_mark' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step1}
