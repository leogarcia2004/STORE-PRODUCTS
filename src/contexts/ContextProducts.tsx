import { createContext } from "react";
import { useState, useContext } from 'react';

interface PropsCarrinho {
    children: React.ReactNode;
  }
interface ModalContextData {
    carrinhoOpen: boolean;
    setCarrinhoOpen: (open: boolean) => void;
}
  
  const ModalContext = createContext( {} as ModalContextData);
  
  const ContextProducts:React.FC<PropsCarrinho> = ({children}) => {
    
    const [carrinhoOpen, setCarrinhoOpen] = useState(false);
    
    return (
  
      <div>
        <ModalContext.Provider value={{carrinhoOpen, setCarrinhoOpen}}>
          {children}
        </ModalContext.Provider>
      </div>
    )
  }
  
  export function useProducts() {
    const data = useContext(ModalContext);
  
    if (!data) {
      throw new Error("Cannot use useAuth outside a ThemeProvider");
    }
  
    return data;
  }
  
  export default ContextProducts