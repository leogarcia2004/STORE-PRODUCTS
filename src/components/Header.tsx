

const Header = () => {
  return (
    <header className="bg-gray-800 text-white flex flex-col justify-center md:justify-between gap-3 items-center md:flex-row flex-wrap md:px-20 py-12">
        <span className="text-3xl font-bold">Forniture</span>
        <div className="flex md:flex-row flex-wrap justify-center gap-10 items-center">
            <nav>
                <ul className="flex md:gap-12 gap-8 font-medium md:text-base text-sm">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Store</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">point of sale</li>
                </ul>
            </nav>
            <i className="fas fa-shopping-cart fa-lg cursor-pointer"></i>
        </div>
    </header>
  )
}

export default Header