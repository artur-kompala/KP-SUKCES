import { useState, useEffect } from 'react';
import { getAllPeople } from "../services/apiGallery"

  
  export default function Gallery({role}) {
    
    const [people, setPeople] = useState([]);

    useEffect(function(){
      getAllPeople(role).then((data)=>setPeople(data));
    },[])

    console.log(people);
    
    
    
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {people.map((p) => (
              <div key={p.id}  className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={p.fullName}
                    src={p.photoSrc || "public/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                {p.rankSrc ? <a className="mt-4 text-sm text-gray-700" href={p.rankSrc}>SwimRankings</a> : <p className="mt-4 text-sm text-gray-700">Brak rankingu</p>}
                <p className="mt-1 text-lg font-medium text-gray-900">{p.fullName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }