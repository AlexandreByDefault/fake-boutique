
import Link from 'next/link'
import React from 'react'
import style from './button.module.css'

export const Button = ({children,onClick,myclassName}) => {
  return (
    <button  onClick={onClick} className={myclassName ?? style.btnPanier }> {children}</button>
  )
}

export const ButtonLink = ({children, link,myclassName}) => {
  return(
    <Link href={link}>
    <a  className={myclassName ?? style.btn }> {children}</a>
    </Link>
  )
}
