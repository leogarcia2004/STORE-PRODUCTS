



const Products = () => {
  return (
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
  )
}

export default Products