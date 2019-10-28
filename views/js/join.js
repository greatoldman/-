$(document).ready(function () {
    //joinList---START
    var joinItem = $(".joinList").find(".item");

    joinItem.click(function(){
        if( $(this).hasClass("on") ){

        }else{
            joinItem.removeClass("on");
            $(this).addClass("on");
        }
    });

    joinItem.each(function(){
        if($(this).attr("data-join") == parseInt(window.location.search.slice(-1))){
            $(this).addClass("on");
        }
    })
    //joinList---END
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"><div class="imgDiv imgDiv' + index + '"></div></span>';
        },
      },
      on:{
           slidePrevTransitionStart: function(){
                if (this.activeIndex == 1) {
                    // alert(this.activeIndex);
                    $(".swiper-wrapper").css("height",845);
                } else {
                    $(".swiper-wrapper").css("height","auto");
                }
            }, 
            slideNextTransitionStart: function(){
                if (this.activeIndex == 1) {
                    // alert(this.activeIndex);
                    $(".swiper-wrapper").css("height",845);
                } else {
                    $(".swiper-wrapper").css("height","auto");
                }
            },
        }
    });

    $('.imgDiv0').text("高管团队");
    $('.imgDiv1').text("业务及服务专家团队");
    $('.imgDiv2').text("研发及产品专家团队");
});   
    