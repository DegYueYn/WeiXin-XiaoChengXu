<template>
	<view class="rootBox">
		<view :style="{height:statusHeight+'px',backgroundColor:color}">
			<view class="content" :style="{paddingTop:statusHeight + 'px'}">
				<uni-nav-bar title="支付" color="black" backgroundColor="white" border="none"  />
			</view>
			<view class="img">
				<image src="/static/goodsDetail/success.png" mode="scaleToFill" ></image>
				<view class="text">支付成功！</view>
			</view>
			<view class="FlexBox">
				<view class="ForBox" v-for="(item,index) in List" :key="index">
					<view class="left">{{item.title}}</view>
					<view class="right" v-if="item.value=='wx'">微信支付</view>
					<view class="right" v-else-if="item.value==1">下单成功即将发货</view>
					<!-- <view class="right" v-else-if="item.title=='下单时间'">{{FormatTime(item.value)}}</view> -->
					<view class="right" v-else>{{item.value}}</view>
				</view>
			</view>
			<view class="btnBox">
				<button class="btn1" style="border: none;" @click="go('order')">查看订单</button>
				<button class="btn1 btn2" style="border: none;" @click="go('shop')">继续购物</button>
			</view>
		</view>


	</view>
</template>

<script>
	import { FormatTime } from '@/utils/index.js'
	export default {
		data() {
			return {
				orderData:{},
				statusHeight: 0,
				color: 'white',
				List:[{
					title:'订单编号:',
					value:''
				},{
					title:'订单状态:',
					value:''
				},{
					title:'支付方式:',
					value:''
				},{
					title:"下单时间:",
					value:''
				}]

			}
		},
		onLoad(op) {
			this.getSystemdata()
			
			this.orderData=JSON.parse(op.orderData).data
			
			let values=Object.values(this.orderData)
				values[3]=FormatTime(values[3])
					
			for(let i=0;i<this.List.length;i++){
				this.List[i].value=values[i]
			}
			
			
		},
		methods: {
			FormatTime,
			getSystemdata() {
				uni.getSystemInfo({
					success: res => {
						console.log(res);
						this.width = res.windowWidth
						this.statusHeight = res.statusBarHeight
					}
				});
			},
			go(e){
				if(e=='order'){
					uni.$showMsg('去订单页','none',2000)
				}else{
					uni.switchTab({
						url:'/pages/index/index'
					})
				}
			},
			
			

		}
	}
</script>

<style scoped lang="scss">
	.content{
		height: 200rpx;
		background-color: white;
	}
	.img{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		image{
			width: 200rpx;
			height:200rpx
		}
		.text{
			margin-top: 40rpx;
			font-size: 36rpx;
		}
		
	}
	.FlexBox{
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		margin-top: 80rpx;
		.ForBox{
			padding-bottom: 20rpx;
			width: 80% ;
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;
			font-size: 32rpx;
			
			.left{
				color: #767676;
				// margin-left: 30rpx;
				
			}
			.right{
				// margin-right: 30rpx;
				
			}
		}
	}
	.btnBox{
		margin-top: 100rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.btn1{
			border-radius: 10rpx;
			padding: 10rpx;
			font-size: 30rpx;
			color: red;
			width: 200rpx;
			line-height: 60rpx;
			background-color: white;
			
		}
		.btn1::after{
			border: none;
			border: 4rpx solid red;
		}
		.btn2{
			background-color: red;
			color: white;
		}
	}
</style>
