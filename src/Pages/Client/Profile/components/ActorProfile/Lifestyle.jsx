import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next'

import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton'
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button';

import { drivingOptions, getFormErrorMessage, skillsOptions } from '../../../../../Config/Global';

function Lifestyle() {
  const { t, i18n } = useTranslation("profile");
  const { handleSubmit, control, formState: { errors } } = useForm();

  const formHandler = () => {

  }

  return (
    <div className='w-full sm:w-10/12 lg:w-8/12 mx-auto'>
      <form className='w-full flex flex-wrap profile-form' onSubmit={handleSubmit(formHandler)}>
        <div className={`w-full sm:w-6/12 ${i18n.language === "en" ? "sm:border-r-2 sm:pr-10" : "sm:border-l-2 sm:pl-10"} `}>
        {/* skills */}
        <div className="p-field flex flex-col mb-4">
            <label htmlFor="skills">{t("actor.lifestyle.label_1")}</label>
            <Controller
              name="skills"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id="skills"
                  {...field}
                  inputRef={field.ref}
                  className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                  placeholder={t("actor.lifestyle.placeholder_1")}
                  options={skillsOptions[i18n.language]}
                  optionLabel="label"
                  optionValue='value'
                  filter

                />
              )}
            />
            {getFormErrorMessage('skills', errors)}
          </div>

          {/* language */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="language">{t("actor.lifestyle.label_2")}</label>
            <Controller
              name="language"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <InputText
                  id="language"
                  {...field}
                  placeholder={t("actor.lifestyle.placeholder_2")}
                  inputRef={field.ref}
                  className={`p-1 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
              )}
            />
            {getFormErrorMessage('language', errors)}
          </div>

          {/* driver */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="driver">{t("actor.lifestyle.label_3")}</label>
            <Controller
              name="driver"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id="driver"
                  {...field}
                  inputRef={field.ref}
                  className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                  placeholder={t("actor.lifestyle.placeholder_3")}
                  options={drivingOptions[i18n.language]}
                  optionLabel="label"
                  optionValue='value'
                  filter

                />
              )}
            />
            {getFormErrorMessage('driver', errors)}
          </div>

          {/* swimmer */}
          <div className="p-field flex flex-col mb-4 ">
            <label htmlFor="swimmer">{t("actor.lifestyle.label_4")}</label>
            <Controller
              name="swimmer"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field }) => (
                <div className='flex w-full uppercase'>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"swimmer_yes"}  {...field} name="swimmer" value={1} checked={field.value === 1} />
                    <label htmlFor={"swimmer_yes"} className="ml-2">{t("actor.yes")}</label>
                  </div>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"swimmer_no"}  {...field} name="swimmer" value={0} checked={field.value === 0} />
                    <label htmlFor={"swimmer_no"} className="ml-2">{t("actor.no")}</label>
                  </div>
                </div>
              )}
            />
            {getFormErrorMessage('swimmer', errors)}
          </div>

          {/* smoker */}
          <div className="p-field flex flex-col mb-4 ">
            <label htmlFor="smoker">{t("actor.lifestyle.label_5")}</label>
            <Controller
              name="smoker"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field }) => (
                <div className='flex w-full uppercase'>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"smoker_yes"}  {...field} name="smoker" value={1} checked={field.value === 1} />
                    <label htmlFor={"smoker_yes"} className="ml-2">{t("actor.yes")}</label>
                  </div>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"smoker_no"}  {...field} name="smoker" value={0} checked={field.value === 0} />
                    <label htmlFor={"smoker_no"} className="ml-2">{t("actor.no")}</label>
                  </div>
                </div>
              )}
            />
            {getFormErrorMessage('smoker', errors)}
          </div>
        </div>

        <div className={`w-full sm:w-6/12 ${i18n.language === "en" ? "sm:pl-10" : "sm:pr-10"}`}>
          {/* why do yuo want to act */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="why_do_yuo_want_to_act">{t("actor.lifestyle.label_6")}</label>
            <Controller
              name="why_do_yuo_want_to_act"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <InputTextarea 
                id="why_do_yuo_want_to_act"
                  {...field}
                  inputRef={field.ref}
                  className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                  placeholder={t("actor.lifestyle.placeholder_6")}
                 rows={1} cols={30} />

              )}
            />
            {getFormErrorMessage('why_do_yuo_want_to_act', errors)}
          </div>
          
          {/* Have You Ever Acted Before? */}
          <div className="p-field flex flex-col mb-4 ">
            <label htmlFor="have_you_ever_acted_before">{t("actor.lifestyle.label_7")}</label>
            <Controller
              name="have_you_ever_acted_before"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field }) => (
                <div className='flex w-full uppercase'>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"have_you_ever_acted_before_yes"}  {...field} name="have_you_ever_acted_before" value={1} checked={field.value === 1} />
                    <label htmlFor={"have_you_ever_acted_before_yes"} className="ml-2">{t("actor.yes")}</label>
                  </div>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"have_you_ever_acted_before_no"}  {...field} name="have_you_ever_acted_before" value={0} checked={field.value === 0} />
                    <label htmlFor={"have_you_ever_acted_before_no"} className="ml-2">{t("actor.no")}</label>
                  </div>
                </div>
              )}
            />
            {getFormErrorMessage('have_you_ever_acted_before', errors)}
          </div>
             {/* why do yuo want to act */}
             <div className="p-field flex flex-col mb-4">
            <label htmlFor="why_do_yuo_want_to_act">{t("actor.lifestyle.label_8")}</label>
            <Controller
              name="why_do_yuo_want_to_act"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <InputTextarea 
                id="why_do_yuo_want_to_act"
                  {...field}
                  inputRef={field.ref}
                  className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                  placeholder={t("actor.lifestyle.placeholder_8")}
                 rows={2} cols={30} />

              )}
            />
            {getFormErrorMessage('why_do_yuo_want_to_act', errors)}
          </div>

             {/* A brief about your work experience */}
             <div className="p-field flex flex-col mb-4">
            <label htmlFor="brief">{t("actor.lifestyle.label_9")}</label>
            <Controller
              name="brief"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <InputTextarea 
                id="brief"
                  {...field}
                  inputRef={field.ref}
                  className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                  placeholder={t("actor.lifestyle.placeholder_9")}
                 rows={3} cols={30} />

              )}
            />
            {getFormErrorMessage('brief', errors)}
          </div>
        </div>

        <div className="w-full mt-3 flex justify-center">
          <Button className="btn-primary px-3 xs:px-10 uppercase text-xl tracking-wider" type='submit' label={t("actor.btn")} />
        </div>
      </form>
    </div>
  )
}

export default Lifestyle