import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  addNewFile,
  addNewPeople,
  addNewPost,
  editContribution,
  editGraniczna,
  uploadPhoto,
} from "../services/apiAdmin";
import TitleLayout from "./TitleLayout";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import toast from "react-hot-toast";

const AdminPanel = () => {
  //Dodawanie Posta
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [imgSrc, setImgSrc] = useState(null);

  function handleAddNewPost(e) {
    e.preventDefault();

    if (!title || !desc || !cat) return;

    addNewPost({ title, desc, imgSrc, cat }).then(()=>{
      toast.success('Sukces')
    }).catch((error)=>{
      
      toast.error(error.message)
    });
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
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState("");

  function handleAddNewFile(e) {
    e.preventDefault();

    if (!file || !fileName) return;

    addNewFile({ file, fileName });
  }
  function handleResetFile() {
    setFile("");
    setFileName("");
  }
  function handleFileFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  }

  //Opis Składek

  const [contribution, setContribution] = useState("");

  function handleEditContribution(e) {
    e.preventDefault();

    if (!contribution) return;

    editContribution({ contribution });
  }
  function handleResetContribution() {
    setContribution("");
  }
  
  //Graniczna
  const [garnicznaDay,setGranicznaDay] = useState(1)
  const [garnicznaJunior,setGranicznaJunior] = useState("")
  const [garnicznaMid,setGranicznaMid] = useState("")
  const [garnicznaSenior,setGranicznaSenior] = useState("")

  function handleEditGraniczna(e){

    e.preventDefault();

    if (!garnicznaDay) return;

    editGraniczna({garnicznaDay,garnicznaJunior,garnicznaMid,garnicznaSenior}).then(()=>{
      toast.success('Sukces')
    }).catch((error)=>{
      toast.error(error.message)
    });


  }
  function handleResetGraniczna(){
    setGranicznaJunior("")
    setGranicznaMid("")
    setGranicznaSenior("")
    setGranicznaDay("Poniedziałek")

  }
  //GALERIA
  const [city,setCity] = useState("")
  const [descPhotos,setDescPhotos] = useState("")
  const [photos,setPhotos] = useState([])

  function handlePhotosChange(e) {
    const selectedFiles = Array.from(e.target.files);  
    if (selectedFiles.length > 0) {
      setPhotos((prevPhotos) => [...prevPhotos, ...selectedFiles]); 
    }
  }


  function handleUploadPhoto(e){
    e.preventDefault();
    const toastId = toast.loading('Trwa wysyłanie ...');
    uploadPhoto({city, desc: descPhotos, photos}).then(()=>{
      toast.dismiss(toastId);
      toast.success('Sukces')
    }).catch((error)=>{
      toast.dismiss(toastId);
      toast.error(error.message)
    });
  }
  function handleResetPhotos(){
    
    setCity("")
    setDescPhotos([])
    setPhotos("")
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
                        onChange={(e) => setFileName(e.target.value)}
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
      <TitleLayout
        title={"Aktualizacja opisu składek"}
        desc={"Ten formularz przystosowany jest do edycji z pomocą tagów HTML."}
      >
        <form onSubmit={handleEditContribution}>
          <div className="col-span-full">
            <div className="mt-2">
              <EditorProvider>
                <Editor
                  value={contribution}
                  onChange={(e) => setContribution(e.target.value)}
                >
                  <Toolbar>
                    <BtnUndo />
                    <BtnRedo />
                    <Separator />
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    <BtnStrikeThrough />
                    <Separator />
                    <BtnNumberedList />
                    <BtnBulletList />
                    <Separator />
                    <BtnLink />
                    <BtnClearFormatting />
                    <HtmlButton />
                    <Separator />
                    <BtnStyles />
                  </Toolbar>
                </Editor>
              </EditorProvider>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleResetContribution}
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
        title={"Aktualizacja Harmonogramu Graniczna"}
        desc={
          "Piew wybierz dzień a następnie wpisz godziny lub ich brak - danego dnia."
        }
      >
        <form onSubmit={handleEditGraniczna}>
        <div className="mt-10 flex gap-x-6">
          <div className="sm:w-1/4">
            <label
              htmlFor="granicznaDay"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Dzień
            </label>
            <select
              id="granicznaDay"
              name="granicznaDay"
              value={garnicznaDay}
              onChange={(e) => setGranicznaDay(e.target.value)}
              defaultValue={"Poniedziałek"}
              autoComplete="granicznaDay"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value={1}>Poniedziałek Graniczna</option>
              <option value={2}>Wtorek Graniczna</option>
              <option value={3}>Środa Graniczna</option>
              <option value={4}>Czwartek Graniczna </option>
              <option value={5}>Piątek Graniczna</option>
              <option value={6}>Poniedziałek Powstańców</option>
              <option value={7}>Wtorek Powstańców</option>
              <option value={8}>Środa Powstańców</option>
              <option value={9}>Czwartek Powstańców</option>
              <option value={10}>Piątek Powstańców</option>
            </select>
          </div>
          <div className="sm:w-1/4">
            <label
              htmlFor="granicznaJunior"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Początkująca
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="granicznaJunior"
                  name="granicznaJunior"
                  type="text"
                  autoComplete="granicznaJunior"
                  value={garnicznaJunior}
                  onChange={(e) => setGranicznaJunior(e.target.value)}
                  className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="sm:w-1/4">
            <label
              htmlFor="granicznaMid"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Średniozawansowana
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="granicznaMid"
                  name="granicznaMid"
                  type="text"
                  autoComplete="granicznaMid"
                  value={garnicznaMid}
                  onChange={(e) => setGranicznaMid(e.target.value)}
                  className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="sm:w-1/4">
            <label
              htmlFor="granicznaSenior"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Zawansowana
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="granicznaSenior"
                  name="granicznaSenior"
                  type="text"
                  autoComplete="granicznaSernior"
                  value={garnicznaSenior}
                  onChange={(e) => setGranicznaSenior(e.target.value)}
                  className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleResetGraniczna}
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
        title={"Dodawanie zdjęć do galerii"}
        desc={"W tej sekcji możesz dodać wiele zdjęć do galerii."}
      >
        <form onSubmit={handleUploadPhoto}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Miasto
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
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
                    Opis wydarzenia
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="descPhotos"
                        name="descPhotos"
                        type="text"
                        autoComplete="descPhotos"
                        value={descPhotos}
                        onChange={(e) => setDescPhotos(e.target.value)}
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
                          htmlFor="photos-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-gray-600"
                        >
                          <span>Dodaj plik</span>
                          <input
                            id="photos-upload"
                            name="photos-upload"
                            type="file"
                            className="sr-only"
                            multiple
                            onChange={handlePhotosChange}
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
              onClick={handleResetPhotos}
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
