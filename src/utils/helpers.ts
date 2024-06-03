import {store} from '../store/index';

export const currencyFormat = (amount: any) => {
  amount = isNaN(parseFloat(amount)) ? 0 : parseFloat(amount);
  return `AED ${amount}`;
};


export const getByLocale = ( data , key ) => {
  if(!data){
    return ;
  }
  const state = store.getState();
  const currentLanguage = state.app.locale;
  if(currentLanguage === 'ar'){
    const localeAttribute  = `${key}_ar`;
    if(data[`${localeAttribute}`]){
      return data[`${localeAttribute}`];
    }
    return data[key];
  }

  return data[key];
};
