<template>
	<view class="my" v-if="flag">
		<view class="my-user-info" :style="{width:width + 'px',height:height +'px'}">
			<view class="my-user-info-icon">
				<image :src="iconUrl" @click="toSetting()"></image>
			</view>
			<view class="my-user-info-nickname">
				{{nickname}}
			</view>
		</view>
		<view class="function-money">
			<view class="function-money-left" @click="tobag('money')">
				<image src="/static/money.png" mode="aspectFill"></image>
				<view class="left">
					<text class="backet">钱包</text>
					<text class="money">{{money_account.toFixed(2)}} (元)</text>
				</view>
			</view>
			<view class="function-money-left function-money-right" @click="tobag('card')">
				<image src="/static/card.png" mode="aspectFill"></image>
				<view class="left">
					<text class="backet">券包</text>
					<text class="money">{{card_account}} 张</text>
				</view>

			</view>
		</view>
		<view class="orderList">
			<view class="text">我的订单</view>
			<view class="FlexBox">

				<view class="ForBox" v-for="(item,index) in orderlist" :key="index">
					<view class="iconBox">
						<view class="icon" v-if="show">
							<image :src="item.icon" mode="scaleToFill" @click="toOrderDetail(item)">
								<view class="num" v-model="item.news" v-if="item.news">{{item.news}}</view>
						</view>
						<view class="title">{{item.title}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="otherList">
			<view class="text">我的服务</view>
			<view class="FlexBox">

				<view class="ForBox" v-for="(item,index) in otherlist" :key="index">
					<view class="iconBox">
						<view class="icon">
							<image :src="item.icon" mode="scaleToFill" @click="cliclItem(item)">
								<!-- <view class="num">9</view> -->
						</view>
						<view class="title">{{item.title}}</view>
					</view>
				</view>
			</view>
		</view>

	</view>
	<view class='No-login' v-else>
		<view class='img'>
			<image src="/static/nft.png" mode="aspectFill"></image>
			<button class="btn" @click='getUserInfo'>点击登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconUrl: uni.getStorageSync('iconUrl'),
				title: '我的',
				show: true,
				width: 0,
				height: 300,
				money_account: uni.getStorageSync('money_account') || 0,
				card_account: uni.getStorageSync('card_account') || 0,
				nickname: uni.getStorageSync('nickname'),
				flag: false,
				otherlist: [{
						icon: '/static/other/adddress.png',
						title: '我的地址'
					},
					{
						icon: '/static/other/shoucang.png',
						title: '我的收藏'
					},
					{
						icon: '/static/other/card.png',
						title: '领券中心'
					},
					{
						icon: '/static/other/express.png',
						title: '我的快递'
					},
					{
						icon: '/static/other/huiyuan.png',
						title: '会员中心'
					},
					{
						icon: '/static/other/kefu.png',
						title: '官方客服'
					},
					{
						icon: '/static/other/pay.png',
						title: '充话费'
					},
					{
						icon: '/static/other/pingjia.png',
						title: '我的评价'
					},

				],
				orderlist: [{
						id: 0,
						title: '全部',
						icon: '/static/order/all.png'
					},
					{
						id: 1,
						title: '待付款',
						icon: '/static/order/fukuan.png'
					},
					{
						id: 2,
						title: '待收货',
						icon: '/static/order/shouhuo.png'
					},
					{
						id: 3,
						title: '退款',
						icon: '/static/order/tuikuan.png'
					},
				]
			}
		},
		onLoad() {
			this.getSystemdata()

		},
		onShow() {

			this.getNews()
			this.flag = uni.getStorageSync('flag') || false
			this.money_account = uni.getStorageSync('money_account')
		},
		methods: {
			getNews() {
				this.show = false
				this.show = true
				let orderList = uni.getStorageSync('orderList')
				let successNum = 0
				let failNum = 0
				for (let i = 0; i < orderList.length; i++) {
					if (orderList[i].type == 'success') {
						successNum++//待收货
					} else if(orderList[i].type == 'sure'){
						// 已收货
					}else{
						failNum++//待付款
					}
				}
				this.orderlist[0].news = orderList.length
				this.orderlist[1].news = failNum
				this.orderlist[2].news = successNum
				// console.log('this.orderlist',this.orderlist);				
			},
			// 订单栏详情
			toOrderDetail(e) {
				uni.navigateTo({
					url: '/views/user/order/order?actIndex='+e.id
				})



			},

			getSystemdata() {
				// 状态栏高度
				uni.getSystemInfo({
					success: res => {
						this.width = res.screenWidth
					}
				});
			},
			// 我的服务
			cliclItem(e) {
				uni.$showMsg('功能持续开发中···', 'none', 2000)
			},

			getUserInfo() {
				uni.getUserProfile({
						//声明获取用户个人信息后的用途(必填)
						desc: "Wexin",
						success: (res) => {
							this.iconUrl = res.userInfo.avatarUrl
							this.nickname = res.userInfo.nickName
							this.flag = true
							uni.setStorageSync('flag', true)
							uni.setStorageSync('iconUrl', res.userInfo.avatarUrl)
							uni.setStorageSync('nickname', res.userInfo.nickName)
							uni.$showMsg('登录成功!', 'none', 2000);
						},
						fail: () => {
							uni.$showMsg('您取消了授权!', 'none', 2000)
						}
					}),
					uni.request({
						url: '/api/getaccount',
						success: (res) => {
							uni.setStorageSync('money_account', res.data.money_account)
							uni.setStorageSync('card_account', res.data.card_account)
							this.money_account = res.data.money_account;
							this.card_account = res.data.card_account;
						}

					})

			},
			//去设置页
			toSetting() {
				uni.navigateTo({
					url: "/views/user/setting"
				})
			},
			//去礼包页
			tobag(item) {
				if (item == 'money') {
					uni.navigateTo({
						url: '/views/user/money/money'
					})
				} else {
					uni.navigateTo({
						url: '/views/user/card'
					})
				}
			}


		}
	}
</script>
<style scoped lang="scss">
	@import '@/pages/my/my.scss'
</style>
