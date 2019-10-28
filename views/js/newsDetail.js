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
	var html = "";
	var id = getQueryString("id");
	for(var i=0;i<newsList.length;i++){
		if (id == (i+1)) {
			$(".title h1").html(newsList[i].title);
			$(".title .time").html(newsList[i].dec);
			$(".contentDiv").html(newsList[i].content);
		}
	}	
		
})