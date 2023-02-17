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
		<view>
			<view></view>
			
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
				width: 0,
				height: 300,
				money_account:uni.getStorageSync('money_account')|| 0,
				card_account: uni.getStorageSync('card_account')||0,
				nickname: uni.getStorageSync('nickname'),
				flag: false,
			}
		},
		onLoad() {
			this.getSystemdata()
		},
		onShow() {
			this.flag = uni.getStorageSync('flag') || false
			this.money_account=uni.getStorageSync('money_account')
		},
		methods: {
			getSystemdata() {
				// 状态栏高度
				uni.getSystemInfo({
					success: res => {
						this.width = res.screenWidth
					}
				});
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
					url:'/api/getaccount',
					success:(res)=>{
						uni.setStorageSync('money_account',res.data.money_account)
						uni.setStorageSync('card_account',res.data.card_account)
						this.money_account=res.data.money_account;
						this.card_account=res.data.card_account;
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
			tobag(item){
             if(item=='money'){
				 uni.navigateTo({
				 	url:'/views/user/money/money'
				 })
			 }else {
				 uni.navigateTo({
				 	url:'/views/user/card'
				 })
			 }
			}


		}
	}
</script>
<style scoped lang="scss">
	@import '@/pages/my/my.scss'
</style>
