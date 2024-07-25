import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import poster1 from '../../../../assets/images/home/acting_hub1.jfif';
import poster2 from '../../../../assets/images/home/acting_hub2.jfif';
import poster3 from '../../../../assets/images/home/acting_hub3.jfif';
import poster4 from '../../../../assets/images/home/acting_hub4.jfif';
import poster5 from '../../../../assets/images/home/acting_hub5.jfif';

import { Button } from 'primereact/button';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { GrPlayFill } from "react-icons/gr";

const slides = [
  {
    id: 1,
    poster: poster1,
    title_ar: "التمثيل 101: أسس الأداء",
    title_en: "Acting 101: Foundations of Performance",
  },
  {
    id: 2,
    poster: poster2,
    title_ar: "أساسيات التمثيل على الكاميرا",
    title_en: "On-Camera Acting Essentials",
  },
  {
    id: 3,
    poster: poster3,
    title_ar: "العاطفة والتعبير في التمثيل",
    title_en: "Emotion and Expression in Acting",
  },
  {
    id: 4,
    poster: poster4,
    title_ar: "التمثيل للسينما والتلفزيون",
    title_en: "Acting for Film and Television",
  },
  {
    id: 5,
    poster: poster5,
    title_ar: "تحليل النص وتفسيره",
    title_en: "Script Analysis and Interpretation",
  }
]

function Section3() {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const [isShown, setIsShown] = useState(true); // Start with animation and shadow shown

  useEffect(() => {
    // Example: Timer to toggle animation and shadow every 3 seconds
    const interval = setInterval(() => {
      setIsShown(prevIsShown => !prevIsShown);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleNext = () => {
    setAnimationClass('title-slide-out');
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setAnimationClass('title-slide-in');
    }, 500); // Match this with CSS transition duration
  };

  const handlePrev = () => {
    setAnimationClass('title-slide-out-prev');
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      setAnimationClass('title-slide-in-prev');

    }, 500); // Match this with CSS transition duration
  };

  return (
    <section className='relative flex w-full h-[400px] xs:h-[100vh] section section-4 bg-[#000]' id='section-4'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`section-background ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.poster})` }}
        ></div>
      ))}
      <div className="absolute flex flex-col justify-center items-center h-full w-full top-0 bg-[rgba(0,0,0,0.25)]">
        <div className="w-full lg:w-8/12 flex mx-auto mt-24">
          <div className='w-2/12 xs:w-1/12 flex flex-col justify-center items-center'>
            {
              i18n.language === "en" ?
                <BiSolidLeftArrow className='text-white text-5xl cursor-pointer' onClick={handlePrev} />
                :
                <BiSolidRightArrow className='text-white text-5xl cursor-pointer' onClick={handleNext} />
            }
          </div>
          <div className={`p-5 xs:px-12 lg:px-24 xs:py-24 flex items-center flex-col justify-between w-8/12 xs:w-10/12 overflow-hidden  h-[250px] xs:h-[480px] border-2 border-white rounded-[10px] bg-[rgba(59,64,49,.3)] backdrop-blur-[10px]  `}>
            <h2 className={`text-white text-xl xs:text-3xl md:text-4xl w-10/12 secondary-font text-center ${animationClass}`}
              onAnimationEnd={() => setAnimationClass('')}>
              {slides[currentSlide].title_en}
            </h2>

            <div className="box-wrapper flex items-center justify-center">
              <div className={`box circle-container rounded-[50%] bg-[#fff] h-[70px] w-[70px] flex justify-center items-center ${isShown ? 'shadow' : ''}`}>
                <GrPlayFill />
              </div>
            </div>
          </div>
          <div className='w-2/12 xs:w-1/12 flex flex-col justify-center items-center'>
            {
              i18n.language === "en" ?
                <BiSolidRightArrow className='text-white text-5xl cursor-pointer' onClick={handleNext} />
                :
                <BiSolidLeftArrow className='text-white text-5xl cursor-pointer' onClick={handlePrev} />
            }
          </div>
        </div>
        <div className="w-full flex justify-center mt-12 mb-24">
          <Link to={"/acting/hub"}>
            <Button
              className='white-bg-hover uppercase font-medium text-xl md:text-2xl py-2 px-5 xs:px-10 rounded-[5px] border-2 border-white'
              label={t('act_hub.btn')}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section3;
