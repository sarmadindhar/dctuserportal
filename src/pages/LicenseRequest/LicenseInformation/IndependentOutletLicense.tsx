import InputText from '../../../components/Forms/Input/InputText.tsx';
import { useTranslation } from 'react-i18next';
import { Form, Select } from 'antd';

const IndependentOutletLicense = ()=>{
  const { t } = useTranslation();

  let types = [
    {
      id:1,
      name:"Restaurant"
    },

    {
      id:2,
      name:"Floating restaurants"
    },
  ];
  return (
    <>
      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <Form.Item label={t('form.region')} name="region">
            <Select>
              {types.map((rg)=>(
                <Select.Option value={rg.id}>{rg.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
      </div>
    </>
  );
}

export default IndependentOutletLicense;