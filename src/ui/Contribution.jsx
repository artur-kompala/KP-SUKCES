import React from "react"

const Contribution = (props) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Składki 
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Informacje o aktualnych składkach.
          </p>
        </div>
    <div className="grid max-w-2x1 grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
    <div className="bg-white shadow dark:bg-gray-100 m-4 rounded-lg p-6">
      <p>
      OD 1 PAŹDZIERNIKA 2024 OBOWIĄZUJĄ NOWE WYSOKOŚCI SKŁADEK <br />
      <br />
Składka jest płatna z góry do 10-go każdego miesiąca i wynosi:
<br />
- Grupa początkująca 170 zł, rodzeństwo 120 zł, każde kolejne dziecko 100 zł
<br />
- Grupa średniozaawansowana 200 zł, rodzeństwo 130 zł, każde kolejne dziecko 100 zł
<br />
- Grupa zaawansowana 200 zł, rodzeństwo 150 zł, każde kolejne dziecko 100 zł
<br />
Opłata postojowa w okresie wakacyjnym wynosi 100 zł
<br />
Opłata postojowa w przypadku choroby (powyżej 14 dni) będzie rozpatrywana indywidualnie.
<br />
W tytule prosimy wpisywać koniecznie "OPŁATA ZA ZAJĘCIA PŁYWACKIE, imię i nazwisko zawodnika."
<br />
W przypadku opłaty postojowej proszę w tytule wpłaty dopisać "postojowe".
<br />

Sugerujemy stworzenie zlecenia stałego relizowanego 10 dnia każdego miesiąca (lub w poprzedającym dniu roboczym).
<br />
Uprości to proces księgowania i zmniejszy prawdopodobienstwo błędów.
      </p>
    </div>
    </div>
    </div>
    </div>
  )
};

export default Contribution;
