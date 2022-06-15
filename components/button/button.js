import Link from "next/link";
import React from "react";
import style from "./button.module.css";
const handleProductsCategories = (value) => {
  console.log(value);
};

export const Button = ({ children, onClick, myclassName, value }) => {
  return (
    <button
      onClick={onClick}
      value={value}
      className={myclassName ?? style.btnPanier}
    >
      {" "}
      {children}
    </button>
  );
};

export const ButtonLink = ({ children, link, myclassName }) => {
  return (
    <Link href={link}>
      <a className={myclassName ?? style.btn}> {children}</a>
    </Link>
  );
};
