<template>
	<view class="goodsDetail">
		<view class="goodsDetail-swiper">
			<u-swiper :list="list" indicatorActiveColor="red" indicatorInactiveColor="#ffffff" indicator="true" autoplay="false" height="750rpx" imgMode="scaleToFill"></u-swiper>
		</view>
		<view class="goodsDetail-money">
			<view class="goodsDetail-money-tag" >{{goodsInfo.tag}}</view>
			<view class="goodsDetail-money-money">
				<text>￥</text>
			 {{goodsInfo.salePrice}}	
			</view>
			<view class="goodsDetail-money-Omoney">
				价格<text>￥</text>
			 {{goodsInfo.marketPrice}}	
			</view>
			<view class="goodsDetail-money-other">
				<view class="goodsDetail-money-other-text" >热卖中</view>
				<view class="goodsDetail-money-other-time" >
					<u-count-down :time="goodsInfo.expirationTime" @change="onChange" format="HH:mm:ss">
						<view class="time">
						            <view class="time__custom">
						                <text class="time__custom__item">{{ timeData.hours>10?timeData.hours:'0'+timeData.hours}}</text>
						            </view>
						            <text class="time__doc">:</text>
						            <view class="time__custom">
						                <text class="time__custom__item">{{ timeData.minutes }}</text>
						            </view>
						            <text class="time__doc">:</text>
						            <view class="time__custom">
						                <text class="time__custom__item">{{ timeData.seconds }}</text>
						            </view>
						        </view>
					</u-count-down>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsInfo: [],
				list:[],
				timeData: {},
			}
		},
		onLoad(op) {
			this.getDetail(op.goodsId)

		},
		methods: {
			getDetail(item) {
				console.log(item);
				uni.request({
					url: '/api/goodsDetail',
					data: {
						"goodsId": Number(item)
					},
					success: res => {
						console.log(res.data.goodsDetail);
						if (res.data.code == 200) {
							this.goodsInfo = res.data.goodsDetail
							for (let img in res.data.goodsDetail.goodsDetail ) {
								this.list.push(res.data.goodsDetail.goodsDetail[img].img)
								
							}
							
						}
					}
				})
			},
			  onChange(e) {
			                this.timeData = e
							console.log(e);
			            },

		}
	}
</script>

<style scoped lang="scss">
	.time {
	    @include flex;
	    align-items: center;
	
	    &__custom {
	         margin-top: 4px;
	         width: 22px;
	         height: 22px;
	         // background-color: $u-primary;
			 background-color: black;
	         // border-radius: 4px;
			 font-weight: 600;
	         /* #ifndef APP-NVUE */
	         display: flex;
	         /* #endif */
	         justify-content: center;
	         align-items: center;
	    
	        &__item {
	             color: #fff;
	             font-size: 12px;
	             text-align: center;
	         }
	    }
	    
	    &__doc {
	         color: $u-primary;
	         padding: 0px 4px;
	     }
	    
	    &__item {
	         color: #606266;
	         font-size: 15px;
	         margin-right: 4px;
	     }
	}
	@import './goodsDetail.scss'
</style>
