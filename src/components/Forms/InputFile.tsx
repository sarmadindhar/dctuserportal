import { Button, Upload, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import NetworkUtil from '../../utils/NetworkUtil.ts';
import React, { useState } from 'react';

const InputFile = (props)=>{
  const uploadFile = async options => {

    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData()
    fmData.append("file", file);
    NetworkUtil('POST', `userPortal/upload`,fmData).then((res)=>{
      console.log(res);
    }).catch((e)=>{
      console.log('error' , e);
    });
  }
  const [fileList, setFileList] = useState([]);


  const handleChange = ({ file, fileList }) => {
    setFileList([file]);
    props.onChange(props.id, [file]);

  };

  return (
    <div className="p-1">
      <div
        className="custom-upload-container flex items-center justify-between  rounded-[14px] border border-[#FFA897] p-1">
        <p className="ml-4 text-black text-base font-semibold">{props.label}</p>
        <Form.Item valuePropName={'fileList'} getValueFromEvent={(event)=>{
          return event?.fileList
        }}  name={props.name} rules={[{
          validator(_,fileList){
            return new Promise((resolve, reject)=>{
              if(fileList && fileList[0]){
                const isLt2M = fileList[0].size / 1024 / 1024 < 2;
                if(!isLt2M){
                  console.log('file size exceeded',);
                  reject('file size exceeded')
                  message.error('File size exceeded')
                }else{
                  resolve('success')
                }
              }else{
                resolve('success')
              }
            })
          }
        }]}>
        <Upload maxCount={1}
                onChange={handleChange} defaultFileList={props.defaultFileList}
                beforeUpload={() => false}  // Prevents automatic upload


        >
          <Button icon={<UploadOutlined />} className={'mr-2'}>Select File</Button>
        </Upload>
        </Form.Item>

      </div>
      <span className="text-graydark text-sm">PDF, JPEG or PNG / Maximum Upload File Size 2 MB</span>
    </div>
  );
}


export default InputFile;