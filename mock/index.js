const Mock = require('better-mock/dist/mock.mp.js')
Mock.mock('/api/getaccount', {
	code: 200,
	msg: '121',
	money_account: parseInt(Math.random() * 100000),
	// card_account:parseInt(Math.random()*10)
	card_account: 3,
})

Mock.mock('/api/charge', (optins) => {
		console.log(optins.body.value, 'op');
		// const body =JSON.parse(optins.body)
		return {
			code: 200,
			msg: '充值成功',
			data: {
				"money_account_new": optins.body.money_account_new,
				"money_account": optins.body.money_account,
				"value": optins.body.value
			}
		}
	}

)

Mock.mock('/api/getList', (optins) => {
	console.log(optins.body, 'optins.body');
	if (optins.body.id == 0) {
		return {
			code: 200,
			goodsList: [{
				    "flex":'left',
					"goodsId": 1,
					"goodsName": "Clever&Ketch小众包包女2023新款潮秋冬复古大容量托特包单肩包",
					"goodsImg": "https://gw.alicdn.com/imgextra/O1CN01YnIDKa1gwOeFm6kvm_!!2207281504206.jpg_Q75.jpg_.webp",
					"saleCount": "1000+",
					"salePrice": 299,
					"tag": "特卖价",
					"rank": '包包喜爱榜第10名',
					"marketPrice": 598,
					"discount": 5,
					"stockCount": 50,
					"storeName":'NY优品',
				},
				{
					"goodsId": 2,
					"flex":'left',
					"goodsName": "洛斐小翘键盘帽101键69键PBT球帽彩色纯色收纳盒拔键器正品",
					"goodsImg": "https://gd4.alicdn.com/imgextra/i2/3936304325/O1CN013PwxbF1hotg2pwIEm_!!3936304325.jpg_400x400.jpg",
					"saleCount": "100+",
					"salePrice": 199,
					"tag": '新品抢购',
					"storeName":'NY优品',
					"rank": '键盘新势力',
					"marketPrice": 249,
					"discount": 8,
					"stockCount": 100,
				},
				{
					"goodsId": 03,
					"flex":'left',
					"goodsName": "竹节和田玉手链纯银女款2023年新款轻奢小众手饰情人节礼物送女友",
					"goodsImg": "https://gw.alicdn.com/imgextra/i1/3070955695/O1CN01M2jRDm1rwMNyQn7hw_!!3070955695.jpg_Q75.jpg_.webp",
					"saleCount": "600+",
					"salePrice": 158,
					"tag": '加购超1000+',
					"storeName":'NY优品',
					"rank": '情人节送礼排行榜第三名',
					"marketPrice": 225,
					"discount": 7,
					"stockCount": 99,
				},
				{
					"goodsId":4,
					"flex":'right',
					"goodsName": "早春季2023新款茶系穿搭一整套微胖盐系轻熟高级感韩剧小香风套装",
					"goodsImg": "https://img.alicdn.com/imgextra/i2/2202600873766/O1CN01trCUIT1dgsK202OT0_!!2202600873766.jpg",
					"saleCount": "100+",
					"salePrice": 69.9,
					"tag": '加购上千',
					"storeName":'NY优品',
					"rank": '收藏上千',
					"marketPrice": 77.7,
					"discount": 9,
					"stockCount": 100,
				},
				{
					"goodsId":5,
					"flex":'right',				
					"goodsName": "【学院风穿搭】牛仔马甲男女ins潮牌工装外套痞帅炸街夹克背心",
					"goodsImg": "https://gw.alicdn.com/imgextra/i3/2935603592/O1CN01uXcSYZ1cPBHtINFr6_!!2935603592.jpg_Q75.jpg_.webp",
					"saleCount": "66",
					"salePrice": 79,
					"tag": '首单已减￥10',
					"storeName":'NY优品',
					"rank": '学生热搜榜',
					"marketPrice": 89,
					"discount":9,
					"stockCount": 100,
				},
				{
					"goodsId": 6,
					"flex":'right',
					"goodsName": "生日礼物男生实用高档送男友男朋友老公男士小众高级的惊喜情人节",
					"goodsImg": "https://img.alicdn.com/imgextra/i4/195729828/O1CN01NFZEd32MTHGtY7uPl_!!195729828.jpg",
					"saleCount": "5",
					"salePrice": 199,
					"tag": '券后￥199',
					"storeName":'NY优品',
					"rank": '生日礼物榜前二十',
					"marketPrice": 259,
					"discount": 7,
					"stockCount": 100,
				},
				// {
				// 	"goodsId": 7,
				// 	"flex":'left',
				// 	"goodsName": "全新佳能EOS700D 750D 800D 100D入门级单反相机学生旅游高清数码",
				// 	"goodsImg": "https://img.alicdn.com/imgextra/i2/3070955695/O1CN0138YYUm1rwMNlaWaPv_!!3070955695.jpg",
				// 	"saleCount": "100+",
				// 	"salePrice": 4999,
				// 	"tag": '花呗分期',
				// 	"storeName":'NY优品',
				// 	"rank": '满5000减300',
				// 	"marketPrice": '5999',
				// 	"discount":6,
				// 	"stockCount": 100,
				// },
					
				
			],


		}
	}
})
Mock.mock('/api/goodsDetail', (optins) => {

	if (optins.body.goodsId == 1) {
		return {
			code: 200,
			goodsDetail: 
				{
				"goodsId":1,
				"goodsName": "Clever&Ketch小众包包女2023新款潮秋冬复古大容量托特包单肩包",
				"goodsImg": "https://gw.alicdn.com/imgextra/O1CN01YnIDKa1gwOeFm6kvm_!!2207281504206.jpg_Q75.jpg",
				"saleCount": "1000+",
				"salePrice": 299,
				"tag": '上新价',
				"rank": '包包喜爱榜第10名',
				"expirationTime": 1676864911,
				"marketPrice": 598,
				"storeName":'NY优品',
				"discount": 5,
				"stockCount": 50,
				'goodsDetail': [{
						"img": "https://img.alicdn.com/imgextra/i3/2207281504206/O1CN01zgk1y71gwOe7TAhXl_!!2207281504206.jpg"
					},
					{
						"img": "https://img.alicdn.com/imgextra/i4/2207281504206/O1CN01uZ7XGV1gwOefzjbQ8_!!2207281504206.jpg"
					},
					{
						"img": "https://img.alicdn.com/imgextra/i3/2207281504206/O1CN01cY3Jyz1gwOemrMzW3_!!2207281504206.jpg"
					}
				],
				"selectItem": [{
						"title": '绿色',
						"img": "	https://gw.alicdn.com/bao/uploaded/i2/220728150420…gwOe5MId5k_!!2207281504206.jpg_60x60q50.jpg_.webp"
					},
					{
						"title": '黑色',
						"img": "	https://gw.alicdn.com/bao/uploaded/i3/220728150420…gwOe9oo0iG_!!2207281504206.jpg_60x60q50.jpg_.webp"
					},
					{
						"title": '棕色',
						"img": "https://gw.alicdn.com/bao/uploaded/i1/220728150420…gwOexZYSVT_!!2207281504206.jpg_60x60q50.jpg_.webp"
					}
				]
			},
		}
	}else if(optins.body.goodsId == 2){
		return {
			code: 200,
			goodsDetail: {
					"goodsId": 2,
					"goodsName": "洛斐小翘键盘帽101键69键PBT球帽彩色纯色收纳盒拔键器正品",
					"goodsImg": "https://gd4.alicdn.com/imgextra/i2/3936304325/O1CN013PwxbF1hotg2pwIEm_!!3936304325.jpg_400x400.jpg",
					"saleCount": "5",
					"salePrice": 199,
					"expirationTime": 1676951311,
					"tag": '新品抢购',
					"storeName":'NY优品',
					"rank": '键盘新势力',
					"marketPrice": 249,
					"expirationTime": '',
					"discount": 8,
					"stockCount": 100,
					'goodsDetail': [{
							"img": "https://img.alicdn.com/imgextra/i3/3936304325/O1CN01O2dHLY1hotg4K1wFK_!!3936304325.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i3/3936304325/O1CN01ubgcLj1hotfyCqxB2_!!3936304325.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i3/3936304325/O1CN01ubgcLj1hotfyCqxB2_!!3936304325.jpg"
						}
					],
					"selectItem": [{
							"title": '',
							"img": "https://gd1.alicdn.com/imgextra/i3/3936304325/O1CN01Tjlbp51hotgEYe6ev_!!3936304325.jpg_30x30.jpg"
						},
						{
							"title": '',
							"img": "https://gd3.alicdn.com/imgextra/i3/3936304325/O1CN01cij8WI1hotg2qbFDZ_!!3936304325.jpg_30x30.jpg"
						},
				],
		}
		
	}
}else if(optins.body.goodsId == 3){	
	return {
			code: 200,
			goodsDetail: {
					"goodsId": 3,
					"goodsName": "竹节和田玉手链纯银女款2023年新款轻奢小众手饰情人节礼物送女友",
					"goodsImg": "https://gw.alicdn.com/imgextra/O1CNA11xyyl51rwMPGz4XXL_!!3070955695-0-psf.jpg_Q75.jpg",
					"saleCount": "600+",
					"salePrice": 158,
					"expirationTime": 1677951311,
					"tag": '情人节送礼排行榜第三名',
					"storeName":'NY优品',
					"rank": '键盘新势力',
					"marketPrice": 225,
					"discount": 7,
					"stockCount": 99,
					'goodsDetail': [{
							"img": "https://img.alicdn.com/imgextra/i2/3070955695/O1CN0138YYUm1rwMNlaWaPv_!!3070955695.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg"
						}
					],
					"selectItem": [{
							"title": '有你竹够手链+爱心永生花礼盒',
							"img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg"
						},
						{
							"title": '套装【手链+项链】+简奢玫瑰礼盒',
							"img": "https://gw.alicdn.com/bao/uploaded/i4/3070955695/O…Dw1rwMPBa0E6E_!!3070955695.jpg_60x60q50.jpg_.webp"
						},
				],
		}
		
	}
	
}else if(optins.body.goodsId == 4){
	return {
			code: 200,
			goodsDetail:{
					"goodsId": 4,
					"goodsName": "早春季2023新款茶系穿搭一整套微胖盐系轻熟高级感韩剧小香风套装",
					"goodsImg": "https://img.alicdn.com/imgextra/i2/2202600873766/O1CN01trCUIT1dgsK202OT0_!!2202600873766.jpg",
					"saleCount": "100+",
					"salePrice": 69.9,
					"expirationTime": 1677037711,					
					"tag": '早春好物',
					"storeName":'NY优品',
					"rank": '加购上千',
					"marketPrice": 77.7,
					"discount": 9,
					"stockCount": 100,
					'goodsDetail': [{
							"img": "https://img.alicdn.com/imgextra/i2/2202600873766/O1CN01trCUIT1dgsK202OT0_!!2202600873766.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i4/2202600873766/O1CN01YjVfEC1dgsK3tueFY_!!2202600873766.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i4/2202600873766/O1CN01XQ0DK81dgsJsXTfHO_!!2202600873766.jpg"
						}
					],
					"selectItem": [{
							"title": '单针织开衫上衣',
							"img": "	https://gw.alicdn.com/bao/uploaded/i2/220260087376…dgsJxiRija_!!2202600873766.jpg_60x60q50.jpg_.webp"
						},
						{
							"title": '套装【手链+项链】+简奢玫瑰礼盒',
							"img": "https://gw.alicdn.com/bao/uploaded/i2/220260087376…dgsK3tojzT_!!2202600873766.jpg_60x60q50.jpg_.webp"
						},
				],
		}
		
	}
	
	
}else if(optins.body.goodsId == 5){
	return {
			code: 200,
			goodsDetail: {
					"goodsId": 5,
					"goodsName": "【学院风穿搭】牛仔马甲男女ins潮牌工装外套痞帅炸街夹克背心",
					"goodsImg": "https://gw.alicdn.com/imgextra/i3/2935603592/O1CN01uXcSYZ1cPBHtINFr6_!!2935603592.jpg_Q75.jpg",
					"saleCount": "66",
					"salePrice": 79,
					"expirationTime": 1677937711,
					"tag": '首单已减￥10',
					"storeName":'NY优品',
					"rank": '学生热搜榜',
					"marketPrice": 89,
					"discount":9,
					"stockCount": 100,
					'goodsDetail': [{
							"img": "https://img.alicdn.com/imgextra/i1/2935603592/O1CN01FOwlaW1cPBIUn6UIu_!!2935603592.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i4/2935603592/O1CN01EpBecU1cPBISDBesJ_!!2935603592.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i3/2935603592/O1CN01TPxxOC1cPBIXoE8Kk_!!2935603592.jpg"
						}
					],
					"selectItem": [{
							"title": '蓝马甲+白衬衫',
							"img": "https://gw.alicdn.com/bao/uploaded/i2/2935603592/O…U21cPBIRgKVpC_!!2935603592.jpg_60x60q50.jpg_.webp"
						},
						{
							"title": '蓝色',
							"img": "https://gw.alicdn.com/bao/uploaded/i2/2935603592/O…Ls1cPBHunwY6S_!!2935603592.jpg_60x60q50.jpg_.webp"
						},
				],
		}
		
	}
}else if(optins.body.goodsId == 6){
	return {
			code: 200,
			goodsDetail: {
					"goodsId": 6,
					"goodsName": "生日礼物男生实用高档送男友男朋友老公男士小众高级的惊喜情人节",
					"goodsImg": "https://img.alicdn.com/imgextra/i4/195729828/O1CN01NFZEd32MTHGtY7uPl_!!195729828.jpg",
					"saleCount": "5",
					"salePrice": 199,
					"expirationTime": 1678937711,
					"tag": '力度优惠',
					"storeName":'NY优品',
					"rank": '生日礼物榜前二十',
					"marketPrice": 259,
					"discount": 7,
					"stockCount": 100,
					'goodsDetail': [{
							"img": "https://img.alicdn.com/imgextra/i4/195729828/O1CN01NFZEd32MTHGtY7uPl_!!195729828.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i2/195729828/O1CN01lGiCQ72MTHGwogLXn_!!195729828.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i2/195729828/O1CN01ip7ZbJ2MTHGyT6WoI_!!195729828.jpg"
						}
					],
					"selectItem": [{
							"title": '❤ 白金爵士【情人节豪华礼盒】',
							"img": "https://gw.alicdn.com/bao/uploaded/i4/195729828/O1…ssM2MTHGuBXT5k_!!195729828.jpg_60x60q50.jpg_.webp"
						},
						{
							"title": '❤ 黑金爵士【情人节豪华礼盒】',
							"img": "https://gw.alicdn.com/bao/uploaded/i2/195729828/O1…uzq2MTHGuBXs5g_!!195729828.jpg_60x60q50.jpg_.webp"
						},
				],
		}
		
	}
}else if(optins.body.goodsId == 7){
	return {
			code: 200,
			goodsDetail: {
					"goodsId": 7,
					"goodsName": "全新佳能EOS700D 750D 800D 100D入门级单反相机学生旅游高清数码",
					"goodsImg": "https://gw.alicdn.com/imgextra/i3/195729828/O1CN01…MTHGocxPX3_!!195729828.jpg_110x10000Q75.jpg",
					"saleCount": "100+",
					"salePrice": 4999,
					"expirationTime": 1678937711,
					"tag": '花呗享分期',
					"storeName":'NY优品',
					"rank": '满5000减300',
					"marketPrice": '',
					"discount":'',
					"stockCount": 100,
					'goodsDetail': [{
							"img": "https://img.alicdn.com/imgextra/i2/3070955695/O1CN0138YYUm1rwMNlaWaPv_!!3070955695.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg"
						},
						{
							"img": "https://img.alicdn.com/imgextra/i1/3070955695/O1CN01uc1tKG1rwMNw9xsJf_!!3070955695.jpg"
						}
					],
					"selectItem": [{
							"title": '港版750D/760+18-135STM中长焦',
							"img": "https://gw.alicdn.com/imgextra/i3/195729828/O1CN01…MTHGocxPX3_!!195729828.jpg_110x10000Q75.jpg_.webp"
						},
						{
							"color": '港版750D/760+18-55STM 静音防抖',
							"img": "https://gw.alicdn.com/imgextra/i3/195729828/O1CN01…MTHGocxPX3_!!195729828.jpg_110x10000Q75.jpg_.webp"
						},
						{
							"color": '港版黑色100D+501.8STM 人像镜头',
							"img": "https://gw.alicdn.com/imgextra/i3/195729828/O1CN01…MTHGocxPX3_!!195729828.jpg_110x10000Q75.jpg_.webp"
						},
						
				],
		}
		
	}
}


})
