import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../Layout/Layout'
import image from "../../../assets/experience_3.webp"

const _data = [
    {
        id: "1",
        title: "Title 1",
        poster: image,
        duration: "1:30"
    },
    {
        id: "1",
        title: "Title 1",
        poster: image,
        duration: "1:30"
    },
    {
        id: "1",
        title: "Title 1",
        poster: image,
        duration: "1:30"
    },
    {
        id: "1",
        title: "Title 1",
        poster: image,
        duration: "1:30"
    },
]

export default function Tutorial() {
    const { t } = useTranslation("acting_club");

    return (
        <Layout>
            <section className='flex flex-col side-spaces pt-8 md:pt-32'>
                <div className="flex flex-col items-center md:w-[75%] lg:[45%] xl:w-[35%] mx-auto">
                    <h1 className="mb-8 text-center secondary-font text-xl md:text-4xl">{t("title")}</h1>
                    <p className="h1 text-center px-5">{t("description")}</p>

                </div>
                <div className="flex flex-wrap mt-8 lg:p-10 w-full ">
                    {
                        _data.map(item => {
                            return <TutorialCard key={item?.id} item={item} t={t} />
                        })
                    }
                </div>
            </section>
        </Layout>
    )
}

export function TutorialCard({ item, t }) {
    return (
        <div className="flex flex-col rounded-[10px] w-full xs:w-6/12 md:w-4/12 p-2 lg:p-5 mb-2">
            <img className="aspect-video rounded-[10px]" loading="lazy" src={item?.poster} alt={item?.title} />
            <div className="font-bold text-xl mt-3 mb-1 secondary-font">{item?.title}</div>
            <p className="my-0">{t("duration")} : <span className='px-2'>{item?.duration}</span></p>
        </div>
    )
}
