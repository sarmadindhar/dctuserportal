import NetworkUtil from '../../utils/NetworkUtil';

export const uploadFileService = (request: any) => {
  return NetworkUtil('POST', 'uploads/image', request, null, true);
};
