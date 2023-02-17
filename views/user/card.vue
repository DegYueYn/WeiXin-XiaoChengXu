<template>
	<view class="content">
		<view class="card-box" v-for="(item,index) in cardList " :key="index">
			<view class="bgc">
				<image src="/static/discount.png" mode="scaleToFill"></image>
				<view class="card-price"><text style="color: red;font-size: 30rpx;">￥</text>{{item.price}}</view>
				<view class="card-title">{{item.title}}</view>
				<view class="card-date">{{happenTimeFun(item.nowdate)}} - {{happenTimeFun(item.expirationTime)}}</view>
				<view class="card-code">
					<image src="/static/code.png" mode="scaleToFill" @click="showDialog"></image>
				</view>
				<view class="card-type">{{item.type}}</view>
			</view>
			<uni-popup ref="popup" type="center" mask-background-color ="rgba(166, 161, 163, .7)"  >
				<view class="qr-box">
					<view class="text">向商家出示享优惠</view>
					<image src="/static/Qrcode.png" mode="scaleToFill" ></image>
				</view>
			</uni-popup>

		</view>

	</view>
</template>

<script>
	import {
		happenTimeFun
	} from '@/utils/index.js'
	export default {
		data() {
			return {
				show: false,
				cardList: [{
						nowdate: 1676540530,
						expirationTime: 1695202930,
						title: '满200元可用',
						price: 20,
						type: '新人专享加价优惠'
					},
					{
						nowdate: 1676540530,
						expirationTime: 1684204990,
						title: '满2000元可用',
						price: 100,
						type: '数码产品专用加价优惠'
					},
					{
						nowdate: 1676540530,
						expirationTime: 1705202930,
						title: '满400元可用',
						price: 40,
						type: '全场通用加价优惠!(不可与其他叠加)'
					}
				]

			}
		},
		onLoad() {

		},
		methods: {
			happenTimeFun,
			showDialog(){
				this.$refs.popup[0].open('center')
			},


		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #f5f5f5;
		width: 100vw;
		height: 100vh;

		.card-box {

			// background-color: cornflowerblue;
			.bgc {
				position: relative;
				width: 750rpx;
				height: 350rpx;

				image {
					position: absolute;
					top: 30rpx;
					left: 5%;
					width: 90%;
					height: 250rpx;
				}

				.card-price {
					position: absolute;
					left: 20%;
					top: 50%;
					margin: -25px 0 0 -25px;
					color: orangered;
					font-size: 50rpx;
					font-weight: 600;
				}

				.card-title {
					position: absolute;
					left: 40%;
					top: 25%;
					font-size: 40rpx;
					font-weight: 600;
					color: rgb(139, 76, 45);
				}


				.card-date {
					position: absolute;
					left: 40%;
					font-size: 24rpx;
					top: 50%;
					color: rgb(139, 76, 45);
				}

				.card-code {
					position: absolute;
					top: 15%;
					right: 19%;

					image {
						width: 60rpx;
						height: 60rpx;
					}
				}

				.card-type {
					position: absolute;
					bottom: 0;
					left: 5%;
					width: 90%;
					font-size: 28rpx;
					line-height: 70rpx;
					color: rgb(139, 76, 45);
					border-radius: 0 0 10rpx 10rpx;
					background-color: white;
					padding-left: 20rpx;

				}
			}
 
     
            
		}

   .qr-box{
	  background-color: #fff;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	   height: 700rpx;
	   width: 600rpx;
	   border-radius: 10rpx;
	   
	   .text{
		   // width: 100%;
		   text-align: center;
		   font-size: 36rpx;
		   font-weight: 600;
		   margin-top: 20rpx;
	   }
	   image{
		   width: 500rpx;
		   height: 500rpx;
		   background-color:cornflowerblue;
	   }
   }
	}
</style>
