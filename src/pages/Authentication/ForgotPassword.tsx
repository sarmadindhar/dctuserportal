import logo from '../../images/assets/logo.png';
import { NavLink } from 'react-router-dom';

const ForgotPassword = ()=>{
  return (
    <div className="min-h-screen grid place-content-center bg-graphcs bg-white">
      <section>
        <div className="form-welcome  w-full max-sm:p-4">
          <div className="mx-auto text-center ">
            <NavLink to="/login">
              <span className="back-arrow"></span>
            </NavLink>
            <div className="flex w-full mb-11 ">
              <a href="#" className="mx-auto">
                <img className="" src={logo} alt="" width="175" height="60" />
              </a>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 ">Forget <span
              className="text-[#F77860]">Password ?</span></h2>
            <p className="mt-2 text-xl leading-8 text-black leading-normal">Today is a new day. It's your day. You shape
              it.
              Sign in to start managing your projects.</p>
          </div>
          <form action="#" method="POST" className="mx-auto mt-10 mb-11 max-w-full">
            <div className="flex gap-3 max-sm:flex-col">

              <div className="w-4/5  max-sm:w-full">
                <input type="text" name="email" placeholder="Example@email.com" id="first-name"
                       autoComplete="given-name"
                       className="block w-full rounded-md border-0 px-5 py-6 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F77860] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F77860] sm:text-sm sm:leading-6 " />
              </div>
              <div className="w-1/5 max-sm:w-full">
                <button type="submit"
                        className="block w-full rounded-md bg-[#F77860] px-4 py-5 text-center text-xl font-semibold text-white shadow-sm hover:bg-[#F77860] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F77860]">SEND
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ForgotPassword;