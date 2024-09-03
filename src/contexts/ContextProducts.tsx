import { createContext, useState, useEffect, useContext } from "react";
import { IProduct } from '../type/typeProduct';
import axios from 'axios';

interface PropsCart {
  children: React.ReactNode;
}

interface ModalContextData {
  products: IProduct[];
  fetchProducts: () => void;
  windowSize: {
    width: number;
  };
  handleOpenNav: () => void;
  openNav: boolean;
  modalCRUD: boolean;
  handleModalCRUD: () => void;
  deleteProduct: (id: number) => void;
  updateProduct: (id: number, updatedProduct: Partial<IProduct>) => void;
  selectedProductId: number | null;
  setSelectedProductId: (id: number | null) => void;
  createProduct: (product: IProduct) => void;
  openModalCreate: boolean;
  handleOpenModalCreate: () => void;
}

const ModalContext = createContext({} as ModalContextData);

const ContextProducts: React.FC<PropsCart> = ({ children }) => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [openNav, setOpenNav] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const [modalCRUD, setModalCRUD] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleModalCRUD = () => {
    setModalCRUD(!modalCRUD);
  };

  const handleOpenModalCreate = () => {
    setOpenNav(false);
    setOpenModalCreate(!openModalCreate);
  }

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
      const response = await axios.get(apiURL);
      setProducts(response.data);
      console.log('Produtos:', response.data);
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
    }
  };

  const createProduct = async (product: IProduct) => {
    try {
      const response = await axios.post(apiURL, product);

      const newProduct = response.data;
      console.log('Novo produto:', newProduct);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await axios.delete(`${apiURL}/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Erro ao deletar o produto:', error);
    }
  };

  const updateProduct = async (id: number, updatedProduct: Partial<IProduct>) => {
    try {
      const response = await axios.put<IProduct>(`${apiURL}/${id}`, updatedProduct);
      setProducts(products.map(product => (product.id === id ? response.data : product)));
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ModalContext.Provider
      value={{
        products,
        fetchProducts,
        windowSize,
        handleOpenNav,
        openNav,
        modalCRUD,
        handleModalCRUD,
        deleteProduct,
        updateProduct,
        selectedProductId,
        setSelectedProductId,
        createProduct,
        openModalCreate,
        handleOpenModalCreate
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useProducts() {
  const data = useContext(ModalContext);

  if (!data) {
    throw new Error("Cannot use useProducts outside a ContextProducts provider");
  }

  return data;
}

export default ContextProducts;