import React from 'react'
import { useTranslation } from 'react-i18next';

import logo from "../../../assets/images/logo.png"
import { FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  const { t, i18n } = useTranslation("layout");

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <footer className='flex flex-col xs:flex-row items-start bg-primary px-3 md:px-10 py-10 text-white'>
      <div className='w-full xs:w-3/12 md:w-4/12 flex xs:flex-col xs:justify-center items-center xs:items-start md:pl-5 mb-10 xs:mb-5'>
        <img src={logo} alt="The Act Cast" className={`w-[35%] xs:w-[75%] md:w-[35%] xs:mb-10 ${i18n.language === "en" ? "mr-5" :"ml-5"} mr-5`} />
        <div className="flex justify-between items-center text-white text-xl">
          <FaInstagram className='mx-1 lg:mx-3' />
          <FaLinkedinIn className='mx-1 lg:mx-3' />
          <FaTwitter className='mx-1 lg:mx-3' />
          <FaYoutube className='mx-1 lg:mx-3' />
        </div>
      </div>
      <div className='w-full xs:w-7/12 md:w-5/12 flex  text-normal '>
        <div className="w-4/12 flex flex-col">
          <h6 className="secondary-font mb-5 xs:mb-12">{t("footer.site_map")}</h6>
          <Link to="/about-us" ><p className='mb-3'>{t("footer.about_us")}</p></Link>
          <Link to="/our-work" ><p className='mb-3'>{t("footer.our_work")}</p></Link>
          <Link to="" ><p className='mb-3'>{t("footer.contact_us")}</p></Link>
        </div>
        <div className="w-4/12 flex flex-col">
          <h6 className="secondary-font mb-5 xs:mb-12">{t("footer.join_us")}</h6>
          <Link to="/acting/hub" ><p className='mb-3'>{t("footer.act_hub")}</p></Link>
          <Link to="/work-shop" ><p className='mb-3'>{t("footer.acting_workshop")}</p></Link>
          <Link to="/careers" ><p className='mb-3'>{t("footer.careers")}</p></Link>
        </div>
        <div className="w-4/12 flex flex-col">
          <h6 className="secondary-font mb-5 xs:mb-12">{t("footer.links")}</h6>
          <Link to="" ><p className='mb-3'>{t("footer.terms")}</p></Link>
          <Link to="" ><p className='mb-3'>{t("footer.policy")}</p></Link>
          <Link to="/login" ><p className='mb-3'>{t("footer.login")}</p></Link>
        </div>
      </div>
      <div className='hidden xs:block w-2/12 md:w-3/12 text-center cursor-pointer hover:font-bold' onClick={changeLanguage}>
        {
          i18n.language === "en" ? "English" : "العربية"
        }</div>
    </footer>
  )
}

export default Footer