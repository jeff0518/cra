import React from 'react'

import style from './Button.module.scss'

export default function Button({ button__style, text }) {
  return (
    <div className={style[button__style]}>
      <p>{text}</p>
    </div>
  )
}
