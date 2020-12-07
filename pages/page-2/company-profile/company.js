
$('#header').load('../../../template/common/header/index.html', function () {
    $(this).append(
        $('<script/>', { src: '../../../template/common/header/index.js' })
    )
})
$('#footer').load('../../../template/common/footer/index.html', function () {
    $(this).append(
        $('<script/>', { src: '../../../template/common/footer/index.js' })
    )
})