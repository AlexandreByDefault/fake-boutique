import React from "react";
import Product from "../../components/product/product-item";
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const products = await res.json();
  return {
    props: {
      category: products,
    },
    revalidate: false,
  };
}
const Products = (props) => {
  console.log(props.category);
  return <div>Products</div>;
};

export default Products;
