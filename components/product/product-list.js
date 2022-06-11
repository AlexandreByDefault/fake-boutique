import React from "react";
import Product from "./product-item.js";
import style from './product-list.module.css'



const Products = (props) => {
  const { items } = props;
  return (
    <ul className={style.container}>
      {items.map((event) => {
        return (
          <Product
            title={event.title}
            key={event.id}
            id={event.id}
            cover={event.image}
            rating={event.rating.rate}
            price={event.price}
          />
        );
      })}
    </ul>
  );
};

export default Products;
