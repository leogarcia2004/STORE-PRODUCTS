import { useState } from 'react';
import { productsProps } from '../type/typeProduct';
import { useProducts } from "../contexts/ContextProducts";
import ModalCRUDUpdate from './ModalCRUDUpdate';

const Products: React.FC<productsProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const itemsPerPage = 5;

  const {setSelectedProductId, deleteProduct, handleModalCRUD, modalCRUD} = useProducts();

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = products.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex >= products.length) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {
      modalCRUD ?
      
      <section className=" flex flex-col justify-center items-center md:px-20 py-16">
        <ModalCRUDUpdate />
        <h2 className="text-center mb-16 font-semibold">NEW ARRIVALS</h2>
        <div className="flex flex-col justify-center">
          <ul className="flex justify-center max-w-[1000px] flex-wrap gap-14">
            {visibleItems.map(product => (
              
                <li key={product.id} className="w-fit h-fit cursor-pointer shadow-md p-1.5 shadow-neutral-400">
                    <img className="w-60 h-3/4" src={product.category.image} alt={product.title} />
                    <div className="flex items-center mt-3 flex-col">
                      <p className="text-center w-48 overflow-y-auto md:text-base text-sm font-semibold">{product.title}</p>
                      <p className="text-center text-sm">$ {product.price}</p>
                    </div>
                    <div className='flex justify-center gap-3 mt-12 mb-1.5'>
                      <button onClick={() => deleteProduct(product.id)} className="text-white bg-black border-2 border-black w-fit py-1 px-4 font-semibold">
                        <i className="fas fa-trash"></i>
                      </button>
                      <button onClick={() => {setSelectedProductId(product.id); handleModalCRUD()}} className="text-white bg-black border-2 border-black w-fit py-1 px-4 font-semibold">
                        <i className='fas fa-sync'></i>
                      </button>
                    </div>
                </li>
            ))}
          </ul>
        </div>

        <button
          className="border-2 w-fit mt-12 border-black rounded-3xl py-2 px-8 font-semibold"
          onClick={nextPage}
        >
          View More
        </button>
      </section>
      
      :
        <section className="flex flex-col items-center md:px-20 py-16">
        <h2 className="text-center mb-16 font-semibold">NEW ARRIVALS</h2>
        <div className="flex flex-col justify-center">
          <ul className="flex justify-center max-w-[1000px] flex-wrap gap-14">
            {visibleItems.map(product => (
                <li key={product.id} className="w-fit h-96 cursor-pointer shadow-md p-1.5 shadow-neutral-400">
                    <img className="w-60 h-3/5" src={product.category.image} alt={product.title} />
                    <div className="flex items-center mt-3 flex-col">
                      <p className="text-center w-48 overflow-y-auto md:text-base text-sm font-semibold">{product.title}</p>
                      <p className="text-center text-sm">$ {product.price}</p>
                    </div>
                    <div className='flex justify-center gap-3 mt-2 mb-1.5'>
                      <button onClick={() => deleteProduct(product.id)} className="text-white bg-black border-2 border-black w-fit py-1 px-4 font-semibold">
                        <i className="fas fa-trash"></i>
                      </button>
                      <button onClick={() => {setSelectedProductId(product.id); handleModalCRUD()}} className="text-white bg-black border-2 border-black w-fit  py-1 px-4 font-semibold">
                        <i className='fas fa-sync'></i>
                      </button>
                    </div>
                </li>
            ))}
          </ul>
        </div>

        <button
          className="border-2 w-fit mt-12 border-black rounded-3xl py-2 px-8 font-semibold"
          onClick={nextPage}
        >
          View More
        </button>
      </section>
    }
    </>
    
    
  );
};

export default Products;