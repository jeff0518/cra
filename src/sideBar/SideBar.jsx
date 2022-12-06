import React from 'react'
import NavItem from './navItem/NavItem'
import Button from '../UI components/Button'

import style from './SideBar.module.scss'

export default function SideBar() {
  return (
    <div className={style.sideBar__container}>
      <div className={style.nav}>
        <div className={style.nav__container}>
          <div className={style.logo}>
            <img className={style.logo__img} alt='AC LOGO' />
          </div>
          <div className={style.nav__items}>
            <NavItem
              iconType={'home__icon'}
              iconAlt={'首頁'}
              navTitle={'首頁'}
            />
            <NavItem
              iconType={'profile__icon'}
              iconAlt={'個人資料'}
              navTitle={'個人資料'}
            />
            <NavItem
              iconType={'setting__icon'}
              iconAlt={'設定'}
              navTitle={'設定'}
            />
          </div>
        </div>
        <div className={style.btn__tweet}>
          <Button button__style={'btn__pill__large'} text={'推文'} />
        </div>
      </div>
      <div className={style.logout}>
        <div className={style.logout__icon}></div>
        <p>登出</p>
      </div>
    </div>
  )
}
