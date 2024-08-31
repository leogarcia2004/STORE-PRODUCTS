


const Footer = () => {
  return (
    <footer className="bg-zinc-800 flex flex-col md:flex-row md:items-center md:justify-evenly gap-6 py-16 text-white px-8 md:px-20">

        <ul className="order-1 flex gap-5 md:gap-0 flex-col">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Store</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Point of Sale</li>
         </ul>

        <div className="order-3 md:order-2 flex flex-col md:items-start gap-4 md:gap-14">
            <div >
                <p className="md:w-40">
                  810, Bay Area, San Francisco, CA 94158
                </p>
            </div>
            <div>
                <p className="md:max-w-[300px]">
                  Email: info@NewBrand-shop.com
                </p>
                <p>Call: 1-100-000-0000</p>
            </div>
        </div>

        <div className="order-2 md:order-3 flex md:flex-col justify-between gap-12">
            <p>
                Shipping & Returns <br /> FAQ
            </p>
            <ul className="flex flex-col md:flex-row items-center gap-2">
                <li className="cursor-pointer">Twitter</li>
                <li className="cursor-pointer">Facebook</li>
                <li className="cursor-pointer">Instagram</li>
            </ul>
        </div>

        <form className="order-5 w-64 flex flex-col gap-3">
            <span>Receba todas as nossas novidades</span>
            <input
                type="email"
                id="email"
                placeholder="Email address"
                className="p-1.5 w-full rounded bg-zinc-700 border border-gray-600 text-white"
            />
            <button className="p-1 w-full bg-zinc-600 rounded hover:bg-zinc-500">
                Subscribe Now
            </button>
        </form>
    </footer>
  )
}

export default Footer