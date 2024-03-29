import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'

const PrivateRoutes = () => {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../pages/user-management/UsersPage'))
  const PermissionPage = lazy(() => import('../pages/permissions/PermissionPage'))
  const RolesPage = lazy(() => import('../pages/role-management/RolesPage'))
  const StaffPage = lazy(() => import('../pages/staff-management/StaffPage'))
  const SettingPage = lazy(() => import('../pages/settings/SettingPage'))
  const QuestionPage = lazy(() => import('../pages/question-bank/QuestionPage'))
  const Quiz = lazy(() => import('../pages/quiz/QuizPage'))
  const CouponPage = lazy(() => import('../pages/coupons/CouponPage'))
  const SponsorPage = lazy(() => import('../pages/sponsors/SponsorPage'))
  const SalesPage = lazy(() => import('../pages/sales/SalesPage'))
  const BookPage = lazy(() => import('../pages/books/BookPage'))
  const FeedbackPage = lazy(() => import('../pages/feedback/FeedbackPage'))
  const CoursePage = lazy(() => import('../pages/course-setup/CoursePage'))
  const ConferenceQuizPage = lazy(() => import('../pages/conferenceQuiz/QuizPage'))
  const TemplatePage = lazy(() => import('../pages/quiz-template/TemplatePage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='users'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path='permissions'
          element={
            <SuspensedView>
              <PermissionPage />
            </SuspensedView>
          }
        />
        <Route
          path='roles'
          element={
            <SuspensedView>
              <RolesPage />
            </SuspensedView>
          }
        />
        <Route
          path='staff'
          element={
            <SuspensedView>
              <StaffPage />
            </SuspensedView>
          }
        />
        <Route
          path='settings/*'
          element={
            <SuspensedView>
              <SettingPage />
            </SuspensedView>
          }
        />
        <Route
          path='questions'
          element={
            <SuspensedView>
              <QuestionPage />
            </SuspensedView>
          }
        />
        <Route
          path='coupon'
          element={
            <SuspensedView>
              <CouponPage />
            </SuspensedView>
          }
        />
        <Route
          path='quiz/*'
          element={
            <SuspensedView>
              <Quiz />
            </SuspensedView>
          }
        />
        <Route
          path='sponsor/*'
          element={
            <SuspensedView>
              <SponsorPage />
            </SuspensedView>
          }
        />
        <Route
          path='sales/*'
          element={
            <SuspensedView>
              <SalesPage />
            </SuspensedView>
          }
        />
        <Route
          path='course/*'
          element={
            <SuspensedView>
              <CoursePage />
            </SuspensedView>
          }
        />
        <Route
          path='books'
          element={
            <SuspensedView>
              <BookPage />
            </SuspensedView>
          }
        />
        <Route
          path='feedback'
          element={
            <SuspensedView>
              <FeedbackPage />
            </SuspensedView>
          }
        />
        <Route
          path='quiz-template/*'
          element={
            <SuspensedView>
              <TemplatePage />
            </SuspensedView>
          }
        />
        <Route
          path='conference-quiz/*'
          element={
            <SuspensedView>
              <ConferenceQuizPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

export function componentLoader (lazyComponent: any, attemptsLeft: any) {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch((error: any) => {
        // let us retry after 1500 ms
        setTimeout(() => {
          if (attemptsLeft === 1) {
            reject(error)
            return
          }
          componentLoader(lazyComponent, attemptsLeft - 1).then(resolve, reject)
        }, 1500)
      })
  })
}

const SuspensedView: FC = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
