import { Button } from 'primereact/button';
import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

export default function Section1() {
    const { t, i18n } = useTranslation();
    const fadeInRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fadeInRef.current.classList.add('active');
                    observer.unobserve(fadeInRef.current); // Stop observing after the animation has triggered
                }
            });
        });

        observer.observe(fadeInRef.current);

        // Cleanup the observer on component unmount
        return () => observer.disconnect();
    }, []);

    return (
        <section className='relative flex w-full h-[100vh] home-section-2 bg-positioning section section-2 bg-[#000]' id='section-2' >
            <div className='w-[100%] xs:w-[75%] md:w-[50%] h-[100vh] absolute flex bg-primary ms-auto text-white fade-in-right'>
                <div className="w-3/12 sm:w-2/12 h-full relative flex items-center justify-center ">
                    <p className={`text-secondary transform rotate-270 absolute text-center ${i18n.language === "en" ? " tracking-[10px] lg:tracking-[20px]" : ""} text-4xl lg:text-4xl w-[600%] xs:w-[700%] xl:w-[500%] `} >
                        {t("behind_our_scenes.side_title")}
                    </p>
                </div>
                <div ref={fadeInRef} className="fade-in-right-text w-9/12 sm:w-10/12 pe-2 xs:p-5 flex flex-col justify-center ">
                    <h1 className="text-xl sm:text-2xl lg:text-4xl secondary-font font-normal">
                        {t("behind_our_scenes.title")}
                    </h1>
                    <p className=' font-secondary my-12 text-xl lg:text-2xl md:pe-10 leading-10 font-normal'>
                        {t("behind_our_scenes.description")}
                    </p>

                    <Link to={"/about-us"}>
                        <Button
                            className='white-bg-hover uppercase font-medium text-xl md:text-2xl py-2 px-5 xs:px-10 border border-1 border-[#fff] rounded-[5px]'
                            label={t('behind_our_scenes.btn')}
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}
