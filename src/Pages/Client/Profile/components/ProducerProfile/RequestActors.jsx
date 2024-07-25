import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next'

import { RadioButton } from 'primereact/radiobutton'
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button';

import { diseasesOptions, disordersOptions, drivingOptions, getFormErrorMessage, phobiaOptions, skillsOptions } from '../../../../../Config/Global';

function RequestActors() {
  const { t, i18n } = useTranslation("profile");
  const { handleSubmit, control, formState: { errors } } = useForm();

  const formHandler = () => {

  }

  return (
    <div className='w-full sm:w-10/12 lg:w-8/12 mx-auto'>
      <form className='w-full flex flex-wrap profile-form' onSubmit={handleSubmit(formHandler)}>
        <div className={`w-full sm:w-6/12 ${i18n.language === "en" ? "sm:border-r-2 sm:pr-10" : "sm:border-l-2 sm:pl-10"} `} >
          {/* weight */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="weight">{t("producer.weight")}</label>
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
                  placeholder={t("producer.weight") + "..."}
                  inputRef={field.ref}
                  className={`p-2 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
              )}
            />
            {getFormErrorMessage('weight', errors)}
          </div>

          {/* height */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="height">{t("producer.height")}</label>
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
                  placeholder={t("producer.height") + "..."}
                  inputRef={field.ref}
                  className={`p-2 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
              )}
            />
            {getFormErrorMessage('height', errors)}
          </div>

          {/* Gender */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="gender">{t("producer.gender")}</label>
            <Controller
              name="gender"
              className="w-full"
              control={control}
              defaultValue=""
              rules={{ required: t("messages.required") }}
              render={({ field }) => (
                <div className='flex w-full py-2 border-[2px] border-transparent'>
                  <div className="flex items-center w-[50%]">
                    <RadioButton inputId={"male"}  {...field} name="gender" value="MALE" checked={field.value === "MALE"} />
                    <label htmlFor={"male"} className="ml-2">{t("producer.male")}</label>
                  </div>
                  <div className="flex items-center w-[50%]">
                    <RadioButton inputId={"female"}  {...field} name="gender" value="FEMALE" checked={field.value === "FEMALE"} />
                    <label htmlFor={"female"} className="ml-2">{t("producer.female")}</label>
                  </div>
                </div>
              )}
            />
            {getFormErrorMessage('gender', errors)}
          </div>

          {/* phobia */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="phobia">{t("producer.phobia")}</label>
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
                  placeholder={t("producer.phobia_placeholder")}
                  options={phobiaOptions[i18n.language]}
                  optionLabel="label"
                  optionValue='value'
                  filter

                />
              )}
            />
            {getFormErrorMessage('phobia', errors)}
          </div>

          {/* disease */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="disease">{t("producer.disease")}</label>
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
                  placeholder={t("producer.disease_placeholder")}
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
            <label htmlFor="disability">{t("producer.disability")}</label>
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
                  placeholder={t("producer.disability_placeholder")}
                  options={diseasesOptions[i18n.language]}
                  optionLabel="label"
                  optionValue='value'
                  filter

                />
              )}
            />
            {getFormErrorMessage('disability', errors)}
          </div>
        </div>

        <div className={`w-full sm:w-6/12 ${i18n.language === "en" ? "sm:pl-10" : "sm:pr-10"}`}>
          {/* disorder */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="disorder">{t("producer.disorder")}</label>
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
                  placeholder={t("producer.disorder_placeholder")}
                  options={disordersOptions[i18n.language]}
                  optionLabel="label"
                  optionValue='value'
                  filter

                />
              )}
            />
            {getFormErrorMessage('disorder', errors)}
          </div>

          {/* skills */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="skills">{t("producer.skills")}</label>
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
                  placeholder={t("producer.skills_placeholder")}
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
            <label htmlFor="language">{t("producer.language")}</label>
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
                  placeholder={t("producer.language")}
                  inputRef={field.ref}
                  className={`p-1 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
              )}
            />
            {getFormErrorMessage('language', errors)}
          </div>

          {/* driver */}
          <div className="p-field flex flex-col mb-4">
            <label htmlFor="driver">{t("producer.driver")}</label>
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
                  placeholder={t("producer.driver_placeholder")}
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
            <label htmlFor="swimmer">{t("producer.swimmer")}</label>
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
                    <label htmlFor={"swimmer_yes"} className="ml-2">{t("producer.yes")}</label>
                  </div>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"swimmer_no"}  {...field} name="swimmer" value={0} checked={field.value === 0} />
                    <label htmlFor={"swimmer_no"} className="ml-2">{t("producer.no")}</label>
                  </div>
                </div>
              )}
            />
            {getFormErrorMessage('swimmer', errors)}
          </div>

          {/* smoker */}
          <div className="p-field flex flex-col mb-4 ">
            <label htmlFor="smoker">{t("producer.smoker")}</label>
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
                    <label htmlFor={"smoker_yes"} className="ml-2">{t("producer.yes")}</label>
                  </div>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"smoker_no"}  {...field} name="smoker" value={0} checked={field.value === 0} />
                    <label htmlFor={"smoker_no"} className="ml-2">{t("producer.no")}</label>
                  </div>
                </div>
              )}
            />
            {getFormErrorMessage('smoker', errors)}
          </div>

          {/* scars */}
          <div className="p-field flex flex-col mb-4 ">
            <label htmlFor="scars">{t("producer.scars")}</label>
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
                    <label htmlFor={"scars_yes"} className="ml-2">{t("producer.yes")}</label>
                  </div>
                  <div className="flex items-center w-[50%] custom-radio">
                    <RadioButton inputId={"scars_no"}  {...field} name="scars" value={0} checked={field.value === 0} />
                    <label htmlFor={"scars_no"} className="ml-2">{t("producer.no")}</label>
                  </div>
                </div>
              )}
            />
            {getFormErrorMessage('scars', errors)}
          </div>
        </div>

        <div className="w-full mt-3 flex justify-center">
          <Button className="btn-primary px-3 xs:px-10 uppercase text-xl tracking-wider" type='submit' label={t("producer.btn")} />
        </div>
      </form>
    </div>
  )
}

export default RequestActors