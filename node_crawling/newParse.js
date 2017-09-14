const { loggerErr, loggerInfo } = require('../utils/logger');
const parsingHTML = require('./parsingHTML');
const writeFile = require('./writeFile');
const infoList = require('../utils/infoList');

module.exports = function (info, index) {
    return new Promise((resolve, reject) => {
        (function parse(i) {
            parsingHTML(infoList[index].url(i))
                .then($ => {
                    list = $('.row.margin.slides.slides-border.bt15').find('a').map(function () {
                        return $(this).attr('href');
                    }).toArray();
                    if (list.length) {
                        info.urls[i] = [...list];
                        i++;
                        parse(i);
                    }
                    else {
                        writeFile(info)
                            .then(() => {
                                index++;
                                if (infoList[index]) {
                                    resolve(index);
                                }
                                else {
                                    loggerInfo('----------采集结束----------');
                                }
                            })
                            .catch(err => {
                                loggerErr(err);
                            })
                    }
                })
                .catch(err => {
                    loggerErr(`url:${item.url(i)}; 错误信息: ${err}`);
                })
        })(0);
    })
}
