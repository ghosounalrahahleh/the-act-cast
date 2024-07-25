import React from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../Layout/Layout';

import image1 from "../../../assets/images/workShop/work_shop1.jfif"
import image2 from "../../../assets/images/workShop/work_shop2.jfif"
import image3 from "../../../assets/images/workShop/work_shop3.jfif"

function WorkShop() {
  const { t } = useTranslation("our_work");

  return (
    <Layout>
      <section className='side-spaces min-h-[100vh] w-full flex flex-col justify-start items-center pt-28 text-primary mb-10'>
        <h1 className='secondary-font text-primary text-4xl mb-5 text-center ' >
          {t("work_shop.title")}
        </h1>
        <p className='text-primary text-xl text-center md:w-[60%] font-medium mb-10'>
          {t("work_shop.description")}
        </p>

        <div className="relative flex flex-col sm:flex-row justify-evenly image-container">
          <img src={image1} alt="" className='w-full sm:w-5/12 lg:w-4/12 mb-5' />
          <img src={image2} alt="" className='w-full sm:w-5/12 lg:w-4/12 mb-5 sm:absolute sm:left-1/2 sm:top-20 sm:transform sm:-translate-x-1/2' />
          <img src={image3} alt="" className='w-full sm:w-5/12 lg:w-4/12 mb-5' />
        </div>
      </section>

    </Layout>
  )
}

export default WorkShop