import React from 'react'
import { Outlet } from 'react-router-dom'
import PopularUser from '../PopularUser/PopularUser'
import SideBar from '../sideBar/SideBar'

import style from './Layout.module.scss'

export default function Layout() {
  return (
    <div className={style.main__container}>
      <SideBar />
      <Outlet />
      <PopularUser />
    </div>
  )
}
