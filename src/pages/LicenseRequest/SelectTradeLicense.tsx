import DefaultLayout from '../../layout/DefaultLayout.tsx';
import { Button, Form, Input, Select , Alert} from 'antd';
import {  useNavigate , useParams  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ApplicationSteps from './ApplicationSteps.tsx';
import { useEffect, useState } from 'react';
import NetworkUtil from '../../utils/NetworkUtil.ts';
import InputText from '../../components/Forms/Input/InputText.tsx';

const SelectTradeLicense = ({action})=>{
  let navigate = useNavigate();
  const { t } = useTranslation();
  const [licenseTypes , setLicenseTypes] = useState([])
  const [errors , setErrors] = useState([])
  let { businessLicenseId} = useParams();
  const [form] = Form.useForm();
  useEffect(() => {
    NetworkUtil('GET', `userPortal/businessLicense/${businessLicenseId}`).then((res)=>{
      if(res && res.data){
        console.log(res.data);
        console.log(form);
        form.setFieldsValue({
          special_license_no:res.data.special_license_no,
          trade_license_no:res.data.ded_license_number,
          trade_name:res.data.trade_name
        })
        setLicenseTypes(res.data)
      }
    }).catch((e)=>{
      console.log('error' , e);
    });
  }, []);

  const getSteps = ()=>{
    if(action === "cancel" || action === "renew"){
      return [1,2,3]
    }
    return  [1,2,3,4,5]
  }
  const onFinish= (values) => {
    NetworkUtil('POST', `userPortal/validateLicense`,values).then((res)=>{
      if(res.errors){
        setErrors(res.errors);
      }else{
        if(action === "amend"){
          navigate(`/user/licenseAmend/${res.data.workflow_id}/details/${res.data.id}`)
        }if(action === "cancel"){
          navigate(`/user/licenseCancel/${res.data.id}/details/`)
        }if(action === "renew"){
          navigate(`/user/licenseRenew/${res.data.id}/details`)
        }
      }
    }).catch((e)=>{
      console.log(e);
    });
  };
  return(
    <DefaultLayout>
      <ApplicationSteps current={0}
                        steps={getSteps()}

      />
      <div className="bg-white p-10 rounded">
        <p  className="font-medium text-black dark:text-white">Check License Validity</p>
        <p className="font-medium text-orange mt-3"> Please enter a valid commercial license number to proceed with Special License request</p>
        <Form
          name="select_trade"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          className="mt-4"
          form={form}
        >


          <div className="grid columns-2">
            <Form.Item label={t('fields.specialLicenseNo')} name="special_license_no">
              <Input disabled={true} />
            </Form.Item>
          </div>


          <div className="grid grid-cols-4 gap-4">
            <Form.Item label={t('fields.trade_license_no')} name="trade_license_no">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item label={t('fields.trade_name')} name="trade_name">
              <Input disabled={true} />
            </Form.Item>
          </div>


          {
            errors.map((e, i)=> (
              <div className="grid grid-cols-2 gap-4 mb-3" key={i}>
                <Alert message={e} type="error" showIcon />
              </div>
            ))
          }
          <Button htmlType="submit"
                  type="primary"
                  iconPosition="start">
            Check
          </Button>
        </Form>

      </div>
    </DefaultLayout>
  )
}


export default SelectTradeLicense;