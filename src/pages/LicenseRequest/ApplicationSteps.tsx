import {Steps} from 'antd';
const { Step } = Steps;

const ApplicationSteps = (props)=>{
    return(
      <Steps current={props.current} className="mb-6">
          {
              props.steps.includes(1) ? (
                <Step title="Choose Trade License" />
              ) :""

          }

          {
              props.steps.includes(2) ? (
                  <Step title="Specify Request Details" />

              ) :""
          }
          {
              props.steps.includes(3) ? (
                  <Step title="Submitted & Waiting for Approval" />

              ) :""

          }
          {
              props.steps.includes(4) ? (
                <Step title="Make Payment" />
              ) :""

          }
          {
              props.steps.includes(5) ? (
                  <Step title="Download License" />
              ) :""

          }
      </Steps>
    );
}


export default ApplicationSteps;