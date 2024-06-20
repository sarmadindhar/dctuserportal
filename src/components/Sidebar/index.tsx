import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../../images/logo/logo.png';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#F9F8F6] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear bg-white rounded-2xl h-5/6">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-0 py-4 px-4 lg:mt-2 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/user/dashboard"
                  className={`dashboard-link group relative flex items-center gap-2.5 rounded-xl py-4 px-4 font-medium text-[#2D1015] hover:text-white hover:fill-white duration-300 ease-in-out hover:bg-[#2D1015] ${
                    pathname.includes('dashboard') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 14.625C8.65833 14.625 8.375 14.3417 8.375 14V11.5C8.375 11.1583 8.65833 10.875 9 10.875C9.34167 10.875 9.625 11.1583 9.625 11.5V14C9.625 14.3417 9.34167 14.625 9 14.625Z"
                      fill="#2D1015" />
                    <path
                      d="M13.6666 17.8H4.3333C2.81663 17.8 1.4333 16.6333 1.1833 15.1417L0.0749671 8.50001C-0.108366 7.46668 0.399967 6.14168 1.22497 5.48335L6.99997 0.858348C8.11663 -0.0416522 9.87497 -0.0333189 11 0.866681L16.775 5.48335C17.5916 6.14168 18.0916 7.46668 17.925 8.50001L16.8166 15.1333C16.5666 16.6083 15.15 17.8 13.6666 17.8ZM8.99163 1.44168C8.54997 1.44168 8.1083 1.57501 7.7833 1.83335L2.0083 6.46668C1.54163 6.84168 1.2083 7.70835 1.3083 8.30001L2.41663 14.9333C2.56663 15.8083 3.44163 16.55 4.3333 16.55H13.6666C14.5583 16.55 15.4333 15.8083 15.5833 14.925L16.6916 8.29168C16.7833 7.70835 16.45 6.82501 15.9916 6.45835L10.2166 1.84168C9.8833 1.57501 9.4333 1.44168 8.99163 1.44168Z"
                      fill="#2D1015" />
                  </svg>
                  Dashboard
                </NavLink>
              </li>
              {/* <!-- Menu Item Dashboard --> */}


              {/* <!-- Menu Item License --> */}

              {/* <!-- Menu Item License --> */}

              {/* <!-- Menu Item Fines --> */}

              <li>
                <NavLink
                  to="/user/licenseApply"
                  className={`fines group relative flex items-center gap-2.5 rounded-xl py-4 px-4 font-medium text-[#2D1015] hover:text-white hover:fill-white duration-300 ease-in-out hover:bg-[#2D1015] ${
                    (pathname.includes('user/licenseApply') || pathname.includes('user/licenseAmend') || pathname.includes('user/licenseCancel') || pathname.includes('user/licenseRenew')) &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >

                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.99992 17.9584C3.66659 17.9584 0.958252 15.5667 0.958252 12.625V9.54169C0.958252 9.20002 1.24159 8.91669 1.58325 8.91669C1.92492 8.91669 2.20825 9.20002 2.20825 9.54169C2.20825 11.725 4.26659 13.375 6.99992 13.375C9.73325 13.375 11.7916 11.725 11.7916 9.54169C11.7916 9.20002 12.0749 8.91669 12.4166 8.91669C12.7583 8.91669 13.0416 9.20002 13.0416 9.54169V12.625C13.0416 15.5667 10.3333 17.9584 6.99992 17.9584ZM2.20825 12.7167C2.26659 14.925 4.39159 16.7084 6.99992 16.7084C9.60825 16.7084 11.7333 14.925 11.7916 12.7167C10.7083 13.8917 8.99159 14.625 6.99992 14.625C5.00825 14.625 3.29992 13.8917 2.20825 12.7167Z"
                      fill="#2D1015" />
                    <path
                      d="M6.99992 10.4583C4.69992 10.4583 2.63324 9.42499 1.62491 7.75832C1.19158 7.04999 0.958252 6.22499 0.958252 5.37499C0.958252 3.94166 1.59992 2.59166 2.75825 1.57499C3.89159 0.583323 5.39992 0.0416565 6.99992 0.0416565C8.59992 0.0416565 10.0999 0.583325 11.2416 1.56666C12.3999 2.59166 13.0416 3.94166 13.0416 5.37499C13.0416 6.22499 12.8083 7.04165 12.3749 7.75832C11.3666 9.42499 9.29992 10.4583 6.99992 10.4583ZM6.99992 1.29166C5.69992 1.29166 4.48326 1.72499 3.57493 2.52499C2.6916 3.29166 2.20825 4.30832 2.20825 5.37499C2.20825 5.99999 2.37491 6.58332 2.69157 7.10832C3.48324 8.40832 5.13325 9.20832 6.99992 9.20832C8.86659 9.20832 10.5166 8.39999 11.3083 7.10832C11.6333 6.58332 11.7916 5.99999 11.7916 5.37499C11.7916 4.30832 11.3083 3.29166 10.4166 2.50832C9.50826 1.72499 8.29992 1.29166 6.99992 1.29166Z"
                      fill="#2D1015" />
                    <path
                      d="M6.99992 14.625C3.55825 14.625 0.958252 12.4417 0.958252 9.54166V5.37499C0.958252 2.43332 3.66659 0.0416565 6.99992 0.0416565C8.59992 0.0416565 10.0999 0.583325 11.2416 1.56666C12.3999 2.59166 13.0416 3.94166 13.0416 5.37499V9.54166C13.0416 12.4417 10.4416 14.625 6.99992 14.625ZM6.99992 1.29166C4.35825 1.29166 2.20825 3.12499 2.20825 5.37499V9.54166C2.20825 11.725 4.26659 13.375 6.99992 13.375C9.73325 13.375 11.7916 11.725 11.7916 9.54166V5.37499C11.7916 4.30832 11.3083 3.29166 10.4166 2.50832C9.50826 1.72499 8.29992 1.29166 6.99992 1.29166Z"
                      fill="#2D1015" />
                  </svg>

                  Licenses
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/user/fines"
                  className={`fines group relative flex items-center gap-2.5 rounded-xl py-4 px-4 font-medium text-[#2D1015] hover:text-white hover:fill-white duration-300 ease-in-out hover:bg-[#2D1015] ${
                    pathname.includes('fines') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >

                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.99992 17.9584C3.66659 17.9584 0.958252 15.5667 0.958252 12.625V9.54169C0.958252 9.20002 1.24159 8.91669 1.58325 8.91669C1.92492 8.91669 2.20825 9.20002 2.20825 9.54169C2.20825 11.725 4.26659 13.375 6.99992 13.375C9.73325 13.375 11.7916 11.725 11.7916 9.54169C11.7916 9.20002 12.0749 8.91669 12.4166 8.91669C12.7583 8.91669 13.0416 9.20002 13.0416 9.54169V12.625C13.0416 15.5667 10.3333 17.9584 6.99992 17.9584ZM2.20825 12.7167C2.26659 14.925 4.39159 16.7084 6.99992 16.7084C9.60825 16.7084 11.7333 14.925 11.7916 12.7167C10.7083 13.8917 8.99159 14.625 6.99992 14.625C5.00825 14.625 3.29992 13.8917 2.20825 12.7167Z"
                      fill="#2D1015" />
                    <path
                      d="M6.99992 10.4583C4.69992 10.4583 2.63324 9.42499 1.62491 7.75832C1.19158 7.04999 0.958252 6.22499 0.958252 5.37499C0.958252 3.94166 1.59992 2.59166 2.75825 1.57499C3.89159 0.583323 5.39992 0.0416565 6.99992 0.0416565C8.59992 0.0416565 10.0999 0.583325 11.2416 1.56666C12.3999 2.59166 13.0416 3.94166 13.0416 5.37499C13.0416 6.22499 12.8083 7.04165 12.3749 7.75832C11.3666 9.42499 9.29992 10.4583 6.99992 10.4583ZM6.99992 1.29166C5.69992 1.29166 4.48326 1.72499 3.57493 2.52499C2.6916 3.29166 2.20825 4.30832 2.20825 5.37499C2.20825 5.99999 2.37491 6.58332 2.69157 7.10832C3.48324 8.40832 5.13325 9.20832 6.99992 9.20832C8.86659 9.20832 10.5166 8.39999 11.3083 7.10832C11.6333 6.58332 11.7916 5.99999 11.7916 5.37499C11.7916 4.30832 11.3083 3.29166 10.4166 2.50832C9.50826 1.72499 8.29992 1.29166 6.99992 1.29166Z"
                      fill="#2D1015" />
                    <path
                      d="M6.99992 14.625C3.55825 14.625 0.958252 12.4417 0.958252 9.54166V5.37499C0.958252 2.43332 3.66659 0.0416565 6.99992 0.0416565C8.59992 0.0416565 10.0999 0.583325 11.2416 1.56666C12.3999 2.59166 13.0416 3.94166 13.0416 5.37499V9.54166C13.0416 12.4417 10.4416 14.625 6.99992 14.625ZM6.99992 1.29166C4.35825 1.29166 2.20825 3.12499 2.20825 5.37499V9.54166C2.20825 11.725 4.26659 13.375 6.99992 13.375C9.73325 13.375 11.7916 11.725 11.7916 9.54166V5.37499C11.7916 4.30832 11.3083 3.29166 10.4166 2.50832C9.50826 1.72499 8.29992 1.29166 6.99992 1.29166Z"
                      fill="#2D1015" />
                  </svg>

                  Fines
                </NavLink>
              </li>

              {/* <!-- Menu Item Fines --> */}


              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/user/profile"
                  className={`profile group relative flex items-center gap-2.5 rounded-xl py-4 px-4 font-medium text-[#2D1015] hover:text-white hover:fill-white duration-300 ease-in-out hover:bg-[#2D1015] ${
                    pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.63289 8.68332C6.60789 8.68332 6.59123 8.68332 6.56623 8.68332C6.52456 8.67499 6.46623 8.67499 6.41623 8.68332C3.99956 8.60832 2.17456 6.70832 2.17456 4.36666C2.17456 1.98332 4.11623 0.0416565 6.49956 0.0416565C8.88289 0.0416565 10.8246 1.98332 10.8246 4.36666C10.8162 6.70832 8.98289 8.60832 6.65789 8.68332C6.64956 8.68332 6.64123 8.68332 6.63289 8.68332ZM6.49956 1.29166C4.80789 1.29166 3.42456 2.67499 3.42456 4.36666C3.42456 6.03332 4.72456 7.37499 6.38289 7.43332C6.43289 7.42499 6.54123 7.42499 6.64956 7.43332C8.28289 7.35832 9.56623 6.01666 9.57456 4.36666C9.57456 2.67499 8.19123 1.29166 6.49956 1.29166Z"
                      fill="#2D1015" />
                    <path
                      d="M12.783 8.79168C12.758 8.79168 12.733 8.79168 12.708 8.78334C12.3663 8.81668 12.0163 8.57501 11.983 8.23334C11.9496 7.89168 12.158 7.58334 12.4996 7.54168C12.5996 7.53334 12.708 7.53334 12.7996 7.53334C14.0163 7.46668 14.9663 6.46668 14.9663 5.24168C14.9663 3.97501 13.9413 2.95001 12.6746 2.95001C12.333 2.95834 12.0496 2.67501 12.0496 2.33334C12.0496 1.99168 12.333 1.70834 12.6746 1.70834C14.6246 1.70834 16.2163 3.30001 16.2163 5.25001C16.2163 7.16668 14.7163 8.71668 12.808 8.79168C12.7996 8.79168 12.7913 8.79168 12.783 8.79168Z"
                      fill="#2D1015" />
                    <path
                      d="M6.64134 17.7917C5.00801 17.7917 3.36634 17.375 2.12467 16.5417C0.966341 15.775 0.333008 14.725 0.333008 13.5833C0.333008 12.4417 0.966341 11.3833 2.12467 10.6083C4.62467 8.95001 8.67467 8.95001 11.158 10.6083C12.308 11.375 12.9497 12.425 12.9497 13.5667C12.9497 14.7083 12.3163 15.7667 11.158 16.5417C9.90801 17.375 8.27467 17.7917 6.64134 17.7917ZM2.81634 11.6583C2.01634 12.1917 1.58301 12.875 1.58301 13.5917C1.58301 14.3 2.02467 14.9833 2.81634 15.5083C4.89134 16.9 8.39134 16.9 10.4663 15.5083C11.2663 14.975 11.6997 14.2917 11.6997 13.575C11.6997 12.8667 11.258 12.1833 10.4663 11.6583C8.39134 10.275 4.89134 10.275 2.81634 11.6583Z"
                      fill="#2D1015" />
                    <path
                      d="M14.283 16.2917C13.9913 16.2917 13.733 16.0917 13.6746 15.7917C13.608 15.45 13.8246 15.125 14.158 15.05C14.683 14.9417 15.1663 14.7333 15.5413 14.4417C16.0163 14.0833 16.2746 13.6333 16.2746 13.1583C16.2746 12.6833 16.0163 12.2333 15.5496 11.8833C15.183 11.6 14.7246 11.4 14.183 11.275C13.8496 11.2 13.633 10.8667 13.708 10.525C13.783 10.1917 14.1163 9.97499 14.458 10.05C15.1746 10.2083 15.7996 10.4917 16.308 10.8833C17.083 11.4667 17.5246 12.2917 17.5246 13.1583C17.5246 14.025 17.0746 14.85 16.2996 15.4417C15.783 15.8417 15.133 16.1333 14.4163 16.275C14.3663 16.2917 14.3246 16.2917 14.283 16.2917Z"
                      fill="#2D1015" />
                  </svg>
                  Profile
                </NavLink>
              </li>
              {/* <!-- Menu Item Profile --> */}


            </ul>
          </div>

          {/* <!-- Others Group --> */}

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
