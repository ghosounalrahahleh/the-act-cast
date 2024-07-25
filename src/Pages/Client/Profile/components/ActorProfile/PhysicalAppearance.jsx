import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next'

import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';

import { getFormErrorMessage } from '../../../../../Config/Global';
import weightImg from "../../../../../assets/images/profile/weight.png"
import heightImg from "../../../../../assets/images/profile/height.png"

function PhysicalAppearance() {
  const { t } = useTranslation("profile");
  const { handleSubmit, control, formState: { errors } } = useForm();

  const formHandler = () => {

  }

  return (
    <div className='w-full sm:w-10/12 lg:w-8/12 mx-auto'>
      <form className='w-full flex flex-wrap profile-form ' onSubmit={handleSubmit(formHandler)}>
        <div className="w-full sm:w-8/12 xl:w-6/12 mx-auto ">
          {/* height */}
          <div className="flex w-full justify-between items-center ">
            <div className="w-3/12">
              <img src={heightImg} alt="" className='w-full' />
            </div>
            <div className="p-field flex flex-col mb-4 w-8/12">
              <label htmlFor="height">{t("actor.appearance.height")}</label>
              <Controller
                name="height"
                control={control}
                defaultValue=""
                rules={{ required: t("messages.required") }}
                render={({ field, fieldState }) => (
                  <input
                    type='number'
                    {...field}
                    inputId="height"
                    placeholder={t("actor.appearance.height") + "..."}
                    inputRef={field.ref}
                    className={`p-2 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                )}
              />
              {getFormErrorMessage('height', errors)}
            </div>
          </div>

          {/* weight */}
          <div className="flex w-full justify-between items-center">
            <div className="w-3/12">
              <img src={weightImg} alt="" className='w-full' />
            </div>
            <div className="p-field flex flex-col mb-4 w-8/12">
              <label htmlFor="weight">{t("actor.appearance.weight")}</label>
              <Controller
                name="weight"
                control={control}
                defaultValue=""
                rules={{ required: t("messages.required") }}
                render={({ field, fieldState }) => (
                  <input
                    type='number'
                    {...field}
                    inputId="weight"
                    placeholder={t("actor.appearance.weight") + "..."}
                    inputRef={field.ref}
                    className={`p-2 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                )}
              />
              {getFormErrorMessage('weight', errors)}
            </div>
          </div>

        </div>

        <div className="w-full mt-3 flex justify-center">
          <Button className="btn-primary px-3 xs:px-10 uppercase text-xl tracking-wider" type='submit' label={t("actor.btn")} />
        </div>
      </form >
    </div >
  )
}

export default PhysicalAppearance