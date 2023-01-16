import React from "react";

interface IModalProps {
  children: React.ReactNode | any;
  closeModal: ()=> void
}
export function Modal({ children, closeModal }: IModalProps):any {
  return (
    <>
      <div onClick={closeModal} className="opacity">
      {children}
      </div>
    </>
  );
}
