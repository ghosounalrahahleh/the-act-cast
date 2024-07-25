import React from 'react'
import { useTranslation } from 'react-i18next'

import headerVideo from "../../../../assets/header-video.mp4"
export default function Header() {
    const { t, i18n } = useTranslation("home");

    return (
        <section className='flex w-full h-[100vh] section section-1 bg-[#000]' id='section-1'>
            <div className="relative w-3/12 sm:w-2/12 h-full bg-secondary flex items-center justify-center text-white ">
                <p className={`transform rotate-270 ${i18n.language === "en" ? "tracking-[6px]" : ""} text-lg sm:text-2xl lg:text-3xl w-[500%] xs:w-[350%] sm:w-[400%] md:w-[350%] lg:w-[260%] xl:w-[220%]  absolute text-center `}>
                    {t("header.title")}
                </p>
            </div>
            <div className="w-9/12 sm:w-10/12 h-full relative">
                <video className='w-full h-full object-cover' autoPlay={true} muted loop>
                    <source src={headerVideo} type="video/mp4" />
                </video>
                <div className="absolute h-[100vh] ml-auto w-full object-cover bg-[#3b403180]  top-0"></div>
            </div>
        </section>
    )
}

