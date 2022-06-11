
import Link from 'next/link'
import React from 'react'
import style from './button.module.css'

export const Button = ({children,onClick}) => {
  return (
    <button onClick={onClick} className={style.btnPanier}> {children}</button>
  )
}

export const ButtonLink = ({children, link}) => {
  return(
    <Link href={link}>
    <a className={style.btn}>{children}</a>
    </Link>
  )
}
