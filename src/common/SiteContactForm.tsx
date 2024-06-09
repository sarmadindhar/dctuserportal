import CallIcon from '../images/assets/call.png';
import EmailIcon from '../images/assets/email.png';
import LocationIcon from '../images/assets/location.png';
import ContactBg from '../images/assets/contact.png';
import { useTranslation } from 'react-i18next';
import type { FormProps } from 'antd';
import { Button,  Form, Input ,Alert ,Select } from 'antd';
import { loginUser } from '../store/actions';
import React, { useState } from 'react';
const { TextArea } = Input;
const { Option } = Select;

const SiteContactForm = ({ dispatch, isLoading }: any): any => {
  const { t } = useTranslation();
  const [submitMessage, setSubmitMessage] = useState(null);
  type FieldType = {
    email?: string;
    name?: string;
    phone_number?: string;
    description?: string;
  };
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
      setSubmitMessage('Feedback Received!');
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle >
      <Select style={{ width: 70 }}>
        <Option value="om">OM</Option>
        <Option value="ksa">KSA</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="bg-white ">
      <div className=" bg-white flex sm:flex-col md:flex-row max-w-screen-xl mx-auto pt-20 pb-20 justify-between">
        <div className="isolate bg-white md:max-w-xl sm:w-full">


          <div className="mx-auto max-w-xl ltr:text-left">
            <h2 className="text-5xl font-bold tracking-tight text-[#2D1015] ">  <span
              dangerouslySetInnerHTML={{ __html: t('contactForm.heading') }}></span></h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">{t('contactForm.message')}</p>
          </div>


          {submitMessage ? (
            <Alert message={submitMessage} type="success" className={'mt-2.5'}/>
          ) :""}

          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            className="mx-auto mt-10 max-w-full"
          >
            <div className="grid grid-cols-1  contact-form">
              <div>

                <div className="">
                  <Form.Item<FieldType>
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <Input
                      className="block w-full rounded-md border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] sm:text-sm sm:leading-6" />
                  </Form.Item>
                </div>
              </div>


              <div className="sm:col-span-2 ">
                <Form.Item<FieldType>
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input
                    className="block w-full rounded-md border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] sm:text-sm sm:leading-6" />
                </Form.Item>
              </div>
              <div className="sm:col-span-2 ">

                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label className="sr-only">{t('contactForm.country')}</label>
                    <select id="currency" name="currency"
                            className="h-full rounded-md border-0 bg-transparent py-0 text-right pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                      <option>

                        UAE
                      </option>
                      <option>OM</option>
                      <option>KSA</option>
                    </select>

                  </div>
                  <input type="number" placeholder="Phone number *" name="phone-number" id="phone-number"
                         autoComplete="tel"
                         className="md:pl-28 block w-full rounded-md border-0 px-3.5 py-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860]  sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2 mt-4.5">
                <Form.Item<FieldType>
                  name="description"
                  rules={[{ required: true, message: 'Please input your message!' }]}
                >
                  <TextArea rows={4}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] sm:text-sm sm:leading-6" />
                </Form.Item>

              </div>

            </div>
            <div className="mt-5">
              <button type="submit"
                      className="block w-full rounded-md bg-[#F77860] px-3.5 py-3.5 text-center text-base font-semibold text-white shadow-sm hover:bg-[#F77860] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F77860]">SEND
              </button>
            </div>
          </Form>

          <div className=" flex justify-between">
            <div className="contact flex items-center mt-10">
              <img src={CallIcon} />
              <div className="contact-detials ltr:ml-3 rtl:mr-3">
                <h1 className="text-md">{t('common.phone')}</h1>
                <p className="text-sm font-light">03 5432 1234</p>
              </div>
            </div>

            <div className="contact flex items-center mt-10">
              <img src={EmailIcon} />
              <div className="contact-detials  ltr:ml-3 rtl:mr-3">
                <h1 className="text-md">{t('common.email')}</h1>
                <p className="text-sm font-light">info@marcc.com.au</p>
              </div>
            </div>

            <div className="contact flex items-center mt-10">
              <img src={LocationIcon} />
              <div className="contact-detials  ltr:ml-3 rtl:mr-3">
                <h1 className="text-md">{t('common.address')}</h1>
                <p className="text-sm font-light">Abu Dhabi-UAE</p>
              </div>
            </div>
          </div>
        </div>


        <div className="-ml-12 -mt-12 p-12  lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img className="" src={ContactBg} alt="" />
        </div>

      </div>


    </div>
  );
}
export default SiteContactForm;