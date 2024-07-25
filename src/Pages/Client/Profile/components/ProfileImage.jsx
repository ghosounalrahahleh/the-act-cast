import React from 'react'
import { useTranslation } from 'react-i18next'

import profileImage from "../../../../assets/images/workShop/work_shop1.jfif"

import { MdCloudUpload } from "react-icons/md";
import { FileUpload } from 'primereact/fileupload';

function ProfileImage() {
    const { t } = useTranslation("profile");

    return (
        <div className='profile-image-container'>
            <div className="relative overflow-hidden h-full w-full">
                <img src={profileImage} alt="profile image" className='rounded-[50%] h-full w-full' />
                <div className='profile-image-overlay text-center rounded-[50%] text-[#fff] cursor-pointer'>
                    <h6 className=' uppercase font-bold'>{t("profile_image")}</h6>
                    <FileUpload
                        mode="basic"
                        name="profile_image"
                         accept="image/*"
                        maxFileSize={1000000}
                        className="custom-file-upload"
                        //   onUpload={onUpload} 
                        chooseOptions={{ icon: <MdCloudUpload className='text-4xl text-[white]' />}}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileImage