import React from "react";

interface variantContextProps {
  variantNumber: number;
  setVariantNumber: React.Dispatch<React.SetStateAction<number>>;
}

const VarientContext = React.createContext<variantContextProps>({
  variantNumber: 0,
  setVariantNumber: () => {},
});

export default VarientContext;
