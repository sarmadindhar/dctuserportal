import NetworkUtil from '../../utils/NetworkUtil';

export const getRegions = (query: any) => {
  return NetworkUtil('GET', 'userPortal/get-regions', null, query);
}
