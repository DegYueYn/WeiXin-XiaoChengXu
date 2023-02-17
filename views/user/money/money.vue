<template>
	<view class="content">
		<view class="moeny-box">
			<p>我的资产</p>
			<view class="money-box-money">
				<p>余额:</p>
				<p >{{(money_account).toFixed(2)}} (元)</p>
			</view>
			<view class="btn-box">
				<button class="money-detail" @click="toWork('detail')">查看明细</button>
				<button  class="money-charge" @click="toWork('charge')">点击充值</button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money_account:uni.getStorageSync('money_account')||0,
			}
		},
		onLoad() {
		},
		onShow(){
			this.money_account=uni.getStorageSync('money_account')
		},
		methods: {
			toWork(item){
				if(item=='charge'){
					uni.navigateTo({
						url:'/views/user/money/charge'
					})
				}else{
					uni.$showMsg('查看功能开发中！敬请期待','none',2000)
				}
			},

		}
	}
</script>

<style scoped lang="scss">
	.content {
		width: 100%;
		height: 100%;

		.moeny-box {
			margin-top: 40rpx;
			width: 90%;
			height: 350rpx;
			background: #FF416C;  /* fallback for old browsers */
			background: -webkit-linear-gradient(to bottom, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
			background: linear-gradient(to bottom, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
			margin: 0 auto;
			border-radius: 20rpx;
			p {
				font-weight: 600;
				padding: 40rpx;
				letter-spacing: 2rpx;
				color: white;
				font-size: 38rpx;
			}
			.money-box-money{
				display: flex;
				justify-content: center;
				align-items: center;
				// margin-top: -20rpx;
				p{
					letter-spacing: 0rpx;
					font-size: 36rpx;
					padding: 10rpx;
				}
			}
		}
		.btn-box{
			margin-top: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			button{
				width: 180rpx;
				border-radius: 50rpx;
				line-height: 60rpx;
				text-align: center;
				font-size: 28rpx;
				color: black;
				background-color:#ffffff;
			}

		}

	}
</style>
