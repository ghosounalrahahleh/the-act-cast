import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom';

import { getFormErrorMessage } from '../../../Config/Global';
import countriesAr from "../../../assets/JsonFiles/countries_ar.json"
import countries from "../../../assets/JsonFiles/countries.json"
import Layout from '../Layout/Layout'

import { RadioButton } from 'primereact/radiobutton'
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button';

function SignUp() {
    const { t, i18n } = useTranslation("auth");
    const { handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const signUpHandler = (date) => {
        if (date?.user_type === "PRODUCER") {
            navigate("/profile?user-type=PRODUCER")
        } else {
            navigate("/profile?user-type=ACTOR")
        }
    }

    return (
        <Layout>
            <div className="flex justify-center items-center w-full studio_bg bg-positioning pt-[120px] pb-10">
                <div className="p-5 xs:p-8 flex flex-col items-center bg-semi-white rounded-[10px] w-[90%] sm:w-[60%] lg:w-[45%] xl:w-[35%] " >
                    <h1 className='secondary-font text-2xl xs:text-4xl mb-5 xs:mb-8 text-center'>{t("sign_up.title")}</h1>
                    <form className='w-full' onSubmit={handleSubmit(signUpHandler)}>
                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="user_type"
                                className="w-full"
                                control={control}
                                defaultValue=""
                                rules={{ required: t("messages.required") }}
                                render={({ field }) => (
                                    <div className='flex w-full'>
                                        <div className="flex items-center w-[50%] custom-radio">
                                            <RadioButton inputId={"producer"}  {...field} name="user_type" value="PRODUCER" checked={field.value === "PRODUCER"} />
                                            <label htmlFor={"producer"} className="ml-2">{t("sign_up.producer")}</label>
                                        </div>
                                        <div className="flex items-center w-[50%] custom-radio">
                                            <RadioButton inputId={"actor"}  {...field} name="user_type" value="ACTOR" checked={field.value === "ACTOR"} />
                                            <label htmlFor={"actor"} className="ml-2">{t("sign_up.actor")}</label>
                                        </div>
                                    </div>
                                )}
                            />
                            {getFormErrorMessage('user_type', errors)}
                        </div>

                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="full_name"
                                control={control}
                                defaultValue=""
                                rules={{ required: t("messages.required") }}
                                render={({ field, fieldState }) => (
                                    <InputText
                                        id="full_name"
                                        {...field}
                                        placeholder={t("sign_up.full_name")}
                                        inputRef={field.ref}
                                        className={`p-1 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                                )}

                            />
                            {getFormErrorMessage('full_name', errors)}
                        </div>


                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="gender"
                                className="w-full"
                                control={control}
                                defaultValue=""
                                rules={{ required: t("messages.required") }}
                                render={({ field }) => (
                                    <div className='flex w-full'>
                                        <div className="flex items-center w-[50%]">
                                            <RadioButton inputId={"male"}  {...field} name="gender" value="MALE" checked={field.value === "MALE"} />
                                            <label htmlFor={"male"} className="ml-2">{t("sign_up.male")}</label>
                                        </div>
                                        <div className="flex items-center w-[50%]">
                                            <RadioButton inputId={"female"}  {...field} name="gender" value="FEMALE" checked={field.value === "FEMALE"} />
                                            <label htmlFor={"female"} className="ml-2">{t("sign_up.female")}</label>
                                        </div>
                                    </div>
                                )}
                            />
                            {getFormErrorMessage('gender', errors)}
                        </div>

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
                                        placeholder={t("sign_up.email")}
                                        inputRef={field.ref}
                                        className={`p-1  border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                                )}

                            />
                            {getFormErrorMessage('email', errors)}

                        </div>

                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="phone_number"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: t("messages.required"),
                                }}
                                render={({ field, fieldState }) => (
                                    <InputText
                                        id="phone_number"
                                        {...field}
                                        placeholder={t("sign_up.phone")}
                                        inputRef={field.ref}
                                        className={`p-1  border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                                )}

                            />
                            {getFormErrorMessage('phone_number', errors)}
                        </div>

                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="country"
                                className="w-full"
                                control={control}
                                defaultValue=""
                                rules={{ required: t("messages.required") }}
                                render={({ field, fieldState }) => (
                                    <Dropdown
                                        id="country"
                                        {...field}
                                        inputRef={field.ref}
                                        className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                                        placeholder={t("sign_up.country")}
                                        options={i18n?.language === "en" ? countries : countriesAr}
                                        optionLabel="label"
                                        optionValue='value'
                                        filter

                                    />
                                )}
                            />
                            {getFormErrorMessage('country', errors)}
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
                                        className={`w-full  border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                                        placeholder={t("sign_up.password")}
                                        toggleMask
                                    />
                                )}
                            />
                            {getFormErrorMessage('password', errors)}
                        </div>

                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="terms"
                                className="w-full"
                                control={control}
                                defaultValue=""
                                rules={{ required: t("messages.required") }}
                                render={({ field }) => (
                                    <div className="flex items-center ">
                                        <Checkbox inputId='terms' {...field} checked={field.value} className='mt-1'></Checkbox>
                                        <label htmlFor="terms" className="ml-2 text-sm">{t('sign_up.terms')}</label>
                                    </div>

                                )}
                            />
                            {getFormErrorMessage('terms', errors)}
                        </div>

                        <div className="p-field flex flex-col mt-8">
                            <Button className="btn-secondary w-full uppercase text-xl tracking-wider" type='submit' label={t("sign_up.btn")} />
                        </div>

                        <div className="p-field flex justify-end items-center text-end mt-1 text-xs	pe-1">
                            {t("sign_up.go_to_login")}
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

export default SignUp