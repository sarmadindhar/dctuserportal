import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo/logo.png';
import { useTranslation } from 'react-i18next';
import { setLocale } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
const SiteHeader = (): any => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.app.locale);
  const [localeName, setLocaleName] = useState('ar');
  const setAppLocale = ()=>{
    if(locale === 'en'){
      dispatch(setLocale('ar'))
      setLocaleName('en')
    }else{
      dispatch(setLocale('en'))
      setLocaleName('ar')
    }
  }

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="" src={Logo} alt="" width="175" height="60" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                   aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            <NavLink to="/"  >
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900 active">{t('header.type')}</a>
            </NavLink>
            <NavLink to="/faq">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">{t('header.faq')}</a>
            </NavLink>
            <NavLink to="/guidelines">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">{t('header.guidelines')}</a>
            </NavLink>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">{t('header.contact')}</a>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end  ltr:border-l rtl:border-r border-black items-center ltr:pl-5 rtl:pr-5">
              <NavLink to="/login">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 mr-3 pl-3">{t('common.login')} </a>
              </NavLink>
              <NavLink to="/register">
                <a href="#"
                   className="rounded-md bg-[#F77860] px-2 py-1 ml-5 text-sm font-regular text-white shadow-sm hover:bg-[#CC5E49] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {t('common.signup')}
                </a>
              </NavLink>
              <a href="#"
                 className="rounded-md bg-[#fff] px-2 py-1 ml-5 text-sm font-regular text-black border border-black hover:bg-black hover:text-white"  onClick={()=>{setAppLocale()}}>{t(`locale.${localeName}`)}</a>
              <a href="#" className="text-sm font-regular leading-6 text-gray-900 ml-5">AA </a>
            </div>
          </div>

        </nav>
        {/*Mobile menu, show/hide based on menu open state. */}
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/*Background backdrop, show/hide based on slide-over state.*/}
          <div className="fixed inset-0 z-50"></div>
          <div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">

                <img className="" src={Logo} alt="" width="175" height="60" />
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink to="/">
                    <a href="#"
                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('header.type')}</a>
                  </NavLink>
                  <NavLink to="/">
                    <a href="#"
                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('header.faq')}</a>
                  </NavLink>
                  <NavLink to="/">
                    <a href="#"
                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('header.guidelines')}</a>
                  </NavLink>


                  <NavLink to="/">
                    <a href="#"
                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('header.contact')}</a>
                  </NavLink>
                </div>
                <div className="py-6">
                  <a href="#"
                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('common.login')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default SiteHeader;

