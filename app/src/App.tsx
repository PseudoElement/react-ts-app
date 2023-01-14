import "./App.css";
import { Loader } from "./components/Loader";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";
import {Error} from "./components/Error"
import { Modal } from "./components/Modal";
export function App() {
  const {loading, error, products} = useProducts()
  return (
    <div className="App">
      {loading && <Loader/>}
      {error && <Error error={error}/>}
      {/* <Modal/> */}
     { products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
}
