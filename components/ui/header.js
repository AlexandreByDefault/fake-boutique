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
          <ButtonLink>Products</ButtonLink>
        </li>
        <li>
          <ButtonLink>Connexion</ButtonLink>
        </li>
        <li>
          <ButtonLink>Inscription</ButtonLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
