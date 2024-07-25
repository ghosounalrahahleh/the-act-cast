import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import { useTranslation } from 'react-i18next'
import image3 from "../../../assets/images/workShop/work_shop3.jfif"

export default function OurWorkIndex() {
  const { t, i18n } = useTranslation("our_work");

  return (
    <Layout>
      <section className='side-spaces min-h-[100vh] w-full flex flex-col justify-start items-center pt-28'>
        <h1 className='secondary-font text-primary text-2xl sm:text-4xl text-center' >
          {t("our_work.title")}
        </h1>
        <Grid i18n={i18n} />
      </section>

    </Layout>
  )
}


export const Grid = ({ i18n }) => {
  const [items, setItems] = useState([
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },

    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },

    {
      title_ar: "عنوان",
      title_en: "title",
      poster: image3
    },
  ]);

  const rowSpanOddOptions = [16, 18, 20, 22];
  const rowSpanEvenOptions = [8, 10, 12, 14];

  const getRandomRowSpan = (index) => {
    const randomIndex = Math.floor(Math.random() * rowSpanOddOptions.length);
    return [1, 0].includes(index % 3) ? rowSpanOddOptions[randomIndex] : rowSpanEvenOptions[randomIndex]
  };

  return (
    <div className="bg-gray-100 py-8 w-full">
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-4 auto-rows-min">
        {
          items.map((item, index) => {
            let rowSpan = getRandomRowSpan(index + 1);
            return (
              <div
                key={item?.id}
                className="bg-white rounded shadow text-center relative overflow-hidden gallery-image"
                style={{ gridRow: `span ${rowSpan} / span ${rowSpan}` }}
              >
                <img src={item?.poster} alt="" className='w-full h-full' />
                <div className='title-container'>
                  <h3 className='capitalize font-medium secondary-font text-2xl px-20 py-5 bg-[rgba(246,253,244,0.5)] backdrop-blur-sm rounded-[10px]'>
                    {i18n.language === "en" ? item?.title_en : item?.title_ar}
                  </h3>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
};
