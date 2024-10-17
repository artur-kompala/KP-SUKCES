import React from "react"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-800 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/news" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="logo.jpg" class="h-24 rounded-lg" alt="Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Klub Pływacki Sukces Chorzów</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="/news" class="hover:underline me-4 md:me-6">Aktualności</Link>
                </li>
                <li>
                    <Link to="/zdjecia" class="hover:underline me-4 md:me-6">Galeria</Link>
                </li>
                <li>
                    <Link to="/dopobrania" class="hover:underline me-4 md:me-6">Pliki do pobrania</Link>
                </li>
                <li>
                    <Link to="/treningi" class="hover:underline me-4 md:me-6">Treningi</Link>
                </li>
                <li>
                    <Link to="/zarzad" class="hover:underline">Kontakt</Link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/artur-kompala" class="hover:underline">artiziom™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
};

export default Footer;
