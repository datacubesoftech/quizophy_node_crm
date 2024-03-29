/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain () {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      {/* <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'></span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      <AsideMenuItem
        to='/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='Users'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/permissions'
        icon='/media/icons/duotune/general/gen058.svg'
        title='Permissions'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/roles'
        icon='/media/icons/duotune/general/gen059.svg'
        title='Roles'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/staff'
        icon='/media/icons/duotune/general/gen054.svg'
        title='Staffs'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/settings/general'
        icon='/media/icons/duotune/general/gen055.svg'
        title='Settings'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/questions'
        icon='/media/icons/duotune/general/gen056.svg'
        title='Question Bank'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/quiz'
        icon='/media/icons/duotune/general/gen002.svg'
        title='Quiz'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/coupon'
        icon='/media/icons/duotune/general/gen003.svg'
        title='Coupons'
        fontIcon='bi-layers'
      />
      <AsideMenuItemWithSub
        to='/sponsor'
        title='Sponsorship'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/sponsor/sponsors' title='Sponsors' hasBullet={true} />
        <AsideMenuItem to='/sponsor/programs' title='Program' hasBullet={true} />
        <AsideMenuItem to='/sponsor/subscriptions' title='Subscriptions' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/sales'
        title='Sales'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com013.svg'
      >
        <AsideMenuItem to='/sales/wallet' title='Wallet' hasBullet={true} />
        <AsideMenuItem to='/sales/withdrawal' title='Withdrawal' hasBullet={true} />
        <AsideMenuItem to='/sales/payment-support' title='Payment Support' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/courses'
        title='Course Setup'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com014.svg'
      >
        <AsideMenuItem to='/course/courses' title='Courses' hasBullet={true} />
        <AsideMenuItem to='/course/course-category' title='Course Category' hasBullet={true} />
        <AsideMenuItem to='/course/subjects' title='Subjects' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/books'
        icon='/media/icons/duotune/general/gen005.svg'
        title='Books'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/feedback'
        icon='/media/icons/duotune/general/gen006.svg'
        title='Feedbacks'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/conference-quiz'
        icon='/media/icons/duotune/general/gen007.svg'
        title='Conference Quiz'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/quiz-template/list'
        icon='/media/icons/duotune/general/gen008.svg'
        title='Quiz Templates'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}
