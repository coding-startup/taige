(function() {
	window.scrollReveal = new scrollReveal({
		reset: true
	});
})();
$('#header').load('../../../template/common/header/index.html', function () {
    $(this).prepend(
        $('<link/>', { rel: 'stylesheet', href: '../../../assets/css/reset.css' }),
        $('<link/>', { rel: 'stylesheet', href: '../../../assets/iconfont/iconfont.css' }),
        $('<link/>', { rel: 'stylesheet', href: '../../../template/common/header/index.css' })
    ).append(
        $('<script/>', { src: '../../../template/common/header/index.js' })
    )
})
$('#footer').load('../../../template/common/footer/index.html', function () {
    $(this).prepend(
    	$('<link/>', { rel: 'stylesheet', href: '../../../assets/iconfont/iconfont.css' }),
        $('<link/>', { rel: 'stylesheet', href: '../../../template/common/footer/index.css' })
    ).append(
        $('<script/>', { src: '../../../template/common/footer/index.js' })
    )
})