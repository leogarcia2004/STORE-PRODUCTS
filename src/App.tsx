
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import clothes from "./assets/clothes.jpg";
import { useProducts } from "./contexts/ContextProducts";
import { useState } from "react";
import ModalCRUDCreat from "./components/ModalCRUDCreat";

function App() {
  const { products, windowSize} = useProducts();

  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      title: 'Acessories',
      image: 'https://placeimg.com/640/480/any',
    },
    {
      title: 'Shoes',
      image: '',
    },
    {
      title: 'Jackets',
      image: '',
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div>
        <Header />   
        <ModalCRUDCreat />
        <section className="bg-zinc-800 flex justify-center  text-white md:px-20 pb-16">
          <div className="relative flex flex-col justify-center gap-8 items-center w-11/12 md:w-full  md:h-96 ">
            <img className=" w-full h-full object-cover backdrop-blur-3xl" src={clothes} alt="" />
            <div className="absolute flex flex-col items-center gap-8">
              <h1 className="text-xl md:text-4xl text-center text-black font-bold">New Clothing Collection</h1>
              <button className="border-2 border-black bg-white text-black rounded-3xl py-2 px-8 font-semibold">Shop now</button>
            </div>
          </div>
        </section>
       
        <Products products={sortedProducts} />


        <section className="bg-zinc-800 text-white flex flex-col gap-28 md:px-20 py-16">
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
            <div className="md:w-96 md:h-96  w-72 h-72 flex justify-center items-center cursor-pointer bg-zinc-500">
              <h1 className="font-bold text-center text-4xl">Our story</h1>
            </div>

            <div className="md:w-96 md:h-96 w-72 h-72 flex justify-center items-center cursor-pointer bg-zinc-500">
              <h1 className="font-bold text-center text-4xl">Our Blog</h1>
            </div>
          </div>

          {windowSize.width <= 650 ? (
          <div className="flex items-center justify-center gap-5">
            <i className="fas fa-chevron-left cursor-pointer" onClick={handlePrev}></i>
              <div className=" reltive w-56 h-56 flex items-center justify-center bg-zinc-400">
                <h2 className="font-semibold text-lg">{items[currentIndex].title}</h2>
              </div>
            <i className="fas fa-chevron-right cursor-pointer" onClick={handleNext}></i>
          </div>
          ) : (
          <div className="flex w-full justify-center gap-8">
            {items.map((item, index) => (
              <div key={index} className=" w-60 h-60 flex items-center justify-center cursor-pointer bg-zinc-400">
                <h2 className="font-semibold text-lg">{item.title}</h2>
              </div>
            ))}
          </div>
        )}
        </section>

        <Products products={sortedProducts} />

        <section className="h-fit flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-20 pt-20 pb-28">
          <div className="flex flex-col items-center">
          <i className=" p-4 rounded-full bg-zinc-500 fas fa-credit-card mb-1"></i>
            <p className="font-semibold text-center md:text-lg">Secured Payments</p>
          </div>

          <div className="flex flex-col items-center">
          <i className="p-4 rounded-full bg-zinc-500 fas fa-truck mb-1"></i>
            <p className="font-semibold text-center md:text-lg">Free shipping and returns</p>
          </div>

          <div className="flex flex-col items-center">
          <i className="p-4 rounded-full bg-zinc-500 fas fa-user mb-1"></i>
            <p className="font-semibold text-center md:text-lg">24/7 Customer Service</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
