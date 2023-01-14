import React from "react";
import { Modal } from "../components/Modal";
export function useModal(){
const [isOpenModal, setIsOpenModal] = React.useState(false);
    return{isOpenModal}
}