import { useContext, createContext } from "react";

const ProductListContext = createContext();

const useProductListContext = () => {
  const context = useContext(ProductListContext);
  if (context === undefined) {
    throw new Error("use hook must be used within provider");
  }

  return context;
};


