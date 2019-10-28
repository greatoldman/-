/**
 * Created by admin on 2019/1/22.
 */
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 
$(document).ready(function () {
	console.log(newsList)
	var typeO = getQueryString("type");
	var html = "";
	$(".newsTab").eq(typeO).addClass("on").siblings(".newsTab").removeClass("on");
	var lefts=$(".newsTab").eq(typeO).position().left+$(".newsTab").eq(typeO).width()/2-5
	$(".trianglenews").css({left:lefts})

	$(".newsItems").html("");
	
	//翻页
	var html = "";
	$(".zxf_pagediv1").createPage({
		pageNum: Math.ceil(newsList.length/10),
		current: 1,
		backfun: function(e) {
			console.log(e);//回调
			html = "";
			var indexNumb = 0;
			if ((e.current*10) > newsList.length) {
				indexNumb = newsList.length;
			} else {
				indexNumb = (e.current*10);
			}
			for(var i=(e.current-1)*10;i<indexNumb;i++){
				var id=(i+1);
				// var id=newsList[i].index;
				var types=newsList[i].type;
				var title=newsList[i].title;
				var date=newsList[i].date;
				if (typeO == types) {
					html += '<div class="newsLineColor_'+types+'"><div class="newsItemRow">' +
					'<a href="detail.html?id='+id+'">'+title+'</a>' +
					'<span class="time">'+date+'</span>' +
					'</div></div>'
				}else if(typeO == null || typeO == 0){
					html += '<div class="newsLineColor_'+types+'"><div class="newsItemRow">' +
					'<a href="detail.html?id='+id+'">'+title+'</a>' +
					'<span class="time">'+date+'</span>' +
					'</div></div>'
				}
			}
			$(".newsItems").html(html);
	
		}
	});
	
	
	
	for(var i=0;i<10;i++){
		var id=(i+1);
		// var id=newsList[i].index;
		var types=newsList[i].type;
		var title=newsList[i].title;
		var date=newsList[i].date;
		$(".zxf_pagediv1").show()
		$(".zxf_pagediv2").hide()
		if (typeO == types) {
			html += '<div class="newsLineColor_'+types+'"><div class="newsItemRow">' +
			'<a href="detail.html?id='+id+'">'+title+'</a>' +
			'<span class="time">'+date+'</span>' +
			'</div></div>'
		}else if(typeO == null || typeO == 0){
			html += '<div class="newsLineColor_'+types+'"><div class="newsItemRow">' +
			'<a href="detail.html?id='+id+'">'+title+'</a>' +
			'<span class="time">'+date+'</span>' +
			'</div></div>'
		}
	}
	$(".newsItems").html(html);
	

	//点击tab切换
	$(".newsTab").click(function(){
		$(".zxf_pagediv1").hide()
		$(".zxf_pagediv2").show()
		$(this).addClass("on").siblings(".newsTab").removeClass("on");
		var type = $(this).find("a").attr("type");
		var lefts=$(".newsTab").eq(type).position().left+$(".newsTab").eq(type).width()/2-5
		$(".trianglenews").css({left:lefts})
		$(".newsItems").html("");
		html = "";
		var numberItem = [];
		for(var i=0;i<newsList.length;i++){
			var id=(i+1);
			var types=newsList[i].type;
			var title=newsList[i].title;
			var date=newsList[i].date;
			if (type == newsList[i].type && type != 0) {
				
				numberItem.push(i)
				if (numberItem.length <= 10) {
					html += '<div class="newsLineColor_'+types+'"><div class="newsItemRow">' +
						'<a href="detail.html?id='+id+'">'+title+'</a>' +
						'<span class="time">'+date+'</span>' +
						'</div></div>'
				}
				
			}else if(type == 0){
				numberItem.push(i)
				if (numberItem.length <= 10) {
					html += '<div class="newsLineColor_'+types+'"><div class="newsItemRow">' +
						'<a href="detail.html?id='+id+'">'+title+'</a>' +
						'<span class="time">'+date+'</span>' +
						'</div></div>'
				}
			}
		}
		$(".newsItems").html(html);
		console.log(numberItem);
		//翻页
		$(".zxf_pagediv2").createPage({
			pageNum: Math.ceil((numberItem.length)/10),
			current: 1,
			backfun: function(e) {
				console.log(numberItem)
			}
		});

		
	})

	//翻页
		$(".zxf_pagediv2").createPage({
			pageNum: Math.ceil((numberItem.length)/10),
			current: 1,
			backfun: function(e) {
				console.log(numberItem)
				html = "";
				var indexNumb = 0;
				if ((e.current*10) > numberItem.length) {
					indexNumb = numberItem.length;
				} else {
					indexNumb = (e.current*10);
				}
				for(var i=(e.current-1)*10;i<indexNumb;i++){
					var id=(numberItem[i]+1);
					// var id=newsList[i].index;
					var types=newsList[numberItem[i]].type;
					var title=newsList[numberItem[i]].title;
					var date=newsList[numberItem[i]].date;
					html += '<div class="newsLineColor_'+types+'"><div class="newsItemRow">' +
						'<a href="detail.html?id='+id+'">'+title+'</a>' +
						'<span class="time">'+date+'</span>' +
						'</div></div>'
				}
				$(".newsItems").html(html);
			}
		});

	
	
})