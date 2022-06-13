import Image from "next/image";
import React, { useEffect } from "react";
import style from "../../styles/detail-product.module.css";
import { Rating } from "react-simple-star-rating";
import { Button } from "../../components/button/button";
import Products from "../../components/product/product-list";
import { reduceArray } from "../../components/api-utils/api-utils";

const DetailsProduct = (props) => {
  useEffect(()=>{
    document.title = props.params.title
  },[props.params.title])
  const handleClickButton = () => {
    console.log("hi");
  };

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <Image
          src={props.params.image}
          alt={props.params.title}
          width={400}
          height={400}
        />
        <div className={style.infosProduct}>
          <div className={style.mainInfos}>
            <h1 className={style.title}>{props.params.title}</h1>
            <p className={style.description}>{props.params.description}</p>
          </div>
          <div className={style.subInfos}>
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <span className={style.infos}>Category :</span>
                  </td>
                  <td>
                    <span className={style.category}>
                      {props.params.category}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <span className={style.infos}>Prix :</span>
                  </td>
                  <td>
                    <span className={style.infosValue}>
                      $ {props.params.price}{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className={style.infos}>Rate :</span>
                  </td>
                  <td>
                    {" "}
                    <Rating
                      initialValue={props.params.rating}
                      readonly
                      size={32} /* Available Props */
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button onClick={handleClickButton} className={style.btn}>
            panier
          </Button>
        </div>
      </div>
      <di>
        <h3 className={style.subtitle}> Product in the same category</h3>
        {props.similar ? (
          <Products items={props.similar} />
        ) : (
          "No Similar product"
        )}
      </di>
    </div>
  );
};

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    const params = context.params.id;
    const productId = products.find(
      (product) => product.id.toString() === params
    );
    const sameCategory = products.filter(
      (product) => product.category === productId.category
    );
    const reducedSameCategory = reduceArray(sameCategory, 6);

    if (!productId) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        params: productId,
        similar: reducedSameCategory,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const ids = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths: ids,
    fallback: "blocking",
  };
}

export default DetailsProduct;
