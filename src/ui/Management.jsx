import React, { useEffect, useState } from "react"
import { getAllManagment, getAllRevision } from "../services/apiGallery";
import MangementList from "./ManegmentList";
import TitleLayout from "./TitleLayout";



const Management = () => {

  const [manegment, setManegment] = useState([]);
  const [revision, setRevision] = useState([]);

    useEffect(function(){
      getAllManagment().then((data)=>setManegment(data));
      getAllRevision().then((data)=>setRevision(data))
    },[])

    console.log(manegment);
  
  return (
    <TitleLayout title={"Zarząd klubu"} desc={"Informacje o członkach zarządu i komisji rewizyjnej."}>
      <div className="grid max-w-2x1 grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        <div className="bg-white shadow dark:bg-gray-800 m-4 rounded-lg p-6">
        <h1 className="text-xl text-center font-semibold leading-6 text-white dark:text-white">Zarząd Klubu Pływackiego SUKCES Chorzów</h1>
      <ul role="list" className="divide-y divide-gray-100">
      {manegment.map((person) => (
        <MangementList person={person}></MangementList>
      ))}
    </ul>
        </div>
        <div className="bg-white shadow dark:bg-gray-800 m-4 rounded-lg p-6">
        <h1 className="text-xl text-center font-semibold leading-6 text-white dark:text-white">Komisja Rewizyjna</h1>
    <ul role="list" className="divide-y divide-gray-100">
      {revision.map((person) => (
        <MangementList person={person}></MangementList>
      ))}
    </ul>
    </div>
    </div>
    </TitleLayout>
    
  )
};

export default Management;
