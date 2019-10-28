$(document).ready(function () {
    //itemList---START
    $(".itemList > li").each(function(){
        var _this = $(this);
        var itemBox = _this.find(".itemBox");
        var title = _this.find(".itemTitle");
        var titleText = title.find("h1");
        var text = _this.find(".itemText");
        var icon = _this.find(".itemIcon");
        var textAct = new TimelineMax();
        textAct.to(text, 0.1, { opacity: 0 }).to(text,0.2,{ height: 145 }).to(text, 0.1, { opacity: 1 });
        textAct.pause();
        TweenMax.set(titleText, { color:"#414141", top: (126 - (titleText.outerHeight(true) - 21)/2) });

        $(this).mouseenter(function(e){
            itemBox.css({zIndex: 10});
            TweenMax.to(itemBox,0.3,{ width: 285, height: 330, top: -15, left: -10,boxShadow: "1px 5px 10px #CCCCCC" });
            TweenMax.to(title, 0.3, { height : 110, backgroundColor:"#4376DE" });
            TweenMax.to(titleText, 0.3, { color:"#FFFFFF",top:(45 - (titleText.outerHeight(true) - 21)/2) });
            TweenMax.to(icon, 0.3, { left: -14, top:-35});
            TweenMax.to(icon.find("img"), 0.3, { width:117, height: 104 });
            textAct.play();
        });

        $(this).mouseleave(function(e){
            itemBox.css({zIndex: 1});
            TweenMax.to(itemBox,0.3,{ width: 260, height: 300, top: 0, left: 0,boxShadow: "1px 2px 8px #e4e4e4" });
            TweenMax.to(title, 0.3, { height : 180, backgroundColor:"#E6F0FD" });
            TweenMax.to(titleText, 0.3, { color:"#414141", top: (126 - (titleText.outerHeight(true) - 21)/2) });
            TweenMax.to(icon, 0.3, { left: 46, top: -38});
            TweenMax.to(icon.find("img"), 0.3, { width:180, height: 160 });
            textAct.reverse();
        });
    });
    //itemList---END

    //clientSayList---START
    var clientSayList = $(".clientSayList");
    var clientSayListLength = clientSayList.find(".item").length;
    clientSayList.slick({
        arrows:false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        variableWidth: true,
        draggable:false,
        asNavFor: '.clientSayNavList',
        autoplay: true,
        autoplaySpeed: 5000
    });

    clientSayList.find(".item").each(function(){
        hideClientSayItem($(this));
        if( $(this).attr("data-slick-index") == 0 ){
            showClientSayItem($(this));
        }
    });

    clientSayList.on("beforeChange",function(event, slick, currentSlide, nextSlide){
        if( currentSlide == nextSlide ){
            return;
        }
        clientSayList.find(".item").each(function(){
            hideClientSayItem($(this));
            if( $(this).attr("data-slick-index") == nextSlide ||
                $(this).attr("data-slick-index") == nextSlide - clientSayListLength ||
                $(this).attr("data-slick-index") == nextSlide + clientSayListLength
            ){
                showClientSayItem($(this));
            }
        });
    });

    function showClientSayItem(item){
        TweenMax.set(item,{zIndex:10});
        TweenMax.to(item.find(".transfomBox"),0.3,{ width:680, height: 400, top: -50, left:-120 });
        TweenMax.to(item.find(".logo"),0.3,{ top: 15, left: 250 });
        /*TweenMax.to(item.find(".title"),0.3,{ top: 335 });*/
        TweenMax.to(item.find(".text"),0.3,{ delay: 0.3, opacity: 1 });
        TweenMax.to(item.find(".listBgColor"),0.3,{ width:680, height: 400, opacity: 0,onComplete:function(){
            item.find(".listBgColor").hide();
        }});
    }

    function hideClientSayItem(item){
        TweenMax.set(item,{zIndex:1});
        item.find(".listBgColor").show();
        TweenMax.to(item.find(".transfomBox"),0.3,{ width:280, height: 300 , top: 0, left: 90 });
        TweenMax.to(item.find(".logo"),0.3,{ top: 100, left: 50 });
        /*TweenMax.to(item.find(".title"),0.3,{ top: 190 });*/
        TweenMax.to(item.find(".text"),0.1,{ opacity: 0 });
        TweenMax.to(item.find(".listBgColor"),0.3,{ width:280, height: 300, opacity: 0.8 });
    }

    var clientSayNavList = $(".clientSayNavList");
    clientSayNavList.slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5,
        variableWidth: true,
        draggable:false,
        arrows: false,
        focusOnSelect:true,
        asNavFor: '.clientSayList'
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
                $(this).attr("data-slick-index") == nextSlide - clientSayListLength ||
                $(this).attr("data-slick-index") == nextSlide + clientSayListLength
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

    $(".clientSayNextArrow").click(function(){
        clientSayList.slick("slickNext");
    });

    $(".clientSayPrevArrow").click(function(){
        clientSayList.slick("slickPrev");
    });


    //clientSayList---END

    //newProductList---START
    var newProductList = $(".newProductList");
    newProductList.slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll:4,
        dots:true,
        draggable:false
    });

    newProductList.find(".itemBox").each(function(){
        $(this).mouseenter(function(e){
            TweenMax.to($(this),0.3,{ y:-3,boxShadow: "1px 5px 10px #CCCCCC" });
        });
        $(this).mouseleave(function(e){
            TweenMax.to($(this),0.3,{ y:0,boxShadow: "none" });
        });
    })
    //newProductList---END

  /*migueladd video player*/
    let nowplay=-1;
    $(".videoBox").on("click",function (e) {
        let nowid=Number($(".videoBox").index($(this)));
        if(nowplay!==-1&&nowid===nowplay){
            return false;
        }
      if(nowplay!==-1){
	      $(".videoBox").eq(nowplay).find(".videoHtml").css({opacity:1});
	      $(".videoBox").eq(nowplay).find(".videoContent").empty();
      }
      nowplay=nowid;
      $(this).find(".videoHtml").css({opacity:0});
        var urls=$(this).find(".videoContent").attr("i8urls");
      $(this).find(".videoContent").append('<video loop controls src="'+urls+'" autoplay></video>').css({"display":"block"})
    })
});
   
    