
import Link from 'next/link'
import React from 'react'
import style from './button.module.css'

export const Button = ({children,onClick,className}) => {
  return (
    <button  onClick={onClick} className={className === "" ? style.btnPanier : className}> {children}</button>
  )
}

export const ButtonLink = ({children, link}) => {
  return(
    <Link href={link}>
    <a className={style.btn}>{children}</a>
    </Link>
  )
}
