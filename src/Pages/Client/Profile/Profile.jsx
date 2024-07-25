import React from 'react'
import Layout from '../Layout/Layout'
import { useTranslation } from 'react-i18next'

import { useClientGlobalContext } from '../Contexts/ClientGlobalContext';

import ProfileImage from './components/ProfileImage';
import TabMenu from './components/TabMenu'

function Profile() {
  const { t } = useTranslation("profile");
  const { profileTab, activeTab } = useClientGlobalContext();

  return (
    <Layout>
      <section className='flex flex-col min-h-[100vh] '>
        <div className="w-full profile-header flex justify-center items-center bg-positioning py-24 relative">
          <h1 className="text-[#fff] secondary-font text-2xl sm:text-4xl ">
            {t("welcome")} " "
          </h1>
          <ProfileImage />
        </div>
        <TabMenu />
        <div className="flex justify-center my-8 side-spaces  ">
          {profileTab[activeTab]?.component}
        </div>
      </section>
    </Layout>)
}

export default Profile