import DefaultLayout from '../../layout/DefaultLayout.tsx';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Flex, message, Upload } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Profile=()=>{
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const auth = useSelector((state) => state.auth.user);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };




  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <DefaultLayout title={'Profile'}>
      <div className="grid grid-cols-1">
        <div className="bg-white  p-4 rounded">
          <p className={'text-xl font-bold text-black-2'}>Business Details</p>
          <p>You can enter and manage your mobile number, email and address </p>
          <div className="flex gap-x-10 mt-8">
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: '100%',
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>


            <div className="flex justify-between  w-full items-center p-4 rounded-[14px] border border-[#FFA897]">
              <div className={'font-bold'}>
                <p>Name</p>
                <p>{auth.name}</p>
              </div>

              <div className={'font-bold'}>
                <p>Email</p>
                <p>{auth.email}</p>
              </div>

              <div>
                <Button>Edit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-4">
        <div className="bg-white  p-4 rounded">
          <div className="grid">
            <p className="text-lg text-black-2 font-bold">Mobile Number</p>
          </div>

          <div className="grid grid-cols-4">
            <div className="h-40 rounded-[14px] border border-[#FFA897] bg-orange">
              <div className="flex justify-between w-full p-6 items-center">
                <p className={'text-white  '}>Joe Mathew
                  <br/> <span className={'text-xl'}>090078601</span>
                </p>
                <Button>X</Button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </DefaultLayout>
);

}


export default Profile;