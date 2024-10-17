import React, { useEffect, useState } from "react";
import {
  Dialog,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Spinner from "./Spinner";
import TitleLayout from "./TitleLayout";

const Images = () => {

  const initialStateFilter = [
    { name: "city", options: [] },
    { name: "date", options: [] },
    { name: "descript", options: [] },
  ]
  const initialStateSelectedFilters = {
    city: "",
    date: "",
    descript: "",
  }

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(initialStateFilter);

  const [selectedFilters, setSelectedFilters] = useState(initialStateSelectedFilters);

  const [photos, setPhotos] = useState([]);
  const [reload,setReload] = useState(false)

  useEffect(() => {
    const fetchFiltersAndPhotos = async () => {
      console.log(selectedFilters.city);

      try {
        const filterResponse = await fetch(
          `http://kpsukces.pl/new/downloadFilters.php`
        );
        const filterText = await filterResponse.text();
        const parsedFilters = JSON.parse(filterText);
        setFilters(parsedFilters); // Ustaw filtry na podstawie odpowiedzi

        const photoResponse = await fetch(
          `http://kpsukces.pl/new/downloadImage.php/?city=${selectedFilters.city}&date=${selectedFilters.date}&descript=${selectedFilters.descript}`
        );
        
        const photoText = await photoResponse.text(); // Pobieramy jako tekst
        const parsedPhotos = JSON.parse(photoText); // Parsujemy ręcznie do JSON
        setPhotos(parsedPhotos); // Ustaw zdjęcia
      } catch (error) {
        console.error("Error fetching filters or photos:", error);
      }
    };

    fetchFiltersAndPhotos();
  }, [reload]);

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterName]: value,
    }));
  };
  

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    key={section.name}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6"></div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
        <TitleLayout title={"Galeria zdjęć"} desc={selectedFilters.descript}>
          <section aria-labelledby="Gallery-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Galeria
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
              
              <button type="button" onClick={()=>setReload((prevState) => !prevState)} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">Szukaj</button>
              <button type="button" onClick={()=>{
                setSelectedFilters(initialStateSelectedFilters)
                setFilters(initialStateFilter)
                setReload((prevState) => !prevState)
                }} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">Reset</button>
                {filters.map((section) => (
                  <Disclosure
                    key={section.name}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name === "city"
                            ? "Miasto"
                            : section.name === "date"
                            ? "Data"
                            : section.name === "descript"
                            ? "Opis"
                            : section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option} className="flex items-center w-full bg-gray-700 p-3 rounded-xl">
                            <input
                              type="radio"
                              id={`filter-${section.name}-${optionIdx}`}
                              name={section.name}
                              value={option}
                              checked={selectedFilters[section.name] === option}
                              onChange={() =>
                                handleFilterChange(section.name, option)
                              }
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              htmlFor={`filter-${section.name}-${optionIdx}`}
                              className="w-full py-1 ms-2 text-sm font-medium text-white"
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Gallery */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {photos.length > 0 ? (
                    photos.map((photo, idx) => (
                      <div
                        key={idx}
                        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200"
                      >
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    ))
                  ) : (
                    <Spinner></Spinner>
                  )}
                </div>
              </div>
            </div>
          </section>
        </TitleLayout>
      </div>
    </div>
  );
};

export default Images;
