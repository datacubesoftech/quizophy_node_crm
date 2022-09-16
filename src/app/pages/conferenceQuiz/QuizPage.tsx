import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Create} from './createQuiz/Create'
import {CreateQuiz} from './createQuiz/CreateQuiz'
import {EditPage} from './editQuiz/EditPage'
import {GameSummaryPage} from './game-summary/GameSummaryPage'
import {GamePage} from './game/GamePage'
import {GameOverPage} from './gameover/GameOverPage'
import {GameStartPage} from './gameStart/GameStartPage'
import {LobbyPage} from './lobby/LobbyPage'
import {UsersListWrapper} from './quizList/UsersList'
import {ReportsPage} from './reports/UsersList'
import {SelectMode} from './selectMode/SelectMode'
import {SummaryPage} from './summary/SummaryPage'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Conference Quiz',
    path: '/conference-quiz/list',
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

const BookPage = () => {
  return (
    <>
      <Routes>
        <Route element={<Outlet />}>
          <Route
            path='list'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Conference Quiz list</PageTitle>
                <UsersListWrapper />
              </>
            }
          />
          <Route
            path='create'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Create a Conference Quiz</PageTitle>
                <CreateQuiz />
              </>
            }
          />
          <Route
            path=':id'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Select Quiz Mode</PageTitle>
                <SelectMode />
              </>
            }
          />
          <Route
            path='lobby'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Quiz Lobby</PageTitle>
                <LobbyPage />
              </>
            }
          />
          <Route
            path='game'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Game Loading</PageTitle>
                <GamePage />
              </>
            }
          />
          <Route
            path='game-start'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Game Start</PageTitle>
                <GameStartPage />
              </>
            }
          />
          <Route
            path='game-over'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Game Over</PageTitle>
                <GameOverPage />
              </>
            }
          />
          <Route
            path='game-summary'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Game Over</PageTitle>
                <GameSummaryPage />
              </>
            }
          />
          <Route
            path='reports/:id'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Reports Page</PageTitle>
                <ReportsPage />
              </>
            }
          />
          <Route
            path='summary/:id'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Summary Page</PageTitle>
                <SummaryPage />
              </>
            }
          />
          <Route
            path='edit/:id'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Edit Page</PageTitle>
                <EditPage />
              </>
            }
          />
          <Route index element={<Navigate to='/conference-quiz/list' />} />
        </Route>
      </Routes>
    </>
  )
}

export default BookPage
