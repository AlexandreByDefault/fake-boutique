import Image from 'next/image'
import React from 'react'


const DetailsProduct = (props) => {
  console.log(props.params)
  return (
    <div>
    DetailsProduct
    </div>
  )
}


export async function getStaticProps(context) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    const params = context.params.id;
    const productId = products.find((product) => product.id.toString() === params);

    if (!productId) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        params: productId,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}


export async function getStaticPaths (){
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  const ids = products.map(product => ({ params:{ id : product.id.toString()}}) )

  return {
    paths: ids,
    fallback: 'blocking'
  }
}

export default DetailsProduct
