import InputText from '../../../components/Forms/Input/InputText.tsx';
import { useTranslation } from 'react-i18next';
import RegionDropDown from '../../../components/Common/RegionDropDown.tsx';
import { Radio, Button, Form, Input, Space, Select, Checkbox ,DatePicker} from 'antd';
import React, { useEffect } from 'react';
import RadioGroup from '../../../components/Forms/RadioGroup.tsx';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import DatePickerInput from '../../../components/Forms/DatePickerInput.tsx';
import TimePickerInput from '../../../components/Forms/TimePickerInput.tsx';
import MapInput from '../../../components/Forms/MapInput.tsx';

const CommonFields = ({ form , licenseTypeFields , licenseType})=>{
  const type = Form.useWatch('type', { form, preserve: true });
  const have_ware_house_location = Form.useWatch('have_ware_house_location', { form, preserve: true });

  const { t } = useTranslation();
  const types = [
    {
      id:'tourism_restaurant',
      name:"Tourist Restaurant",
      name_ar:"Tourist Restaurant",
    },
    {
      id:'floating_restaurant',
      name:"Floating Restaurant",
      name_ar:"Floating Restaurant",
    },
    {

      id:'tourist_cams',
      name:"Tourist Camps",
      name_ar:"Tourist Camps",
    },
    {
      id:'cinema',
      name:"Cinema",
      name_ar:"Cinemas",
    },
    {
      id:'theaters_and_others',
      name:"Theaters & Others",
      name_ar:"Theaters & Others",
    }
  ]


  const event_types = [
    {id:"sport_tournament",name:"Sport Tournament",name_ar:"بطولة رياضية"},
    {id:"concerts",name:"Concerts",name_ar:"حفلات موسيقية"},
    {id:"occasion_parties",name:"Occasion Parties",name_ar:"حفلات مناسبات"},
    {id:"conferences",name:"Conferences",name_ar:"مؤتمرات"},
    {id:"trade_shows",name:"Trade Shows",name_ar:"معارض تجارية"},
    {id:"workshops",name:"Workshops",name_ar:"ورش عمل"},
    {id:"reunions",name:"Reunions",name_ar:"لم الشمل"},
    {id:"galas",name:"Galas",name_ar:"حفلات غالا"},
    {id:"seminars",name:"Seminars",name_ar:"ندوات"},
    {id:"others",name:"Others",name_ar:"أخرى"},
  ];

  useEffect(() => {
    console.log(have_ware_house_location)
  }, [form]);

  const isVisible = (field, licenseType) =>{
    if(licenseType && licenseTypeFields[[`${licenseType}`]]){
      return  licenseTypeFields[`${licenseType}`].includes(field)
    }
    return false;
  }


  return (
    <>
      <div className="flex flex-wrap -mx-4">
        {
          isVisible('special_license_number', licenseType) ? (
            <div className="w-full md:w-1/2 px-4" >
              <InputText label={t('fields.specialLicenseNo')} rules={[{ required: true }]}
                         name={'special_license_no'} disabled={true}/>
            </div>
          ) : ""
        }
        {
          isVisible('alcohol_license_number', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.alcoholLicenseNumber')} rules={[{ required: true }]}
                         name={'alcohol_license_no'} />
            </div>
          ) : ""
        }
        {
          isVisible('trade_license_number', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.tradeLicenseNo')} rules={[{ required: true }]} name={"ded_license_number"} />
            </div>
          ) : ""
        }
        {
          isVisible('trade_name', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.tradeName')} rules={[{ required: true }]} name={"trade_name"} />
            </div>
          ) : ""
        }
        {
          isVisible('owner_name', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.ownerName')} rules={[{ required: true }]} name={"owner_name"} />
            </div>
          ) : ""
        }
        {
          isVisible('region', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <RegionDropDown name={'region_id'}/>
            </div>
          ) : ''
        }

        {
          isVisible('map', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <MapInput form={form} name={['map']} />
            </div>
          ) : ""
        }

        {
          isVisible('event', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <Form.Item label={t('fields.eventType')} name="event_type">
                <Select>
                  {event_types.map((type) => (
                    <Select.Option key={type.id} value={type.id}>{type.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          ) : ""
        }
        {
          isVisible('event', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.eventTitle')} rules={[{ required: true }]} name={"event_title"} />
            </div>
          ) : ""
        }
        {
          isVisible('event', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <DatePickerInput label={t('fields.eventDate')}  rules={[{ required: true }]} name={"event_date"} />
            </div>
          ) : ""
        }
        {
          isVisible('event', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <TimePickerInput label={t('fields.eventTiming')} rules={[{ required: true }]} name={"event_time"}/>
            </div>
          ) : ""
        }

        {
          isVisible('event', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.expectedNoOfAttendees')} rules={[{ required: true }]} name={"expected_no_of_attendees"} />
            </div>
          ) : ""
        }
        {
          isVisible('event', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.alcoholPurchaseValue')} rules={[{ required: true }]} name={"alcohol_purchase_value"} />
            </div>
          ) : ""
        }
        {
          isVisible('address', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.address')} rules={[{ required: true }]} name={"address"} />
            </div>
          ) : ""
        }
        {
          isVisible('email', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.email')} rules={[{ required: true }]} name={"email"} />
            </div>
          ) : ""
        }
        {
          isVisible('gm_name', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.gmName')} rules={[{ required: true }]} name={"gm_name"} />
            </div>
          ) : ""
        }
        {
          isVisible('gm_email', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.gmEmail')} rules={[{ required: true }]} name={"gm_email"} />
            </div>
          ) : ""
        }
        {
          isVisible('gm_number', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <InputText label={t('fields.gmNumber')} rules={[{ required: true }]} name={"gm_number"} />
            </div>
          ) : ""
        }
        {
          isVisible('special_license_number_of_import_export', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">

              <InputText label={t('fields.specialLicenseNoOfImportExport')} rules={[{ required: true }]} name={"special_license_no_of_import_export"} />
            </div>
          ) : ""
        }

        {
          isVisible('category', licenseType) ? (
            <div className="w-full md:w-1/2 px-4">
              <Form.Item label={t('fields.category')} name="type">
                <Select>
                  {types.map((type) => (
                    <Select.Option key={type.id} value={type.id} >{type.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          ) : ""
        }


      </div>

      {
        isVisible('type', licenseType) ? (
          <>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <Form.Item label={t('fields.type')} name="type">
                  <Select>
                    {types.map((type) => (
                      <Select.Option key={type.id} value={type.id}>{type.name}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </div>
            {type ? (
              <>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4">
                    <p> {t('fields.surveyQ1')} </p> <br />
                    <Form.Item name="survey_question">
                      <InputText rules={[{ required: true }]} name={'survey_question'} />
                    </Form.Item>
                  </div>
                  <div className="w-full px-4">
                    <p> {t('fields.surveyQ2')} </p> <br />
                    <Form.Item name="liquor_type"
                    >
                      <Radio.Group>
                        <Radio value="light">{t('fields.light')}</Radio>
                        <Radio value="all_spirits">{t('fields.allSpirits')}</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-4 mt-2">
                  <div className="w-full px-4">
                    <p> {t('fields.surveyQ3')} </p> <br />
                    <Form.Item name={'additional_activities'}>
                      <Radio.Group>
                        <Radio value={'yes'}>{t('fields.yes')}</Radio>
                        <Radio value={'no'}>{t('fields.no')}</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-4 mt-2">
                  <div className="w-full px-4">
                    <p>{t('fields.surveyQ4')}</p>
                    <br />
                    <Form.Item name={'includes_bar_or_dance_floor'}>
                      <Radio.Group>
                        <Radio value={'yes'}>{t('fields.yes')}</Radio>
                        <Radio value={'no'}>{t('fields.no')}</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </div>
              </>
            ) : ""}
          </>
        ) : ""
      }

      {
        isVisible('tourism_restaurant', licenseType) ? (
          <div className="flex flex-wrap -mx-4">
            <Form.List name="linked_businesses">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <>
                      <div className="w-full md:w-1/2 px-4" key={key}>
                        <Form.Item
                          label={t('fields.tourismRestaurantTradeName')}
                          {...restField}
                          name={[name, 'name']}
                          rules={[{ required: true, message: 'Missing Trade Name' }]}
                        >
                          <Input placeholder="Tourism Resturant Trade Name" />
                        </Form.Item>
                      </div>
                      <div className="w-full md:w-1/2 px-4  flex gap-x-4  items-center">
                        <Form.Item className={'w-full'}
                                   label={t('fields.tourismRestaurantTradeNo')}

                                   {...restField}
                                   name={[name, 'trade_license_number']}
                                   rules={[{ required: true, message: 'Missing Trade Number' }]}
                        >
                          <Input placeholder="Tourism Resturant Trade Number" />
                        </Form.Item>

                        {
                          key === fields.length - 1 ? (
                            <Button type="dashed" className={'!w-12'} onClick={() => add()} block
                                    icon={<PlusOutlined />}></Button>
                          ) : (
                            <Button type="dashed" className={'!w-12'} onClick={() => remove(name)} block
                                    icon={<MinusCircleOutlined />}></Button>
                          )
                        }

                      </div>
                    </>
                  ))}
                </>
              )}

            </Form.List>
          </div>
        ) : ""
      }

      {
        isVisible('ware_house_location' , licenseType) ? (
          <>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full">
                <Form.Item name="have_ware_house_location" valuePropName="checked" >
                  <Checkbox >Do you have a ware house</Checkbox>
                </Form.Item>
              </div>
            </div>

            {
              have_ware_house_location ? (
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full md:w-1/2 px-4">
                    <InputText label={t('fields.wareHouseLocation')} rules={[{ required: true }]} name={'warehouse_location'} />
                  </div>
                </div>
              ) :""
            }


          </>
        ) : ''
      }


      {
        isVisible('dates',licenseType) ? (
          <>
            <div className="grid grid-cols-4">
              <p>Date</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <DatePickerInput label={t('fields.issueDate')}  rules={[{ required: true }]} name={"issue_date"} />
              <DatePickerInput label={t('fields.expiryDate')}  rules={[{ required: true }]} name={"expiry_date"} />
            </div>
          </>
        ) : ''
      }

      {
        isVisible('associated_licenses',licenseType) ? (
          <>
            <div className="grid">

              <Form.List name="associated_licenses">
                {(fields, { add, remove }) => (
                  <>
                  {fields.map(({ key, name, ...restField }) => (

                      <>
                        <div className=" p-4 rounded-[14px] border border-[#FFA897] mb-4" key={key}>
                          <div className="flex justify-end">
                            <Button type={'primary'}  size={'small'} onClick={() => remove(name)}>X</Button>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <Form.Item
                              label={t('fields.alcoholLicenseNumber')}
                              {...restField}
                              name={[name, 'alcohol_license_number']}
                              rules={[{ required: true, message: 'Missing Alcohol Licene No' }]}
                            >
                              <Input placeholder="Alcohol License Number" />
                            </Form.Item>


                            <Form.Item className={'w-full'}
                                       label={t('fields.tradeName')}

                                       {...restField}
                                       name={[name, 'trade_name']}
                                       rules={[{ required: true, message: 'Missing Trade Name' }]}
                            >
                              <Input placeholder="Trade name" />


                            </Form.Item>


                            <Form.Item className={'w-full'}
                                       label={t('fields.retailShop')}

                                       {...restField}
                                       name={[name, 'retail_shop']}
                                       rules={[{ required: true, message: 'Missing Retail shop' }]}
                            >
                              <Input placeholder="Retail shop" />
                            </Form.Item>


                            <RegionDropDown                                        name={[name, 'region']}
                            />


                            <Form.Item className={'w-full'}
                                       label={t('fields.address')}

                                       {...restField}
                                       name={[name, 'address']}
                                       rules={[{ required: true, message: 'Missing Address' }]}
                            >
                              <Input placeholder="Address" />
                            </Form.Item>



                            <MapInput form={form} restFields={restField}
                                      name={[name]}
                            />

                          </div>
                        </div>
                      </>
                    ))}
                    <div className="grid grid-cols-4">
                      <Button type={'primary'} className={'w-40'} onClick={() => add()}>Add License</Button>
                    </div>
                  </>
                )}


              </Form.List>
            </div>
          </>
        ) : ''
      }

      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4 flex gap-2">

        </div>
      </div>


    </>


  )
    ;
}


export default CommonFields;