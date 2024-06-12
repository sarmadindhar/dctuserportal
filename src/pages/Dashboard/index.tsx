import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import {  useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { getRegions } from '../../store/actions';
import { Space, Table, Tag , Button } from 'antd';
import type { TableProps } from 'antd';
import NetworkUtil from '../../utils/NetworkUtil.ts';
const Dashboard: React.FC = () => {
  let navigate = useNavigate();
  const [requestType, setRequestType] = useState('new_license');
  const [licenseType, setLicenseType] = useState('license');
  const navigateToPage = () =>{
    navigate(`/user/licenseApply`)
  }


  const dispatch = useDispatch();

  const locale = 'en'
  const [data, setData] = useState([]);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });



  const columns = [
    {
      title: 'License Name',
      dataIndex: 'licenseDetail',
      key: 'licenseDetail',
      render: (licenseDetail) => locale === 'en' ? licenseDetail.name : licenseDetail.name_ar,

    },

    {
      title: 'Date',
      dataIndex: 'created_date',
      key: 'created_date',
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => (
        <Button
          type="primary" className={'w-60'}
          onClick={()=>{navigate(`/user/licenseApply/${record.workflow_id}/details/${record.id}`)}}
        >
          {record.status.name}
        </Button>
      )
    },
  ];


  useEffect(()=>{
    dispatch(getRegions({}))
    NetworkUtil('GET', `userPortal/requests`).then((res)=>{
      if(res && res.data){
        setData(res.data);
        console.log(res);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      }
    }).catch((e)=>{
      console.log('error' , e);
    });
  },[])
  return (
    <DefaultLayout>
      <div className='felx mb-10 w-full'>
        <a  href="#" className="rounded-xl bg-orange px-8 py-3 text-md font-semibold text-white shadow-sm hover:bg-transparent hover:border-orange border-orange  border hover:text-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ">License</a>
        <a href="#" className="ml-4 rounded-xl bg-transparent px-8 py-3 text-md font-semibold text-orange hover:border-orange shadow-sm hover:bg-orange border-orange  border hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Approval</a>
        <a href="#" className="ml-4 rounded-xl bg-transparent px-8 py-3 text-md font-semibold text-orange hover:border-orange shadow-sm hover:bg-orange border-orange  border hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Permit</a>

      </div>
      <div className='w-full'>

        <div className="bg-transparent">
          <div className="w-full mx-auto pb-20">


            <div className="flex w-full justify-between gap-8">
              <div onClick={()=>{navigateToPage()}} className="hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer active_card">
                <h1 className="text-4xl font-bold ">Request to Issue</h1>
                <a href="#" className="text-base font-bold flex relative z-10">Apply  </a>
              </div>
              <div className="hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer">
                <h1 className="text-4xl font-bold ">Request to Amend</h1>
                <a href="#" className="text-base font-bold flex relative z-10">Apply </a>
              </div>
              <div className="hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer">
                <h1 className="text-4xl font-bold ">Request to Cancel</h1>
                <a href="#" className="text-base font-bold flex relative z-10">Apply </a>
              </div>
              <div className="hover:drop-shadow-xl hover:shadow-lg shadow-cyan-500/20 flex flex-col items-start justify-between md:w-full p-8 my-4 relative h-52 guideline-box text-[#f77860] hover:text-white hover:bg-gradient-to-r from-[#F87056]  to-[#FEA593]  rounded-2xl border border-[#F87056] cursor-pointer">
                <h1 className="text-4xl font-bold ">Request to Renew</h1>
                <a href="#" className="text-base font-bold flex relative z-10">Apply </a>
              </div>
            </div>

          </div>

        </div>


        <Table dataSource={data} columns={columns} />;


      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
