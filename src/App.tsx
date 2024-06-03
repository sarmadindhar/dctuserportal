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
import Profile from './pages/Profile';
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
    return auth && auth.id
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
