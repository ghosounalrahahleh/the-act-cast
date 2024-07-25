import React from 'react'
import { useTranslation } from 'react-i18next'
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password'
import { Button } from 'primereact/button';

import { getFormErrorMessage } from '../../../Config/Global';
import Layout from '../Layout/Layout'

function ResetPassword() {
  const { t } = useTranslation("auth");
  const { handleSubmit, control, formState: { errors }, watch } = useForm();

  const ResetPassHandler = () => {

  }

  return (
    <Layout>
      <div className="flex justify-center items-center h-[100vh] w-full studio_bg bg-positioning">
        <div className="p-5 xs:p-12 flex flex-col items-center bg-semi-white rounded-[10px] w-[90%] sm:w-[60%] lg:w-[45%] xl:w-[35%] " >
          <h1 className='secondary-font pb-12 text-[2rem]'>{t("reset_pass.title")}</h1>
          <form className='w-full' onSubmit={handleSubmit(ResetPassHandler)}>

            <div className="p-field flex flex-col mb-4">
              <Controller
                name="password"
                className="w-full"
                control={control}
                defaultValue=""
                rules={{ required: t("messages.required") }}
                render={({ field, fieldState }) => (
                  <Password
                    id="password"
                    {...field}
                    inputRef={field.ref}
                    className={`w-full  ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                    placeholder={t("reset_pass.password")}
                    toggleMask
                    feedback={false}
                  />
                )}
              />
              {getFormErrorMessage('password', errors)}
            </div>

            <div className="p-field flex flex-col mb-4">
              <Controller
                name="confirm_password"
                className="w-full"
                control={control}
                defaultValue=""
                rules={{
                  required: t("messages.required"),
                  validate: value =>
                    value === watch("password") || t("messages.confirm_pass")
                }}
                render={({ field, fieldState }) => (
                  <Password
                    id="confirm_password"
                    {...field}
                    inputRef={field.ref}
                    className={`w-full  ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                    placeholder={t("reset_pass.confirm_pass")}
                    toggleMask
                    feedback={false}
                  />
                )}
              />
              {getFormErrorMessage('confirm_password', errors)}
            </div>

            <div className="p-field flex flex-col mt-12">
              <Button className="btn-secondary w-full uppercase text-xl tracking-wider" type='submit' label={t("reset_pass.btn")} />
            </div>

            <div className="p-field flex justify-end items-center text-end mt-1 text-xs	pe-1">
              {t("go_to")}
              <span className='text-primary font-bold	'>
                <Link to="/login">
                  &nbsp; {t("sign_up.login")}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div >
    </Layout >
  )
}

export default ResetPassword