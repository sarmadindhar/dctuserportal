import DefaultLayout from '../../../layout/DefaultLayout.tsx';
import { ProCard } from '@ant-design/pro-components';
import { Button, Checkbox, Form , Upload} from 'antd';
import CommonFields from '../LicenseInformation/CommonFields.tsx';
import ApplicationSteps from '../ApplicationSteps.tsx';
import InputText from '../../../components/Forms/Input/InputText.tsx';
import { useTranslation } from 'react-i18next';
import {  useParams  } from 'react-router-dom';

import { UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import InputFile from '../../../components/Forms/InputFile.tsx';
import NetworkUtil from '../../../utils/NetworkUtil.ts';

const LicenseDetails = ()=>{
  const { t } = useTranslation();
  let { workflowId, id } = useParams();
  const [workflow , setWorkFlow] = useState(null);


  const [requestDetails , setRequestDetails] = useState(null);

  const licenseTypeFields = {
    independent_outlets_license:['special_license_number','trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','type'],
    social_and_sport_club_license:['special_license_number','trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','tourism_restaurant'],
    "import,_re-export_and_storage_license":['special_license_number','trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','ware_house_location'],
    retail_shop_license:['special_license_number','trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','special_license_number_of_import_export'],
    tourism_district_license:['special_license_number','trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','tourism_restaurant'],
    advertising_permit:['alcohol_license_number','trade_name','region','map','address','gm_name','email','gm_number','dates'],
    airport_license:['special_license_number','trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number'],
    initial_approval:['trade_name','owner_name','region','map','address','gm_name','email','gm_number'],
    hotel_establishments_license:['special_license_number','trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','category','tourism_restaurant'],
    fermentation_permit:['alcohol_license_number','trade_name','region','map','address','gm_name','email','gm_number','dates'],
    temporary_special_license:['special_license_number','trade_license_number','trade_name','owner_name', 'event', 'region','map','address','email'],
    online_sales_license:['special_license_number','trade_license_number','trade_name','owner_name','region','map','address','gm_name','gm_email','gm_number'],

  }


  const onFinish= (values) => {
    console.log('values',workflow);
    values.license_id = workflow.license_type_id
    NetworkUtil('POST', `userPortal/applyLicense`,values).then((res)=>{
      console.log(res);
    }).catch((e)=>{
      console.log('error' , e);
    });
  };
  const [form] = Form.useForm();

  let initialValues = {
    users:[
      { trade_name: null, trade_number: null },
    ],
  }


  useEffect(() => {
    NetworkUtil('GET', `userPortal/workflow/${workflowId}`).then((res)=>{
      if(res && res.data){
        setWorkFlow(res.data[0]);
        if(id){
          console.log('load details also');
          NetworkUtil('GET', `userPortal/requestDetails/${id}`).then((res)=>{
              let request = res.data;
              let map_address = request.map_address;
              if(map_address){
                map_address = JSON.parse(map_address)
              }
            console.log(map_address);
              form.setFieldsValue({
                special_license_no:request.special_license_number,
                ded_license_number:request.ded_license_number,
                trade_name:request.trade_name,
                owner_name:request.owner_name,
                map:map_address?.address,
                latitude:map_address?.latitude,
                longitude:map_address?.longitude,
                address:request.location,
                gm_name:request.gm_name,
                gm_email:request.gm_email,
                region_id:request.region_id,
                gm_number:request.gm_mobile,
                applicant_name:request.applicant_name,
                applicant_mobile_no:request.applicant_mobile_no,
                applicant_office_no:request.applicant_office_no,
              })
          }).catch((e)=>{
            console.log('error' , e);
          });
        }
      }
    }).catch((e)=>{
      console.log('error' , e);
    });
  }, []);
  return(

    <>
      <DefaultLayout>
        <ApplicationSteps current={1}/>
        <div className="grid">
          <Form
            name="register"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            form={form}
            initialValues={initialValues}
          >
          <ProCard
            title="License Information"
            bordered
            headerBordered
            collapsible
            style={{
              marginBlockEnd: 16,
              minWidth: 800,
              maxWidth: '100%',
            }}
          >

              {
                workflow && workflow.slug ? (
                  <CommonFields form={form} licenseTypeFields={licenseTypeFields} licenseType={workflow?.slug}/>
                ) :""
              }


              <div className=" flex flex-col  xl:flex-row justify-end">
                <Button type="primary" >Save</Button>
              </div>

          </ProCard>

          <ProCard
            title="Upload Required Information"
            bordered
            headerBordered
            collapsible
            style={{
              marginBlockEnd: 16,
              minWidth: 800,
              maxWidth: '100%',
            }}
          >


              <div className="flex flex-wrap -mx-4">
                {
                  workflow && workflow.documents && workflow.documents.length ? (
                    workflow.documents.map((doc) => (
                      <div className="w-full md:w-1/2 px-4">
                        <InputFile label={doc.name} name={doc.license_document_id}/>
                      </div>
                    ))
                  ) : ''
                }
              </div>
              <div className=" flex flex-col  xl:flex-row justify-end">
                <Button type="primary" >Save</Button>
              </div>

          </ProCard>


            <ProCard
              title="Contact Information"
              bordered
              headerBordered
              collapsible
              style={{
                marginBlockEnd: 16,
                minWidth: 800,
                maxWidth: '100%'
              }}
            >
              <div className="flex flex-wrap -mx-4">
                <div className="w-full  px-4">
                  <Checkbox>I am contact person</Checkbox>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <InputText label={t('fields.applicant_office_no')} rules={[{ required: true }]} name={'applicant_office_no'} />

                </div>
                <div className="w-full md:w-1/2 px-4">
                  <InputText label={t('fields.applicant_mobile_no')} rules={[{ required: true }]} name={'applicant_mobile_no'} />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <InputText label={t('fields.applicant_name')} rules={[{ required: true }]} name={'applicant_name'} />
                </div>

              </div>
              <Button htmlType="submit"
                      type={'primary'}
                      iconPosition="start">
                Next
              </Button>

            </ProCard>
          </Form>
        </div>

      </DefaultLayout>
    </>
  );
}
export default LicenseDetails;