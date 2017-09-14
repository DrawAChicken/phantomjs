const fs = require('fs');
const { loggerInfo } = require('../utils/logger');

module.exports = function writeFile(info) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${process.cwd()}/resources/${info.fileName}.json`, JSON.stringify(info), function (err) {
            if (err) {
                reject(err);
                return;
            }
            const dataNumber = info.urls.reduce((pre, cur) => {
                pre += cur.length;
                return pre;
            }, 0);
            loggerInfo(`类行:${info.name}；数量:${dataNumber}；耗时: ${(+ new Date - process.env.startTime) / 1000} s；`);
            resolve();
        })
    })
}