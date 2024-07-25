import { Button } from 'primereact/button';
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

import poster1 from '../../../../assets/images/home/movie_1.jfif';
import poster2 from '../../../../assets/images/home/movie_2.png';
import poster3 from '../../../../assets/images/home/movie_3.jfif';
import poster4 from '../../../../assets/images/home/movie_4.png';
import poster5 from '../../../../assets/images/home/movie_5.jfif';

const _movies = [
  {
    id: 1,
    poster: poster1,
    title_en: "Movie Name",
    title_ar: "اسم الفيلم"
  },
  {
    id: 2,
    poster: poster2,
    title_en: "Movie Name",
    title_ar: "اسم الفيلم"
  },
  {
    id: 3,
    poster: poster3,
    title_en: "Movie Name",
    title_ar: "اسم الفيلم"
  },
  {
    id: 4,
    poster: poster4,
    title_en: "Movie Name",
    title_ar: "اسم الفيلم"
  },
  {
    id: 5,
    poster: poster5,
    title_en: "Movie Name",
    title_ar: "اسم الفيلم"
  },
]

export default function Section2() {
  const { t, i18n } = useTranslation();

  return (
    <section className='home-section flex flex-col justify-center items-center h-[100vh] side-spaces mb-12 overflow-hidden section section-3 bg-[#fff]'  id='section-3' >
      <h1 className={`text-secondary w-full font-bold text-center ${i18n.language === "en" ? "tracking-[3px] sm:tracking-[10px]" : ""} text-3xl sm:text-4xl mt-12 mb-6`} >
        {t("our_work.title")}
      </h1>

      <div className="w-full h-[550px] border-2 mb-6 overflow-y-auto scrollbar">
        {_movies.map(
          movie => {
            return (
              <div className="relative w-full ">
                <img className="w-full h-[550px]" loading="lazy" src={movie?.poster} alt={movie?.title_en} />
                <div className="poster-overlay top-0 w-full h-full absolute flex justify-center items-center">
                  <h3 className='text-white text-4xl secondary-font'>{i18n.language === "ar" ? movie?.title_ar : movie?.title_en}</h3>
                </div>
              </div>
            )
          })}
      </div>

      <Link to={"/our-work"}>
        <Button
          className='primary-bg-hover uppercase font-medium text-xl md:text-2xl py-2 px-5 xs:px-10 rounded-[5px]'
          label={t('our_work.btn')}
        />
      </Link>
    </section>
  )
}

