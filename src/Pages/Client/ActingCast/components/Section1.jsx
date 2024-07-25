import React from 'react'
import { useTranslation } from 'react-i18next'

function Section1() {
  const { t } = useTranslation("acting_cast")

  return (
    <div className='acting_cast_section1 w-full h-[60vh] relative '>
      <div className='flex flex-col justify-center items-center w-full h-full absolute bg-[black] bg-opacity-50'>
        <h1 className='text-2xl xs:text-3xl md:text-4xl text-white text-center px-3 secondary-font'>{t("section1.title")}</h1>
        <h1 className='text-lg xs:text-xl md:text-2xl font-bolder text-white my-10 text-center px-3'>{t("section1.description")}</h1>
      </div>
    </div>
  )
}

export default Section1