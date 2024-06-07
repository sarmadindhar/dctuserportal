import NetworkUtil from '../../utils/NetworkUtil';

export const getLicenseTypesService = (query: any) => {
  return NetworkUtil('GET', 'license-type', null, query);
};


export const addLicenseTypeService = (request: any) => {
  return NetworkUtil('POST', 'license-type', request, null, true);
};

export const getLicenseTypeService = (id: string) => {
  return NetworkUtil('GET', `license-type/${id}`);
};

export const updateLicenseTypeService = (id: string, request: any) => {
  return NetworkUtil('PUT', `license-type/${id}`, request, null, true);
};

export const deleteLicenseTypeService = (id: any) => {
  return NetworkUtil('DELETE', `license-type/${id}`);
};



export const getLicenseTypesByActionService = (action:any) => {
  return NetworkUtil('GET', `userPortal/license-types/${action}`);
};