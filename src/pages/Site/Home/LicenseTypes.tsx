import LicenseTypeModal from './LicenseTypeModal';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getByLocale } from '../../../utils/helpers.ts';

const LicenseTypes = ( {license_types} : any)=>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [licenseDetails , setLicenseDetails] = useState(null);
  const { t } = useTranslation();

  const showModal = (type:any) => {
    setLicenseDetails(type);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="bg-[#F9F8F6]">
        <div className="max-w-screen-xl mx-auto pt-28 pb-28">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900"><span
            dangerouslySetInnerHTML={{ __html: t('home.license_types') }}></span></h2>
          <section className="flex flex-wrap license-section sm:gap-3 md:gap-x-14">
          {license_types.map((type:any,i:any)=> (
              <div className="md:w-1/5 sm:w-1/2 h-auto my-4 relative license-wrap" key={i}>
                <img crossOrigin="anonymous | use-credentials" src={`${import.meta.env.VITE_APP_LOCAL_STORAGE_URL}licenseTypes/${type.cms_image}`} width="100%" />
                <div
                  className="licanse-details bg-[#f77860] w-full absolute h-16 bottom-0 left-0 items-center text-center rounded-xl text-xl text-white z-10 p-2">
                  {getByLocale(type ,'name')}
                </div>
                <div
                  className="license-view bg-[#f77860] w-full absolute h-full z-20 bottom-0 left-0 items-center text-center rounded-xl text-xl text-white" onClick={()=>{showModal(type)}}>
                  {t('common.view_details')}
                </div>
              </div>
            ))}
          </section>
        </div>

      </div>
      {
        licenseDetails? (
          <LicenseTypeModal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            licenseDetails={licenseDetails}
          />
        ) :""
      }

    </>

  )
}

const mapStateToProps = (state: any) => (
  {
    license_types: state.site.cms.license_types,
  });
export default connect(mapStateToProps)(LicenseTypes);

