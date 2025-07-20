import { createContext, useContext } from "react";

export type ModalContextType = {
  modal: string;
  toggleModal: (modal: string) => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
