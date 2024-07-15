import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import ProductHeader from "../components/ProductHeader";
import ProductDisplay from "../components/ProductDisplay.jsx";
import ProductDescription from "../components/ProductDescription.jsx";
import RelatedProducts from "../components/RelatedProducts.jsx";
import { Outlet } from "react-router-dom";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHeader product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
