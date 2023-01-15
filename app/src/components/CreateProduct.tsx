import React from "react";
import { Error } from "./Error";
import { useProducts } from "../hooks/products";
const newProduct = {
  title: "DANVOUY Womens T Shirt Casual Cotton Short",
  price: 12.99,
  description:
    "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  rating: {
    rate: 3.6,
    count: 145,
  },
};
export function CreateProduct(props: any): any {
let {products, setProducts} = useProducts();
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState("");
  function preventSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  function changeValue(text: any) {
    setInputValue(text);
  }
  const sendRequest = async () => {
    if (inputValue.trim().length === 0) {
      setError("Input something before sending...");
      return;
    }
    try {
      setError("");
      newProduct.title = inputValue;
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      setProducts(prev=> [...prev, data])
    } catch (e: any) {
      setError(e.message);
    }
  };
  return (
    <form onSubmit={(e) => preventSubmit(e)}>
      <h1>{props.title}</h1>
      <input
        onChange={(e) => changeValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder="Enter product title..."
      />
      {error && <Error error={error} />}
      <div className="btns-modal">
        <button onClick={sendRequest} type="submit">
          Submit
        </button>
        <button type="submit">Close</button>
      </div>
    </form>
  );
}
