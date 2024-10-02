import React from "react"

const TitleLayout = ({children,title,desc}) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {desc}
          </p>
        </div>
        {children}
    </div>
    </div>
  )
};

export default TitleLayout;
