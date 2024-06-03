import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getByLocale } from '../../utils/helpers.ts';
import { useLocation } from 'react-router-dom';
const SiteHeroBanner = (): any => {
  const { t } = useTranslation();
  const cms = useSelector((state) => state.site.cms);
  const location = useLocation();
  const route = location.pathname;

  return (
    <div className="bg-white">
      {route === "/" ? (
        <div className="relative isolate px-6 pt-14 lg:px-8 w-full h-full bg-center bg-no-repeat bg-cover bg-[url('../images/assets/hero-banner.png')]" >
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-6xl font-bold tracking-tight text-gray-900  mt-5">{getByLocale(cms.home,'hero_banner_heading')}</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600"> {getByLocale(cms.home,'hero_banner_text')} </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#"
                   className=" w-40 rounded-md bg-[#F77860] px-5 py-2.5 text-sm font-regular text-white shadow-sm hover:bg-[#CC5E49] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{t('common.apply_now')}</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex hero-banner-guideline">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">

            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default SiteHeroBanner

