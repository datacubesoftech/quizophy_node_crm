/* eslint-disable jsx-a11y/anchor-is-valid */
import axios, {AxiosResponse} from 'axios'
import clsx from 'clsx'
import {FC, useEffect, useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {User} from '../../core/_models'

type Props = {
  subject_id: any
}

const SubjectCell: FC<Props> = ({subject_id}) => {
  const [subject, setSubject] = useState<any>()

  useEffect(() => {
    getSubject()
  }, [])

  const getSubject = async () => {
    await axios
      .post('http://localhost:3000/questionBank/subjects', {ids: subject_id})
      .then((data: AxiosResponse<any>) => {
        console.log(data.data, 'data')
        setSubject(data.data)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  return (
    <div className='d-flex align-items-center'>
      <div className='d-flex flex-column'>{subject?.length > 0 && subject[0]?.subject_name}</div>
    </div>
  )
}

export {SubjectCell}
