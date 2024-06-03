let endpoints = [
  'auth/login',
  // 'business',
  // 'business/calculateFine/xxx',
  // 'business/issueFineByTierOne/xxx',
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
    case 'business':
      response = {
        status: true,
        message: null,
        data: [
          {
            _id: '633de96a4a9e9dc396fbdc7c',
            name: 'Five Seasons',
            owner_name: 'FS',
            trade_license_number: '#FEE2224333E',
            location: 'Al Maryah Island',
            phone: '0589433939',
            mobile: '0583566933',
            email: 'gm@fivesesons.me',
            gm_name: 'Jane Doe',
            gm_mobile: '05656422434',
            business_licenses: [
              {
                _id: '63793ac84b9bea296704ab16',
                business_id: '633de96a4a9e9dc396fbdc7c',
                license_number: 'air012345',
                issue_date: '2022-11-19',
                expiry_date: '2023-11-19',
                documents: [
                  {
                    path: 'trimString',
                    file_type: 'file name',
                    mime_type: 'trimString',
                    type: 'External',
                    issue_date: '2022-11-19',
                    expiry_date: '2023-11-19',
                  },
                ],
                fines: [
                  {
                    fine_type: '637d27952566029db7c8d0b4',
                    violation_number: 1,
                    _id: '637ba7b6cd5736b2b74ebd62',
                    assigned_to: '633ec380b90128111559ee38',
                    fee: 3000,
                    is_closed: false,
                    is_managed_by_court: false,
                    is_warning: false,
                    last_assigned_user: '633ec380b90128111559ee38',
                    status: {
                      _id: '636bf5b360b25e26575d4114',
                      slas_name: 'Active',
                      tamm_name: 'Active',
                      slug: 'active',
                      __v: 0,
                    },
                    comments: [
                      {
                        comment: 'The fine is amended',
                        created_date: '2022-11-22T09:44:23.739Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c9a49a8149694f7474c98',
                      },
                      {
                        comment: 'The fine is amended',
                        created_date: '2022-11-22T09:44:23.739Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c9a77a8149694f7474caa',
                      },
                    ],
                  },
                  {
                    fine_type: '637d27952566029db7c8d0b4',
                    fee: null,
                    is_paid: false,
                    created_date: '2022-11-21T20:19:06.539Z',
                    created_by: '633ec380b90128111559ee38',
                    last_assigned_user: '633ec380b90128111559ee38',
                    assigned_to: '633ec380b90128111559ee38',
                    is_managed_by_court: false,
                    is_warning: false,
                    is_closed: false,
                    violation_number: 2,
                    status: {
                      _id: '636bf5b360b25e26575d4114',
                      slas_name: 'Active',
                      tamm_name: 'Active',
                      slug: 'active',
                      __v: 0,
                    },
                    _id: '637bdd4b9a1887b6cb7dcff4',
                    comments: [
                      {
                        comment: 'This fine is wrong please correct it',
                        created_date: '2022-11-22T08:00:51.277Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c820f136d87ce7a48d539',
                      },
                      {
                        comment: 'This fine is wrong please correct it',
                        created_date: '2022-11-22T08:00:51.277Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c824f136d87ce7a48d54a',
                      },
                      {
                        comment: 'This fine is wrong please correct it 2nd',
                        created_date: '2022-11-22T08:04:48.148Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c82b4f959ce3e568b116c',
                      },
                      {
                        comment: 'This fine is rejected',
                        created_date: '2022-11-22T08:04:48.148Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c8315f959ce3e568b117c',
                      },
                    ],
                  },
                  {
                    fine_type: '637d27952566029db7c8d0b4',
                    fee: 3000,
                    is_paid: false,
                    created_date: '2022-11-21T20:19:06.539Z',
                    created_by: '633ec380b90128111559ee38',
                    last_assigned_user: '633ec380b90128111559ee38',
                    assigned_to: null,
                    is_managed_by_court: false,
                    is_warning: false,
                    is_closed: false,
                    violation_number: 3,
                    status: {
                      _id: '636bf5b360b25e26575d4114',
                      slas_name: 'Active',
                      tamm_name: 'Active',
                      slug: 'active',
                      __v: 0,
                    },
                    _id: '637bddc29a1887b6cb7dd000',
                    comments: [
                      {
                        comment: 'The fine is approved by tier 2 3rd comment',
                        created_date: '2022-11-22T06:36:49.707Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c6e54ed5899eb274d892e',
                      },
                      {
                        comment: 'The fine is approved by tier 2 3rd comment',
                        created_date: '2022-11-22T06:36:49.707Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c6e54ed5899eb274d8939',
                      },
                      {
                        comment: 'The fine is approved by tier 2 4th comment',
                        created_date: '2022-11-22T06:38:34.835Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c6e741b7f08a5ecbf2c9c',
                      },
                      {
                        comment: 'The fine is approved by tier 2 5th comment',
                        created_date: '2022-11-22T06:42:49.543Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c6f90dab2f377bff27791',
                      },
                      {
                        comment: 'This the final comment',
                        created_date: '2022-11-22T06:44:41.427Z',
                        created_by: '633ec380b90128111559ee38',
                        _id: '637c7030e1a86728ecbc67e5',
                      },
                    ],
                  },
                ],
                status: {
                  _id: '636bf5b360b25e26575d4114',
                  slas_name: 'Active',
                  tamm_name: 'Active',
                  slug: 'active',
                  __v: 0,
                },
              },
              {
                _id: '63794ae6cd5736b2b74ebd4f',
                business_id: '633de96a4a9e9dc396fbdc7c',
                license_number: 'air987654',
                issue_date: '2022-11-19',
                expiry_date: '2023-11-19',
                documents: [
                  {
                    path: 'trimString',
                    file_type: 'file name',
                    mime_type: 'trimString',
                    type: 'External',
                    issue_date: '2022-11-19',
                    expiry_date: '2023-11-19',
                  },
                ],
                status: {
                  _id: '636bf5b360b25e26575d4114',
                  slas_name: 'Active',
                  tamm_name: 'Active',
                  slug: 'active',
                  __v: 0,
                },
              },
              {
                _id: '63806f6e0408428c65af69c9',
                business_id: '633de96a4a9e9dc396fbdc7c',
                license_number: 'storage012345',
                fines: [],
                documents: [],
                __v: 0,
                status: {
                  _id: '636bf5b360b25e26575d4114',
                  slas_name: 'Active',
                  tamm_name: 'Active',
                  slug: 'active',
                  __v: 0,
                },
              },
              {
                _id: '63806f6e0408428c65af69ca',
                business_id: '633de96a4a9e9dc396fbdc7c',
                license_number: 'export012345',
                fines: [],
                documents: [],
                __v: 0,
                status: {
                  _id: '636bf5b360b25e26575d4114',
                  slas_name: 'Active',
                  tamm_name: 'Active',
                  slug: 'active',
                  __v: 0,
                },
              },
            ],
          },
        ],
      };
      break;
    case 'business/calculateFine/xxx':
      response = {
        message: 'License Fine Calculated',
        data: {
          fineDetails: {
            isManagedByCourt: false,
            fixedAmount: false,
            maxFixedAmount: false,
            isWarning: false,
            isClosed: false,
            fineAmount: 400,
            violationNumber: 4,
          },
        },
      };
      break;
    case 'business/issueFineByTierOne/xxx':
      response = {
        data: {},
        status: true,
      };
      break;
    default:
      break;
  }
  return response;
};

export const mockEndpoint = (endpoint: string) => {
  console.log(endpoint);
  return endpoints.some((value: string) => value === endpoint);
};
