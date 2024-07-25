import React from 'react'
import { useTranslation } from 'react-i18next'

function Section2() {
  const { t, i18n } = useTranslation("acting_cast")

  return (
    <div className='flex flex-col items-center side-spaces py-10 bg-[#232220]'>
      <h1 className="text-4xl mb-10 text-white secondary-font ">{t("section2.title")}</h1>
      <div className='rounded-[10px] flex flex-col sm:flex-row'>
        <div className= {`sm:w-5/12 ${i18n.language === "en" ? "sm:rounded-tl-[10px] sm:rounded-bl-[10px]" : "sm:rounded-tr-[10px] sm:rounded-br-[10px]"}  acting_cast_section2 aspect-video sm:aspect-auto`} >
         </div>
        <div className= {`sm:w-7/12 d-flex flex-col items-center bg-[#8c8f8a] py-10 lg:py-24 ${i18n.language === "en" ? "sm:rounded-tr-[10px] sm:rounded-br-[10px]" : "sm:rounded-tl-[10px] sm:rounded-bl-[10px]"}`}  >
          <p className='text-center  w-11/12 xl:w-9/12 mx-auto font-[700] sm:text-lg md:text-xl capitalize xl:tracking-[2px] leading-7 xl:leading-9'>{t("section2.description")}</p>
        </div>
      </div>
    </div>
  )
}

export default Section2