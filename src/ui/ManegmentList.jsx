import React from "react"

const MangementList = ({person}) => {
  return (
    <li key={person.id} className="flex justify-start gap-x-6 py-5 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.photoSrc} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-500 dark:text-white">{person.fullName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">{person.phoneNumber}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">{person.role}</p>
          </div>
    </li>
  )
};

export default MangementList;
