$(document).ready(function () {
    //aboutDetail---START
    $(".aboutDetailBox").each(function(){
        var _this = $(this);
        var transfomBox = _this.find(".transfomBox");
        var title = _this.find(".title");
        var titleH1 = _this.find("h1");
        var line = _this.find(".line");
        var infoBox = _this.find(".infoBox");

        var textAct = new TimelineMax();
        textAct.to(infoBox, 0.1, { opacity: 0 }).to(infoBox,0.2,{ height: 154 }).to(infoBox, 0.1, { opacity: 1 });
        textAct.pause();

        $(this).mouseenter(function(e){
            TweenMax.set(_this,{zIndex: 10});
            TweenMax.to(transfomBox,0.3,{ width: 580, height: 340, left: -10, top:-10, borderRadius: "5px", backgroundColor:"#FFFFFF",boxShadow: "1px 5px 10px #CCCCCC" });
            TweenMax.to(title,0.3,{ backgroundColor: "#4376DE" });
            TweenMax.to(titleH1,0.3,{ color: "#FFFFFF" });
            TweenMax.to(line,0.3,{ left: 270, bottom: 20, backgroundColor: "#FFFFFF" });
            TweenMax.to(infoBox,0.3,{ height: 160 });

        });

        $(this).mouseleave(function(e){
            TweenMax.set(_this,{zIndex: 1});
            TweenMax.to(transfomBox,0.1,{ width: 560, height: 320, left: 0, top: 0,boxShadow: "1px 2px 8px #e4e4e4"});
            TweenMax.to(title,0.3,{ backgroundColor: "#F8FAFB" });
            TweenMax.to(titleH1,0.3,{ color: "#414141" });
            TweenMax.to(line,0.1,{ left: 260, bottom: 30, backgroundColor: "#4376DE" });
            TweenMax.to(infoBox,0.1,{ height: 140 });
        });
    });
    //aboutDetail---END

    //companyList---START
    $(".companyList").find(".item").each(function(){
        var _this = $(this);
        var transfomBox = _this.find(".transfomBox");
        var title = _this.find(".title");
        var titleText = title.find("p");
        TweenMax.set(titleText,{ top: 20 - ( ( titleText.outerHeight(true) - 20) / 2) });
        var text = _this.find(".text");
        var textP = text.find("p");
        var textAct = new TimelineMax();
        textAct.to(textP, 0.1, { opacity: 0 }).to(textP,0.2,{ height: 282 }).to(textP, 0.1, { opacity: 1 });
        textAct.pause();

        $(this).mouseenter(function(e){
            TweenMax.set(_this,{zIndex: 10});
            TweenMax.to(transfomBox,0.3,{ width:280 , height: 390, left: -10, top: -10 });
            TweenMax.to(title,0.3,{ height: 70, borderTopRightRadius: "5px", borderTopLeftRadius: "5px", backgroundColor: "#4376DE"});
            TweenMax.to(titleText,0.3,{ top: 25 - ( ( titleText.outerHeight(true) - 20) / 2) });
            TweenMax.to(text,0.3,{  width:280 , height: 320 , borderBottomRightRadius: "5px", borderBottomLeftRadius: "5px", boxShadow: "1px 5px 10px #CCCCCC" });
            textAct.play();
        });

        $(this).mouseleave(function(e){
            TweenMax.set(_this,{zIndex: 1});
            TweenMax.to(transfomBox,0.1,{ width:260 , height: 370, left: 0, top: 0 });
            TweenMax.to(title,0.1,{ height: 60,borderTopRightRadius: "0px", borderTopLeftRadius: "0px", backgroundColor: "#292A38"});
            TweenMax.to(titleText,0.1,{ top: 20 - ( ( titleText.outerHeight(true) - 20) / 2) });
            TweenMax.to(text,0.1,{  width:260 , height: 310 ,borderBottomRightRadius: "0px", borderBottomLeftRadius: "0px", boxShadow: "1px 2px 8px #e4e4e4"});
            textAct.reverse();
        });
    });
    //companyList---END

    //cultureList---START
    var cultureList = $(".cultureList");
    var cultureListLength = cultureList.find(".item").length;
    var cultureListNav = $(".cultureListNav");
    cultureListNav.css({width: 70*cultureListLength + 50});
    cultureListNav.find(".item").each(function(){
        TweenMax.to($(this),0.3,{ width: 60, height: 60 ,opacity:0.3 });
        TweenMax.to($(this).find("img"),0.3,{ width: 60, height: 60 });
        $(this).click(function(){
            cultureList.slick("slickGoTo",$(this).index());
        });
    });
    TweenMax.to(cultureListNav.find(".item").eq(0),0.3,{ width: 100, height: 100, marginTop: -20 ,opacity: 1 });
    TweenMax.to(cultureListNav.find(".item").eq(0).find("img"),0.3,{ width: 100, height: 100 });

    cultureList.slick({
        arrows:false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        variableWidth: true,
        draggable:false,
        autoplay: true,
        autoplaySpeed: 5000
    });

    cultureList.find(".item").each(function(){
        hideCultureListItem($(this));
        if( $(this).attr("data-slick-index") == 0 ){
            showCultureListItem($(this));
        }
    });

    cultureList.on("beforeChange",function(event, slick, currentSlide, nextSlide){
        if( currentSlide == nextSlide ){
            return;
        }
        cultureList.find(".item").each(function(){
            hideCultureListItem($(this));
            if( $(this).attr("data-slick-index") == nextSlide ||
                $(this).attr("data-slick-index") == nextSlide - cultureListLength ||
                $(this).attr("data-slick-index") == nextSlide + cultureListLength
            ){
                showCultureListItem($(this));
            }
        });
        cultureListNav.find(".item").each(function(){
            TweenMax.to($(this),0.3,{ width: 60, height: 60, marginTop: 0, opacity:0.3 });
            TweenMax.to($(this).find("img"),0.3,{ width: 60, height: 60 });
        });
        TweenMax.to(cultureListNav.find(".item").eq(nextSlide),0.3,{ width: 100, height: 100, marginTop: -20 ,opacity: 1 });
        TweenMax.to(cultureListNav.find(".item").eq(nextSlide).find("img"),0.3,{ width: 100, height: 100 });
    });

    function showCultureListItem(item){
        TweenMax.set(item,{zIndex: 10});
        TweenMax.to(item.find(".transfomBox"),0.3,{ width:780, height: 360, top: 0, left:-157 });
        TweenMax.to(item.find(".imgBox"),0.3,{ width:215, height: 300, top: 30, left: 30 });
        TweenMax.to(item.find(".imgBox").find("img"),0.3,{ width:215, height: 300 });
        TweenMax.to(item.find(".infoBox"),0.3,{ delay:0.3, opacity: 1 });
        TweenMax.to(item.find(".cultureBgColor"),0.3,{ width:215, height: 300, top: 30, left: 30, opacity: 0 });
    }

    function hideCultureListItem(item){
        TweenMax.set(item,{zIndex: 1});
        TweenMax.to(item.find(".transfomBox"),0.1,{ width:200, height: 280, top: 40, left: 133 });
        TweenMax.to(item.find(".imgBox"),0.1,{ width:200, height: 280, top: 0, left: 0 });
        TweenMax.to(item.find(".imgBox").find("img"),0.1,{ width:200, height: 280 });
        TweenMax.to(item.find(".infoBox"),0.1,{ opacity: 0 });
        TweenMax.to(item.find(".cultureBgColor"),0.1,{ width:200, height: 280, top: 0, left: 0, opacity: 0.9 });
    }

    $(".cultureListNextArrow").click(function(){
        cultureList.slick("slickNext");
    });

    $(".cultureListPrevArrow").click(function(){
        cultureList.slick("slickPrev");
    });

    //cultureList---END

    //incidentBox---START
    var developBox = $(".developBox");
    var developTop = $(".developTop");
    var developBottom = $(".developBottom");
    TweenMax.set(developTop.find(".incidentLine"),{height: developTop.find(".item").length * 100 - 30 });
    TweenMax.set(developBottom.find(".incidentLine"),{height: developBottom.find(".item").length * 100 - 55 });

    var honorBox = $(".honorBox");
    var honorItem = honorBox.find(".item");
    TweenMax.set(honorBox.find(".incidentLine"),{height: honorBox.find(".item").length * 100 + 30});
    TweenMax.set(honorItem.find(".photoLayer"),{ opacity:0 });
    TweenMax.set(honorItem,{ zIndex:1 });
    TweenMax.to(honorItem.find(".photoLayer"),0.1,{ opacity:0 });
    TweenMax.to(honorItem.find(".logoBox"),0.3,{ width: 80, height: 80, x: 0, y:0 ,boxShadow: "none"});
    TweenMax.to(honorItem.find(".logoBox").find("img"),0.3,{ width: 80, height: 80 });
    TweenMax.to(honorItem.find(".text"),0.3,{ color:"#414141" });
    honorItem.find(".logoBox").mouseenter(function(e){
        TweenMax.set(honorItem,{ zIndex:1 });
        TweenMax.to(honorItem.find(".photoLayer"),0.1,{ opacity:0 });
        TweenMax.to(honorItem.find(".logoBox"),0.3,{ width: 80, height: 80, x: 0, y:0 ,boxShadow: "none"});
        TweenMax.to(honorItem.find(".logoBox").find("img"),0.3,{ width: 80, height: 80 });
        TweenMax.to(honorItem.find(".text"),0.3,{ color:"#414141" });

        var _thisItem = $(this).parent(".item");
        TweenMax.set(_thisItem,{ zIndex:10 });
        TweenMax.to(_thisItem.find(".photoLayer"),0.3,{ opacity:1 });
        TweenMax.to(_thisItem.find(".logoBox"),0.3,{ width: 100, height: 100, x: -10, y:-10 ,boxShadow: "1px 4px 8px #ccc"});
        TweenMax.to(_thisItem.find(".logoBox").find("img"),0.3,{ width: 100, height: 100 });
        TweenMax.to(_thisItem.find(".text"),0.3,{ color:"#4376DE" });
    });

    honorItem.find(".logoBox").mouseleave(function(e){
        TweenMax.set(honorItem,{ zIndex:1 });
        TweenMax.to(honorItem.find(".photoLayer"),0.1,{ opacity:0 });
        TweenMax.to(honorItem.find(".logoBox"),0.3,{ width: 80, height: 80, x: 0, y:0 ,boxShadow: "none"});
        TweenMax.to(honorItem.find(".logoBox").find("img"),0.3,{ width: 80, height: 80 });
        TweenMax.to(honorItem.find(".text"),0.3,{ color:"#414141" });   
    });

    var incidentNavItem = $(".incidentNav").find(".tab");
    incidentNavItem.click(function(){
        TweenMax.to(incidentNavItem,0.3,{ height: 46, marginTop: 0, color: "#657988",fontSize: 16, lineHeight: "46px", backgroundColor:"#D9E4EC"});
        TweenMax.to($(this),0.3,{ height: 56, marginTop: -10, color: "#fff",fontSize: 22, lineHeight: "56px", backgroundColor:"#4376DE"});
        if( $(this).index() == 0 ){
            developBox.show();
            honorBox.hide();
        }
        if( $(this).index() == 1 ){
            developBox.hide();
            honorBox.show();
        }
    });

    if( window.location.search === "?type=0" ){
        TweenMax.to(incidentNavItem.eq(1),0.3,{ height: 46, marginTop: 0, color: "#657988",fontSize: 16, lineHeight: "46px", backgroundColor:"#D9E4EC"});
        TweenMax.to(incidentNavItem.eq(0),0.3,{ height: 56, marginTop: -10, color: "#fff",fontSize: 22, lineHeight: "56px", backgroundColor:"#4376DE"});
        developBox.show();
        honorBox.hide();
    }else if( window.location.search === "?type=1" ){
        TweenMax.to(incidentNavItem.eq(0),0.3,{ height: 46, marginTop: 0, color: "#657988",fontSize: 16, lineHeight: "46px", backgroundColor:"#D9E4EC"});
        TweenMax.to(incidentNavItem.eq(1),0.3,{ height: 56, marginTop: -10, color: "#fff",fontSize: 22, lineHeight: "56px", backgroundColor:"#4376DE"});
        developBox.hide();
        honorBox.show();
    }

    //incidentBox---END
});
   
    