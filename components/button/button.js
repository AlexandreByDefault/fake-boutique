
import Link from 'next/link'
import React from 'react'
import style from './button.module.css'

export const Button = ({children,onClick,myclassName}) => {
  return (
    <button  onClick={onClick} className={myclassName === "" ? style.btnPanier : myclassName}> {children}</button>
  )
}

export const ButtonLink = ({children, link,myclassName}) => {
  return(
    <Link href={link}>
    <a  className={myclassName === 'any' ? style.btn : myclassName}> {children}</a>
    </Link>
  )
}
