var express = require('express');
var router = express.Router();
var orm = require('orm');
var dbs = require('../dbs/dbs')(router);

/*到显示手机页面的主页*/
router.get('/shownews', function(req, res, next) {
    res.render('shownews'); /*渲染模板shownews*/
});

/*到显示手机后台页面的主页*/
router.get('/admin', function(req, res, next) {
    res.render('index'); /*渲染模板index*/
});
/*通过post查询数据*/
router.post('/select', dbs.selectData, function(req, res) {
    /*先执行第一个函数，如何将第一个函数的结果传递给第二个函数*/
    res.send(res.locals.news);
});

/*通过post更新数据*/
router.post('/update', dbs.updateData, function(req, res) {
    res.send(res.locals.news);
});


/*通过post插入数据*/
router.post('/insert', dbs.insertData, function(req, res) {
    res.send(res.locals.news);
});

/*删除功能的实现*/
router.post('/delete', dbs.deleteData, function(req, res) {
    res.send(res.locals.news);
});

module.exports = router;
