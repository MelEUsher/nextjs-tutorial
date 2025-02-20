import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div>
      <button onCLick={() => console.log('Click')}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
