import React, { useEffect , useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import type { FormProps } from 'antd';
import { Button,  Form, Input } from 'antd';
import { loginUser , verifyOtp , resendOtp as OtpResend} from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../../images/assets/logo.png';
import { BrowserRouter as Router, Route, Routes, useSearchParams } from 'react-router-dom';
import NetworkUtil from '../../utils/NetworkUtil';
import { useTranslation } from "react-i18next";

const OtpVerification = ({ dispatch }: any): any => {
  let navigate = useNavigate();
  const [timeLeft, setTimeLeft] = React.useState(59); // 60 seconds timer
  const [searchParams, setSearchParams] = useSearchParams();
  type FieldType = {
    otp?: string;
  };
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    let code = Object.values(values).join('')
    dispatch(verifyOtp({
      code:code,
      token:searchParams.get('token'),
      email:searchParams.get('email')
    }, navigate));
  };
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const resendOtp =  ()=>{
    if(timeLeft>0){
      return;
    }
    try{
      NetworkUtil('POST', 'userPortal/resend-otp', {
        email:searchParams.get('email'),
        token:searchParams.get('token')
      }).then((response:any)=>{
        if(response.status){
          console.log(response.data.email);
          setTimeLeft(59);
          setSearchParams({ token: response.data.token, email: response.data.email });
        }
        console.log(response.data);
      });
    }catch (e){

    }
  }
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);
  return (
    <section className="min-h-screen grid place-content-center bg-graphcs bg-white">
      <div className="form-welcome  w-full ">
        <div className="mx-auto text-center ">
          <NavLink to="/register">
            <span className="back-arrow"></span>
          </NavLink>
          <div className="flex w-full mb-11 ">
            <a href="#" className="mx-auto">
              <img className="" src={logo} alt="" width="175" height="60" />
            </a>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-[#2D1015]">OTP <span
            className="text-[#F77860]">Verification</span></h2>
          <p className="mt-2 text-cl leading-8 text-gray-400 leading-normal">Enter the code sent <span
            className="text-black">{searchParams.get('email')}</span></p>
        </div>
        <Form
          name="otp_verify"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className="mx-auto mt-10 mb-11 max-w-full"
        >
          <div className="flex flex-col ">
            <div className="w-full gap-5 justify-center flex max-sm:flex-wrap max-sm:p1 max-sm:scale-90">
              <Form.Item
                name={"otp[0]"}
              >
                <Input maxLength={1}
                       className="block w-20 h-20 text-center rounded-md border-0 px-5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] text-2xl sm:leading-6 "/>
              </Form.Item>
              <Form.Item
                name={"otp[1]"}
              >
                <Input maxLength={1}
                       className="block w-20 h-20 text-center rounded-md border-0 px-5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] text-2xl sm:leading-6 "/>
              </Form.Item>
              <Form.Item
                name={"otp[2]"}
              >
                <Input maxLength={1}
                       className="block w-20 h-20 text-center rounded-md border-0 px-5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] text-2xl sm:leading-6 "/>
              </Form.Item>
              <Form.Item
                name={"otp[3]"}
              >
                <Input maxLength={1}
                       className="block w-20 h-20 text-center rounded-md border-0 px-5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] text-2xl sm:leading-6 "/>
              </Form.Item>
              <Form.Item
                name={"otp[4]"}
              >
                <Input maxLength={1}
                       className="block w-20 h-20 text-center rounded-md border-0 px-5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] text-2xl sm:leading-6 "/>
              </Form.Item>
              <Form.Item
                name={"otp[5]"}
              >
                <Input maxLength={1}
                       className="block w-20 h-20 text-center rounded-md border-0 px-5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] text-2xl sm:leading-6 "/>
              </Form.Item>

            </div>
            <div className="flex items-center w-full mt-11">
              <p className="mt-2 mx-auto text-sm leading-8 text-gray-400 leading-normal" > Didn’t receive code?
                <span className="text-black"> {timeLeft}  sec </span>

                <span

                  className={`text-red-200  cursor-pointer ${timeLeft > 0 ? 'cursor-not-allowed' :'cursor-pointer text-red-500'}`}

                  onClick={timeLeft > 0 ? undefined : resendOtp}

                >Click to resend</span>
              </p>

            </div>
            <div className="w-3/5 mx-auto mt-5">
              <button type="submit"
                      className="block w-full rounded-md bg-[#F77860] px-4 py-5 text-center text-xl font-semibold text-white shadow-sm hover:bg-[#F77860] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F77860]">VERIFY
              </button>
            </div>

          </div>


        </Form>

      </div>
    </section>
  )
};
export default connect()(OtpVerification);
