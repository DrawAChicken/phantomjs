const parsingHTML = require('./node_crawling/parsingHTML');
const newParse = require('./node_crawling/newParse');
const updata = require('./node_crawling/updata');
const writeFile = require('./node_crawling/writeFile');
const infoList = require('./utils/infoList');
const { loggerErr, loggerInfo } = require('./utils/logger');
const fs = require('fs');

(function eachList(index) {
    const item = infoList[index]
    let list = [],
        info = {
            name: item.name,
            fileName: item.fileName,
            id: item.id,
            urls: []
        };
    process.env.startTime = + new Date;
    try {
        info = JSON.parse(fs.readFileSync(`${process.cwd()}/resources/${info.fileName}.json`).toString())
    }
    catch (err) {
        loggerErr(`${info.name}-打开文件失败,重新采集！${err.path}`);
        console.log(err)
        // newParse(info, index)
        //     .then(i => {
        //         index = i;
        //         eachList(index);
        //     })
        return;
    };
    updata(info, index);
    console.log(process.env.startTime);
})(0)