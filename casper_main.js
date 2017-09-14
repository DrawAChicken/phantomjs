const infoList = require('./utils/infoList');
const parseDOM = require('./utils/parseDOM');
const _ = require('underscore');
const casper = require('casper').create({
    verbose: true,
    logLevel: 'error',
    pageSettings: {
        loadImages: false,
        loadPlugins: false
    }
});
casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

var startTime,
    endTime,
    info;

casper.start();

casper.then(function () {
    startTime = + new Date;
});
casper.then(function () {
    parseDOM.call(casper, 'http://s.lol5s.com/tv/2.html');
    // casper.thenOpen('http://s.lol5s.com/tv/2.html', function () {

    // });
    
    // _.each(infoList, function (item) {
    //     if (item.url) {
    //         casper.thenOpen(item.url, function () {
    //             parseDOM.call(casper);
    //         });
    //     }
    // })
})
casper.then(function () {
    endTime = + new Date;
    this.echo('耗时:' + ((endTime - startTime) / 1000) + 's');
})

casper.run();