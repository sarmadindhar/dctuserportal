import { Button, Result } from 'antd';
import { useEffect, useState } from 'react';
import NetworkUtil from '../../utils/NetworkUtil.ts';
import { useNavigate, useParams } from 'react-router-dom';

const PaymentStatus = ()=>{
  let navigate = useNavigate();

  const [paymentInfo , setPaymentInfo] = useState(null)
  const {paymentId,paymentType} = useParams();
  useEffect(() => {
    NetworkUtil('GET', `userPortal/payment-status/${paymentId}`).then((res)=>{
      if(res && res.data){
        setPaymentInfo(res.data)
      }
    }).catch((e)=>{
      console.log('error' , e);
    });
  }, []);

  const viewDctPaymentReceipt=()=>{
    let url = `https://esb.dctt.gov.ae/EPAY-V2/Pages/InternetPV.aspx?SessionId=${paymentInfo.payment.session_id}`;
    window.open(url, '_blank');
  }


  const goBack=()=>{
    navigate('/user/dashboard')
  }

  return(
    <>
      {
        paymentInfo ? (
          paymentInfo && paymentInfo.voucher && paymentInfo.voucher.BusinessData && paymentInfo.voucher.BusinessData.PaymentVoucher.PaidStatus ? (
            <Result className={'mt-25'}
                    status="success"
                    title="Payment Successfull"
                    subTitle={`Your payment has been received against Ref number: ${paymentId}.`}
                    extra={[
                      <Button type="primary" key="console" onClick={()=>{goBack()}}>
                        Go To Dashboard
                      </Button>,
                      <Button key="buy" onClick={()=>{
                        viewDctPaymentReceipt()
                      }}>View Receipt</Button>,
                    ]}
            />
          ) :(
            <Result className={'mt-25'}
                    status="error"
                    title="Payment Failed"
                    subTitle={`Your payment has been failed against Ref number: ${paymentId}.`}
                    extra={[
                      <Button type="primary" key="console" onClick={()=>{goBack()}}>
                        Go To Dashboard
                      </Button>
                    ]}
            />
          )
        ) : ""


      }
    </>
  )
}

export default PaymentStatus;