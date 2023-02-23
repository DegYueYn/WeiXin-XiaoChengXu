const Mock = require('better-mock/dist/mock.mp.js')
Mock.mock('/api/order', (optins) => {
		console.log(JSON.stringify(optins.body), 'op');
		// const body =JSON.stringify(optins.body)
		function orderCode() {
		  var orderCode='';
		  for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
		  {
		    orderCode += Math.floor(Math.random() * 10);
		  }
		  orderCode = new Date().getTime() + orderCode;  //时间戳，用来生成订单号。
		  console.log(orderCode)
		  return orderCode;
		}

		return {
			code: 200,
			msg: '支付成功',
			data: {
				orderNum:orderCode(),
				orderStatus:1,
				payType:'wx',
				time:new Date().getTime(),
				
				
				
			}
		}
	}

)