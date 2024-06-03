import NetworkUtil from '../../utils/NetworkUtil';
export const getCmsContentService = (query: any) => {
  console.log('from service');
  return NetworkUtil('GET', 'userPortal/cms', null, query);
};
