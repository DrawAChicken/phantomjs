module.exports = function (ul) {
    const _this = this;
    var list = [];
    function parse() {
        _this.thenOpen(ul, function () {
            const as = _this.evaluate(function () {
                const aList = $('ul#data_list a');
                var links;
                if (aList.length) {
                    links = $.map(aList, function (link) {
                        return $(link).attr('href');
                    })
                    // $('div#long-page a')
                }
                return $.each;
            })
            list.concat(as);
            console.log(as)
        });
    }
    parse(list)
}