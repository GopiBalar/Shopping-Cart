import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/Cart-Slice";

function ProductCard({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="flex items-center justify-between p-5 bg-teal-600 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5 ">
            <p className="text-white font-extrabold">
              Price : {cartItem?.price} ₹
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-teal-900 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
