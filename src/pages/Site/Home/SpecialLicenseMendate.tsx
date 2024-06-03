import { getByLocale } from '../../../utils/helpers.ts';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const SpecialLicenseMandate = () =>{
  const cms = useSelector((state) => state.site.cms);
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto pt-20 pb-20">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900">  <span dangerouslySetInnerHTML={{ __html: t('home.special_license_mandate') }}></span>    </h2>
        <p className="mt-6 font-regular">{getByLocale(cms.home ,'banner_text')}</p>
      </div>

    </div>
  );
}

export default SpecialLicenseMandate;