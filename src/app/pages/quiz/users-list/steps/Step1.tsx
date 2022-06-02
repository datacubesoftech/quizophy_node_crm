import React, {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage, Formik} from 'formik'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
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
  const [courses, setCourses] = useState([])
  const [subjects, setSubjects] = useState([])
  const [selectedCourses, setSelectedCourses] = useState<any>(null)
  const [quizType, setQuizType] = useState<any>([])
  const [selectedLang, setSelectedLang] = useState<any>([])

  const options = [
    {label: 'Hindi', value: 'Hindi'},
    {label: 'English', value: 'English'},
  ]

  useEffect(() => {
    if (values.language) {
    }
  }, [values])

  useEffect(() => {
    getCourses()
    getQuizTypes()
  }, [])

  useEffect(() => {
    if (values.id && courses.length > 0) {
      const selected = courses.filter((x: any) =>
        values?.courses.some((y: any) => y.course_id === x.id)
      )
      setSelectedCourses(selected)
      const ids = values.courses.flatMap((x: any) => [x.course_id])
      getSubject(ids)
      setFieldValue('courses', selected)
      let splited = values.language.split(',')
      setSelectedLang(options.filter((x: any) => splited.some((y: any) => y === x.label)))
    }
  }, [courses])

  const getCourses = async () => {
    await axios
      .get('http://localhost:3000/questionBank/courses')
      .then((data: AxiosResponse<any>) => {
        console.log(data.data, 'data')
        setCourses(data.data)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  const getSubject = async (ids: any) => {
    await axios
      .post('http://localhost:3000/questionBank/subjects', {ids})
      .then((data: AxiosResponse<any>) => {
        console.log(data.data, 'datasubj')
        setSubjects(data.data)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  const getQuizTypes = async () => {
    await axios
      .get('http://localhost:3005/quizType')
      .then((data: AxiosResponse<any>) => {
        console.log(data.data, 'quiztype')
        setQuizType(data.data)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  return (
    <div className='w-100'>
      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Quiz Name</span>
          </label>
          <Field name='name' className='form-control mb-2' placeholder='Enter quiz name' />
          <div className='text-danger'>
            <ErrorMessage name='name' />
          </div>
        </div>
        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Quiz Type</span>
          </label>
          <Field
            name='quiz_type_id'
            as='select'
            className='form-select mb-2'
            data-control='select2'
            data-hide-search='true'
            placeholder='Select an option'
          >
            <option></option>
            {quizType?.map((item: any) => (
              <option value={item.id}>{item.quiz_type}</option>
            ))}
          </Field>
          <div className='text-danger'>
            <ErrorMessage name='quiz_type_id' />
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
            options={courses}
            className='basic-multi-select'
            classNamePrefix='select'
            value={selectedCourses}
            onChange={(e, i) => {
              const ids = e.flatMap((item, i) => [item.id])
              getSubject(ids)
              setFieldValue('courses', e)
              setSelectedCourses(e)
            }}
            getOptionLabel={(option: any) => option.course_name}
            getOptionValue={(option: any) => option.id}
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
            {subjects.map((item: any, i) => (
              <option key={i} value={item.id}>
                {item.subject_name}
              </option>
            ))}
          </Field>
          <div className='text-danger'>
            <ErrorMessage name='subject_id' />
          </div>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='fs-6 fw-bold form-label required'>
            Quiz Duration (should be in minutes)
          </label>

          <Field
            name='duration'
            type='number'
            className='form-control mb-2'
            placeholder={'Enter Question Marks'}
            // validate={validateEmail}
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='duration' />
          </div>
        </div>

        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Quiz Language</span>
          </label>

          <Select
            isMulti
            name='language'
            options={options}
            className='basic-multi-select'
            classNamePrefix='select'
            value={selectedLang}
            onChange={(e: any, i: any) => {
              setSelectedLang(e)
              setFieldValue('language', e.map((item: any) => item.value).join(','))
            }}
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='language' />
          </div>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='fs-6 fw-bold form-label required'>No. Of Questions</label>

          <Field
            name='total_questions'
            type='number'
            className='form-control mb-2'
            placeholder={'Enter Question Marks'}
            // validate={validateEmail}
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='total_questions' />
          </div>
        </div>

        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Total Marks</span>
          </label>

          <Field
            name='marks'
            type={'number'}
            className='form-control mb-2'
            placeholder={'Enter negitive mark'}
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='marks' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step1}
