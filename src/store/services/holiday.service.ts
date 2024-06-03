import NetworkUtil from '../../utils/NetworkUtil';

export const getHolidaysService = (query: any) => {
  return NetworkUtil('GET', 'calendar', null, query);
};

export const addHolidayService = (request: any) => {
  return NetworkUtil('POST', 'calendar', request);
};

export const getHolidayService = (id: string) => {
  return NetworkUtil('GET', `calendar/${id}`);
};

export const updateHolidayService = (id: string, request: any) => {
  return NetworkUtil('PUT', `calendar/${id}`, request);
};

export const deleteHolidayService = (id: any) => {
  return NetworkUtil('DELETE', `calendar/${id}`);
};
