import React, { useState } from "react";
import { IProduct } from "../models";
interface ProductProps {
  product: IProduct;
}
export function Product({
  product: {
    id,
    image,
    description,
    title,
    price,
    category,
    rating
  },
}: ProductProps): JSX.Element {
  const [info, setInfo] = useState(false);
  function showInfo(): void {
    setInfo((prev) => !prev); //меняет previous value to opposite
  }
  return (
    <div className="product">
      <h1>{title}</h1>
      <h3>Price: {price}$</h3>
      <img className="image" src={image} />
      <button style={{background: info ? 'yellow': 'pink'}} onClick={showInfo}>
        {info ? 'Hide info': 'More info'}
      </button>
      {info ? (
        <>
          <h3>Category: {category}</h3>
          {rating?.rate ? <h3>
            Rating: average - {rating.rate}, count - {rating.count} votes.
          </h3>: null}
          <h4>Description: {description}</h4>
        </>
      ) : null}
    </div>
  );
}
