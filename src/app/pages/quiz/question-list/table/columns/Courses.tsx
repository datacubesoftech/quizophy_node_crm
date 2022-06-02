/* eslint-disable jsx-a11y/anchor-is-valid */
import axios, {AxiosResponse} from 'axios'
import clsx from 'clsx'
import {FC, useEffect, useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {User} from '../../core/_models'

type Props = {
  courses: any
}

const CoursesCell: FC<Props> = ({courses}) => {
  console.log(courses, 'courses')
  const [course, setCourse] = useState<any>([])
  const [selected, setSelected] = useState<any>()

  useEffect(() => {
    getCourses()
  }, [])

  useEffect(() => {
    if (course.length > 0) {
      let data = course.filter((x: any) => courses.some((y: any) => y.course_id === x.id))
      data = data.flatMap((item: any) => [item.course_name])
      setSelected(data)
    }
  }, [course])

  useEffect(() => {
    console.log(selected, 'selected')
  }, [selected])

  const getCourses = async () => {
    await axios
      .get('http://localhost:3000/questionBank/courses')
      .then((data: AxiosResponse<any>) => {
        console.log(data.data, 'data')
        setCourse(data.data)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  return (
    <div className='d-flex align-items-center'>
      <div className='d-flex flex-column'>{selected?.join(', ')}</div>
    </div>
  )
}

export {CoursesCell}
