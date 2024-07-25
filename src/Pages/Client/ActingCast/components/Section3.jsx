import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Section3() {
  const { t } = useTranslation("acting_cast")
  return (
    <div className='flex flex-col items-center side-spaces py-10'>
      <h1 className="text-2xl sm:text-4xl text-primary mb-12 sm:mb-24 text-center secondary-font ">
        {t("section3.title")}
      </h1>

      <SubSection index={1} />
      <SubSection index={2} />
      <SubSection index={3} />
      <SubSection index={4} />
    </div>
  )
}


export const SubSection = ({ index = 1 }) => {
  const { t,i18n } = useTranslation("acting_cast");
  const isOdd = index % 2 !== 0;
  const isEn = i18n.language === "en";

  return (
    <div className={`mb-10 xs:mb-[0] xs:mt-[-25px] flex w-full xs:h-[400px] flex-col ${isOdd ? "xs:flex-row md:pr-10" : "xs:flex-row-reverse md:pl-10"}`}>
      <div className={`w-full xs:w-6/12 lg:w-9/12 bg-positioning section3_${index} aspect-video	xs:aspect-auto	`} ></div>
      <div className={`w-full xs:w-6/12 lg:w-3/12 bg-[#ffffff80] flex flex-col items-center justify-center px-5 text-center sub_desc_shadow
        ${isOdd ? ( isEn ? "rounded-tr-[8px] rounded-br-[8px]" : "rounded-tl-[8px] rounded-bl-[8px]") 
        : isEn ? "rounded-tl-[8px] rounded-bl-[8px]" : "rounded-tr-[8px] rounded-br-[8px]"}`}>
        <h1 className="font-bold pb-10 capitalize text-xl mt-5 text-primary secondary-font">
          {t(`section3.sub_title_${index}`)}
        </h1>
        <p className="pb-10 tracking-[2px] capitalize text-secondary">
          {t(`section3.sub_desc_${index}`)}
        </p>
      </div>
    </div>
  )
}