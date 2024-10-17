'use client'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, AcademicCapIcon , UsersIcon , ArrowLeftStartOnRectangleIcon, DocumentArrowDownIcon, CurrencyDollarIcon, BookOpenIcon  } from '@heroicons/react/20/solid'


const products = [
  { name: 'Trenerzy', description: 'Nasz zepsół trenerski', href: 'trener', icon: AcademicCapIcon  },
  { name: 'Zawodnicy', description: 'Wszyscy obecni reprezentanci klub', href: 'zawodnik', icon: UsersIcon },
  { name: 'Byli zawodnicy', description: 'Byli reprezentanci klub', href: 'starzy', icon: ArrowLeftStartOnRectangleIcon },
]
const info = [
  { name: 'Treningi', description: 'Harmonogram Treningów', href: 'treningi', icon: AcademicCapIcon  },
  { name: 'Zarząd', description: 'Zarząd Klubu Pływackiego i Komisja Rewizyjna', href: 'zarzad', icon: UsersIcon },
  { name: 'Pliki do pobrania', description: 'Statut Klubu Pływackiego SUKCES Chorzów i dokumenty do pobrania', href: 'dopobrania', icon: DocumentArrowDownIcon  },
  { name: 'Składka', description: 'Wysokość składek', href: 'skladka', icon: CurrencyDollarIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <span className="sr-only">KP SUKCES</span>
          <img alt="" src="logo.jpg" onClick={() => navigate('/news')} className="h-28  rounded-lg w-auto" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Otwórz menu główne</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="/news" className="text-lg font-semibold leading-6 text-gray-900">
            Aktualności
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
              Kadra
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition">
              <div className="p-4">
                {products.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
              Informacje
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition">
              <div className="p-4">
                {info.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link to="/zdjecia" className="text-lg font-semibold leading-6 text-gray-900">
            Galeria
          </Link>
          <Link to="sklep" className="text-lg font-semibold leading-6 text-gray-900">
            Sklep
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/admin" className="text-sm font-semibold leading-6 text-gray-900">
            Zaloguj <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">KP SUKCES</span>
              <img alt="" src="logo.jpg" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Zamknij menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Kadra
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Aktualności
                </Link>
                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Informacje
                </Link>
                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Galeria
                </Link>
              </div>
              <div className="py-6">
                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
