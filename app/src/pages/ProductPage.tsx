import React from "react";
import "../App.css";
import { Loader } from "../components/Loader";
import { Product } from "../components/Product";
import { useProducts } from "../hooks/products";
import { Error } from "../components/Error";
import { Modal } from "../components/Modal";
import { Counter } from "../components/Counter";
import { BtnOpenModal } from "../components/BtnOpenModal";
import { CreateProduct } from "../components/CreateProduct";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";
import { Navigation } from "../components/Navigation";
export function ProductPage(){
    const { loading, error, products, setProducts } = useProducts();
  const {modal, openModal, closeModal} = React.useContext(ModalContext)
  React.useEffect(() => {
  }, [products]);
  return (
    <div className="App">
      {loading && <Loader />}
      {error && <Error error={error} />}
      <Navigation/>
      <BtnOpenModal openModal={() => openModal()} />
      <Counter />
      {modal && (
        <Modal closeModal={closeModal} >
          <CreateProduct
            title={"Create new product"}
            closeModal={() => closeModal()}
            loadNewProduct={(newProduct: IProduct) =>
              setProducts((prev) => [...prev, newProduct])
            }
          />
        </Modal>
      )}
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}