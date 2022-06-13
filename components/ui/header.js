import Link from "next/link";
import React from "react";
import { ButtonLink } from "../button/button";
import style from "./header.module.css";

const MainHeader = () => {
  return (
    <header className={style.container}>
    <h1>Faker</h1>
      <ul className={style.ul}>
        <li>
          <ButtonLink link={'/'}>Products</ButtonLink>
        </li>
        <li>
          <ButtonLink link={'/'}>Connexion</ButtonLink>
        </li>
        <li>
          <ButtonLink link={'/'}>Inscription</ButtonLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
