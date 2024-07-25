import React from 'react'
import { useTranslation } from 'react-i18next';

import { Button } from 'primereact/button'
import { FiPlus, FiTrash2, FiLink2 } from "react-icons/fi";

const works = [
  {
    name_en: "Work 1 Name",
    name_ar: "اسم العمل",
    link: ""
  }, {
    name_en: "Work 2 Name",
    name_ar: "اسم العمل",
    link: ""
  }, {
    name_en: "Work 3 Name",
    name_ar: "اسم العمل",
    link: ""
  }, {
    name_en: "Work 4 Name",
    name_ar: "اسم العمل",
    link: ""
  }
]

function PreviousWork() {
  const { t, i18n } = useTranslation("profile");

  return (
    <div className='flex flex-col w-full'>
      <div className="w-full flex justify-end mb-3">
        <Button
          className='btn-white px-5 py-2'
          label={t('producer.add_new_work')}
          icon={<FiPlus className="mx-2 " />
          }
        />
      </div>
      <div className="w-full flex flex-wrap justify-start mb-3">
        {
          works?.map((work,i) => (
            <div key={i} className="w-full xs:w-6/12 md:w-4/12 lg:w-3/12 p-1 mb-2">
              <div className="w-full rounded-[5px] flex flex-col text-primary  border-light-primary p-5">
                <h2 className="text-2xl mb-10 font-extrabold ml-4"> {i18n?.language === "en" ? work?.name_en : work?.name_ar}</h2>
                <div className="flex w-full lg:w-10/12 mx-auto justify-center">
                  <Button
                    className='btn-white mx-2 py-1'
                    icon={<FiLink2 className="text-2xl " />
                    }
                  />
                  <Button
                    className='btn-secondary px-2 sm:px-8 py-1 uppercase'
                    label={t('producer.delete')}
                    icon={<FiTrash2 className="mr-2" />
                    }
                  />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PreviousWork