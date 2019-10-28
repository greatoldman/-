$(document).ready(function () {
    var $menu = $(".indexNav > .navBox");

    $menu.menuAim({
        activate: activateSubmenu,
        deactivate: deactivateSubmenu,
        exitMenu: exitMenuSubmenu,
        submenuDirection: "below"
    });

    function activateSubmenu(row) {
        var $row = $(row);
        var menuBox = $row.find(".menuBox");
        var triangle = $row.find(".triangle");
        menuBox.show();
        triangle.show();
        TweenMax.to(menuBox,0.3,{ opacity:1 });
        TweenMax.to(triangle,0.3,{ opacity:1 });
    }

    function deactivateSubmenu(row) {
        var $row = $(row);
        var menuBox = $row.find(".menuBox").hide();
        var triangle = $row.find(".triangle");
        TweenMax.to(menuBox,0.2,{ opacity:0 });
        TweenMax.to(triangle,0.2,{ opacity:0 });
    }

    function exitMenuSubmenu(e) {
        return true;
    }

    var newsBox = $(".newsBox");
    var newsBoxAct = setInterval(function(){
        TweenMax.to(newsBox.find("li").eq(0),1,{ marginTop:-40,onComplete:function(){
            TweenMax.set(newsBox.find("li").eq(0),{ marginTop:-0});
            newsBox.append(newsBox.find("li").eq(0));
        }});
    },3000);

    //bannerBox---Start
    var bannerBox = $(".bannerBox");
    var bannerDotBox = $(".bannerDotBox");
    var bannerNowPage = 0;      //当前播放器的页面位置
    var dotLong = bannerDotBox.find(".dotLong");
    for(var i = 0; i < bannerBox.find(".imgBox").length + 2 ; i++){     //样式关系，生成的导航tab数比页面多两个，设置导航栏位置时需要注意！！
        bannerDotBox.append("<div class='dots'><img src='./img/imgDot.png'></div>");
    }
    var dots = bannerDotBox.find(".dots");
    if( dots.length ){
        TweenMax.set(bannerDotBox,{ width: (dots.length - 2) * 10 + 25, marginLeft: -(bannerDotBox.find(".dots").length * 10 + 25)/2 });
        TweenMax.set(dotLong,{ left: dots.eq(0).position().left});
    }

    bannerBox.slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable:false,
    });

    bannerBox.on("beforeChange",function(event, slick, currentSlide, nextSlide){
        if( currentSlide == nextSlide ){
            return;
        }
        bannerNowPage = nextSlide;
        TweenMax.to(dotLong,0.3,{ x: 10 * nextSlide });

    });

    dots.click(function(){
        var toIndex = 0;
        if( bannerNowPage > $(this).index() - 3 ){
            toIndex = $(this).index() - 1;
        }else{
            toIndex = $(this).index() - 3 < 0 ? 0 : $(this).index() - 3;
        }
        bannerBox.slick("slickGoTo",toIndex);
    });
    //bannerBox---END


    var weixin = $(".companyInfo").find(".weixin");
    var weixinCode = $(".companyInfo").find(".codeImg");
    weixin.mouseenter(function(e){
        weixinCode.show();
        TweenMax.set(weixinCode,{ opacity:0 });
        TweenMax.to(weixinCode,0.3,{ opacity:1 });
    });
    weixin.mouseleave(function(e){
        weixinCode.hide();
    })

    var Ohtml = document.documentElement;
    function getSize(){
        // 获取屏幕的宽度
        var screenWidth = Ohtml.clientWidth;
        // var mateHtml = '<meta name="viewport" content="width='+window.screen.width * window.devicePixelRatio+'">'
        var mateHtml = '<meta name="viewport" content="width='+window.screen.width * window.devicePixelRatio+'">'
        $("title").after(mateHtml)
        // alert(window.screen.width * window.devicePixelRatio)
    }
       
        
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        // $(".bannerImg ").css('width','100%');
        // $(".bannerImg img").css('width','100%');
        $(".bannerTop ").css('overflow','hidden');
        getSize();
        
    }else{
        var htmlMate = '<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">'
        $("title").after(htmlMate);
    }
});
   
