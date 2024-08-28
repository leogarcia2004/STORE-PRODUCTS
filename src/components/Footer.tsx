

import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer