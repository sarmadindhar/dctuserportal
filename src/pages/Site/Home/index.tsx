import SiteLayout from '../../../layout/SiteLayout.tsx';
import SpecialLicenseMandate from './SpecialLicenseMendate.tsx';
import { connect } from 'react-redux';
import LicenseTypes from './LicenseTypes.tsx';
import { useEffect } from 'react';
import { getCmsContent } from '../../../store/actions';
import SiteContactForm from '../../../common/SiteContactForm.tsx';

const Home =({ dispatch,cms }: any): any => {
  useEffect(() => {
    dispatch(getCmsContent());
    console.log(cms,'00000s')
  }, []);
  return (
    <SiteLayout>

       <SpecialLicenseMandate/>
      <LicenseTypes />
      <SiteContactForm/>
    </SiteLayout>
  );
}
const mapStateToProps = (state: any) => (
  {
    cms: state.site.cms,
    isLoading: state.app.isLoading,
    auth: state.auth.user,
  });
export default connect(mapStateToProps)(Home);