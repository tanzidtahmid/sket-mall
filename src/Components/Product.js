import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import swal from 'sweetalert';
import Bounce from 'react-reveal/Bounce'

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime
    };
    
    dispatch(addToBasket(product));
    swal(`${product.title}`, "Your Product added to cart!", "success");
  };

  return (
    <Bounce bottom>
      <divn className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-xl">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>
      <p className="text-xs mt-2 my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP"></Currency>
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-2">
          <p className="text-xs text-gray-500 ">FERR Next-day Delivary</p>
        </div>
      )} 
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Cart
      </button> 
    </divn>
    </Bounce>
  );
}

export default Product;
