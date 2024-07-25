import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next'

import { FileUpload } from 'primereact/fileupload';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';

import { getFormErrorMessage } from '../../../../../Config/Global';

function Media() {
  const { t, i18n } = useTranslation("profile");
  const { handleSubmit, control, formState: { errors } } = useForm();

  const formHandler = () => {

  }

  return (
    <div className='w-full sm:w-10/12 lg:w-8/12 mx-auto'>
      <form className='w-full flex flex-wrap profile-form' onSubmit={handleSubmit(formHandler)}>
        <div className={`w-full sm:w-6/12 ${i18n.language === "en" ? "sm:border-r-2 sm:pr-10" : "sm:border-l-2 sm:pl-10"} `}>
          {/* Front profile Pic */}
          <div className="p-field flex flex-col mb-4">
            <label>{t("actor.media.label_1")}</label>
            <Controller
              name="front_pic"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <FileUpload
                  id="front_pic"
                  mode="basic"
                  name="front_pic"
                  accept="image/*"
                  customUpload
                  {...field}
                  inputRef={field.ref}
                  chooseLabel={t("actor.media.placeholder_1")}
                  // uploadHandler={customBase64Uploader}
                  className={`p-1 actor-media-input text-center border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                />
              )}
            />
            {getFormErrorMessage('front_pic', errors)}
          </div>

          {/* right profile pic*/}
          <div className="p-field flex flex-col mb-4">
            <label>{t("actor.media.label_2")}</label>
            <Controller
              name="right_pic"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <FileUpload
                  id="right_pic"
                  mode="basic"
                  name="right_pic"
                  accept="image/*"
                  customUpload
                  {...field}
                  inputRef={field.ref}
                  chooseLabel={t("actor.media.placeholder_2")}
                  // uploadHandler={customBase64Uploader}
                  className={`p-1 actor-media-input text-center border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                />
              )}
            />
            {getFormErrorMessage('right_pic', errors)}
          </div>

          {/* left profile pic */}
          <div className="p-field flex flex-col mb-4">
            <label>{t("actor.media.label_3")}</label>
            <Controller
              name="left_pic"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <FileUpload
                  id="left_pic"
                  mode="basic"
                  name="left_pic"
                  accept="image/*"
                  customUpload
                  {...field}
                  inputRef={field.ref}
                  chooseLabel={t("actor.media.placeholder_3")}
                  // uploadHandler={customBase64Uploader}
                  className={`p-1 actor-media-input text-center border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                />
              )}
            />
            {getFormErrorMessage('left_pic', errors)}
          </div>

        </div>

        <div className={`w-full sm:w-6/12 ${i18n.language === "en" ? "sm:pl-10" : "sm:pr-10"}`}>
          {/* medium pic */}
          <div className="p-field flex flex-col mb-4">
            <label>{t("actor.media.label_4")}</label>
            <Controller
              name="medium_pic"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <FileUpload
                  id="medium_pic"
                  mode="basic"
                  name="medium_pic"
                  accept="image/*"
                  customUpload
                  {...field}
                  inputRef={field.ref}
                  chooseLabel={t("actor.media.placeholder_4")}
                  // uploadHandler={customBase64Uploader}
                  className={`p-1 actor-media-input text-center border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                />
              )}
            />
            {getFormErrorMessage('medium_pic', errors)}
          </div>

          {/* wide pic*/}
          <div className="p-field flex flex-col mb-4">
            <label>{t("actor.media.label_5")}</label>
            <Controller
              name="wide_pic"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <FileUpload
                  id="wide_pic"
                  mode="basic"
                  name="wide_pic"
                  accept="image/*"
                  customUpload
                  {...field}
                  inputRef={field.ref}
                  chooseLabel={t("actor.media.placeholder_5")}
                  // uploadHandler={customBase64Uploader}
                  className={`p-1 actor-media-input text-center border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                />
              )}
            />
            {getFormErrorMessage('wide_pic', errors)}
          </div>

          {/* introduction video */}
          <div className="p-field flex flex-col mb-4">
            <label>{t("actor.media.label_6")}</label>
            <Controller
              name="introduction_pic"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field, fieldState }) => (
                <FileUpload
                  id="introduction_pic"
                  mode="basic"
                  name="introduction_pic"
                  accept="image/*"
                  customUpload
                  {...field}
                  inputRef={field.ref}
                  chooseLabel={t("actor.media.placeholder_6")}
                  // uploadHandler={customBase64Uploader}
                  className={`p-1 actor-media-input text-center border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                />
              )}
            />
            {getFormErrorMessage('introduction_pic', errors)}
          </div>
        </div>

        <div className="w-full mt-3 flex justify-center">
          <Button className="btn-primary px-3 xs:px-10 uppercase text-xl tracking-wider" type='submit' label={t("actor.btn")} />
        </div>
      </form>
    </div>
  )
}

export default Media