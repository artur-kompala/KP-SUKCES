import React, { useEffect, useState } from "react";
import TitleLayout from "./TitleLayout";
import { getAllFiles } from "../services/apiGallery";

const Download = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        getAllFiles().then((data) => setFiles(data));
    }, []);

    return (
        <TitleLayout title={"Pliki do pobrania"} desc={"Regulamin klubu Pływackiego SUKECS i inne pliki do pobrania."}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nazwa
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Format
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file) => (
                            <tr key={file.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {file.fileName}
                                </th>
                                <td className="px-6 py-4">
                                    {file.format}
                                </td>
                                <td className="px-6 py-4 text-right">
                                <a href={file.src} download className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Pobierz
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </TitleLayout>
    );
};

export default Download;
