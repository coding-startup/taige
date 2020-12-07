$(function(){
    var mySwiper = new Swiper ('.mySwiper1', {
        loop: true,
        effect : 'slide',//slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
        autoplay : {
        delay:3000,
        disableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    }) 
    
})
function describeChild2Move(){
    $(".describe-child2-left").animate({opacity:"1"},2000);        
    setTimeout(function(){
        $(".describe-child2-item1").animate({left:'5%',opacity:"1"},1000);
    },500);
    setTimeout(function(){
        $(".describe-child2-item2").animate({left:'5%',opacity:"1"},1000);
    },1000);
    setTimeout(function(){
        $(".describe-child2-item3").animate({left:'5%',opacity:"1"},1000);
},1500);

}   
var x=0;
    $(window).on("scroll",function(){
        var top=$(document).scrollTop();
        if(top>150){
            $(window).off("scroll");
            // console.log(top);
            describeChild2Move();	
        }
    });
    
    // 产品解决方案动画切换效果
    $(".project-child").mouseover(function(){
        $(this).addClass("project-child-on").siblings().removeClass("project-child-on");
        
    });