import DefaultLayout from '../../../layout/DefaultLayout.tsx';
import { Button, Form, Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ApplicationSteps from '../ApplicationSteps.tsx';
import { useEffect, useState } from 'react';
import NetworkUtil from '../../../utils/NetworkUtil.ts';
import moment from 'moment'

const SubmittedForApproval = ()=>{
  let navigate = useNavigate();
  const { t } = useTranslation();
  let { workflowId, id } = useParams();
  const [requestDetails , setRequestDetails] = useState(null);

 const [licenseTypes , setLicenseTypes] = useState([])
  useEffect(() => {
    NetworkUtil('GET', `userPortal/requestDetails/${id}`).then((res)=>{
     if(res && res.data){
       console.log(res.data);
       setRequestDetails(res.data)
     }
   }).catch((e)=>{
     console.log('error' , e);
   });
  }, []);
  const onFinish= (values) => {
    if(values.license_type){
      navigate(`/user/licenseApply/${values.license_type}/details`)
    }
  };
  return(
    <DefaultLayout>
      <ApplicationSteps current={2}/>
      <div className="bg-white p-10 rounded">
        <p className="font-bold text-2xl text-orange mt-2"> Your Application has been submitted </p>
        <div className="flex gap-x-8 mt-8">
          <div >
            <p className={'text-black font-semibold mb-4'}>Reference No</p>
            <Button className={'w-60 border-orange font-bold text-lg'}>{requestDetails && requestDetails.application_ref_no}</Button>
          </div>

          <div>
            <p className={'text-black font-semibold mb-4'}>Submitted On</p>
            <Button className={'w-60 border-orange font-bold text-lg'}>{requestDetails && moment(requestDetails.created_date).format("MMM Do YY")}</Button>

          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}


export default SubmittedForApproval;