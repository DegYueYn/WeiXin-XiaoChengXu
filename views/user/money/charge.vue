<template>
	<view class="charge-Box">
		<view class="charge-box">
			<view class="  charge-old">
				您目前余额为 {{0||(money_account).toFixed(2)}}(元)
			</view>
			<view class="charge">
				<view class="charge-title">充值金额：</view>
				<view class="charge-title-input"><input @input="add" type="digit" placeholder="请输入充值金额" /></view>
			</view>
			<view class="charge-new">
				<view class="charge-new-title">充值后剩余：</view>
				<view class="charge-new-money">{{0||(money_account_new).toFixed(2)}}(元)</view>
			</view>
		</view>
		<view class="btn-box">
			<button class="btn" @click="sureCharge">确定充值</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				money_account:uni.getStorageSync('money_account')||0,
				money_account_new:0,
				value:0,
			}
		},
		onLoad(){
			
		},
		onShow(){
			this.money_account=uni.getStorageSync('money_account')
		},
		methods:{
			add(event){
				console.log(event.detail);
				this.value=Number(event.detail.value)
				this.money_account_new=this.money_account+Number(event.detail.value);
				console.log(this.money_account_new);
			},
			sureCharge(){
				if(this.value>0){
					var that =this
				uni.showModal({
					title: '提示',
					content: `确定充值${this.value}元吗`,
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								title:'充值中...'
							})
							
							uni.request({
								url:'/api/charge',
								data:{
									"value":that.value,
									"money_account_new":that.money_account_new,
									"money_account":that.money_account
								},
								success:(res)=>{
									uni.removeStorageSync('money_account')
									uni.setStorageSync('money_account',res.data.data.money_account_new)
									console.log(res,'res');
									
									setTimeout(()=>{
										uni.hideLoading()
										uni.$showMsg('充值成功','success',2000);
									},3000)							
									setTimeout(()=>{
										uni.redirectTo({
											url: '/views/user/money/charge'
										});
									},3500)							
								},
								fail:res=>{
									uni.$showMsg('充值失败','success',2000);
								}
							})
							
							
						} else if (res.cancel) {
							uni.$showMsg('您已取消充值','none',2000)
							this.money_account_new=0
						}
					}
				});	
				}else{
					uni.$showMsg('请输入充值金额','none',2000)
				}


			


			
			}
			
		}
	}
</script>

<style scoped lang="scss">
	.charge-Box{
		height: 100vh;
		width: 100%;
		background-color: #f5f5f5;
		padding-top: 30rpx;
		.charge-box{
			box-sizing: border-box;
			border-radius: 10rpx;
			height: 300rpx;
			width: 90%;
			padding: 30rpx;
			margin: 0 auto;
			background-color: white;
			.charge-old{
				text-align: center;
				font-weight: 600;
			}
			.charge{
				margin-top: 30rpx;
				line-height: 60rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.charge-title-input{
					// margin-right: 50rpx;
				}
			}
			.charge-new{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30rpx;
				line-height: 60rpx;
				.charge-new-title{
					
				}
				.charge-new-money{
					margin: 0 auto;
					
				}
			}
		}
	.btn-box{
		position: fixed;
		bottom: 0rpx;
		left: 0;
		height: 150rpx;
		width: 100vw;
		background-color: white;
		.btn{
			width: 90%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			margin-top: 20rpx;
			height: 80rpx;
			color: white;
			border-radius: 40rpx;			
			background-color: red;
		}
	}
	}
	
	
</style>