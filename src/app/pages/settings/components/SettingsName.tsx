import React, {FC, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers'

type Props = {
  active: string
}

const SettingsName: FC<Props> = ({active}) => {
  const Navigate = useNavigate()
  const settings = [
    {name: 'general', icon: '001'},
    {name: 'company-information', icon: '002'},
    {name: 'localization', icon: '003'},
    {name: 'email', icon: '004'},
    {name: 'finance', icon: '005'},
    {name: 'payment-gateways', icon: '006'},
    {name: 'customers', icon: '007'},
    {name: 'PDF', icon: '008'},
    {name: 'SMS', icon: '009'},
    {name: 'cron-jobs', icon: '010'},
    {name: 'misc', icon: '011'},
    {name: 'cash-bonus', icon: '012'},
    {name: 'wallet-minimun-balance', icon: '013'},
    {name: 'app-current-version', icon: '014'},
    {name: 'spin-the-wheel', icon: '015'},
  ]
  return (
    <div className='flex-column flex-lg-row-auto w-100 w-lg-275px mb-10 mb-lg-0'>
      <div
        className='card card-flush'>
        <div className='card-body' id='kt_chat_contacts_body'>
          <div className='menu menu-column menu-rounded menu-state-bg menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary mb-10'>
            {settings.map((item, i) => (
              <div
                key={i}
                className='menu-item mb-3'
                onClick={() => {
                  Navigate(`/settings/${item.name}`)
                }}
              >
                <span className={`menu-link ${active == item.name ? 'active' : ''}`}>
                  <span className='menu-icon'>
                    <span className='svg-icon svg-icon-2 me-3'>
                      <KTSVG
                        path={`/media/icons/duotune/general/gen${item.icon}.svg`}
                        className='svg-icon-2'
                      />
                    </span>
                  </span>
                  <span className='menu-title' style={{textTransform: 'capitalize'}}>
                    {item.name.replace(/-/g, ' ')}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export {SettingsName}
