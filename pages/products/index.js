import React, { Fragment, useRef, useState } from "react";
import { Button } from "../../components/button/button";
import Products from "../../components/product/product-list";

const ProductsAll = (props) => {
  console.log(props.category);

  const handleProductsCategories = (category) =>{
    const filtered =  props.products.filter(product => product.category === category)
    console.log('hi')
  }

  return (
    <section>
      <div>
        <div>
          <Button onClick={() => handleProductsCategories(value)} value={props.category[0]}>
            {props.category[0]}
          </Button>
          <Button value={props.category[1]}>{props.category[1]}</Button>
          <Button value={props.category[2]}>{props.category[2]}</Button>
          <Button value={props.category[3]}>{props.category[3]}</Button>
        </div>
        <div><Products items={props.products} /></div>
      </div>
      <div></div>
    </section>
  );
};

export default ProductsAll;

export async function getStaticProps() {
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  const responses = await Promise.all([categories, products]);
  return {
    props: {
      category: responses[0],
      products: responses[1],
    },
    revalidate: false,
  };
}
