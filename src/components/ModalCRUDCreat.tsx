

import { useProducts } from "../contexts/ContextProducts";
import { FormEvent, useState} from 'react';
import { UserProduct } from "../type/typeProductUse";
import { validate } from '../utils/validate';

const ModalCRUDCreat = () => {

const { openModalCreate, handleOpenModalCreate, createProduct, windowSize} = useProducts();
const [title, setTitle] = useState<string>('');
const [price, setPrice] = useState<number>(0);
const [description, setDescription] = useState<string>('');
const [imageUrl, setImageUrl] = useState(''); 
const [errors, setErrors] = useState<UserProduct | null>(null) 

    const isValidImageUrl = (url: string) => {
        return /\.(jpg|jpeg|png|gif)$/i.test(url);
    };

    const handleCreate = (e: FormEvent) => {
        e.preventDefault();

        const newProduct = {
            title: title,
            price: price,
            description: description,
            image: imageUrl,
          };

        const data: UserProduct = { title, price, description, image: imageUrl } 

        const imageUrlError = isValidImageUrl(imageUrl) ? '' : 'Invalid image URL format.';

        const validadeErros = validate(data);

        const finalErrors = { ...validadeErros, image: imageUrlError };

        if (Object.keys(finalErrors).length > 0) {
            setErrors(finalErrors);
            return;
          }
      
        createProduct(newProduct);

        setTitle('');
        setPrice(0);
        setDescription('');
        setImageUrl('');
    }

  return (
    <>
        {    
        openModalCreate  ?
                    <div className={` fixed z-50 ${windowSize.width <= 650 ? 'w-full' : 'w-4/12'}  h-fit flex flex-col items-center bg-zinc-800 text-white rounded-lg`}>
                        <i onClick={handleOpenModalCreate} className="absolute top-4 left-4 fas fa-times cursor-pointer"></i>
                        <form className="flex flex-col mt-10 mb-5 ">
                            <div className="flex  flex-col gap-1">
                                <label htmlFor="">Title product:</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="border-2 text-black border-black w-fit rounded-3xl py-1 px-2 font-semibold" placeholder="Product title" />
                                {errors?.title && (
                                    <small className="text-xs text-red-500 mt-1">{errors?.title}</small>
                                )}
                            </div>
                            <div className="flex flex-col gap-1 mt-4">
                                <label htmlFor="">Price product:</label>
                                <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="border-2 text-black border-black w-fit rounded-3xl py-1 px-2 font-semibold" placeholder="Product Price" />
                                {errors?.price && (
                                    <small className="text-xs text-red-500 mt-1">{errors?.price}</small>
                                )}
                            </div>
                            <div className="flex flex-col gap-1 mt-4">
                                <label htmlFor="">Description product:</label>
                                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="border-2 text-black border-black w-fit rounded-3xl py-1 px-2 font-semibold" placeholder="Product description" />
                                {errors?.description && (
                                    <small className="text-xs text-red-500 mt-1">{errors?.description}</small>
                                )}
                            </div>
                            <div className="flex flex-col gap-1 mt-4">
                              <label htmlFor="imageUpload">Upload an image:</label>
                              <input className="border-2 text-black border-black w-fit rounded-3xl py-1 px-2 font-semibold" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                                {errors?.image && (
                                    <small className="text-xs text-red-500 mt-1">{errors?.image}</small>
                                )}
                            </div>
                            <div className="flex justify-center mt-6">
                                <button onClick={handleCreate} className="text-black hover:text-white bg-white hover:bg-black border-2 border-black w-fit rounded-3xl py-1 px-4 font-semibold">Update Product</button>
                            </div>
                        </form>
                    </div>
            : null            
        }
    </>
        
        
      
  )
}

export default ModalCRUDCreat