import NetworkUtil from '../../utils/NetworkUtil';

export const getLicenseDocumentsService = (query: any) => {
  return NetworkUtil('GET', 'general/licenseDocuments', null, query);
};
