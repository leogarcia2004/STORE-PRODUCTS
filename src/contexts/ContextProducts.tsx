import { createContext } from "react";
import { useState, useEffect, useContext } from 'react';
import { IProduct } from '../type/typeProduct';
interface PropsCart {
    children: React.ReactNode;
  }
interface ModalContextData {
    cartOpen: boolean;
    setCartOpen: (open: boolean) => void;
    products: IProduct[];
    fetchProducts: () => void;
}
  
  const ModalContext = createContext( {} as ModalContextData);
  
  const ContextProducts:React.FC<PropsCart> = ({children}) => {
    
    const [cartOpen, setCartOpen] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);

    const apiURL = 'https://api.escuelajs.co/api/v1/products';

    const fetchProducts = async () => {
        try {
        const response = await fetch(apiURL)
        const data = await response.json()
        setProducts(data);
        console.log(products)
        } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        }
    };

  useEffect(() => {
    fetchProducts();
  }, []);
  
    return (
  
      <div>
        <ModalContext.Provider value={{cartOpen, setCartOpen, products, fetchProducts}}>
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