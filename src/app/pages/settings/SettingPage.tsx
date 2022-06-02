import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {General} from './components/General'
import {CompanyInfo} from './components/CompanyInfo'
import {Localization} from './components/Localization'
import {Finance} from './components/Finance'
import {PaymentGateway} from './components/PaymentGateway'
import {Customers} from './components/Customers'
import {Pdf} from './components/Pdf'
import {Sms} from './components/Sms'
import {Cronjob} from './components/CronJob'
import {Misc} from './components/Misc'
import {CashBonus} from './components/CashBonus'
import {WalletMinBalance} from './components/WalletMinBalance'
import {AppCurVersion} from './components/AppCurVersion'
import {Spinwin} from './components/Spinwin'
import {Email} from './components/Email'

const chatBreadCrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings/general',
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

const SettingPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='general'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>General Setting</PageTitle>
              <General />
            </>
          }
        />
        <Route
          path='company-information'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Company Information Setting</PageTitle>
              <CompanyInfo />
            </>
          }
        />
        <Route
          path='localization'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Localization Setting</PageTitle>
              <Localization />
            </>
          }
        />
        <Route
          path='finance'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Finance Setting</PageTitle>
              <Finance />
            </>
          }
        />
        <Route
          path='payment-gateways'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Payment Gateway Setting</PageTitle>
              <PaymentGateway />
            </>
          }
        />
        <Route
          path='customers'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Customer Setting</PageTitle>
              <Customers />
            </>
          }
        />
        <Route
          path='PDF'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>PDF Setting</PageTitle>
              <Pdf />
            </>
          }
        />
        <Route
          path='SMS'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>SMS Setting</PageTitle>
              <Sms />
            </>
          }
        />
        <Route
          path='cron-jobs'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Cron job Setting</PageTitle>
              <Cronjob />
            </>
          }
        />
        <Route
          path='misc'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Misc Setting</PageTitle>
              <Misc />
            </>
          }
        />
        <Route
          path='cash-bonus'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Cash Bonus Setting</PageTitle>
              <CashBonus />
            </>
          }
        />
        <Route
          path='wallet-minimun-balance'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Wallet minimun balance Setting</PageTitle>
              <WalletMinBalance />
            </>
          }
        />
        <Route
          path='app-current-version'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>App current version Setting</PageTitle>
              <AppCurVersion />
            </>
          }
        />
        <Route
          path='spin-the-wheel'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Spinwin Setting</PageTitle>
              <Spinwin />
            </>
          }
        />
        <Route
          path='email'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Email Setting</PageTitle>
              <Email />
            </>
          }
        />
        <Route index element={<Navigate to='/settings/general' />} />
      </Route>
    </Routes>
  )
}

export default SettingPage
