import "../styles/globals.css";
import Layout from "../components/ui/layout";
import { ProductContext } from "../components/context/product-context";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [panier, setPanier] = useState(false);

  return (
    <ProductContext.Provider value={{ panier, setPanier }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductContext.Provider>
  );
}

export default MyApp;
