import { createContext } from "react";
import { useState, useEffect, useContext } from 'react';
import { IProduct } from '../type/typeProduct';
import axios from 'axios';
interface PropsCart {
    children: React.ReactNode;
  }
interface ModalContextData {
    cartOpen: boolean;
    setCartOpen: (open: boolean) => void;
    products: IProduct[];
    fetchProducts: () => void;
    windowSize: {
      width: number
    }
    handleOpenNav: () => void;
    openNav: boolean;
}
  
  const ModalContext = createContext( {} as ModalContextData);
  
  const ContextProducts:React.FC<PropsCart> = ({children}) => {
    
    const [cartOpen, setCartOpen] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [openNav, setOpenNav] = useState(false);
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleOpenNav = () => {
      setOpenNav(!openNav);
    };

    const apiURL = 'https://api.escuelajs.co/api/v1/products';

    const fetchProducts = async () => {
        try {
        const response = await axios.get(apiURL)
        const data = await response.data;
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
        <ModalContext.Provider value={{cartOpen, setCartOpen, products, fetchProducts, windowSize, handleOpenNav, openNav}}>
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