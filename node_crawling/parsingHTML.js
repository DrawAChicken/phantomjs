const http = require("http");
const cheerio = require("cheerio");

module.exports = function parsingHTML(url, callback) {
    return new Promise((resovle, reject) => {
        const options = {
            hostname: 'wap.lol5s.com',
            port: 80,
            path: url,
            headers: {
                'Host': 'wap.lol5s.com',
                'Referer': url,
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
            }
        };
        let html = '';
        const req = http.get(options, res => {
            const { statusCode } = res;
            if (statusCode !== 200 && statusCode !== 302 && statusCode !== 404) {
                reject(`请求失败。状态码：${statusCode}`);
            }
            res.setTimeout(20000);
            res.on('timeout', () => {
                res.resume();
                reject('响应超时');
            })
                .on("error", err => {
                    res.resume();
                    reject(`响应错误${e.message}`);
                })
                .on('abort', () => {
                    res.resume();
                })
                .on("data", data => {
                    html += data;
                })
                .on("end", () => {
                    resovle(cheerio.load(html));
                })
        });
        req.setTimeout(20000);
        req.on('error', err => {
            reject(`请求错误${err.message}`);
        })
        req.on('timeout', () => {
            if (req.res) {
                req.res.emit('abort');
            }
            req.abort();
            reject('请求超时');
        })
    })
}