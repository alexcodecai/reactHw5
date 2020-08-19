import moment from 'moment';
const today = moment().format("YYYYMMDD");
const tomorrow = moment().add(1,'days').format("YYYYMMDD");
const yesterday = moment().add(-1,'day').format("YYYYMMDD");

export {today, tomorrow, yesterday}
