import { useState, type FC, type ReactNode } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider: FC<{
  children: ReactNode;
  defaultModal?: string;
}> = ({ children, defaultModal = "" }) => {
  const [modal, setModal] = useState<string>(defaultModal);

  const toggleModal = (modal: string) => {
    console.log(`Toggling Modal to: ${modal}`);
    setModal(modal);
  };

  return (
    <ModalContext.Provider value={{ modal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
