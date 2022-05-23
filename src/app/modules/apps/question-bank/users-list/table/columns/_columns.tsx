import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Q.id' className='min-w-125px' />,
    id: 'id',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Question' className='min-w-125px' />
    ),
    id: 'name',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Courses' className='min-w-125px' />
    ),
    accessor: 'courses',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Subject' className='min-w-125px' />
    ),
    id: 'subject',
    Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].subject} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Verified' className='min-w-125px' />
    ),
    id: 'verified',
    Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].verified} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Verified By' className='min-w-125px' />
    ),
    accessor: 'question',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
