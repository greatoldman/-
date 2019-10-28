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
            TweenMax.to(itemBox,0.3,{ width: 260, height: 300, top: 0, left: 0,boxShadow: "1px 3px 5px #f6f6f6" });
            TweenMax.to(title, 0.3, { height : 180, backgroundColor:"#E6F0FD" });
            TweenMax.to(titleText, 0.3, { color:"#414141", top: (126 - (titleText.outerHeight(true) - 21)/2) });
            TweenMax.to(icon, 0.3, { left: 46, top: -38});
            TweenMax.to(icon.find("img"), 0.3, { width:180, height: 160 });
            textAct.reverse();
        });
    });
    //itemList---END

    //guildList--START
    var guildList = $('.guildList');
    var guildListLength = guildList.find("li").length;
    guildList.slick({
        arrows:false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        variableWidth: true,
        draggable:false,
        autoplay: true,
        autoplaySpeed: 3000,
        focusOnSelect:true
    });

    guildList.find("li").each(function(){
        hideGuildItem($(this));
        if( $(this).attr("data-slick-index") == 0 ){
            showGuildItem($(this));
        }
    });

    guildList.on("beforeChange",function(event, slick, currentSlide, nextSlide){
        guildList.find("li").each(function(){
            hideGuildItem($(this));
            if( $(this).attr("data-slick-index") == nextSlide ||
                $(this).attr("data-slick-index") == nextSlide - guildListLength ||
                $(this).attr("data-slick-index") == nextSlide + guildListLength
            ){
                showGuildItem($(this));
            }
        });
    });

    function showGuildItem(item){
        TweenMax.to(item.find(".transfomBox"),0.3,{ width:290, height: 410, top: -35, left:-30 });
        TweenMax.to(item.find(".listBgColor"),0.3,{ width:290, height: 410, top: -35, left:-30, opacity:1 });
        TweenMax.to(item.find(".guildTitle"),0.3,{ top: 30 });
        TweenMax.to(item.find(".guildIcon"),0.3,{  marginBottom: 12 });
        TweenMax.to(item.find("h2"),0.3,{ color:"#414141"});
        TweenMax.to(item.find("p"),0.3,{ color:"#4E4E4E"});
        TweenMax.to(item.find(".guildLogo"),0.3,{ delay:0.3, opacity: 1 });
        TweenMax.to(item.find(".whiteIcon"),0.3,{ opacity: 0 });
        TweenMax.to(item.find(".colourIcon"),0.3,{ opacity: 1 });
    }

    function hideGuildItem(item){
        TweenMax.to(item.find(".transfomBox"),0.3,{ width:236, height: 350 , top: 0, left:0 });
        TweenMax.to(item.find(".listBgColor"),0.3,{ width:236, height: 350, top: 0, left:0, opacity:0.2 });
        TweenMax.to(item.find(".guildTitle"),0.3,{ top: 100 });
        TweenMax.to(item.find(".guildIcon"),0.3,{  marginBottom: 30 });
        TweenMax.to(item.find("h2"),0.3,{ color:"#FFFFFF"});
        TweenMax.to(item.find("p"),0.3,{ color:"#C9C9C9"});
        TweenMax.to(item.find(".guildLogo"),0.1,{ opacity: 0 });
        TweenMax.to(item.find(".whiteIcon"),0.3,{ opacity: 1 });
        TweenMax.to(item.find(".colourIcon"),0.3,{ opacity: 0 });
    }

    $(".guildNextArrow").click(function(){
        guildList.slick("slickNext");
    });

    $(".guildPrevArrow").click(function(){
        guildList.slick("slickPrev");
    });

    //guildList--END
//     var lock = false;
//     $(document).scroll(function() {
//         var scroH = $(document).scrollTop();  //滚动高度
//         var viewH = $(window).height();  //可见高度 
//         var contentH = $(document).height();  //内容高度
//         console.log(scroH)
//         if(scroH >2100){ //距离顶部大于2100px时
//             if (!lock) {
//                  //statisticsBox---START
//                 var staText_1 = {num:612376589};
//                 var staText_2 = {num:834758};
//                 var staText_3 = {num:79879906};
//                 var staText_4 = {num:419976724};
//                 TweenMax.to(staText_1,5,{num: 1012376589,onUpdate:function(){
//                     $(".staText_1").text(parseInt(staText_1.num).toLocaleString());
//                 }});
//                 TweenMax.to(staText_2,5,{num: 1834758 ,onUpdate:function(){
//                     $(".staText_2").text(parseInt(staText_2.num).toLocaleString());
//                 }});
//                 TweenMax.to(staText_3,5,{num: 129879906 ,onUpdate:function(){
//                     $(".staText_3").text(parseInt(staText_3.num).toLocaleString());
//                 }});
//                 TweenMax.to(staText_4,5,{num: 619976724 ,onUpdate:function(){
//                     $(".staText_4").text(parseInt(staText_4.num).toLocaleString());
//                 }});
//                 lock = true;
//             }
           
//             //statisticsBox---END
//         }
//     });
//     
//     
//     添加定时器
    setInterval(function () {
        var staText_1 = {num:612376589};
        var staText_2 = {num:834758};
        var staText_3 = {num:79879906};
        var staText_4 = {num:419976724};
        TweenMax.to(staText_1,5,{num: 1012376589,onUpdate:function(){
            $(".staText_1").text(parseInt(staText_1.num).toLocaleString());
        }});
        TweenMax.to(staText_2,5,{num: 1834758 ,onUpdate:function(){
            $(".staText_2").text(parseInt(staText_2.num).toLocaleString());
        }});
        TweenMax.to(staText_3,5,{num: 129879906 ,onUpdate:function(){
            $(".staText_3").text(parseInt(staText_3.num).toLocaleString());
        }});
        TweenMax.to(staText_4,5,{num: 619976724 ,onUpdate:function(){
            $(".staText_4").text(parseInt(staText_4.num).toLocaleString());
        }});
    }, 8000);
    
    

    //certificationList---START
    var certificationList = $('.certificationList');
    certificationList.slick({
        dots:true,
        arrows:false,
        slidesToShow: 3,
        draggable:false,
        infinite:false
    });
    //certificationList---END
    //
    
    // news
    var html ="";
    for(var i=0;i<5;i++){
        var id=(i+1);
        var title=newsList[i].title
        html += '<li>'+
                '<a href="detail.html?id='+id+'">最新资讯<i>|</i><span>'+title+'</span></a>'+
                '</li>'
    }
    $(".newsBox").html(html)

});
   
    