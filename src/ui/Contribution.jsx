import React, { useEffect, useState } from "react";
import { getContribution } from "../services/apiGallery";
import parse from 'html-react-parser';

const Contribution = () => {
  const [contribution, setContribution] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContribution();
        setContribution(data);
      } catch (error) {
        console.error("Error fetching contribution:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Składki</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Informacje o aktualnych składkach.</p>
        </div>
        <div className="grid max-w-2x1 grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <div className="bg-white shadow dark:bg-gray-100 m-4 rounded-lg p-6">
            {contribution.length > 0 ? (
              parse(contribution[0].desc)
            ) : (
              <p>Ładowanie danych...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
