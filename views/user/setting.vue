<template>
	<view class="Setting" >
		<view class="flex-box" v-for="(item,index) in List" :key="index">
			 <view class="Flex"  @click="goAddress(item)">
			 	<view class="Key">{{item.Key}}</view>
			 	<view class="Value">{{item.Value}}</view>
			 </view>
		</view>
		<view class="btn">
			<button @click='exit' >退出登录</button>
		</view>

	</view>
</template>

<script>
	
	export default {
		data(){
			return{
				List:[
					{
						index:1,
						Key:'绑定微信',
						Value:'已绑定',
					},
					{
						index:2,
						Key:'绑定手机',
						Value:'已绑定',
					},
					{   index:0,
						Key:'地址管理',
						Value:'→',
					},
				]
			}
		},
		methods:{
			goAddress(item){
				if(item.index==0)
				{
					uni.navigateTo({
						url:'/views/address/address'
					})
				}else{
					uni.$showMsg(`${item.index=='1'?'微信':'手机'}已绑定`, 'none', 2000)
					
				}
			},
			exit(){
				uni.showModal({
					title: '提示',
					content: '确定要退出吗?',
					success: function (res) {
						if (res.confirm) {
							uni.removeStorageSync('flag'),
							uni.removeStorageSync('nickname')
							uni.removeStorageSync('iconUrl')
							uni.removeStorageSync('money_account')
							uni.removeStorageSync('card_account')
							uni.switchTab({
								url:'/pages/my/my'
							})
							
						} else if (res.cancel) {
							return
						}
					}
				});
				

			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.Setting{
		background-color: rgb(244, 245, 247);
		height: 100vh;
		width: 100vw;
		margin-top: 20rpx;
		.flex-box{
			.Flex{
				background-color: rgb(255, 255, 255);
				height: 80rpx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid gainsboro;
				.Key{
					margin-left: 20rpx;
				}
				.Value{
					margin-right: 40rpx;
				}
				
			}
			
		}
		.btn{
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 50rpx;
			button{
				border-radius: 40rpx;
				background-color: red;
				color: white;
				font-size: 28rpx;
				width: 70%;
				line-height: 80rpx;
				
			}
			
		}
	}
</style>