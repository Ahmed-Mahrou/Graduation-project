import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Import social icons from react-icons
import logo from "../assest/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white body-font border-t border-gray-700">
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={logo} alt="logo" className="w-30 h-20" />
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Shop local, Enjoy global quality.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Account
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-400 hover:text-white">Register</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Wishlist</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Settings</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Help
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-400 hover:text-white">Delivery</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Returns</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">
                  Track an order
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">
                  Contact us
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Feedback
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-400 hover:text-white">
                  Leave a feedback
                </Link>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap justify-center md:justify-start md:pl-20">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              FOLLOW US
            </h2>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link className="text-gray-400 hover:text-white">
                <FaTwitter />
              </Link>
              <Link className="ml-3 text-gray-400 hover:text-white">
                <FaFacebookF />
              </Link>
              <Link className="ml-3 text-gray-400 hover:text-white">
                <FaInstagram />
              </Link>
              <Link className="ml-3 text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 eCommerceSite — All Rights Reserved
            <Link className="text-gray-500 ml-1">@RICAeCommerceSite</Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link className="text-gray-400">Terms of Service</Link>
            <Link className="ml-4 text-gray-400">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
