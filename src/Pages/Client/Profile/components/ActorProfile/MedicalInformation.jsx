import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next'

import { RadioButton } from 'primereact/radiobutton'
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button';

import { disabilitiesOptions, diseasesOptions, disordersOptions, getFormErrorMessage, phobiaOptions } from '../../../../../Config/Global';

function MedicalInformation() {
  const { t, i18n } = useTranslation("profile");
  const { handleSubmit, control, formState: { errors } } = useForm();

  const formHandler = () => {

  }

  return (
    <div className='w-full sm:w-10/12 lg:w-8/12 mx-auto'>
      <form className='w-full flex flex-wrap profile-form' onSubmit={handleSubmit(formHandler)}>
        <div className={`w-full sm:w-6/12 ${i18n.language === "en" ? "sm:border-r-2 sm:pr-10" : "sm:border-l-2 sm:pl-10"} `}>

          {/* disease */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="disease">{t("actor.medical.disease")}</label>
            <Controller
              name="disease"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id="disease"
                  {...field}
                  inputRef={field.ref}
                  className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                  placeholder={t("actor.medical.disease_placeholder")}
                  options={diseasesOptions[i18n.language]}
                  optionLabel="label"
                  optionValue='value'
                  filter
                />
              )}
            />
            {getFormErrorMessage('disease', errors)}
          </div>

          {/* disability */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="disability">{t("actor.medical.disability")}</label>
            <Controller
              name="disability"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id="disability"
                  {...field}
                  inputRef={field.ref}
                  className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                  placeholder={t("actor.medical.disability_placeholder")}
                  options={disabilitiesOptions[i18n.language]}
                  optionLabel="label"
                  optionValue='value'
                  filter

                />
              )}
            />
            {getFormErrorMessage('disability', errors)}
          </div>

          {/* phobia */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="phobia">{t("actor.medical.phobia")}</label>
            <Controller
              name="phobia"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id="phobia"
                  {...field}
                  inputRef={field.ref}
                  className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                  placeholder={t("actor.medical.phobia_placeholder")}
                  options={phobiaOptions[i18n.language]}
                  optionLabel="label"
                  optionValue='value'
                  filter

                />
              )}
            />
            {getFormErrorMessage('phobia', errors)}
          </div>

          {/* disorder */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="disorder">{t("actor.medical.disorder")}</label>
            <Controller
              name="disorder"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id="disorder"
                  {...field}
                  inputRef={field.ref}
                  className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                  placeholder={t("actor.medical.disorder_placeholder")}
                  options={disordersOptions[i18n.language]}
                  optionLabel="label"
                  optionValue='value'
                  filter

                />
              )}
            />
            {getFormErrorMessage('disorder', errors)}
          </div>
        </div>

        <div className={`w-full sm:w-6/12 ${i18n.language === "en" ? "sm:pl-10" : "sm:pr-10"}`}>


          {/* scars */}
          <div className="p-field flex flex-col mb-4 ">
            <label htmlFor="scars">{t("actor.medical.scars")}</label>
            <Controller
              name="scars"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field }) => (
                <div className='flex w-full uppercase'>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"scars_yes"}  {...field} name="scars" value={1} checked={field.value === 1} />
                    <label htmlFor={"scars_yes"} className="ml-2">{t("actor.yes")}</label>
                  </div>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"scars_no"}  {...field} name="scars" value={0} checked={field.value === 0} />
                    <label htmlFor={"scars_no"} className="ml-2">{t("actor.no")}</label>
                  </div>
                </div>
              )}
            />
            {getFormErrorMessage('scars', errors)}
          </div>
        </div>

        <div className="w-full mt-3 flex justify-center">
          <Button className="btn-primary px-3 xs:px-10 uppercase text-xl tracking-wider" type='submit' label={t("actor.btn")} />
        </div>
      </form>
    </div>
  )
}

export default MedicalInformation