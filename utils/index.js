 export const happenTimeFun=(num)=> { //时间戳数据处理
 	let date = new Date(num*1000);
 	//时间戳为10位需*1000，时间戳为13位的话不需乘1000
 	let y = date.getFullYear();
 	let MM = date.getMonth() + 1;
 	MM = MM < 10 ? ('0' + MM) : MM; //月补0
 	let d = date.getDate();
 	d = d < 10 ? ('0' + d) : d; //天补0
 	let h = date.getHours();
 	h = h < 10 ? ('0' + h) : h; //小时补0
 	let m = date.getMinutes();
 	m = m < 10 ? ('0' + m) : m; //分钟补0
 	let s = date.getSeconds();
 	s = s < 10 ? ('0' + s) : s; //秒补0
 	return y + '-' + MM + '-' + d;
 	// return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s;
 };