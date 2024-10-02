import React from "react"

const people = [
    {
      name: 'Adam Chyliński',
      email: '514-279-446',
      role: 'Prezes Klubu',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Bartłomiej Czaja',
      email: '500-058-565',
      role: 'V-ce Prezes',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
        name: 'Patrycja Surma',
        email: 'zarzad@kpsukces.pl',
        role: 'Sekretarz',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Agnieszka Grymel',
        email: 'zarzad@kpsukces.pl',
        role: 'Członek Zarządu',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
]

const Management = (props) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Zarząd Klubu 
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Informacje o członkach zarządu i komisji rewizyjnej.
          </p>
        </div>
    <div className="grid max-w-2x1 grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        <div className="bg-white shadow dark:bg-gray-800 m-4 rounded-lg p-6">
        <h1 className="text-xl text-center font-semibold leading-6 text-white dark:text-white">Zarząd Klubu Pływackiego SUKCES Chorzów</h1>
      <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-start gap-x-6 py-5 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-500 dark:text-white">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">{person.role}</p>
          </div>
        </li>
      ))}
    </ul>
        </div>
        <div className="bg-white shadow dark:bg-gray-800 m-4 rounded-lg p-6">
        <h1 className="text-xl text-center font-semibold leading-6 text-white dark:text-white">Komisja Rewizyjna</h1>
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-start gap-x-6 py-5 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-white dark:text-white">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">{person.role}</p>
          </div>
        </li>
      ))}
    </ul>
        </div>
    
    </div>
    </div>
    </div>
  )
};

export default Management;
