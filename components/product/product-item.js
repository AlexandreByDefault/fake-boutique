import React from "react";
import Image from "next/image";
import style from "./product-item.module.css";
import { Rating } from 'react-simple-star-rating'
import { Button,ButtonLink } from "../button/button";

const Product = ({ cover, title, price, rating, id }) => {
  const detailsProduct = `\products/${id}`;
  return (
    <li className={style.container}>
      <Image src={cover} alt={title} width={150} height={150} className={style.image} />
      <h2 className={style.title}>{title}</h2>
      <div className={style.divInfos}>
        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                <span className={style.infos}>Prix</span>
              </td>
              <td>
                <span className={style.infosValue}>${price} </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={style.infos}>Rate</span>
              </td>
              <td>
                {" "}
                <Rating initialValue={rating} readonly size={18} /* Available Props */ />

              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={style.divInteractions}>
      <ButtonLink link={detailsProduct}>Plus infos</ButtonLink>
      <Button>Panier</Button>
      </div>
    </li>
  );
};

export default Product;
