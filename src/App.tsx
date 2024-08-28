import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"


function App() {

  return (
    <>
      <div>
          <Header />

          <section  className="bg-gray-800 text-white md:px-20 pb-16">
            <div className=" flex flex-col gap-8 items-center w-full bg-slate-500">
                <h1 className="text-2xl font-bold">New Clothing Collection</h1>
                <button className="border-2 border-black rounded-3xl py-2 px-8 font-semibold">Shop now</button>
            </div>
          </section>

          <Products />

          <section className="bg-gray-800 text-white flex flex-col gap-28  md:px-20 py-16">
              <div className="flex justify-center gap-8">
                <div>
                    <h1 className="font-bold text-center text-4xl">Our story</h1>
                </div>

                <div>
                  <h1 className="font-bold text-center text-4xl">Our Blog</h1>
                </div>
              </div>

              <div className="flex justify-center gap-8">
                  <div className="w-48 h-48 flex items-center justify-center bg-zinc-400">
                      <h2 className="font-semibold text-lg">Acessories</h2>
                  </div>

                  <div className="w-48 h-48 flex items-center justify-center bg-zinc-400">
                      <h2 className="font-semibold text-lg text-center">Shoes</h2>
                  </div>

                  <div className="w-48 h-48 flex items-center justify-center bg-zinc-400">
                      <h2 className="font-semibold text-lg text-center">Jackets</h2>
                  </div>
              </div>
          </section>

          <Products />

          <section className=" h-fit flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-20 pt-20 pb-28">
              <div className="flex flex-col items-center">
                <img src="" alt="Imagem" />
                <p className="font-semibold md:text-lg">Secured Payments</p>
              </div>

              <div className="flex flex-col items-center">
                <img src="" alt="Imagem" />
                <p className="font-semibold md:text-lg">Free shipping and returns</p>
              </div>

              <div className="flex flex-col items-center">
                <img src="" alt="Imagem" />
                <p className="font-semibold md:text-lg">24/7 Customer Service</p>
              </div>
          </section>

          <Footer />
      </div>
    </>
  )
}

export default App
