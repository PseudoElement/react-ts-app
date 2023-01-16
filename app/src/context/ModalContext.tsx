import React from "react";
interface IModalContext{
    modal: boolean;
    openModal: ()=> void;
    closeModal: ()=> void;
}
export const ModalContext = React.createContext<IModalContext>({
    modal: false,
    openModal: ()=>{},
    closeModal: ()=>{}
})
export const ModalState = ({children}: {children: React.ReactNode})=>{
    const [modal, setModal] = React.useState(false)
    const openModal = ()=> setModal(true)
    const closeModal = ()=> setModal(false)
    return(
        <ModalContext.Provider value={{modal, closeModal, openModal}}>
            {children}
        </ModalContext.Provider>
    )
}