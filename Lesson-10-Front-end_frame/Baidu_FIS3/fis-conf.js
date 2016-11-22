//加md5校验
fis.match('**.{js,css,png,jpg}', {
    useHash: true
});

//启用fis-spriter-cssspriters插件
fis.match('::packager', {
    postpackager: fis.plugin('loader')
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', { useSprite: true, optimizer: fis.plugin('clean-css') });

//将css、js、png、jpg文件发布到对应文件夹
fis.match('*.css', {
    release: '/static/pro_css/$0'
});

fis.match('*.js', {
    release: '/static/pro_js/$0'
});

fis.match('*.{png,jpg}', {
    release: '/static/pro_img/$0'
});


//进行css、js合并
fis.match('*.css', {
    packTo: '/css/fis.css'
});

fis.match('*.js', {
    packTo: '/js/fis.js'
});

fis.match('*.html', {
    optimizer: fis.plugin('html-minifier')
});
