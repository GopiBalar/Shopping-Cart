import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/Cart/ProductCard";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(totalPrice);
  return (
    <div className="flex justify-center p-3">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              {cart.map((cartItem) => (
                <ProductCard cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 text-xl space-y-5 mt-14">
              <h1 className="font-bold text-2xl text-red-800">
                Your Cart Summry
              </h1>
              <p>
                <span className="text-gray-700 text-xl font-bold p-2">
                  Total Item
                </span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-700 font-bold p-2">
                  Total Amount
                </span>
                <span>: {totalPrice} ₹</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold mb-2 text-2xl p-3 ">
            Your card is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-teal-700 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
