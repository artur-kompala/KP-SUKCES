import React, { useEffect, useState } from "react";
import TitleLayout from "./TitleLayout";
import { getAllTrening } from "../services/apiGallery";

const Training = () => {
  const [trening, setTrening] = useState([]);

  useEffect(() => {
    getAllTrening().then((data) => setTrening(data));
  }, []);
  
  console.log(trening);
  
  // Filtrujemy treningi dla Granicznej i Powstańców
  const granicznaTreningi = trening.filter((t) => t.id >= 1 && t.id <= 5).sort((a, b) => a.id - b.id);;
  const powstancyTreningi = trening.filter((t) => t.id >= 6 && t.id <= 10).sort((a, b) => a.id - b.id);;

  const renderTreningRow = (day, junior, mid, senior) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {day}
      </th>
      <td className="px-6 py-4">{junior || '-'}</td>
      <td className="px-6 py-4">{mid || '-'}</td>
      <td className="px-6 py-4">{senior || '-'}</td>
    </tr>
  );

  return (
    <TitleLayout title={"Harmonogram Treningów"} desc={"Plan treningów Basen Hajduki ul. Graniczna 92"}>
      {/* Tabela dla Granicznej */}
      <div className="relative overflow-x-auto rounded-lg mb-10 shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Dzień</th>
              <th scope="col" className="px-6 py-3">Początkująca</th>
              <th scope="col" className="px-6 py-3">Średniozaawansowana</th>
              <th scope="col" className="px-6 py-3">Zaawansowana</th>
            </tr>
          </thead>
          <tbody>
            {granicznaTreningi.map((item) =>
              renderTreningRow(item.day, item.junior, item.mid, item.senior)
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-2 text-lg leading-8 text-gray-600">
        Plan treningów Basen Miejski, Chorzów Plac Powstańców Śląskich 1
      </p>

      {/* Tabela dla Powstańców */}
      <div className="relative overflow-x-auto rounded-lg mb-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Dzień</th>
              <th scope="col" className="px-6 py-3">Początkująca</th>
              <th scope="col" className="px-6 py-3">Średniozaawansowana</th>
              <th scope="col" className="px-6 py-3">Zaawansowana</th>
            </tr>
          </thead>
          <tbody>
            {powstancyTreningi.map((item) =>
              renderTreningRow(item.day, item.junior, item.mid, item.senior)
            )}
          </tbody>
        </table>
      </div>
    </TitleLayout>
  );
};

export default Training;
