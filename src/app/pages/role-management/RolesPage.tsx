import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {PermissionsListWrapper} from './users-list/PermissionList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Role management',
    path: '/roles',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const RolesPage = () => {
  return (
    // <Routes>
    //   <Route element={<Outlet />}>
    //     <Route
    //       path='roles'
    //       element={
    <>
      <PageTitle breadcrumbs={usersBreadcrumbs}>Roles list</PageTitle>
      <PermissionsListWrapper />
    </>
    //       }
    //     />
    //   </Route>
    //   <Route index element={<Navigate to='/apps/role-management/roles' />} />
    // </Routes>
  )
}

export default RolesPage
