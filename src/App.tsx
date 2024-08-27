

function App() {

  return (
    <>
      <div>
          <header className="flex flex-col justify-center md:justify-between gap-3 items-center md:flex-row flex-wrap px-20 py-12">
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

          <section className="px-20">
            <div className=" flex flex-col items-center w-full bg-slate-500">
                <h1 className="text-2xl font-bold">New Clothing Collection</h1>
                <button className="border-1 border-black rounded-xl font-semibold">Shop now</button>
            </div>
          </section>

          <section>
              <h2>NEW ARRIVALS</h2>

              <div>
                <ul>
                  <li className="p-1.5">
                      <img src="" alt="" />
                      <div className="flex flex-col">
                        <span className="text-center font-semibold">product name</span>
                        <span className="text-center text-sm">$ 150,00</span>
                      </div>
                  </li>
                </ul>
              </div>

              <button className="border-1 font-semibold">View More</button>
          </section>

          <section>
              <div>
                <div>
                    <h1 className="font-bold text-4xl">Our story</h1>
                </div>

                <div>
                  <h1 className="font-bold text-4xl">Our Blog</h1>
                </div>
              </div>

              <div>
                  <div>
                      <h2>Acessories</h2>
                  </div>

                  <div>
                      <h2>Shoes</h2>
                  </div>

                  <div>
                      <h2>Jackets</h2>
                  </div>
              </div>
          </section>

          <section>
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

              <button>View More</button>
          </section>

          <section>
              <div>
                <img src="" alt="" />
                <p>Secured Payments</p>
              </div>

              <div>
                <img src="" alt="" />
                <p>Free shipping and returns</p>
              </div>

              <div>
                <img src="" alt="" />
                <p>24/7 Customer Service</p>
              </div>
          </section>

          <footer>
            <ul>
              <li>Home</li>
              <li>Store</li>
              <li>About</li>
              <li>Blog</li>
              <li>point of sale</li>
            </ul>

            <div>
              <div>
                <p>810, Bay Area, San Francisco, CA 94158</p>
              </div>

              <div>
                <p>Email: <br/> info@NewBrand-shop.com</p>
                <p>Call: 1-100-000-0000</p>
              </div>
            </div>

            <div>
              <p>Shipping & Returns FAQ</p>

              <div>
                <p>Twitter</p>
                <p>Facebook</p>
                <p>Instagram</p>
              </div>
            </div>

            <form>
              <label htmlFor="">Receice all our new and updates</label>
              <input type="email" name="" id="" />
              <button>Subscribe Now</button>
            </form>
          </footer>
      </div>
    </>
  )
}

export default App
