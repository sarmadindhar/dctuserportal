import { connect } from 'react-redux';
import type { FormProps } from 'antd';
import { Button,  Form, Input } from 'antd';
import { loginUser } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import loginImage from '../../images/assets/welcome-bg.png';
import logo from '../../images/assets/logo.png';

const SignIn = ({ dispatch, isLoading }: any): any => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    dispatch(loginUser(values, navigate))
  };

  return (
    <div className="md:min-h-screen sm:min-h-fit bg-white dark:bg-black dark:text-white relative bg-graphcs">
      <section
        className="flex max-h-screen bg-white max-w-screen-xl mx-auto items-center justify-between lg:flex-row md:flex-col sm:p-3  max-sm:flex-col max-sm:p-4">
        <div className="form-welcome  sm:w-full md:w-10/12 max-w-md">
          <div className="isolate bg-white  w-12/12">
            <div className="mx-auto ltr:text-left rtl:text-right">
              <NavLink to="/">
                <span  className="back-arrow"></span>
              </NavLink>
              <div className="flex lg:flex-1 mb-6">
                <a href="#" className="-m-1.5 p-1.5">

                  <img className="" src={logo} alt="" width="175" height="60" />
                </a>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 ">
                <span dangerouslySetInnerHTML={{ __html: t('login.heading') }}></span>
                👋</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 leading-normal"><span
                dangerouslySetInnerHTML={{ __html: t('login.message') }}></span></p>
            </div>
            <div className="grid grid-cols-1 contact-form mt-4">
            <Form
                name="register"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
              >
                <div className="sm:col-span-2 mb-4">
                  <Form.Item<FieldType>
                    name="email"
                    label="Enter Your Email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input
                      className="block w-full rounded-md border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] sm:text-sm sm:leading-6" />

                  </Form.Item>
                </div>
                <div className="sm:col-span-2 mb-4">
                  <Form.Item<FieldType>
                    label={t('password')}
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password visibilityToggle={false}
                                    className="block w-full rounded-md border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] sm:text-sm sm:leading-6" />
                  </Form.Item>
                </div>

                <div className="sm:col-span-2 mb-4">
                  <div className="flex justify-between">
                    <NavLink to="/register">
                      <p>Create Account</p>
                    </NavLink>
                    <NavLink to="/forgot-password">
                      <p>Forgot Password?</p>
                    </NavLink>
                  </div>
                </div>
                <div className="mt-5">
                  <Button htmlType="submit"
                          className="w-full rounded-md bg-[#F77860] text-xl font-semibold text-white h-[60px] shadow-sm hover:bg-[#F77860]"
                          loading={isLoading} iconPosition='start'>
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="image-welcome flex h-dvh items-center">
          <img src={loginImage} className="my-8 h-fit" />
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (state: any) => (
  {
    isLoading: state.app.isLoading,
  });
export default connect(mapStateToProps)(SignIn);
