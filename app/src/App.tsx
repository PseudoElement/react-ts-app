import React from 'react';
import "./App.css";
import { Loader } from "./components/Loader";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";
import { Error } from "./components/Error";
import { Modal } from "./components/Modal";
import { Counter } from "./components/Counter";
import { CreateProduct } from "./components/CreateProduct";
export function App() {
  const { loading, error, products } = useProducts();
  const [modal, setModal] = React.useState(true);
  React.useEffect(()=>{
    console.log('Change');
  }, [products])
  return (
    <div className="App">
      {loading && <Loader />}
      {error && <Error error={error} />}
      <Counter />
      {modal && <Modal title="Create new product">
        <CreateProduct />
      </Modal>}
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}
