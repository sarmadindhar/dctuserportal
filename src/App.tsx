import { useEffect, useState } from 'react';
import { Route, Routes, useLocation ,Navigate} from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';

import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile/index.tsx';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Home from './pages/Site/Home';
import Faq from './pages/Site/Faq';
import Guideline from './pages/Site/Guideline';
import ForgotPassword from './pages/Authentication/ForgotPassword.tsx';
import ResetPassword from './pages/Authentication/ResetPassword.tsx';
import OtpVerification from './pages/Authentication/OtpVerification.tsx';
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import LicenseDetails from './pages/LicenseRequest/NewLicenseRequest/LicenseDetails.tsx';
import SelectLicenseType from './pages/LicenseRequest/NewLicenseRequest/SelectLicenseType.tsx';
import SelectTradeLicense from './pages/LicenseRequest/SelectTradeLicense.tsx';
import LicenseAmendDetails from './pages/LicenseRequest/AmmendLicenseRequest/LicenseAmendDetails.tsx';
import CancelRenewLicenseDetails from './pages/LicenseRequest/CancelRenewLicenseDetails.tsx';
import RequestStatus from './pages/LicenseRequest/RequestStatus.tsx';
import Fines from './pages/Fines';
import DownloadLicense from './pages/LicenseRequest/DownloadLicense.tsx';
import Invoice from './pages/Invoice';
import PaymentStatus from './pages/Invoice/PaymentStatus.tsx';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const locale = useSelector((state) => state.app.locale);
  const auth = useSelector((state) => state.auth.user);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const isAuthenticated = ()=>{
    return auth &&  auth.id
  }
  useEffect(() => {
    // Set direction based on the current language
    if (locale === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [locale]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Home | DCT" />
              <Home />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <PageTitle title="FAQ | DCT" />
              <Faq />
            </>
          }
        />
        <Route
          path="/guidelines"
          element={
            <>
              <PageTitle title="Guideline | DCT" />
              <Guideline />
            </>
          }
        />
        <Route
          path="/user/dashboard"
          element={
            <>
              {
                isAuthenticated() ? (
                    <>
                      <PageTitle title="SLS | Dashboard" />
                      <Dashboard /></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />

        <Route
          path="/user/licenseApply"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <SelectLicenseType /></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />

        <Route
          path="/user/licenseAmend/:businessLicenseId"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <SelectTradeLicense action={'amend'} /></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />

        <Route
          path="/user/licenseCancel/:businessLicenseId"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <SelectTradeLicense action={'cancel'}/></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />


        <Route
          path="/user/licenseDownload/:businessLicenseId"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <DownloadLicense/></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />

        <Route
          path="/user/licenseCancel/:businessLicenseId/details"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <CancelRenewLicenseDetails action={'cancel'}/></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />



        <Route
          path="/user/licenseRenew/:businessLicenseId"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <SelectTradeLicense action={'renew'}/></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />

        <Route
          path="/user/licenseRenew/:businessLicenseId/details"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <CancelRenewLicenseDetails action={'renew'}/></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />


        <Route
          path="/user/requestStatus/:id/:action"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <RequestStatus />
                  </>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />

        <Route
          path="/user/licenseAmend/:workflowId/details/:businessLicenseId?"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <LicenseAmendDetails /></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />
        <Route
          path="/user/licenseApply/:workflowId/details/:id?"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <LicenseDetails /></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />

        <Route
          path="/user/licenseApply/:workflowId/status/:id"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <RequestStatus action={'new'} /></>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />



        <Route
          path="/user/fines"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <Fines></Fines>
                  </>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />


        <Route
          path="/user/profile"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <Profile/>
                  </>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />

        <Route
          path="/user/payment-status/:paymentId/:paymentType?"
          element={
            <>
              {
                isAuthenticated() ? (
                  <>
                    <PageTitle title="SLS | Dashboard" />
                    <PaymentStatus/>
                  </>
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            </>
          }
        />



        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - " />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - " />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - " />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - " />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - " />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - " />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - " />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - " />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - " />
              <Buttons />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Signin |SLS" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <PageTitle title="Register | SLS" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <>
              <PageTitle title="Forgot Password | SLS" />
              <ForgotPassword />
            </>
          }
        />


        <Route
          path="/reset-password"
          element={
            <>
              <PageTitle title="Reset Password | SLS" />
              <ResetPassword />
            </>
          }
        />


        <Route
          path="/otp-verification"
          element={
            <>
              <PageTitle title="Reset Password | SLS" />
              <OtpVerification />
            </>
          }
        />
      </Routes>



    </>
  );
}

export default App;
