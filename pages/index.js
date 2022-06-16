import React from "react";
import { Fragment } from "react";
import Products from "../components/product/product-list";
import style from "../styles/home.module.css";
import { reduceArray } from "../components/api-utils/api-utils";
const HomePage = (props) => {
  return (
    <Fragment>
      <section className={style.container}>
        <di className={style.section}>
          <h2 className={style.titleHero}>
            Welcome to <span> Fake Boutique </span>{" "}
          </h2>
          <p className={style.intro}>
            You might looking for a new t-shirt or a luxury watch to impress
            your girlfriend or your friend. Well ! you are on the good place !
            here we have all of that and more ! Amazing right ? Take a look at
            all our product in Products{" "}
          </p>
        </di>

        <div>
          <h3 className={style.subTitle}>Top rated products</h3>
          <Products items={props.topProducts} />
          <h3 className={style.subTitle}>New Arrivals</h3>
          <Products items={props.newProducts} />
        </div>
      </section>
    </Fragment>
  );
};
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const recommendedProducts = products.filter(
    (product) => product.rating.rate >= 4.4
  );
  const newProducts = products.filter((product) => product.rating.rate <= 3.4);
  const reducedNewProducts = reduceArray(newProducts, 5);
  const reducedRecommandedProducts = reduceArray(recommendedProducts, 5);
  return {
    props: {
      topProducts: reducedRecommandedProducts,
      newProducts: reducedNewProducts,
    },
    revalidate: false,
  };
}

export default HomePage;
