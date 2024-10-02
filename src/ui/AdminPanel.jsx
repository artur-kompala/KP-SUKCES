import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { addNewFile, addNewPeople, addNewPost } from "../services/apiAdmin";
import TitleLayout from "./TitleLayout";

const AdminPanel = () => {

  //Dodawanie Posta
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
  function handleReset() {
    setTitle("");
    setDesc("");
    setImgSrc("");
    setCat("");
  }

  //Dodawanie Osoby

  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("zawodnik");
  const [rankSrc, setRankSrc] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photoSrc, setPhotoSrc] = useState(null);

  function handleAddNewPeople(e) {
    e.preventDefault();

    if (!fullName || !role) return;

    addNewPeople({ fullName, role, rankSrc, phoneNumber, photoSrc });
  }
  function handleFilePeopleChange(e) {
    const file = e.target.files[0];
    if (file) {
      setPhotoSrc(file);
    }
  }
  function handleResetPeople() {
    setFullName("");
    setRankSrc("");
    setPhoneNumber("");
    setPhotoSrc("");
  }

  //Dodawanie Pliku
  const [fileName,setFileName] = useState("")
  const [file,setFile] = useState("")

  function handleAddNewFile(e){
    e.preventDefault();

    if (!file || !fileName) return;

    addNewFile({file,fileName})
  }
  function handleResetFile() {
    setFile("");
    setFileName("");
  }
  function handleFileFileChange(e){
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  }
  

  

  
  
  
  
  

  return (
    <div>
      <TitleLayout
        title={"Dodawanie posta"}
        desc={"W tej sekcji możesz dodać posta"}
      >
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
                        onChange={(e) => setTitle(e.target.value)}
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
                        onChange={(e) => setCat(e.target.value)}
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
                      onChange={(e) => setDesc(e.target.value)}
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
      </TitleLayout>

      <TitleLayout
        title={"Dodawanie osoby"}
        desc={"W tej sekcji możesz dodać nowe osoby"}
      >
        <form onSubmit={handleAddNewPeople}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Imię i nazwisko
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Rola w klubie
                  </label>
                  <div class="mt-2">
                    <select
                      id="role"
                      name="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      defaultValue={"zawodnik"}
                      autocomplete="role-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={"Zawodnik"}>Zawodnik</option>
                      <option value={"Trener"}>Trener</option>
                      <option value={"Stary-zawodnik"}>Stary zawodnik</option>
                      <option value={"Prezes Zarządu"}>Prezes Zarządu</option>
                      <option value={"Vce-Prezes Zarządu"}>
                        Vce-Prezes Zarządu
                      </option>
                      <option value={"Sekretarz Zarządu"}>
                        Sekretarz Zarządu
                      </option>
                      <option value={"Członek Zarządu"}>Członek Zarządu</option>
                      <option value={"Zastępca Komisji"}>
                        Zastępca Komisji
                      </option>
                      <option value={"Przewodniczący Komisji"}>
                        Przewodniczący Komisji
                      </option>
                      <option value={"Sekretarz Komisji"}>
                        Sekretarz Komisji
                      </option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Numer telefonu lub adres e-mail
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        autoComplete="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="rankSrc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Link do rankingu
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="rankSrc"
                        name="rankSrc"
                        type="text"
                        autoComplete="rankSrc"
                        value={rankSrc}
                        onChange={(e) => setRankSrc(e.target.value)}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
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
                          htmlFor="file-uploadv2"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-gray-600"
                        >
                          <span>Dodaj plik</span>
                          <input
                            id="file-uploadv2"
                            name="file-uploadv2"
                            type="file"
                            className="sr-only"
                            onChange={handleFilePeopleChange}
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
              onClick={handleResetPeople}
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
      </TitleLayout>
      <TitleLayout
        title={"Dodawanie plików"}
        desc={"W tej sekcji możesz dodać pliki do porbania."}
      >
        <form onSubmit={handleAddNewFile}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
              <div className="sm:col-span-4">
                <label
                  htmlFor="fileName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nazwa Pliku
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="fileName"
                      name="fileName"
                      type="text"
                      autoComplete="fileName"
                      value={fileName}
                      onChange={(e)=>setFileName(e.target.value)}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
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
                        htmlFor="file-uploadv3"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-gray-600"
                      >
                        <span>Dodaj plik</span>
                        <input
                          id="file-uploadv3"
                          name="file-uploadv3"
                          type="file"
                          className="sr-only"
                          onChange={handleFileFileChange} 
                        />
                      </label>
                      <p className="pl-1">przeciągnij i upuść</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      Wszystko do 50MB
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
            onClick={handleResetFile}
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
      </TitleLayout>
    </div>
  );
};

export default AdminPanel;
