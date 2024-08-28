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
}
  
  const ModalContext = createContext( {} as ModalContextData);
  
  const ContextProducts:React.FC<PropsCart> = ({children}) => {
    
    const [cartOpen, setCartOpen] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);

    const apiURL = 'https://api.escuelajs.co/api/v1/products';

    const fetchProducts = async () => {
        try {
        const response = await axios.get(apiURL);
        setProducts(response.data);
        console.log(products)
        } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        }
    };

    const pagination = () => {
        
    }

  


//   const createProduct = async (newProduct: Omit<IProduct, 'id'>) => {
//     try {
//       const response = await axios.post<IProduct>(apiURL, newProduct);
//       setProducts([...products, response.data]);
//     } catch (error) {
//       console.error('Erro ao criar o produto:', error);
//     }
//   };

//   const updateProduct = async (id: number, updatedProduct: Partial<IProduct>) => {
//     try {
//       const response = await axios.put<IProduct>(`${apiURL}/${id}`, updatedProduct);
//       setProducts(
//         products.map(product => 
//           product.id === id ? response.data : product
//         )
//       );
//     } catch (error) {
//       console.error('Erro ao atualizar o produto:', error);
//     }
//   };

//   const deleteProduct = async (id: number) => {
//     try {
//       await axios.delete(`${apiURL}/${id}`);
//       setProducts(products.filter(product => product.id !== id));
//     } catch (error) {
//       console.error('Erro ao deletar o produto:', error);
//     }
//   };

  useEffect(() => {
    fetchProducts(); 
  }, []);
  
    return (
  
      <div>
        <ModalContext.Provider value={{cartOpen, setCartOpen, products}}>
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