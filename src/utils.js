import moment from 'moment';

export const sortByDate = (data, dateProp, ascending) => {
    //just for making a new copy
    if (ascending) {
      return data
      .filter(Boolean)
      .sort((a, b) => moment(a[dateProp]).isBefore(moment(b[dateProp])) ? -1 : 1);
    }
    else {
      return data
      .filter(Boolean)
      .sort((a, b) => moment(a[dateProp]).isBefore(moment(b[dateProp])) ? 1 : -1);
    }
}
