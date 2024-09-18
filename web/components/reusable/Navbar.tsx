
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const openMenu = setIsMenuOpen(true);
  // const closeMenu = setIsMenuOpen(false);
  return (
    <div className="w-screen h-[4rem] backdrop-blur-xl bg-transparent fixed border-b border-indigo-300/10 flex items-center justify-center px-5 lg:px-[6rem]">
      <div className="w-full flex items-center justify-between space-x-20">
        <div className="">
          <span className="font-medium">PixelCraft Labs</span>
        </div>
        <div className="hidden text-sm lg:flex items-center justify-center space-x-10 w-fit ">
          <Link href="/" className="hover:text-indigo-600 transition-all">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-all">
            About
          </Link>
          <Link
            href="/products"
            className="hover:text-indigo-600 transition-all"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="hover:text-indigo-600 transition-all"
          >
            Contact us
          </Link>
        </div>
        <div className=" hidden lg:flex items-center justify-center space-x-10">
          <Link href="/login" className="hover:text-indigo-600 transition-all">
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-indigo-600 px-6 py-2 rounded-lg hover:text-indigo-600 transition-all"
          >
            Get Started
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
