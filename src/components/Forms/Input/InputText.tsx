import { Form, Input } from 'antd';
const InputText = (props)=>{
  return (
    <Form.Item
      name={props.name}
      label={props.label}
      rules={props.rules}


    >
      <Input
        className="" disabled={props.disabled}/>
    </Form.Item>
  );
}
export default InputText;