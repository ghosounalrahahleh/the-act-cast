import React, { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ClientGlobalContextProvider } from '../Client/Contexts/ClientGlobalContext'
import { useTranslation } from 'react-i18next'

import ActingCastIndex from '../Client/ActingCast/ActingCastIndex'
import ActingClubIndex from '../Client/ActingClub/ActingClubIndex'
import ForgetPassword from '../Client/Auth/ForgetPassword'
import ResetPassword from '../Client/Auth/ResetPassword'
import SignUp from '../Client/Auth/SignUp'
import Login from '../Client/Auth/Login'
import Home from '../Client/Landing/Home'
import OurWorkIndex from '../Client/OurWork/OurWorkIndex'
import Careers from '../Client/Careers/Careers'
import WorkShop from '../Client/OurWork/WorkShop'
import Profile from '../Client/Profile/Profile'

function ClientRoutes() {
  const { i18n, t } = useTranslation('home');

  useMemo(() => {
    const existingLink = document.getElementById('lang-css');
    if (existingLink) {
      document.head.removeChild(existingLink);
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'lang-css';
    link.href = `${process.env.REACT_APP_PUBLIC_PATH}css/${i18n.language}/app.css`;

    document.head.appendChild(link);

    return () => {

      const existingLink = document.getElementById('lang-css');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, [i18n.language]);

  return (
    <ClientGlobalContextProvider >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/acting/hub" element={<ActingClubIndex />} />
        <Route path="/about-us" element={<ActingCastIndex />} />
        <Route path="/our-work" element={<OurWorkIndex />} />
        <Route path="/work-shop" element={<WorkShop />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ClientGlobalContextProvider>
  )
}

export default ClientRoutes