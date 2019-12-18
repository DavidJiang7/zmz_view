'use strict'

export default {
	//获取当前时间字符串，示例：2019-09-26
	getNowDateStr() {
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		return '' + year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
	},
	//在给定的时间字符串上添加指定天数后返回新的时间字符串，示例：2019-09-26
	addDay(dateTemp, days) {
		var dateTemp = dateTemp.split("-");
		var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式    
		var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
		var rDate = new Date(millSeconds);
		var year = rDate.getFullYear();
		var month = rDate.getMonth() + 1;
		if (month < 10) {
			month = "0" + month;
		}
		var date = rDate.getDate();
		if (date < 10) {
			date = "0" + date;
		}
		return (year + "-" + month + "-" + date);
	}
} 