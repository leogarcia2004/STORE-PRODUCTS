

function App() {

  return (
    <>
      <div>
      <header className="bg-gray-800 text-white flex flex-col justify-center md:justify-between gap-3 items-center md:flex-row flex-wrap md:px-20 py-12">
              <span className="text-3xl font-bold">Forniture</span>
              <div className="flex md:flex-row flex-wrap justify-center gap-10 items-center">
                <nav>
                  <ul className="flex md:gap-12 gap-8 font-medium md:text-base text-sm">
                    <li>Home</li>
                    <li>Store</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>point of sale</li>
                  </ul>
                </nav>
                <i className="fas fa-shopping-cart fa-lg cursor-pointer"></i>
              </div>
          </header>

          <section  className="bg-gray-800 text-white md:px-20 pb-16">
            <div className=" flex flex-col gap-8 items-center w-full bg-slate-500">
                <h1 className="text-2xl font-bold">New Clothing Collection</h1>
                <button className="border-2 border-black rounded-3xl py-2 px-8 font-semibold">Shop now</button>
            </div>
          </section>

          <section className=" flex flex-col items-center md:px-20 py-16">
              <h2 className="text-center mb-16 font-semibold">NEW ARRIVALS</h2>

              <div className="flex flex-col justify-center">
                <ul className="flex gap-14">
                  <li className="w-fit h-80 bg-red-800 p-1.5">
                    <div className="w-60 h-3/4 bg-red-200">oi</div>
                      <img  src="" alt="" />
                      <div className="flex mt-3 flex-col">
                        <span className="text-center font-semibold">product name</span>
                        <span className="text-center text-sm">$ 150,00</span>
                      </div>
                  </li>

                  <li className="w-fit h-80 bg-red-800 p-1.5">
                    <div className="w-60 h-3/4 bg-red-200">oi</div>
                      <img  src="" alt="" />
                      <div className="flex mt-3 flex-col">
                        <span className="text-center font-semibold">product name</span>
                        <span className="text-center text-sm">$ 150,00</span>
                      </div>
                  </li>

                  <li className="w-fit h-80 bg-red-800 p-1.5">
                    <div className="w-60 h-3/4 bg-red-200">oi</div>
                      <img  src="" alt="" />
                      <div className="flex mt-3 flex-col">
                        <span className="text-center font-semibold">product name</span>
                        <span className="text-center text-sm">$ 150,00</span>
                      </div>
                  </li>
                </ul>
              </div>

              <button className="border-2 w-fit mt-12 border-black rounded-3xl py-2 px-8 font-semibold">View More</button>
          </section>

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

          <section className="">
              <h2>NEW ARRIVALS</h2>
              <div>
                <ul>
                <li>
                      <img src="" alt="" />
                      <div>
                        <span>product name</span>
                        <span>$ 150,00</span>
                      </div>
                  </li>

                  <li>
                      <img src="" alt="" />
                      <div>
                        <span>product name</span>
                        <span>$ 150,00</span>
                      </div>
                  </li>

                  <li>
                      <img src="" alt="" />
                      <div>
                        <span>product name</span>
                        <span>$ 150,00</span>
                      </div>
                  </li>

                  <li>
                      <img src="" alt="" />
                      <div>
                        <span>product name</span>
                        <span>$ 150,00</span>
                      </div>
                  </li>

                  <li>
                      <img src="" alt="" />
                      <div>
                        <span>product name</span>
                        <span>$ 150,00</span>
                      </div>
                  </li>

                  <li>
                      <img src="" alt="" />
                      <div>
                        <span>product name</span>
                        <span>$ 150,00</span>
                      </div>
                  </li>
                </ul>
              </div>

              <button className="border-2 border-black rounded-3xl py-2 px-8 font-semibold">View More</button>
          </section>

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

          <footer className="flex flex-col md:flex-row items-center md:justify-evenly gap-6 py-16 bg-gray-800 text-white md:px-20">

            <ul className="flex gap-5 md:gap-0 md:flex-col">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Store</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Point of Sale</li>
            </ul>

            <div className="space-y-4 flex md:flex-col items-center md:items-start flex-row gap-2">
              <div>
                <p>
                  810, Bay Area, <br /> San Francisco, CA 94158
                </p>
              </div>
              <div>
                <p>
                  Email: <br /> info@NewBrand-shop.com
                </p>
                <p>Call: 1-100-000-0000</p>
              </div>
            </div>

            <div className="flex md:flex-col gap-12">
              <p>
                Shipping & Returns <br /> FAQ
              </p>
              <ul className="flex flex-col md:flex-row items-center gap-2">
                <li className="cursor-pointer">Twitter</li>
                <li className="cursor-pointer">Facebook</li>
                <li className="cursor-pointer">Instagram</li>
              </ul>
            </div>

            <form className="w-64 flex flex-col gap-3">
              <span>Receba todas as nossas novidades</span>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="p-1.5 w-full rounded bg-gray-700 border border-gray-600 text-white"
              />
              <button className="p-1 w-full bg-blue-600 rounded hover:bg-blue-500">
                Subscribe Now
              </button>
            </form>
          </footer>
      </div>
    </>
  )
}

export default App
