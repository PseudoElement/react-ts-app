import React from "react";

interface IModalProps {
  children: React.ReactNode | any;
  title: string;
}
export function Modal({ children, title }: IModalProps):any {
  return (
    <>
      <div className="opacity">
      {React.cloneElement(children, {title: title},)}
      </div>
    </>
  );
}
