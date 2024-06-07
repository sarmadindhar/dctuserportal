import DefaultLayout from '../../../layout/DefaultLayout.tsx';
import { Button, Form, Select } from 'antd';
import {  useNavigate  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ApplicationSteps from '../ApplicationSteps.tsx';
import { useEffect, useState } from 'react';
import NetworkUtil from '../../../utils/NetworkUtil.ts';

const SelectLicenseType = ()=>{
  let navigate = useNavigate();
  const { t } = useTranslation();

 const [licenseTypes , setLicenseTypes] = useState([])
  useEffect(() => {
    NetworkUtil('GET', `userPortal/license-types/1`).then((res)=>{
     if(res && res.data){
       setLicenseTypes(res.data)
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
      <ApplicationSteps current={0}/>
      <div className="bg-white p-10 rounded">
        <p  className="font-medium text-black dark:text-white">Apply License</p>
        <p className="font-medium text-orange mt-3"> Select Special License Type</p>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          className="mt-4"
        >
          <Form.Item label={t('fields.licenseType')} name="license_type">
            <Select>
              {licenseTypes.map((lt)=>(
                <Select.Option value={lt.id}>{lt.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Button  htmlType="submit"
                    type="primary"
                  iconPosition='start'>
            Next
          </Button>
        </Form>

      </div>
    </DefaultLayout>
  )
}


export default SelectLicenseType;