import React from 'react'
import { useTranslation } from 'react-i18next'
import { Controller, useForm } from 'react-hook-form';

import { classNames } from 'primereact/utils';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';


import { getFormErrorMessage } from '../../../Config/Global';
import Layout from '../Layout/Layout'

const availability = []
const availabilityAR = []

function Careers() {
    const { t, i18n } = useTranslation("careers");
    const { handleSubmit, control, formState: { errors } } = useForm();

    const formHandler = () => {

    }

    return (
        <Layout>
            <div className="flex justify-center items-center w-full studio_bg bg-positioning pt-[120px] pb-10">
                <div className="p-5 xs:p-8 flex flex-col items-center bg-semi-white rounded-[10px] w-[90%] sm:w-[60%] lg:w-[45%] xl:w-[35%] " >
                    <span className="text-xl tracking-wider">{t("join_us")}</span>
                    <h1 className='secondary-font text-2xl xs:text-4xl text-center my-1'>{t("title")}</h1>
                    <span className="text-lg">{t("sub_title")}</span>

                    <form className='w-full mt-4' onSubmit={handleSubmit(formHandler)}>
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
                                        placeholder={t("full_name")}
                                        inputRef={field.ref}
                                        className={`p-1 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                                )}

                            />
                            {getFormErrorMessage('full_name', errors)}
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
                                        placeholder={t("phone")}
                                        inputRef={field.ref}
                                        className={`p-1  border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                                )}

                            />
                            {getFormErrorMessage('phone_number', errors)}
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
                                        placeholder={t("email")}
                                        inputRef={field.ref}
                                        className={`p-1  border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                                )}
                            />
                            {getFormErrorMessage('email', errors)}
                        </div>

                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="address"
                                control={control}
                                defaultValue=""
                                rules={{ required: t("messages.required") }}
                                render={({ field, fieldState }) => (
                                    <InputText
                                        id="address"
                                        {...field}
                                        placeholder={t("address")}
                                        inputRef={field.ref}
                                        className={`p-1 border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `} />
                                )}

                            />
                            {getFormErrorMessage('address', errors)}
                        </div>

                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="resume"
                                control={control}
                                defaultValue=""
                                rules={{ required: t("messages.required") }}
                                render={({ field, fieldState }) => (
                                    <FileUpload
                                        id="resume"
                                        mode="basic"
                                        name="resume"
                                        accept="image/*"
                                        customUpload
                                        {...field}
                                        inputRef={field.ref}
                                        // uploadHandler={customBase64Uploader}
                                        className={`p-1 upload_input border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                                    />
                                 )}
                            />
                            {getFormErrorMessage('resume', errors)}
                        </div>

                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="availability"
                                className="w-full"
                                control={control}
                                defaultValue=""
                                rules={{ required: t("messages.required") }}
                                render={({ field, fieldState }) => (
                                    <Dropdown
                                        id="availability"
                                        {...field}
                                        inputRef={field.ref}
                                        className={`w-full border-light-primary ${classNames({ 'border border-[red]': fieldState.invalid })} `}
                                        placeholder={t("availability")}
                                        options={i18n?.language === "en" ? availability : availabilityAR}
                                        optionLabel="label"
                                        optionValue='value'
                                        filter

                                    />
                                )}
                            />
                            {getFormErrorMessage('availability', errors)}
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
                                        <label htmlFor="terms" className="ml-2 text-sm">{t('terms')}</label>
                                    </div>

                                )}
                            />
                            {getFormErrorMessage('terms', errors)}
                        </div>

                        <div className="p-field flex flex-col mb-4">
                            <Controller
                                name="internship_terms"
                                className="w-full"
                                control={control}
                                defaultValue=""
                                rules={{ required: t("messages.required") }}
                                render={({ field }) => (
                                    <div className="flex items-center ">
                                        <Checkbox inputId='internship_terms' {...field} checked={field.value} className='mt-1'></Checkbox>
                                        <label htmlFor="internship_terms" className="ml-2 text-sm">{t('internship_terms')}</label>
                                    </div>

                                )}
                            />
                            {getFormErrorMessage('internship_terms', errors)}
                        </div>

                        <div className="p-field flex flex-col mt-8">
                            <Button className="btn-secondary w-full uppercase text-xl tracking-wider" type='submit' label={t("btn")} />
                        </div>
                    </form>
                </div>
            </div >
        </Layout >
    )
}

export default Careers