import { Form, DatePicker} from 'antd';
const DatePickerInput = (props) =>{
  return(
    <Form.Item
      name={props.name}
      label={props.label}
      rules={props.rules}

    >
      <DatePicker  className={'w-full'} />
    </Form.Item>
  )
}

export default DatePickerInput;