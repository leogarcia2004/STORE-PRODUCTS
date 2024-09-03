
import { useProducts } from "../contexts/ContextProducts";
import ModalNavegation from "../components/ModalNavegation";

const Header = () => {

  const { windowSize, openNav, handleOpenNav, handleOpenModalCreate } = useProducts();

  return (
    <>

      {
        windowSize.width <= 650 ?
          <div>
            <header className="bg-zinc-800 text-white flex justify-between py-4 px-5">
              <span className="text-3xl font-bold">Forniture</span>
              <div className="flex items-center gap-4">
                <i className="fas fa-shopping-cart fa-lg cursor-pointer"></i>
                <i onClick={handleOpenNav} className="fas fa-bars cursor-pointer"></i>
              </div>
            </header>
            {
              openNav ?
                <ModalNavegation />
              :
                null
            }
          </div>
        :
          <header className="bg-zinc-800 text-white flex flex-col justify-center md:justify-between gap-3 items-center md:flex-row flex-wrap md:px-20 px-3 py-12">
            <span className="text-3xl font-bold">Store Brazilian</span>
            <div className="flex md:flex-row flex-wrap justify-center gap-10 items-center">
                <nav>
                    <ul className="flex md:gap-12 gap-8 font-medium md:text-base text-sm">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Store</li>
                        <li className="cursor-pointer">About</li>
                        <li onClick={handleOpenModalCreate} className="cursor-pointer">Create</li>
                        <li className="cursor-pointer">point of sale</li>
                    </ul>
                </nav>
                <i className="fas fa-shopping-cart fa-lg cursor-pointer"></i>
            </div>
          </header>
      }
      
    </>
    
  )
}

export default Header