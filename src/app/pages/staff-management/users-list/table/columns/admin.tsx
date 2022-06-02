import {FC} from 'react'

type Props = {
  admin?: boolean
}

const Admin: FC<Props> = ({admin}) => (
  <> {admin ? <div className='badge badge-light-success fw-bolder'>Yes</div>: 
  <div className='badge badge-light-danger fw-bolder'>No</div>}</>
)

export {Admin}
