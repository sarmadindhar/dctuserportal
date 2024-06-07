import { Form, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const RegionDropDown = () =>{
  const appData = useSelector((state) => state.appData);
  const { t } = useTranslation();
  const regions = appData.regions;
  return (
    <Form.Item label={t('fields.region')} name="region_id">
      <Select>
        {regions.map((rg)=>(
          <Select.Option key={rg.id} value={rg.id}>{rg.name}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}
export default RegionDropDown;