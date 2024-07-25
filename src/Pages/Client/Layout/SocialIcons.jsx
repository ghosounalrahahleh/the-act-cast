import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function SocialIcons() {
    const { i18n } = useTranslation();
    const [iconColorClass, setIconColorClass] = useState('text-light'); // Default class

    useEffect(() => {
        const isColorDark = (color) => {
            const rgb = color.replace(/[^\d,]/g, '').split(',');
            const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
            return brightness < 128;
        };

        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bgColor = window.getComputedStyle(entry.target).backgroundColor;
                        if (bgColor) {
                            if (isColorDark(bgColor)) {
                                setIconColorClass('text-[#ffffff]');
                            } else {
                                setIconColorClass('text-[#232220]');
                            }
                        } else {
                            console.error('Background color not found');
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <div className={`fixed bottom-0 flex flex-col justify-center items-center ${i18n.language === "en" ? "right-5" : "left-5"}`} >
            <div className="relative h-[100px] w-full">
                <p className={`transform rotate-90   text-md uppercase w-[430%] top-0 right-[-2.35rem] absolute text-center ${iconColorClass}`}>
                    @ The Act Hub
                </p>
            </div>
            <FaInstagram className={`text-2xl mb-5 ${iconColorClass}`} />
            <FaLinkedinIn className={`text-2xl mb-5 ${iconColorClass}`} />
            <FaTwitter className={`text-2xl mb-5 ${iconColorClass}`} />
            <FaYoutube className={`text-2xl mb-5 ${iconColorClass}`} />
        </div>
    );
}

export default SocialIcons;
