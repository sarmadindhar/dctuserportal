import Insta from '../../images/assets/insta.png';
import Facebook from '../../images/assets/facebook.png';
import Twitter from '../../images/assets/x.png';
import QPortal from '../../images/assets/qportal.png';
import Logo from '../../images/logo/logo.png';

const Footer = ()=>{
  return (
    <footer className="w-full">
      <div className="bg-[#E3DCD3]">
        <div className="footer-top h-28 flex justify-between items-center max-w-7xl mx-auto">
          <img src={Logo} width="175" height="60"/>
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            <a href="#" className="text-sm font-light leading-6 text-gray-900 active">Cookie Policy</a>
            <a href="#" className="text-sm font-light leading-6 text-gray-900">Terms & Condition</a>
            <a href="#" className="text-sm font-light leading-6 text-gray-900">Privacy Policy</a>
            <a href="#" className="text-sm font-light leading-6 text-gray-900"> Contact Us</a>
          </div>
          <div className="flex gap-4">
            <a href="#" ><img src={Insta} /></a>
            <a href="#" ><img src={Facebook} /></a>
            <a href="#" ><img src={Twitter} /></a>
          </div>
        </div>
      </div>

      <div className="bg-[#2D1015] h-14 flex items-center justify-center">
        <div className="powerd text-sm font-light text-white flex mx-auto text-center items-center justify-center">
          Powered By: <a href="#" className="ml-4"><img src={QPortal} height="30"/></a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;