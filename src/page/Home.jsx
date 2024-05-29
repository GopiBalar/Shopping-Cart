import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductCard from "../components/Home/ProductCard";

function Home() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProductsData() {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      if (data) {
        setLoading(false);
        setProductData(data);
      }
    } catch (err) {
      console.log("err", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color=" rgb(4 47 46)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {productData && productData.length
            ? productData.map((productItem) => (
                <ProductCard product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default Home;
