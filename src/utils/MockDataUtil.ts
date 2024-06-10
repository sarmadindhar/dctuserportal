let endpoints = [
  'userPortal/login',
  // 'business',
  // 'business/calculateFine/xxx',
  // 'business/issueFineByTierOne/xxx',
  'userPortal/cms'
];
export const MockDataUtil = (endpoint: string) => {
  console.log('MOCK:', endpoint);
  let response = null;
  switch (endpoint) {
    case 'auth/login':
      response = {
        data: {
          user: {
            name: 'DCT Admin',
            email: 'admin@dctabudhabi.ae',
            mobile: '1234567890',
            role: '63370d70b15eb35790906ab1',
            is_email_verified: true,
            avatar:
              'https://s.gravatar.com/avatar/4b5aabfd2608268d9873eaf43dea4b8e?s=100&r=x&d=retro',
            id: '6337072eb15eb35790906a31',
          },
          tokens: {
            access: {
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzM3MDcyZWIxNWViMzU3OTA5MDZhMzEiLCJpYXQiOjE2NjUxNDA4NzgsImV4cCI6MTY2NTE0MjY3OCwiaWQiOiI2MzM3MDcyZWIxNWViMzU3OTA5MDZhMzEiLCJ0eXBlIjoiYWNjZXNzIn0.FLl1B7_SWDM1nQZtnp818ndmVQCM3V8i0NhKhEWCqzs',
              expires: '2022-10-07T11:37:58.405Z',
            },
            refresh: {
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzM3MDcyZWIxNWViMzU3OTA5MDZhMzEiLCJpYXQiOjE2NjUxNDA4NzgsImV4cCI6MTY2NzczMjg3OCwiaWQiOiI2MzM3MDcyZWIxNWViMzU3OTA5MDZhMzEiLCJ0eXBlIjoicmVmcmVzaCJ9.W-aqg3wpz_IBrzpAKxofa_VMvmEJoFtrpwcdb-q3W20',
              expires: '2022-11-06T11:07:58.405Z',
            },
          },
        },
        status: 200,
      };
      break;
    case 'requests':
      response = {
        data: {
          user: {
            name: 'DCT Admin',
            email: 'admin@dctabudhabi.ae',
            mobile: '1234567890',
            role: '63370d70b15eb35790906ab1',
            is_email_verified: true,
            avatar:
              'https://s.gravatar.com/avatar/4b5aabfd2608268d9873eaf43dea4b8e?s=100&r=x&d=retro',
            id: '6337072eb15eb35790906a31',
          },
          tokens: {
            access: {
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzM3MDcyZWIxNWViMzU3OTA5MDZhMzEiLCJpYXQiOjE2NjUxNDA4NzgsImV4cCI6MTY2NTE0MjY3OCwiaWQiOiI2MzM3MDcyZWIxNWViMzU3OTA5MDZhMzEiLCJ0eXBlIjoiYWNjZXNzIn0.FLl1B7_SWDM1nQZtnp818ndmVQCM3V8i0NhKhEWCqzs',
              expires: '2022-10-07T11:37:58.405Z',
            },
            refresh: {
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzM3MDcyZWIxNWViMzU3OTA5MDZhMzEiLCJpYXQiOjE2NjUxNDA4NzgsImV4cCI6MTY2NzczMjg3OCwiaWQiOiI2MzM3MDcyZWIxNWViMzU3OTA5MDZhMzEiLCJ0eXBlIjoicmVmcmVzaCJ9.W-aqg3wpz_IBrzpAKxofa_VMvmEJoFtrpwcdb-q3W20',
              expires: '2022-11-06T11:07:58.405Z',
            },
          },
        },
        status: 200,
      };
      break;
    case 'auth/logout':
      response = {
        data: {},
        status: 200,
      };
      break;
    case 'userPortal/cms':
      response = {
        data: {
          license_types:[
            {
              "id": "D2C0B02F-C247-4A99-A31D-60148201AD05",
              "name": "Advertising Permit",
              "name_ar": "تصريح الدعاية",
              "fee": 0,
              "cms_image": "https://dctproject.blob.core.windows.net/media/media7608317958675048-1704714511_659be10f7c366_XL_Lays_Flamin_Hot_New.png",
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              "description_ar": "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد",
              "documents": [
                {"name": "Alcohol License Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Special License","name_ar": "ترخيص خاص"},
                {"name": "Alcohol  Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Trade License","name_ar": "رخصة تجارية"},
                {"name": "Special License","name_ar": "ترخيص خاص"}
              ]
            },
            {
              "id": "D2C0B02F-C247-4A99-A31D-60148201AD05",
              "name": "Advertising Permit",
              "name_ar": "تصريح الدعاية",
              "fee": 0,
              "cms_image": "https://dctproject.blob.core.windows.net/media/media7608317958675048-1704714511_659be10f7c366_XL_Lays_Flamin_Hot_New.png",
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              "description_ar": "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد",
              "documents": [
                {"name": "Alcohol License Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Special License","name_ar": "ترخيص خاص"},
                {"name": "Alcohol  Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Trade License","name_ar": "رخصة تجارية"},
                {"name": "Special License","name_ar": "ترخيص خاص"}
              ]
            },
            {
              "id": "D2C0B02F-C247-4A99-A31D-60148201AD05",
              "name": "Advertising Permit",
              "name_ar": "تصريح الدعاية",
              "fee": 0,
              "cms_image": "https://dctproject.blob.core.windows.net/media/media7608317958675048-1704714511_659be10f7c366_XL_Lays_Flamin_Hot_New.png",
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              "description_ar": "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد",
              "documents": [
                {"name": "Alcohol License Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Special License","name_ar": "ترخيص خاص"},
                {"name": "Alcohol  Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Trade License","name_ar": "رخصة تجارية"},
                {"name": "Special License","name_ar": "ترخيص خاص"}
              ]
            },
            {
              "id": "D2C0B02F-C247-4A99-A31D-60148201AD05",
              "name": "Advertising Permit",
              "name_ar": "تصريح الدعاية",
              "fee": 0,
              "cms_image": "https://dctproject.blob.core.windows.net/media/media7608317958675048-1704714511_659be10f7c366_XL_Lays_Flamin_Hot_New.png",
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              "description_ar": "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد",
              "documents": [
                {"name": "Alcohol License Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Special License","name_ar": "ترخيص خاص"},
                {"name": "Alcohol  Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Trade License","name_ar": "رخصة تجارية"},
                {"name": "Special License","name_ar": "ترخيص خاص"}
              ]
            },
            {
              "id": "D2C0B02F-C247-4A99-A31D-60148201AD05",
              "name": "Advertising Permit",
              "name_ar": "تصريح الدعاية",
              "fee": 0,
              "cms_image": "https://dctproject.blob.core.windows.net/media/media7608317958675048-1704714511_659be10f7c366_XL_Lays_Flamin_Hot_New.png",
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              "description_ar": "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد",
              "documents": [
                {"name": "Alcohol License Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Special License","name_ar": "ترخيص خاص"},
                {"name": "Alcohol  Number","name_ar": "رقم ترخيص الكحول"},
                {"name": "Trade License","name_ar": "رخصة تجارية"},
                {"name": "Special License","name_ar": "ترخيص خاص"}
              ]
            }
          ],
          faq:{
            hero_banner_image:"",
            faqs:[
              {
                question:"What is Webflow and why is it the best website builder",
                answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

                question_ar:"التراخيص على أساس سنوي. كما نقدم تصريح الإعلان والترويج لدعم هذه الأعمال",
                answer_ar:"تفويض من حكومة أبوظبي، تعتبر دائرة الثقافة والسياحة - أبوظبي الجهة المخولة بإصدار التراخيص الخاصة التي تلبي احتياجات السوق. نقدم عدة أنواع من التراخيص الخاصة ضمن فئات مختلفة تشمل تجارة التجزئة والتوزيع، والاستيراد وإعادة التصدير  والتخزين، والتطبيقات الالكترونية، والمنافذ المستقلة، والنوادي الاجتماعية والرياضية، والمطارات، والمنطقة السياحية. ويتم تجديد هذه التراخيص على أساس سنوي. كما نقدم تصريح الإعلان والترويج لدعم هذه الأعمال.",

              },
              {
                question:"What is your favorite template from BRIX Templates?",
                answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                question_ar:"والنوادي الاجتماعية والرياضية، والمطارات، والمنطقة السياحية",
                answer_ar:"تفويض من حكومة أبوظبي، تعتبر دائرة الثقافة والسياحة - أبوظبي الجهة المخولة بإصدار التراخيص الخاصة التي تلبي احتياجات السوق. نقدم عدة أنواع من التراخيص الخاصة ضمن فئات مختلفة تشمل تجارة التجزئة والتوزيع، والاستيراد وإعادة التصدير  والتخزين، والتطبيقات الالكترونية، والمنافذ المستقلة، والنوادي الاجتماعية والرياضية، والمطارات، والمنطقة السياحية. ويتم تجديد هذه التراخيص على أساس سنوي. كما نقدم تصريح الإعلان والترويج لدعم هذه الأعمال.",

              },
              {
                question:"How do you clone a Webflow Template from the Showcase?",
                answer:"",
                question_ar:"والتخزين، والتطبيقات الالكترونية، والمنافذ المستقلة",
                answer_ar:"تفويض من حكومة أبوظبي، تعتبر دائرة الثقافة والسياحة - أبوظبي الجهة المخولة بإصدار التراخيص الخاصة التي تلبي احتياجات السوق. نقدم عدة أنواع من التراخيص الخاصة ضمن فئات مختلفة تشمل تجارة التجزئة والتوزيع، والاستيراد وإعادة التصدير  والتخزين، والتطبيقات الالكترونية، والمنافذ المستقلة، والنوادي الاجتماعية والرياضية، والمطارات، والمنطقة السياحية. ويتم تجديد هذه التراخيص على أساس سنوي. كما نقدم تصريح الإعلان والترويج لدعم هذه الأعمال.",
              }
            ],
          },
          guideline:{
            hero_banner_image:"",
            documents:[
              {
                name:"Circulars",
                url:"",
              },
              {
                name:"Regulation",
                url:"",
              },
              {
                name:"Guideline",
                url:"",
              },
            ],
          },
          home:{
            banner_text : "As per the Abu Dhabi Government mandate, DCT Abu Dhabi is the entity authorised to issue Special Licenses that cater to market needs. We offer several types of Special Licenses under various categories including Retail Shop and Distribution, Import Export and Warehouse, Online Application, Independent Outlet, Social & Sports Club, Airports and Tourism Destination. These licenses are to be renewed on an annual basis.  We also offer an Advertisement & Promotion permit to support this business.",
            banner_text_ar:"وفقًا لتفويض حكومة أبوظبي، فإن دائرة الثقافة والسياحة - أبوظبي هي الجهة المخولة بإصدار التراخيص الخاصة التي تلبي احتياجات السوق. نحن نقدم عدة أنواع من التراخيص الخاصة ضمن فئات مختلفة بما في ذلك متجر البيع بالتجزئة والتوزيع، والاستيراد والتصدير والمستودعات، والتطبيق عبر الإنترنت، والمنفذ المستقل، والنادي الاجتماعي والرياضي، والمطارات والوجهات السياحية. ويجب تجديد هذه التراخيص على أساس سنوي.  نقدم أيضًا تصريح إعلان وترويج لدعم هذا العمل.",
            hero_banner_image:"",
            hero_banner_text:"We are working towards full automation of our services, to better serve our stakeholders by providing them the ability to track their applications. ",
            hero_banner_text_ar:"  نقدم أيضًا تصريح إعلان وترويج لدعم هذا العمل",
            hero_banner_heading:"Special Licensing",
            hero_banner_heading_ar:"الترخيص الخاص",
          },
        },
        status: true,
      };
      break;
    default:
      break;
  }
  return response;
};

export const mockEndpoint = (endpoint: string) => {
  console.log(endpoint, endpoints.some((value: string) => value === endpoint),'lin');
  return endpoints.some((value: string) => value === endpoint);
};
