import { Form, TimePicker} from 'antd';
const TimePickerInput = (props) =>{
  return(
    <Form.Item
      name={props.name}
      label={props.label}
      rules={props.rules}

    >
      <TimePicker  className={'w-full'}/>
    </Form.Item>
  )
}

export default TimePickerInput;