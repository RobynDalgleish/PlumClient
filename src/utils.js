import moment from 'moment';

export const sortByDate = (data, dateProp) => {
  return data
  //just for making a new copy
  .filter(Boolean)
  .sort((a, b) => moment(a[dateProp]).isBefore(moment(b[dateProp])) ? -1 : 1);
}