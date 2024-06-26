import DefaultLayout from '../../../layout/DefaultLayout.tsx';
import { ProCard } from '@ant-design/pro-components';
import { Button, Checkbox, Form, Input, Upload } from 'antd';
import CommonFields from '../LicenseInformation/CommonFields.tsx';
import ApplicationSteps from '../ApplicationSteps.tsx';
import InputText from '../../../components/Forms/Input/InputText.tsx';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import InputFile from '../../../components/Forms/InputFile.tsx';
import NetworkUtil from '../../../utils/NetworkUtil.ts';
import moment from 'moment';
import GoogleMapsLoader from '../../../components/Forms/GoogleMapsLoader.tsx';
import { useDispatch, useSelector } from 'react-redux';

const LicenseDetails = ()=>{
  const { t } = useTranslation();
  let { workflowId, id } = useParams();
  const [workflow , setWorkFlow] = useState(null);
  const [documents , setDocumentFiles] = useState({});
  let navigate = useNavigate();

  const auth = useSelector((state) => state.auth.user);

  const [requestDetails , setRequestDetails] = useState(null);

  const licenseTypeFields = {
    online_sales_license:['trade_license_number','trade_name','owner_name','region','map','address','gm_name','gm_email','gm_number'],
    independent_outlets_license:['trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','type'],
    airport_license:['trade_license_number','trade_name','owner_name','region','map','address','gm_name','gm_email','gm_number'],
    initial_approval:['trade_license_number','trade_name','owner_name','region','map','address','gm_name','gm_email','gm_number'],
    hotel_establishments_license:['trade_license_number','trade_name','owner_name','region','map','address','gm_name','gm_email','gm_number','category','tourism_restaurant'],
    social_and_sport_club_license:['trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','tourism_restaurant'],
    "import,_re-export_and_storage_license":['trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','ware_house_location'],
    retail_shop_license:['trade_license_number','trade_name','owner_name','region','map','address','gm_name','email','gm_number','special_license_number_of_import_export'],
    tourism_district_license:['trade_license_number','trade_name','owner_name','region','map','address','gm_name','gm_email','gm_number','tourism_restaurant'],
    advertising_permit:['alcohol_license_number','trade_license_number','trade_name','region','map','address','gm_name','gm_email','gm_number','dates','associated_licenses'],
    fermentation_permit:['alcohol_license_number','trade_name','region','map','address','gm_name','email','gm_number','dates'],
    temporary_special_license:['trade_license_number','trade_name','owner_name', 'event', 'region','map','address','email'],

  }
  const onFinish= (values) => {
    values.license_id = workflow.license_type_id
    console.log('values',values);
    let formData = new FormData();
    for (const key in values) {
      if(typeof values[key] !== 'object'){
        formData.append(key, values[key]);
      }else{
        if(key === "linked_businesses"){
          values[key].forEach((business, index) => {
            formData.append(`linked_businesses[${index}][trade_license_number]`, business.trade_license_number);
            formData.append(`linked_businesses[${index}][name]`, business.name);
          });
        }if(key === "associated_licenses"){
          values[key].forEach((business, index) => {
            formData.append(`associated_licenses[${index}][alcohol_license_number]`, business.alcohol_license_number);
            formData.append(`associated_licenses[${index}][trade_name]`, business.trade_name);
            formData.append(`associated_licenses[${index}][retail_shop]`, business.retail_shop);
            formData.append(`associated_licenses[${index}][region]`, business.region);
            formData.append(`associated_licenses[${index}][address]`, business.address);
            formData.append(`associated_licenses[${index}][map]`, business.map);
            formData.append(`associated_licenses[${index}][latitude]`, business.latitude);
            formData.append(`associated_licenses[${index}][longitude]`, business.longitude);
          });
        }if(key==="map"){
          formData.append(`latitude`, values[key].longitude);
          formData.append(`longitude`, values[key].longitude);
          formData.append(`map`, values[key].map);
        }

        else{
          if(values[key] && values[key][0]?.originFileObj){
            formData.append(`${key}`, values[key][0].originFileObj);
          }else{
            if(key === "issue_date" || key=== "expiry_date" || key === "event_date"){
              formData.append(`${key}`, values[key].format('YYYY-MM-DD'));
            }
            if(key === "event_time"){
              formData.append(`${key}`, values[key].format('HH:mm:ss'));
            }
          }
        }
      }
    }
    let url = `userPortal/applyLicense/1`;
    NetworkUtil('POST', url,formData).then((res)=>{
      console.log('-----------------',res);
      navigate(`/user/licenseApply/${workflowId}/status/${res.data[0].id}`)
    }).catch((e)=>{
      console.log('error' , e);
    });
  };
  const [form] = Form.useForm();

  let initialValues = {
    linked_businesses:[
      { trade_name: null, trade_number: null },
    ],

    associated_licenses : [

    ],
    other_documents:[
      {name:"Other Document"}
    ]
  }


  const getDocumentName = (document)=>{
    let name = `file_${document.license_document_id}`
    let l =  requestDetails &&  requestDetails.documents? requestDetails.documents?.find((doc)=>(doc.file_type === name)):{};
    return  l ? {id:l.id, path:l.path, name:document.name} : {};
    // console.log(l , name);
    // return l;
  }

  const fillContactDetails = (e)=>{
    console.log(e.target.checked);
    if(e.target.checked){
      form.setFieldsValue({
          applicant_name : auth.name
      });
    }
  }
  const handleUploadChange = (id, fileList) => {
    setDocumentFiles((prevFiles) => ({ ...prevFiles, [id]: fileList }));
  };
  useEffect(() => {
    NetworkUtil('GET', `userPortal/workflow/${workflowId}`).then((res)=>{
      if(res && res.data){
        setWorkFlow(res.data[0]);
        if(id){
          NetworkUtil('GET', `userPortal/requestDetails/${id}`).then((res)=>{
              let request = res.data;
            console.log(`--------------------`,request);
              let map_address = request.map_address;
              if(map_address){
                map_address = JSON.parse(map_address)
                map_address.map = map_address.address;
              }
            setRequestDetails(request);
            console.log(map_address);
              let data = {
                special_license_no:request.special_license_number,
                ded_license_number:request.ded_license_number,
                trade_name:request.trade_name,
                owner_name:request.owner_name,
                map:map_address,
                address:request.location,
                gm_name:request.gm_name,
                gm_email:request.gm_email,
                region_id:request.region_id,
                gm_number:request.gm_mobile,
                applicant_name:request.applicant_name,
                applicant_mobile_no:request.applicant_mobile_no,
                applicant_office_no:request.applicant_office_no,
                request_id:id,
                type:request.outlet_type,
                warehouse_location:request.warehouse_address,
                special_license_no_of_import_export:request.special_license_no_of_import_export,
                category:request.outlet_type,
                issue_date:moment(request.issue_date),
                expiry_date:moment(request.expiry_date),

              }
              data.have_ware_house_location = request.warehouse_address ? true: false;
              let additional_data = JSON.parse(request.additional_data);
              if(additional_data && additional_data.survey){
                console.log(additional_data['survey']);
                data.survey_question = additional_data['survey']['question']
                data.liquor_type = additional_data['survey']['liquor_type']
                data.additional_activities = additional_data['survey']['additional_activities']
                data.includes_bar_or_dance_floor = additional_data['survey']['includes_bar_or_dance_floor']
              }
            if(additional_data['eventInfo'] && additional_data['eventInfo']['event_type']){
              console.log('event info',additional_data['eventInfo']['event_time']);
              data.event_date = moment(additional_data['eventInfo']['event_date'])
              data.event_time = moment(additional_data['eventInfo']['event_time'],'HH:mm:ss')
              data.event_title = additional_data['eventInfo']['event_title']
              data.event_type = additional_data['eventInfo']['event_type']
              data.expected_no_of_attendees = additional_data['eventInfo']['expected_no_of_attendees']
              data.alcohol_purchase_value = additional_data['eventInfo']['alcohol_purchase_value']
            }
              let linked = JSON.parse(request.linked_business_licenses);
              if(linked && linked.length){
                data.linked_businesses = linked;
              }

              let associated_licenses = JSON.parse(request.associated_licenses);
              if(associated_licenses && associated_licenses.length){
                console.log(associated_licenses);
                data.associated_licenses = associated_licenses;
              }
              form.setFieldsValue(data)
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
        <ApplicationSteps
          steps={[1,2,3,4,5]}

          current={1}/>
        <div className="grid">
          <p className="text-xl text-black ml-2 font-bold">{workflow?.name}</p>
          <GoogleMapsLoader>
            <Form
              name="register"
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
              form={form}
              initialValues={initialValues}
              disabled={requestDetails?true:false}
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
                    <CommonFields form={form} licenseTypeFields={licenseTypeFields} licenseType={workflow?.slug} />
                  ) : ""
                }


              </ProCard>

              <ProCard
                title="Upload Required Information"
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
                  {
                    workflow && workflow.documents && workflow.documents.length ? (
                      workflow.documents.map((doc, i) => (
                        <div className="w-full md:w-1/2 px-4" key={i} >
                          <InputFile label={doc.name} name={`${doc.name}`}
                                     id={doc.license_document_id} form={form} onChange={handleUploadChange} />

                          <p></p>
                        </div>
                      ))
                    ) : ''
                  }
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
                    <Checkbox onChange={(e)=>{fillContactDetails(e)}}> I am contact person</Checkbox>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mt-2">
                    <InputText label={t('fields.applicantOfficeNo')} rules={[{ required: true }]}
                               name={'applicant_office_no'} />

                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <InputText label={t('fields.applicantMobileNo')} rules={[{ required: true }]}
                               name={'applicant_mobile_no'} />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <InputText label={t('fields.applicantName')} rules={[{ required: true }]} name={'applicant_name'} />
                  </div>
                </div>


              </ProCard>
              <div className=" flex flex-col  xl:flex-row justify-end">
                <Button htmlType="submit"
                        type={'primary'}
                        iconPosition="start">
                  Next
                </Button>
              </div>
            </Form>
          </GoogleMapsLoader>

        </div>

      </DefaultLayout>
    </>
  );
}
export default LicenseDetails;