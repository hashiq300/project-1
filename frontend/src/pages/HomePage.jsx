import React, { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/product/`);
      if (res.ok) {
        const json = await res.json();
        dispatch(setProducts(json));
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Banner
        heading="The best collection of chairs is here"
        bannerImg="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
