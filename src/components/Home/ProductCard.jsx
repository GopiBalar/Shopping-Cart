import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/Cart-Slice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className="">
      <div className="group flex flex-col items-center shadow-2xl gap-3 p-4 h-[380px] mt-10 ml-5 bg-stone-50 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 font-bold text-lg">
            {product.title}
          </h1>
        </div>
        <div className="text-center">
          <span className="font-bold ">Price : </span>
          <span>{product.price} ₹</span>
        </div>
        <div className="flex item-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="bg-teal-900 text-white border-2 rounded-lg font-bold p-4"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
