import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next'

import { getFormErrorMessage } from '../../../../Config/Global'

import { InputTextarea } from 'primereact/inputtextarea';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useClientGlobalContext } from '../../Contexts/ClientGlobalContext';

export default function ContactUs() {
  const { t, i18n } = useTranslation();
  const { contactUsRef } = useClientGlobalContext()
  const { handleSubmit, control, formState: { errors } } = useForm();

  const contactUsHandler = () => {

  }
  return (
    <section ref={contactUsRef} className='my-16 flex flex-col justify-center items-center w-full section section-5 bg-[#fff]' id='contact-us'>
      <h6 className={` text-md sm:text-lg ${i18n.language === "en" ? "tracking-[7px]" : ""} mb-2 text-light-primary font-normal`}>{t("contact_us.min_title")}</h6>
      <h1 className='text-3xl sm:text-4xl secondary-font mb-5  sm:mb-10 text-center font-normal	'>{t("contact_us.title")}</h1>
      <form className='flex flex-wrap w-full xs:w-7/12 lg:w-4/12 sm:text-xl px-3 ' onSubmit={handleSubmit(contactUsHandler)}>
        <div className="w-full p-field flex flex-col mb-4">
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: t("messages.required") }}
            render={({ field, fieldState }) => (
              <InputTextarea
                {...field}
                rows={5}
                cols={30}
                placeholder={t("contact_us.msg_placeholder")}
                inputRef={field.ref}
                className={`p-1 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
            )}

          />
          {getFormErrorMessage('message', errors)}
        </div>

        <div className="w-9/12 p-field flex flex-col mb-4 pe-5">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: t("messages.required"),
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: t("messages.email"),
              },
            }}

            render={({ field, fieldState }) => (
              <InputText
                id="email"
                {...field}
                placeholder={t("contact_us.email_placeholder")}
                inputRef={field.ref}
                className={`p-1 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
            )}

          />
          {getFormErrorMessage('email', errors)}
        </div>

        <div className="w-3/12 p-field flex flex-col">
          <Button className="btn-secondary w-full uppercase" type='submit' label={t("contact_us.btn")} />
        </div>
      </form>
    </section>
  )
}

