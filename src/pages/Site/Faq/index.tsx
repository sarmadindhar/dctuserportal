import SiteLayout from '../../../layout/SiteLayout.tsx';
import { connect } from 'react-redux';
import SiteContactForm from '../../../common/SiteContactForm.tsx';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { getByLocale } from '../../../utils/helpers.ts';

const Faq = ({faqs}:any) => {
  const { t } = useTranslation();
  return (
    <SiteLayout>
      <div className="bg-white mt-8">
        <div className="max-w-screen-xl mx-auto pb-20">
          <h2 className="text-5xl font-bold tracking-tight text-[#2D1015] mb-11">
          <span
            dangerouslySetInnerHTML={{ __html: t('faq.heading') }}></span>
          </h2>
          {faqs.map((faq: any, i: number) => (
            <div key={i}
                 className="mb-8 w-full border border-gray-100 h-auto p-4 rounded-2xl bg-[#F9F8F6] hover:border-[#f77860] shadow shadow-gray-200  hover:drop-shadow-xl drop-shadow-md">
              <h1 className="text-xl font-normal text-black mb-2">{getByLocale(faq ,'question')}</h1>
              <p className="text-base text-black font-light">{getByLocale(faq ,'answer')}</p>
            </div>
          ))}
        </div>
      </div>
      <SiteContactForm />
    </SiteLayout>
  );
}
const mapStateToProps = (state: any) => (
  {
    faqs: state.site.cms.faq.faqs,
  });
export default connect(mapStateToProps)(Faq);