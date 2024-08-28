
// import { productsProps } from '../type/typeProduct'

const Products:React.FC = () => {



  return (
    <section className=" flex flex-col items-center md:px-20 py-16">
              <h2 className="text-center mb-16 font-semibold">NEW ARRIVALS</h2>

              <div className="flex flex-col justify-center">
                <ul className="flex gap-14">

                  {/* {
                    products.map((product) => (

                      <li className="w-fit shadow-xl shadow-slate-400 h-80 p-1.5">
                        <img className="w-60 h-3/4 "  src={product.category.image} alt="" />
                        <div className="flex mt-3 flex-col">
                          <span className="text-center font-semibold">{product.category.name}</span>
                          <span className="text-center text-sm">{product.price}</span>
                        </div>
                    </li>
                    ))
                  }     */}

                </ul>
              </div>

              <button className="border-2 w-fit mt-12 border-black rounded-3xl py-2 px-8 font-semibold">View More</button>
          </section>
  )
}

export default Products