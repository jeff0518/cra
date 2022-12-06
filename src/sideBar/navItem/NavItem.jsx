import React from 'react'

import style from './NavItem.module.scss'

export default function NavItem({ iconType, iconAlt, navTitle }) {
  return (
    <div className={style.navItem}>
      <div className={style.nav__icon}>
        <img className={style[iconType]} alt={iconAlt}></img>
      </div>
      <p className={style.nav__title}>{navTitle}</p>
    </div>
  )
}
