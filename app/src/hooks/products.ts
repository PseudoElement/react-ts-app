import React, { useState } from "react";
import { IProduct } from "../models";
export function useProducts() {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function fetchProducts() {
    try {
      setError("");
      setLoading((prev) => !prev);
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const data = await response.json();
      setProducts(data);
      setLoading((prev) => !prev);
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  }
  React.useEffect(() => {
    fetchProducts();
  }, []);
  return {products, error, loading, setProducts}
}
