/*服务器的配置*/
/*orm相关用法 关系映射模型*/
var express = require('express');
var orm = require('orm');

module.exports = function(router) {
    router.use(orm.express("mysql://root:@localhost:3306/newsdata", {
        define: function(db, models, next) {
            models.news = db.define("news", {
                newsid: {
                    type: 'serial',
                    key: true
                },
                newstype: String,
                newsimg: String,
                newscontent: String,
                newstime: Date
            });
            next();
        }
    }));

    var dbs = {
        selectData: function(req, res, next) {
            var selectjson;
            if (req.body.id == undefined) {
                selectjson = {
                    newstype: req.body.newstype
                };
            } else {
                selectjson = {
                    newstype: req.body.newstype /*处理post请求，获取post请求体*/
                };
            }
            req.models.news.find(selectjson, function(err, news) {
                if (err)
                    return console.error("Connection error" + err);
                res.locals.news = news;
                console.log(news);
                next();
            });
        },
        insertData: function(req, res, next) {
            req.models.news.create({
                newsimg: req.body.newsimg,
                newscontent: req.body.newscontent,
                newstime: req.body.newstime,
                newstype: req.body.newstype
            }, function(err, news) {
                if (err)
                    return console.error("Connection error:" + err);
                res.locals.news = {
                    'result': "成功插入数据"
                }
                next();
            });
        },
        // 删除数据
        deleteData: function(req, res, next) {
            req.models.news.find({
                newsid: req.body.newsid
            }, function(err, news) {
                if (err)
                    return console.error('Connection error: ' + err);
                news[0].remove(function(err) {
                    if (err)
                        return console.error('Connection error: ' + err);
                    res.locals.news = {
                        'result': "数据删除成功"
                    };
                    next();
                });
            });
        },
        // 修改数据
        updateData: function(req, res, next) {
            console.log(req.body);
            req.models.news.find({
                newsid: req.body.newsid
                    // req.body.classfy
            }, function(err, news) {
                if (err)
                    return console.error('Connection error: ' + err);

                news[0].newstitle = req.body.newstitle;
                news[0].newsimg = req.body.newsimg;
                news[0].newscontent = req.body.newscontent;
                news[0].newstime = req.body.newstime;

                news[0].save(function(err) {
                    if (err)
                        return console.error('Connection error: ' + err);
                    res.locals.news = {
                        'result': "数据修改成功"
                    };
                    next();
                });
            });
        }
    }
    return dbs;
}
