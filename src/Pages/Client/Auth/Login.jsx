import React from 'react'
import { useTranslation } from 'react-i18next'
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button';

import { getFormErrorMessage } from '../../../Config/Global';
import Layout from '../Layout/Layout'

function Login() {
    const { t } = useTranslation("auth");
    const { handleSubmit, control, formState: { errors } } = useForm();

    const signUpHandler = () => {

    }

    return (
        <Layout>
            <div className="flex justify-center items-center h-[100vh] w-full studio_bg bg-positioning">
                <div className="p-5 xs:p-12 flex flex-col items-center bg-semi-white rounded-[10px] w-[90%] sm:w-[60%] lg:w-[45%] xl:w-[35%] " >
                    <h1 className='secondary-font pb-12 text-[2rem]'>{t("login.title")}</h1>
                    <form className='w-full' onSubmit={handleSubmit(signUpHandler)}>
                        <div className="p-field flex flex-col mb-4">
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
                                        placeholder={t("login.email")}
                                        inputRef={field.ref}
                                        className={`p-1 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                                )}

                            />
                            {getFormErrorMessage('email', errors)}
                        </div>

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
                                        className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                                        placeholder={t("login.password")}
                                        toggleMask
                                    />
                                )}
                            />
                            {getFormErrorMessage('password', errors)}
                        </div>

                        <Link to="/forget-password">
                            <div className="p-field flex justify-end items-center text-end mt-12 text-xs pe-1">
                                {t("login.forget_pass")}
                            </div>
                        </Link>

                        <div className="p-field flex flex-col mt-1">
                            <Button className="btn-secondary w-full uppercase text-xl tracking-wider" type='submit' label={t("login.btn")} />
                        </div>

                        <div className="p-field flex justify-end items-center text-end mt-1 text-xs	pe-1 ">
                            {t("login.go_to_register")}
                            <span className='text-secondary font-bold	'>
                                <Link to="/sign-up">
                                    &nbsp; {t("login.sign_up")}
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div >
        </Layout >
    )
}

export default Login