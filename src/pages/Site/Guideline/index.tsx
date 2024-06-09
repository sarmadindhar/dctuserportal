import SiteLayout from '../../../layout/SiteLayout.tsx';
import { connect } from 'react-redux';
import SiteContactForm from '../../../common/SiteContactForm.tsx';
import Download from '../../../images/assets/download.svg';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Guideline = () => {
  const { t } = useTranslation();
  return (

    <SiteLayout>
      <div className="bg-white mt-10">
        <div className="max-w-screen-xl mx-auto pb-20">
          <h2 className="text-5xl font-bold tracking-tight text-[#2D1015]">  <span
            dangerouslySetInnerHTML={{ __html: t('guideline.heading') }}></span></h2>
          <div className="flex w-full justify-between gap-8">
            <div
              className="drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-2/6 p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056]">
              <h1 className="text-4xl font-bold ">{t('guideline.circulars')}</h1>
              <a href="#" className="text-base font-bold flex relative z-10">{t('common.download')} <img
                src={Download} className="ltr:ml-2 rtl:mr-2" /></a>
            </div>
            <div
              className="drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-2/6 p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056]">
              <h1 className="text-4xl font-bold ">{t('guideline.regulations')}</h1>
              <a href="#" className="text-base font-bold flex relative z-10">{t('common.download')} <img
                src={Download} className="ltr:ml-2 rtl:mr-2" /></a>
            </div>
            <div
              className="drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-2/6 p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056]">
              <h1 className="text-4xl font-bold ">{t('guideline.guidelines')}</h1>
              <a href="#" className="text-base font-bold flex relative z-10">{t('common.download')} <img
                src={Download} className="ltr:ml-2 rtl:mr-2" /></a>
            </div>
          </div>
        </div>
      </div>
      <SiteContactForm />
    </SiteLayout>
  );
}
const mapStateToProps = (state: any) => (
  {
    faqs: state.site.cms.faqs,
  });
export default connect(mapStateToProps)(Guideline);