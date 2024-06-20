import DefaultLayout from '../../layout/DefaultLayout.tsx';
import { Collapse, Button, Image, Select } from 'antd';
import { ProCard } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import NetworkUtil from '../../utils/NetworkUtil.ts';
const { Panel } = Collapse;
import { DownloadOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
const Fines = () => {
  const [fines, setFines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [licenses , setLicenses] = useState([]);
  useEffect(() => {
    loadFines();
    loadIssuedLicense();
  }, []);


  const loadFines = (businessLicenseId = null,is_paid=0)=>{
    let url = `userPortal/fines?is_paid=${is_paid}`;
    if(businessLicenseId){
      url+= `&business_license_id=${businessLicenseId}`
    }
    NetworkUtil('GET', url)
      .then((res) => {
        if (res && res.data) {
          console.log(res.data);
          setFines(res.data);
        }
      })
      .catch((e) => {

        console.log('error', e);
      });
  }

  const loadIssuedLicense = ()=>{
    NetworkUtil('GET', `userPortal/issued-licenses`)
      .then((res) => {
        if (res && res.data) {
          console.log(res.data);
          setLicenses(res.data);
        }
      })
      .catch((e) => {
        console.log('error', e);
      });
  }

  const payNow = (e , fine)=>{
    e.stopPropagation();
    if(!fine.is_paid){
      setLoading(true)
      NetworkUtil('POST', `userPortal/payFine`,{
        fineId:fine.id
      })
        .then((res) => {
          if (res && res.data) {
            setLoading(false)
            if(res.data.redirect_url){
              window.open(res.data.redirect_url, '_blank');
            }
            console.log(res.data);

          }
        })
        .catch((e) => {
          setLoading(false)
          toast.error('lorha lashus')
          console.log('error', e);
        });
    }
  }


  const handleOnChange=(e)=>{
    if(e){
      loadFines(e);
    }else{
      loadFines()
    }
  }
  const getHeader = (fine) => {
    return (
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-x-10 items-center">
          <p className={'text-orange'}>{fine.license_type}</p>
          <p className={'p-1 border min-w-50 rounded-[6px] text-sm'}>{fine.license_number}</p>
        </div>
        {
          fine.is_paid ? (
            <Button
              type="dashed" color={'green'} className="justify-end w-50" onClick={(e)=>{payNow(e,fine)}}>
              Paid
            </Button>
          ) : (
            <Button type="primary" className="justify-end w-50"
                    loading={loading} iconPosition='start'
                    onClick={(e)=>{payNow(e, fine)}}>
              {loading ? "Please Wait" :"Pay Now"}
            </Button>
          )
        }
      </div>
    );
  };

  return (
    <DefaultLayout title={'Fines'}>
      <div className="grid">
        <div className="flex justify-between rounded-[14px] border border-[#FFA897]  p-4">
          <div className="flex gap-x-4">
            <Button type={'primary'} className={'w-30'}  onClick={()=>loadFines(null, 0)}>Unpaid</Button>
            <Button type={'default'} className={'w-30'} onClick={()=>loadFines(null, 1)}>History</Button>
          </div>
          <Select className={'w-80'} defaultValue={'select'} onChange={(e)=>{handleOnChange(e)}}>
            <Select.Option key={10000} value="0" >Select License</Select.Option>

            {licenses.map((type) => (
              <Select.Option key={type.id} value={type.id}>{type.name} ({type.license_number})</Select.Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="grid mt-4">
        {fines.map((fine) => (
          <ProCard
            key={fine.id} // Ensure each ProCard has a unique key
            className="fines_card"
            title={getHeader(fine)}
            bordered
            headerBordered
            collapsible
            style={{
              marginBlockEnd: 16,
              minWidth: 800,
              maxWidth: '100%',
            }}
          >
            <div className="grid grid-cols-1">
              <div className="flex justify-between p-4 rounded-[14px] border border-[#FFA897] ">
                <p className="font-bold">Law Number</p>
                <p className="font-bold">{fine.law_number}</p>
              </div>

              <div className="flex justify-between p-4 rounded-[14px] border border-[#FFA897] border-t-0 ">
                <p className="font-bold">Law Desc</p>
                <p className="font-bold">{fine.description}</p>
              </div>

              <div className="flex justify-between p-4 rounded-[14px] border border-[#FFA897]  border-t-0">
                <p className="font-bold">Subject Id</p>
                <p className="font-bold">{fine.subject_number}</p>
              </div>

              <div className="flex justify-between p-4 rounded-[14px] border border-[#FFA897] border-t-0">
                <p className="font-bold">Subject Description</p>
                <p className="font-bold">{fine.subject}</p>
              </div>

              <div className="flex justify-between p-4 rounded-[14px] border border-[#FFA897] border-t-0">
                <p className="font-bold">Amount</p>
                <p className="font-bold">{fine.fee}</p>
              </div>
            </div>
            <div className="grid">
              <p className={'font-bold text-lg font-black mt-4'}>Attachments</p>
              {
                fine.fine_documents && fine.fine_documents.map((doc , i)=> (
                  <a href={doc.path} target="_blank" rel="noopener noreferrer" className={'font-bold text-orange'}>
                    Fine Attachment {i+1}
                  </a>
                ))
              }
            </div>
          </ProCard>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Fines;
