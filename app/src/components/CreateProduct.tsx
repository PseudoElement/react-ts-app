import React from "react";
export function CreateProduct(props: any): any {
  console.log(props);
  function onClick(e: any): any {
    e.preventDefault();
    console.log("Prevented submit");
  }
  function closeModal(e: any): any{
    e.preventDefault();
    console.log('Prevented close')
  }
  return (
    <form>
      <h1>{props.title}</h1>
      <input type="text" placeholder="Enter product title..." />
      <div className="btns-modal">
        <button onClick={(e) => onClick(e)} type="submit">
          Submit
        </button>
        <button onClick={e=>closeModal(e)} type="submit">
          Close
        </button>
      </div>
    </form>
  );
}
