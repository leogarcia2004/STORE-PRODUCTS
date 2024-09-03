
import { useProducts } from "../contexts/ContextProducts";
import { useState, useEffect, FormEvent } from 'react';

const ModalCRUDUpdate = () => {

const { modalCRUD, handleModalCRUD, selectedProductId, updateProduct, products, windowSize } = useProducts();
const [title, setTitle] = useState<string>('');
const [price, setPrice] = useState<number>(0);
const [description, setDescription] = useState<string>('');
const [imageUrl, setImageUrl] = useState(''); 

  const selectedProduct = products.find(product => product.id === selectedProductId);

  useEffect(() => {
    if (selectedProduct) {
      setTitle(selectedProduct.title);
      setPrice(selectedProduct.price);
      setDescription(selectedProduct.description);
    }
  }, [selectedProduct]);

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    if (selectedProductId) {
      updateProduct(selectedProductId, {
        title: title,
        price: price,
        description: description,
        image: imageUrl,
      });
    }
  };

  return (
    <>
        {    
            modalCRUD ?
                <div className={`absolute z-50  ${windowSize.width <= 650 ? 'w-full' : 'w-4/12 '} h-fit  flex flex-col items-center bg-zinc-800 text-white rounded-lg`}>
                    <i onClick={handleModalCRUD} className="absolute top-4 left-4 fas fa-times cursor-pointer"></i>
                    <form className="flex flex-col mt-8 mb-5">
                        <div className="flex  flex-col gap-1">
                            <label htmlFor="">Title product:</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="border-2 text-black border-black w-fit rounded-3xl py-1 px-2 font-semibold" placeholder="Product title" />
                        </div>
                        <div className="flex flex-col gap-1 mt-4">
                            <label htmlFor="">Price product:</label>
                            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="border-2 text-black border-black w-fit rounded-3xl py-1 px-2 font-semibold" placeholder="Product Price" />
                        </div>
                        <div className="flex flex-col gap-1 mt-4">
                            <label htmlFor="">Description product:</label>
                            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="border-2 text-black border-black w-fit rounded-3xl py-1 px-2 font-semibold" placeholder="Product description" />
                        </div>
                        <div className="flex flex-col gap-1 mt-4">
                          <label htmlFor="imageUpload">URL image:</label>
                          <input type="text" value={imageUrl} className="border-2 text-black border-black w-fit rounded-3xl py-1 px-2 font-semibold" onChange={(e) => setImageUrl(e.target.value)} />
                        </div>
                        <div className="flex justify-center mt-6">
                            <button onClick={handleUpdate} className="text-black hover:text-white bg-white hover:bg-black border-2 border-black w-fit rounded-3xl py-1 px-4 font-semibold">Update Product</button>
                        </div>
                    </form>
                </div>
            : null            
        }
    </>
    
    
  )
}

export default ModalCRUDUpdate