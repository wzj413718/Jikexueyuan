//加md5校验
fis.match('*,{js,css,png,jpg', {
    useHash: true
});

//启用fis-spriter-cssspriters插件
fis.match('::package', {
    spriter: fis.plugin('csssprites'),
    postpakcager: fis.plugin('loader')
});
//对css图片进行合并
fis.match('*.css', {
    useSprite: true
});

fis.match('*.css', {
    optimizer: fis.plugin('clean-css')
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.{png,jpg}', {
    optimizer: fis.plugin('.png-compressor')
});

//进行css、js合并
fis.match('*.css', {
    packTo: '/static/fis.css'
});

fis.match('*.js', {
    packTo: '/static/fis.js'
});
