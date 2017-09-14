const fs = require('fs');
const infoList = require('../utils/infoList');

(function eachList(index) {
    info = JSON.parse(fs.readFileSync(`../resources/${infoList[index].fileName}.json`).toString())
    info.urls = info.urls.reduce((pre, cur) => {
        pre.push(...cur);
        return pre;
    }, [])
    fs.writeFile(`../resources/${info.fileName}1.json`, JSON.stringify(info), function (err) {
        if (err) {
            console.log(err)
            return;
        }
        console.log(info.urls.length)
        index++;
        eachList(index);
    })
})(0)