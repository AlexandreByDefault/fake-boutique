import Link from "next/link";
import React from "react";
import { ButtonLink } from "../button/button";
import style from "./header.module.css";

const MainHeader = () => {
  return (
    <header className={style.container}>
      <nav className={style.navContainer}>
        <div className={style.logoDiv}>
          <ButtonLink link={"/"}> Faker</ButtonLink>
        </div>
        <div className={style.linkDiv}>
          <ButtonLink  link={"/products"}>
            Products
          </ButtonLink>
          <ButtonLink  link={"/"}>
          Contact
        </ButtonLink>
        <ButtonLink  link={"/"}>
        About
      </ButtonLink>
        </div>

        <div className={style.btnDiv}>
          <ButtonLink link={"/"}>
            Connexion
          </ButtonLink>
          <ButtonLink link={"/"}>
            Inscription
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
