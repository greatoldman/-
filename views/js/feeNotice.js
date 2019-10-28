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

	$.ajax({
		type: "get",
		url:"https://restapi.amap.com/v3/ip",
		dataType: "json",
		data:{
			key:'2f2f0c05595a36a8912a3bbf76e6b06f',
			ip:returnCitySN["cip"]
		}, 
		success: function(result) {
			console.log(result)
			for(var i=0;i<noticeList.length;i++){
	        	if (result.province == noticeList[i].cityName || result.city == noticeList[i].cityName) {
					// $("#cityName").html(noticeList[i].cityName);
					$("#number1").html(noticeList[i].number1);
					$("#number2").html(noticeList[i].number2);
					$("#number3").html(noticeList[i].number3);
					$("#number4").html(noticeList[i].number4);
					// $("#number5").html(noticeList[i].number5);
					// $("#number6").html(noticeList[i].number6);
					$("#content1").html(noticeList[i].content1);
					$("#content2").html(noticeList[i].content2);
					$("#content3").html(noticeList[i].content3);
					$("#content4").html(noticeList[i].content4);
					// $("#content5").html(noticeList[i].content5);
					// $("#content6").html(noticeList[i].content6);
					break;
				}else{
					$("#number1").html(noticeList[i].number1);
					$("#number2").html(noticeList[i].number2);
					$("#number3").html(noticeList[i].number3);
					$("#number4").html(noticeList[i].number4);
					// $("#number5").html(noticeList[i].number5);
					// $("#number6").html(noticeList[i].number6);
					$("#content1").html(noticeList[i].content1);
					$("#content2").html(noticeList[i].content2);
					$("#content3").html(noticeList[i].content3);
					$("#content4").html(noticeList[i].content4);
				}
	        }
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			
		}
	});
	
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		


 //    } else {
 //    	alert(returnCitySN["cip"]+','+returnCitySN["cname"]) 
    	
	
	// }
		

	
		
})