import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  Modal } from 'antd';
import { currencyFormat, getByLocale } from '../../../utils/helpers';
import { useTranslation } from 'react-i18next';

const LicenseTypeModal = ({visible, onOk , onCancel, licenseDetails}:any)=>{
  const { t } = useTranslation();
  return (
    <Modal title="" open={visible} onOk={onOk} onCancel={onCancel} width={850} footer={null} centered>
      <div className="flex">
        <img crossOrigin="anonymous | use-credentials"
             src={`${import.meta.env.VITE_APP_LOCAL_STORAGE_URL}licenseTypes/${licenseDetails.cms_image}`} width="378" height="451"   className="rounded-lg" />

        <div className="modal-licence-details pl-10 items-start flex flex-col justify-center max-w-md">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900">             {getByLocale(licenseDetails, 'name')}</h2>
          <p className=" font-regular">  {getByLocale(licenseDetails, 'description')} </p>
          <h2
            className="mt-4 text-md mb-4 border-b border-gray-200 pb-2 w-full block">{t('common.required_documents')}</h2>
          <div className="flex flex-wrap gap-2">
            {
              licenseDetails && licenseDetails.documents && licenseDetails.documents.map((doc: any) => (
                <div className="w-auto border border-gray-400 rounded-lg py-1 px-2 text-sm"> {getByLocale(doc, 'name')}</div>
              ))
            }
          </div>
          <div className="modal-footer mt-5 flex items-center">
            <div>
              <p className="text-[#F77860] text-sm">{t('common.fee')}</p>
              <h1 className="text-lg font-semibold text-black"> {currencyFormat(licenseDetails?.fee)}  </h1>
            </div>
            <NavLink to="/user/dashboard"
                     className="ml-10 w-60 text-center rounded-xl bg-[#F77860] px-5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-[#CC5E49] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{t('common.apply_now')}</NavLink>
          </div>
        </div>
      </div>
    </Modal>
    // <div className={`relative z-50 ${isModalOpen ? '' : 'hidden'}`} aria-labelledby="modal-title" role="dialog"
    //      aria-modal="true">
    //     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    //     <div className="fixed inset-0 z-10  overflow-y-auto">
    //       <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    //         <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
    //           <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
    //             <div className="sm:flex sm:items-start">
    //               <div className="text-center sm:text-left flex">
    //                 <button className="close-modal absolute right-4 top-4 text-2xl">&#x2715</button>
    //                 <img src="../assets/img/modal-license-img.png" alt="" width="378" height="451"
    //                      className="rounded-lg" />
    //                 <div className="modal-licence-details pl-10 items-start flex flex-col justify-center max-w-md">
    //                   <h2 className="text-3xl font-bold tracking-tight text-gray-900">Airport <span
    //                     className="text-[#F77860]">License</span></h2>
    //                   <p className=" font-regular">The license is granted to allow designated entertainment and tourism
    //                     districts to serve alcoholic beverages to visitors</p>
    //                   <h2 className="mt-4 text-md mb-4 border-b border-gray-200 pb-2 w-full block">Required Documents</h2>
    //                   <div className="flex flex-wrap gap-2">
    //                     <div className="w-auto border border-gray-400 rounded-lg py-1 px-2 text-sm">Owner Passport</div>
    //                     <div className="w-auto border border-gray-400 rounded-lg py-1 px-2 text-sm">Owner Passport</div>
    //                     <div className="w-auto border border-gray-400 rounded-lg py-1 px-2 text-sm">Owner Passport</div>
    //                     <div className="w-auto border border-gray-400 rounded-lg py-1 px-2 text-sm">Owner Passport</div>
    //                     <div className="w-auto border border-gray-400 rounded-lg py-1 px-2 text-sm">Owner Passport</div>
  //                     <div className="w-auto border border-gray-400 rounded-lg py-1 px-2 text-sm">Owner Passport</div>
  //                     <div className="w-auto border border-gray-400 rounded-lg py-1 px-2 text-sm">Owner Passport</div>
  //                     <div className="w-auto border border-gray-400 rounded-lg py-1 px-2 text-sm">Owner Passport</div>
  //                   </div>
  //                   <div className="modal-footer mt-5 flex items-center">
  //                     <div>
  //                       <p className="text-[#F77860] text-sm">Fee</p>
  //                       <h1 className="text-lg font-semibold text-black">AED 15,000.00</h1>
  //                     </div>
  //                     <a href="#"
  //                        className="ml-10 w-60 text-center rounded-xl bg-[#F77860] px-5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-[#CC5E49] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply</a>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  )
}



export default LicenseTypeModal;