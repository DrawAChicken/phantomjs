function parseUrl(id, page) {
    if (page) {
        return `http://wap.lol5s.com/tv/${id}-${page + 1}.html`
    }
    return `http://wap.lol5s.com/tv/${id}.html`
}
module.exports = [
    {
        name: '电影',
        fileName: 'dianying',
        id: 1,
        url(i) {
            return parseUrl(2, i);
        }
    },
    {
        name: '电视剧',
        fileName: 'dianshiju',
        id: 2,
        url(i) {
            return parseUrl(17, i);
        }
    },
    {
        name: '英美剧',
        fileName: 'yingmeiju',
        id: 3,
        url(i) {
            return parseUrl(45, i);
        }
    },
    {
        name: '动漫',
        fileName: 'dongman',
        id: 4,
        url(i) {
            return parseUrl(20, i);
        }
    },
    {
        name: '综艺',
        fileName: 'zongyi',
        id: 5,
        url(i) {
            return parseUrl(40, i);
        }
    }

]