import {Steps} from 'antd';
const { Step } = Steps;

const ApplicationSteps = (props)=>{
    return(
      <Steps current={props.current} className="mb-6">
        <Step title="Choose Trade License" />
        <Step title="Specify Request Details" />
        <Step title="Submitted & Waiting for Approval" />
        <Step title="Make Payment" />
        <Step title="Download License" />
      </Steps>
    );
}


export default ApplicationSteps;