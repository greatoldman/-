$(document).ready(function () {

    var myClientNav = $(".myClientNav");
    var myClientDetail = $(".myClientList").find(".myClientDetail");
    myClientNav.find("li").find("span").click(function(e){
        myClientNav.find("li").removeClass("on");
        $(this).parent("li").addClass("on");
        TweenMax.to(myClientNav.find(".triangle"),0.3,{left:$(this).position().left + ($(this).outerWidth(true) - 20)/2});
        myClientDetail.hide();
        myClientDetail.eq($(this).parent("li").index()).show();
    });

    //caseList---START
    var caseList = $(".caseList");
    var caseListLength = caseList.find(".item").length;
    caseList.slick({
        arrows:false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        variableWidth: true,
        draggable:false,
        asNavFor: '.clientSayNavList',
        /*autoplay: true,
        autoplaySpeed: 5000*/
    });

    caseList.find(".item").each(function(){
        hideCaseListItem($(this));
        if( $(this).attr("data-slick-index") == 0 ){
            showCaseListItem($(this));
        }
    });

    caseList.on("beforeChange",function(event, slick, currentSlide, nextSlide){
        if( currentSlide == nextSlide ){
            return;
        }
        caseList.find(".item").each(function(){
            hideCaseListItem($(this));
            if( $(this).attr("data-slick-index") == nextSlide ||
                $(this).attr("data-slick-index") == nextSlide - caseListLength ||
                $(this).attr("data-slick-index") == nextSlide + caseListLength
            ){
                showCaseListItem($(this));
            }
        });
    });

    function showCaseListItem(item){
        item.find(".caseSubList").show();
        TweenMax.set(item,{zIndex: 10});
        TweenMax.to(item.find(".transfomBox"),0.3,{ width:840, height: 500, top: -50, left:-220 });
        TweenMax.to(item.find(".logo"),0.3,{ top: 30, left:20 });
        TweenMax.to(item.find(".title"),0.3,{ top: 115, left:20, fontSize: 14 });
        TweenMax.to(item.find(".caseDetail"),0.3,{ delay:0.3, opacity: 1 });
        TweenMax.from(item.find(".caseSubList"),0.3,{ delay:0.3, opacity: 0 });
        TweenMax.to(item.find(".caseBgColor"),0.3,{ opacity: 0,onComplete:function(){
            item.find(".caseBgColor").hide();
        }});
        item.find(".subItem").each(function(){
            $(this).data("subIndex", $(this).index());                            //序号
            $(this).data("textHeight", $(this).find("p").outerHeight(true));      //文本高度
            $(this).data("posX", $(this).position().left);                        //文本所在位置
        });

    }

    function hideCaseListItem(item){
        TweenMax.set(item,{zIndex: 1});
        item.find(".caseBgColor").show();
        TweenMax.to(item.find(".transfomBox"),0.3,{ width:280, height: 400, top: 0, left: 90  });
        TweenMax.to(item.find(".logo"),0.3,{ top: 125, left:50 });
        TweenMax.to(item.find(".title"),0.3,{ top: 210, left:50, fontSize: 18 });
        TweenMax.to(item.find(".caseDetail"),0.1,{ opacity: 0 });
        TweenMax.to(item.find(".caseBgColor"),0.3,{ opacity: 0.9 });
        item.find(".caseSubList").hide();
    }

    $(".subItem").each(function(){
        var _this = $(this);
        var subTransfomBox = _this.find(".subTransfomBox");
        var subTitle = _this.find(".subTitle");
        var subIcon  = _this.find(".subIcon");
        var subText = _this.find(".subText");
        var otherItem = _this.parent(".caseSubList").find(".subItem");

        var textAct = new TimelineMax();
        textAct.to(subText, 0.1, { opacity: 0 }).to(subText,0.2,{ height: 154 }).to(subText, 0.1, { opacity: 1 });
        textAct.pause();

        $(this).mouseenter(function(e){
            var tranToWidth = 230;
            var tranToLeft = -15;
            //宽度适配
            if( _this.data("textHeight") > 154 ){
                tranToWidth = _this.data("textHeight") / 154 * 230 ;
                tranToWidth = tranToWidth > 650 ? 650 : tranToWidth;        //宽度最大为650像素
            }
            //位置适配
            if( _this.data("posX") +  tranToWidth > 800 ){
                tranToLeft = (3 - _this.data("subIndex"))*50 + (_this.data("posX") + tranToWidth - 800);
            }else if( _this.data("posX") === 0 ){
                tranToLeft = 0;
            }else{
                tranToLeft = (tranToWidth - 200)/2;
                //移动距离锁定
                tranToLeft = _this.data("posX") - tranToLeft < _this.data("subIndex")*50 ? _this.data("subIndex")*50 : tranToLeft;
            }
            TweenMax.set(_this,{zIndex: 10});
            TweenMax.to(subTransfomBox,0.3,{ width: tranToWidth, height: 260, left: -tranToLeft, top:-10, borderRadius: "5px", backgroundColor:"#FFFFFF",boxShadow: "1px 5px 10px #CCCCCC" });
            TweenMax.to(subTitle,0.3,{ height: 70, backgroundColor:"#4376DE"});
            TweenMax.to(subIcon,0.3,{ lineHeight: "70px" });
            for(var i = 0; i < 4; i++){
                if( i < _this.data("subIndex") ){
                    TweenMax.to(otherItem.eq(i),0.3,{ left: -otherItem.eq(i).data("posX")+(800-tranToWidth)/3*i });
                }else if( i > _this.data("subIndex") && i !== 3 ){
                    TweenMax.to(otherItem.eq(i),0.3,{ left: (200-(800 - tranToWidth + tranToLeft - _this.data("posX")) / (3 - $(this).data("subIndex")))*(3-i) });
                }else{

                }
            }
            textAct.play();
        });

        $(this).mouseleave(function(e){
            TweenMax.set(_this,{zIndex: 1});
            TweenMax.to(subTransfomBox,0.1,{ width: 200, height: 240, left: 0, top: 0,borderRadius: "0px", backgroundColor:"#F5F5F5",boxShadow: "1px 2px 8px #e4e4e4"});
            TweenMax.to(subTitle,0.1,{ height: 60, backgroundColor:"#292A38" });
            TweenMax.to(subIcon,0.1,{ lineHeight: "60px" });
            for(var i = 0; i < 4; i++){
                TweenMax.to(otherItem.eq(i),0.1,{ left: 0 });
            }
            textAct.reverse();
        });
    });

    var clientSayNavList = $(".clientSayNavList");
    clientSayNavList.slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5,
        variableWidth: true,
        draggable:false,
        arrows: false,
        focusOnSelect:true,
        asNavFor: '.caseList'
    });

    clientSayNavList.find(".itemBox").each(function(){
        hideClientSayNavItem($(this));
        if( $(this).attr("data-slick-index") == 0 ){
            showClientSayNavItem($(this));
        }
    });

    clientSayNavList.on("beforeChange",function(event, slick, currentSlide, nextSlide){
        if( currentSlide == nextSlide ){
            return;
        }
        clientSayNavList.find(".itemBox").each(function(){
            hideClientSayNavItem($(this));
            if( $(this).attr("data-slick-index") == nextSlide ||
                $(this).attr("data-slick-index") == nextSlide - caseListLength ||
                $(this).attr("data-slick-index") == nextSlide + caseListLength
            ){
                showClientSayNavItem($(this));
            }
        });
    });

    function showClientSayNavItem(item){
        TweenMax.to(item.find(".transfomBox"),0.3,{ width: 80, height: 80, top: -5, left:-5 , opacity: 1 });
        TweenMax.to(item.find("img"),0.3,{ width: 80, height: 80 });
    }

    function hideClientSayNavItem(item){
        TweenMax.to(item.find(".transfomBox"),0.3,{ width: 70, height: 70, top: 0, left:0 ,opacity: 0.3});
        TweenMax.to(item.find("img"),0.3,{ width: 70, height: 70 });
    }

    $(".caseListNextArrow").click(function(){
        caseList.slick("slickNext");
    });

    $(".caseListPrevArrow").click(function(){
        caseList.slick("slickPrev");
    });


    //caseList---END
});
   
    