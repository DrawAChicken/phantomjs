const log4js = require('log4js');
const moment = require('moment');

log4js.configure({
    appenders: {
        err: {
            type: 'file',
            filename: `${process.cwd()}/log/error.${moment().format('YYYY-MM-DD')}.log`
        },
        info: {
            type: 'file',
            filename: `${process.cwd()}/log/info.${moment().format('YYYY-MM-DD')}.log`
        },
        console: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['err', 'console'],
            level: 'error'
        },
        info: {
            appenders: ['info', 'console'],
            level: 'info'
        }
    }
});
const _err = log4js.getLogger();
const _info = log4js.getLogger('info');
module.exports = {
    loggerErr(info) {
        _err.error(info);
    },
    loggerInfo(info) {
        _info.info(info);
    }
}