import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {PermissionsListWrapper} from './users-list/PermissionList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Permission management',
    path: '/apps/permission-management/permissions',
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

const PermissionPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='permissions'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Permission list</PageTitle>
              <PermissionsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/permission-management/permissions' />} />
    </Routes>
  )
}

export default PermissionPage
