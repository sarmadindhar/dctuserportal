import DefaultLayout from '../../layout/DefaultLayout.tsx';
import { Button, Form, Input, Card , Alert} from 'antd';
import {  useNavigate , useParams  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ApplicationSteps from './ApplicationSteps.tsx';
import { useEffect, useState } from 'react';
import NetworkUtil from '../../utils/NetworkUtil.ts';
import licenseDetails from './NewLicenseRequest/LicenseDetails.tsx';

const DownloadLicense = ({action})=>{
  let navigate = useNavigate();
  const { t } = useTranslation();
  const [licenseDetails , setLicenseDetails] = useState([])
  const [errors , setErrors] = useState([])
  let { businessLicenseId} = useParams();
  const [form] = Form.useForm();
  useEffect(() => {
    NetworkUtil('GET', `userPortal/businessLicense/${businessLicenseId}`).then((res)=>{
      if(res && res.data){
        console.log(res.data);
        setLicenseDetails(res.data)
      }
    }).catch((e)=>{
      console.log('error' , e);
    });
  }, []);
  const onFinish= (values) => {
    values.action = (action === 'cancel') ? 3 : 4;
    NetworkUtil('POST', `userPortal/licenseCancelRenew/${businessLicenseId}`,values).then((res)=>{
      if(res.errors){
        setErrors(res.errors);
      }else{
        if(action === "cancel"){
          navigate(`/user/requestStatus/${res.data.id}/cancel`)
        }
        if(action === "renew"){
          navigate(`/user/requestStatus/${res.data.id}/renew`)
        }
      }
    }).catch((e)=>{
      console.log(e);
    });
  };
  return(
    <DefaultLayout>
      <ApplicationSteps current={1} steps={[1,2,3]}/>
      <div className="grid grid-cols-1">
        <Card
          title="Trade License Details"
          bordered={false}

        >


          <div className={' p-4 flex justify-between rounded-[14px] border border-[#FFA897]'}>
            <p className={'text-lg font-bold'}>Trade Name</p>
            <p className={'text-lg font-bold'}> {licenseDetails.trade_name} </p>
          </div>

          <div className={' p-4 flex justify-between rounded-[14px] border border-[#FFA897]'}>
            <p className={'text-lg font-bold'}>Trade License Number</p>
            <p className={'text-lg font-bold'}>{licenseDetails.ded_license_number}</p>
          </div>
          <div className={' p-4 flex justify-between rounded-[14px] border border-[#FFA897]'}>
            <p className={'text-lg font-bold'}>Owner Name</p>
            <p className={'text-lg font-bold'}> {licenseDetails.owner_name} </p>

          </div>

        </Card>


        <Card
          title="Special License Details"
          bordered={false}

          className={'mt-4'}
        >
          <div className={' p-4 flex justify-between rounded-[14px] border border-[#FFA897]'}>
            <p className={'text-lg font-bold'}>Special License Number</p>
            <p className={'text-lg font-bold'}> {licenseDetails.special_license_no} </p>

          </div>


          <div className={' p-4 flex justify-between rounded-[14px] border border-[#FFA897]'}>
            <p className={'text-lg font-bold'}>License Type</p>
            <p className={'text-lg font-bold'}>Airport License</p>
          </div>

          <div className={' p-4 flex justify-between rounded-[14px] border border-[#FFA897]'}>
            <p className={'text-lg font-bold'}>Issue Date</p>
            <p className={'text-lg font-bold'}> {licenseDetails.issue_date} </p>
          </div>

          <div className={' p-4 flex justify-between rounded-[14px] border border-[#FFA897]'}>
            <p className={'text-lg font-bold'}>Expiry Date</p>
            <p className={'text-lg font-bold'}> {licenseDetails.expiry_date} </p>
          </div>
        </Card>
      </div>


      <div className="grid grid-cols-1">

        <Form
          name="select_trade"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          className="mt-4"
          form={form}
        >

          {
            action === 'cancel'? (
              <>
                <div className="grid grid-cols-1">
                  <p className="font-medium text-orange mt-3 text-lg">Enter Cancellation Reason</p>
                </div>
                <div className="grid columns-2">
                  <Form.Item name="cancelation_reason">
                    <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }}
                    />
                  </Form.Item>
                </div>
              </>

            ) : ''
          }

          <div className="grid grid-cols-1">
            <div className="flex justify-between mt-2 items-center">
              <p className={'max-w-200'}><span className={'font-bold'}>Note: </span>
                Incase, you have inactive license or your license is not appearing the list,
                please contact with Department of Economic Development to activate your trade license.
              </p>
              <Button htmlType="submit"
                      type="primary"
                      iconPosition="start">
                Submit
              </Button>
            </div>
          </div>
        </Form>

      </div>
    </DefaultLayout>
  )
}
export default DownloadLicense;