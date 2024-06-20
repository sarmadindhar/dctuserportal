import moment from 'moment';
import { Button } from 'antd';
import {  useNavigate } from 'react-router-dom';

const LicenseRequests = ({requests})=>{

  let navigate = useNavigate();
  const getStatus = (request) =>{
    let btnType = "default";
    let label = request.status.name;
    if(request.action_id ===3 || request.action_id === 4){
      return <Button type={btnType} className={'w-40'}  >{label}</Button>
    }
    return <Button type={btnType} className={'w-40'} onClick={()=>{navigate(`/user/licenseApply/${request.workflow_id}/details/${request.id}`)}} >{label}</Button>
  }



  const getLicenseStatus = (request)=>{

  }
  return (
    <>
      <div className="bg-white p-10 rounded mt-5">
        <div className="grid grid-cols-1 ">
          <p className={'text-2xl text-black font-bold'}>Status</p>
        </div>
        <div className="grid grid-cols-1 mt-4">
          {
            requests.map((request,i)=>(
              <div className="flex justify-between  p-4 rounded-[14px] bg-[#F9F8F6] mt-3" key={i}>
                <div className="flex gap-x-4 items-center w-100">
                  <p className="font-bold font-black">License Name</p>
                  <p
                    className="p-2.5 bg-[#EFECE6] rounded-[3px] ">{request && request.licenseDetail ? request.licenseDetail.name : "--"}</p>
                </div>

                <div className="flex gap-x-2 items-center">
                  <p className="font-bold font-black">Date and Time</p>
                  <p
                    className="p-2.5 bg-[#EFECE6] rounded-[3px]">{request && request.licenseDetail ? moment(request.created_date).format('Y-M-D') : "--"}</p>
                  <p
                    className="p-2.5 bg-[#EFECE6] rounded-[3px]">{request && request.licenseDetail ? moment(request.created_date).format('h:m A') : "--"}</p>
                </div>

                <div className="flex gap-x-4 items-center">
                  <p className="font-bold font-black">Status</p>
                  {
                    getStatus(request)
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}


export default LicenseRequests;