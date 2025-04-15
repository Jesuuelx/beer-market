"use client";

import { useState, useTransition } from "react";
import { CounterProducts } from "./CounterProducts";
import { StartRating } from "../StartRating/StartRating";
import { addRoundAction } from "@/market/actions/NewRound";

interface Props {
  name: string;
  rating: number;
  price: number;
}

export const ContentCard = ({ name, rating, price }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleOrder = async () => {
    startTransition(async () => {
      await addRoundAction({
        name,
        quantity,
      });
    });
  };

  return (
    <div className="bg-white rounded-t-3xl border-t border-gray-100 px-4 pt-4 pb-4 -mt-6 fixed bottom-0 z-10 md:relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col items-start  mb-1">
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
          <StartRating rating={rating} />
        </div>
        <CounterProducts
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          quantity={quantity}
        />
      </div>
      <p className="text-gray-600 text-xs mb-2 mt-2">
        Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
        pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
        teratur.
      </p>

      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="font-semibold text-gray-800 text-sm">Ingredients:</p>
          <p className="text-xs text-gray-600">
            Seledri, telur, blueberry, madu.
          </p>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-800">Total Price:</p>
            <p className="font-bold text-base text-gray-800">IDR {price}</p>
          </div>
          <button
            className="bg-brand text-white py-4 px-10 rounded-md font-medium text-sm"
            onClick={() => handleOrder()}
          >
            {isPending ? "Loading..." : "Order now"}
          </button>
        </div>
      </div>
    </div>
  );
};
