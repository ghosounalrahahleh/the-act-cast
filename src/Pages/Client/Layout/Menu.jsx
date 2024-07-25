import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import { RiMenu3Line, RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import logo from "../../../assets/images/logo.png"

import menu1 from "../../../assets/images/home/menu1.jfif"
import menu2 from "../../../assets/images/home/menu2.jfif"
import menu3 from "../../../assets/images/home/menu3.jfif"
import menu4 from "../../../assets/images/home/menu4.jfif"
import menu5 from "../../../assets/images/home/menu5.jfif"
import { useClientGlobalContext } from '../Contexts/ClientGlobalContext';

const images = [
    menu1,
    menu2,
    menu3,
    menu4,
    menu5
]

export default function Menu() {
    const { t, i18n } = useTranslation("layout");
    const { contactUsRef } = useClientGlobalContext()
    const location = useLocation();
    const navigate = useNavigate();

    const menuTabs = [
        {
            title: t("menu.tab_1"),
            path: "/"
        },
        {
            title: t("menu.tab_2"),
            path: "/about-us"
        },
        {
            title: t("menu.tab_3"),
            path: "/our-work"
        },
        {
            title: t("menu.tab_4"),
            path: "/work-shop"
        },
        {
            title: t("menu.tab_5"),
            path: "/acting/hub"
        }, {
            title: t("menu.tab_6"),
            path: "/careers"
        }, {
            title: t("menu.tab_7"),
            path: "#contact-us"
        },
    ]

    const [visible, setVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const scrollToContactUs = () => {
        window.scrollTo({
            top: contactUsRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    const clickHandler = (path) => {
        setVisible(false)
    };

    useEffect(() => {
         const query = new URLSearchParams(location.search);
        if (query.get('section') === 'contact') {
            scrollToContactUs();
        }
    }, [location.search]);

    const handleContactUsClick = () => {
        if (location.pathname === '/') {
            scrollToContactUs();
        } else {
            navigate('/?section=contact');
        }
        setVisible(false)
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="card fixed z-[10001] w-full menu-bg flex justify-between items-center py-4 side-spaces">
            <Sidebar visible={visible} header={null} position="left" onHide={() => setVisible(false)} className="w-full menu-sidebar bg-primary flex pt-[100px]">
                <div className="w-[20%] sm:w-[10%] h-full relative flex items-center justify-center text-white">
                    <p className={`text-white absolute transform rotate-270 font-bold  text-center ${i18n.language === "en" ? "tracking-[5px] sm:tracking-[10px] " : ""}text-xl sm:text-3xl  w-[800%] md:w-[450%] lg:w-[350%]`}>
                        {t("menu.side_title_part_1")}
                    </p>
                </div>
                <div className="hidden sm:block  w-[50%] md:w-[40%] h-full relative ">
                    {images.map((slide, index) => (
                        <div
                            key={index}
                            className={`menu-slider rounded-[20px] mx-auto h-full ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            style={{ backgroundImage: `url(${slide})` }}
                        ></div>
                    ))}
                </div>
                <div className=" w-[80%] sm:w-[40%] md:w-[50%] flex flex-col justify-between my-10 px-3 sm:px-0 ">
                    {
                        menuTabs?.map((tab, index) => {
                            return (
                                tab.path === ("#contact-us") ?
                                    <p  key={index} className='text-xl md:text-3xl secondary-font hover:text-white' onClick={() => handleContactUsClick()}>{tab.title}</p>
                                    :
                                    <Link key={index} to={tab.path} onClick={() => clickHandler(tab.path)}>
                                        <p className='text-xl md:text-3xl secondary-font hover:text-white'>{tab.title}</p>
                                    </Link>
                            )
                        })
                    }
                </div>
            </Sidebar>

            <div className="xs:w-1/12">
                <Link to={"/"}>
                    <img src={logo} alt="The Act Cast" className='w-[70px] ' />
                </Link>
            </div>
            <div className="xs:w-6/12 flex justify-end items-center text-white">
                <div>
                    <span
                        onClick={() => changeLanguage('en')}
                        className={`px-2 cursor-pointer ${i18n.language === "en" ? "text-[#fff] border-e-[1px] border-[#355e48]" : "text-[#355e48]  border-s-[1px] "}`}>
                        EN
                    </span>
                    <span
                        className={`pl-2 cursor-pointer ${i18n.language === "ar" ? "text-[#fff] border-[#355e48]" : "text-[#355e48]"}`}
                        onClick={() => changeLanguage('ar')}
                    >AR
                    </span>
                </div>
                <Link to={"/sign-up"} onClick={() => setVisible(false)}>
                    <Button
                        className='white-bg-hover uppercase text-[14px] mx-5 py-1 px-2 border border-1 border-[#fff] rounded-[5px]'
                        label={t('menu.sign_up')}
                    />
                </Link>
                {
                    visible ?
                        <Button icon={<IoMdClose />
                        } className='text-[1.5rem] ' onClick={() => setVisible(false)} />
                        :
                        <Button className='text-[1.7rem] ' onClick={() => setVisible(true)}>
                            {i18n.language === "en" ? <RiMenu3Line /> : <RiMenu2Line />
                            }
                        </Button>
                }
            </div>
        </div>
    )
}

