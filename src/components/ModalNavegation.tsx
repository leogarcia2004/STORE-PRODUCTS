
import { useProducts } from "../contexts/ContextProducts";

const ModalNavegation = () => {

    const {handleOpenNav, handleOpenModalCreate } = useProducts();
    
  return (
    <div className="fixed right-0 top-0 z-20 bg-zinc-800 text-white w-2/6 h-[230px] px-3 pt-1">
        <i onClick={handleOpenNav} className="fas fa-times cursor-pointer"></i>
        <ul className="flex flex-col gap-4 items-center justify-center">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Store</li>
            <li className="cursor-pointer">About</li>
            <li onClick={handleOpenModalCreate} className="cursor-pointer">Create</li>
            <li className="cursor-pointer">point of sale</li>
        </ul>
    </div>
  )
}

export default ModalNavegation