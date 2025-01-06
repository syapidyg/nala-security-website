import React from "react";
import Logo from "../../../assets/NALAConsulting.png";

function Footer() {
  return (
    <footer className="bg-secondary rounded-lg  dark:bg-gray-900 font-primaryRegular px-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-14" alt="Nala Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              NALA SECURITY CONSULTING
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-primary-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className=" sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-black sm:text-center dark:text-black">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              NALA SECURITY CONSULTING™
            </a>
            . All Rights Reserved.
          </span>
          <div className="  flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-black hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="#"
              className="text-black hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-2v-8.5h2v8.5zm-1-9.77c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm13.5 9.77h-2v-4.24c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.24v4.31h-2v-8.5h1.92v1.16h.03c.27-.5.94-1.03 1.94-1.03 2.07 0 2.45 1.36 2.45 3.12v5.26z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
