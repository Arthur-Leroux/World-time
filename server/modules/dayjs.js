const dayjs = require(`dayjs`);
const timezone = require('dayjs/plugin/timezone');
const utc = require('dayjs/plugin/utc');
require(`dayjs/locale/fr`)
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale(`fr`);




module.exports = dayjs;
