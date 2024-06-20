import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import {  useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { getRegions } from '../../store/actions';
import { Space, Table, Tag , Button } from 'antd';
import type { TableProps } from 'antd';
import NetworkUtil from '../../utils/NetworkUtil.ts';
import LicenseRequests from './LicenseRequests.tsx';
const Dashboard: React.FC = () => {
  let navigate = useNavigate();
  const [requestType, setRequestType] = useState('new_license');
  const [licenseType, setLicenseType] = useState('license');


  const [issuedLicenses , setIssuedLicenses] = useState([]);
  const navigateToPage = () =>{
    navigate(`/user/licenseApply`)
  }



  const dispatch = useDispatch();

  const locale = 'en'
  const [data, setData] = useState([]);

  const loadIssuedLicense = () =>{
    NetworkUtil('GET', `userPortal/issued-licenses`).then((res)=>{
      if(res && res.data){
       setIssuedLicenses(res.data);
      }
    }).catch((e)=>{
      console.log('error' , e);
    });
  }


  useEffect(()=>{
    dispatch(getRegions({}))
  },[])

  useEffect(()=>{
    NetworkUtil('GET', `userPortal/requests?request_type=${requestType}`).then((res)=>{
      if(res && res.data){
        setData(res.data);
      }
    }).catch((e)=>{
      console.log('error' , e);
    });
  },[requestType])
  return (
    <DefaultLayout title={'Dashboard'}>
      <div className="felx mb-10 w-full">
        <a
          href="#"
          onClick={() => {
            setLicenseType('license');
          }}
          className={`rounded-xl px-8 py-3 text-md font-semibold shadow-sm border border-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
            licenseType === 'license'
              ? 'bg-orange text-white hover:bg-transparent hover:text-orange'
              : 'bg-transparent text-orange hover:bg-orange hover:text-white'
          }`}
        >
          License
        </a>
        <a
          href="#"
          onClick={() => {
            setLicenseType('approval');
          }}
          className={`ml-4 rounded-xl px-8 py-3 text-md font-semibold shadow-sm border border-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
            licenseType === 'approval'
              ? 'bg-orange text-white hover:bg-transparent hover:text-orange'
              : 'bg-transparent text-orange hover:bg-orange hover:text-white'
          }`}
        >
          Approval
        </a>
        <a
          href="#"
          onClick={() => {
            setLicenseType('permit');
          }}
          className={`ml-4 rounded-xl px-8 py-3 text-md font-semibold shadow-sm border border-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
            licenseType === 'permit'
              ? 'bg-orange text-white hover:bg-transparent hover:text-orange'
              : 'bg-transparent text-orange hover:bg-orange hover:text-white'
          }`}
        >
          Permit
        </a>
      </div>
      <div className="w-full">
        <div className="bg-transparent">
          <div className="w-full mx-auto pb-20">
            <div className="flex w-full justify-between gap-8">
              {
                licenseType === 'license' ? (
                  <>
                    <div
                      onClick={() => {
                        setRequestType('new_license');
                      }}
                      className={`hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer ${requestType === 'new_license' ? 'active_card' : ''}`}>
                      <h1 className="text-4xl font-bold">Request to Issue</h1>
                      <a
                        href="#"
                        className="text-base font-bold flex relative z-10"
                        onClick={() => {
                          navigateToPage();
                        }}
                      >
                        Apply
                      </a>
                    </div>


                    <div
                      onClick={() => {
                        setRequestType('amend_license');
                        loadIssuedLicense();
                      }}
                      className={`hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer ${requestType === 'amend_license' ? 'active_card' : ''}`}>
                      <h1 className="text-4xl font-bold">Request to Amend</h1>
                    </div>

                    <div
                      onClick={() => {
                        setRequestType('cancel_license')
                        loadIssuedLicense();

                      }}
                      className={`hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer ${requestType === 'cancel_license' ? 'active_card' : ''}`}>
                      <h1 className="text-4xl font-bold">Request to Cancel</h1>
                    </div>

                    <div
                      onClick={() => {
                        setRequestType('renew_license')
                        loadIssuedLicense();

                      }}
                      className={`hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer ${requestType === 'renew_license' ? 'active_card' : ''}`}>
                      <h1 className="text-4xl font-bold">Request to Renew</h1>
                    </div>
                  </>
                ) : ""
              }


              {
                licenseType === "approval" ? (
                  <div
                    onClick={() => {
                      setRequestType('new_license')
                      loadIssuedLicense();
                    }}
                    className={`max-w-100  hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer ${requestType === 'new_license' ? 'active_card' : ''}`}>
                    <h1 className="text-4xl font-bold">Approval</h1>
                    <a
                      href="#"
                      className="text-base font-bold flex relative z-10"
                      onClick={() => {
                        navigateToPage()
                      }}
                    >
                      Apply
                    </a>
                  </div>

                ) :""
              }


              {
                licenseType === "permit" ? (
                  <div
                    onClick={() => {
                      setRequestType('new_license')
                      loadIssuedLicense();
                    }}
                    className={`max-w-100  hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer ${requestType === 'new_license' ? 'active_card' : ''}`}>
                    <h1 className="text-4xl font-bold">Permit</h1>
                    <a
                      href="#"
                      className="text-base font-bold flex relative z-10"
                      onClick={() => {
                        navigateToPage()
                      }}
                    >
                      Apply
                    </a>
                  </div>

                ) :""
              }
            </div>

          </div>
        </div>

        {
          (requestType === "amend_license" || requestType === "cancel_license" || requestType === "renew_license") ? (
            <div className="bg-white p-10 rounded ">
              <p  className="font-xl font-bold text-black dark:text-white">List Of Licenses</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {
                  issuedLicenses.map((bl,k)=> (
                    <div className="flex justify-between items-center rounded-[14px] border border-[#FFA897] p-4" key={k}>
                      <p className="font-bold text-lg">{bl.name} ({bl.license_number})</p>
                      <Button className={'w-50'} onClick={()=>{
                        if(requestType === 'amend_license') {
                          navigate(`/user/licenseAmend/${bl.id}`)
                        } if(requestType === 'cancel_license') {
                          navigate(`/user/licenseCancel/${bl.id}`)
                        }if(requestType === 'renew_license') {
                          navigate(`/user/licenseRenew/${bl.id}`)
                        }
                      }}>Select</Button>
                    </div>
                  ))
                }
              </div>
            </div>
          ) : ""
        }
        <LicenseRequests requests={data}/>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
