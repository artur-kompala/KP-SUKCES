import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { addNewPost } from "../services/apiAdmin";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [imgSrc, setImgSrc] = useState(null);

  function handleAddNewPost(e) {
    e.preventDefault();
    
    
    if (!title || !desc || !cat) return;
    
    addNewPost({ title, desc, imgSrc, cat });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImgSrc(file); 
    }
  }
  function handleReset(){
    setTitle("")
    setDesc("")
    setImgSrc("")
    setCat("")
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dodawanie posta
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            W tej sekcji możesz dodać posta
          </p>
        </div>
        <form onSubmit={handleAddNewPost}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tytuł posta
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="title"
                        name="title"
                        type="text"
                        autoComplete="title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Kategoria
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="cat"
                        name="cat"
                        type="text"
                        autoComplete="cat"
                        value={cat}
                        onChange={(e)=>setCat(e.target.value)}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="desc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Opis posta
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="desc"
                      name="desc"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      value={desc}
                      onChange={(e)=>setDesc(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Zdjęcie posta
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        aria-hidden="true"
                        className="mx-auto h-12 w-12 text-gray-300"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-gray-600"
                        >
                          <span>Dodaj plik</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange} 
                          />
                        </label>
                        <p className="pl-1">przeciągnij i upuść</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF do 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleReset}
            >
              Anuluj
            </button>
            <button
              type="submit"
              className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Zapisz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
