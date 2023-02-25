<template>
	<view class="Content">
		<view class="noLogin"  v-if="!isLogin">
			<image src="../../static/NFT_1.png"></image>
			<view @click="tologin">去登录页</view>
		</view>
		<view class="statusHeight" v-else>
			<!-- <view class="content" :style="{paddingTop:statusHeight + 'px'}">
				<uni-nav-bar left-text="购物车" backgroundColor="#efefef" />
			</view> -->
			<view class="FlexBox">
				<view class="empty" v-if="cardList.length==0">
					<image src="/static/empty.png" mode="scaleToFill"></image>
					<view>购物车空空如也!&nbsp;&nbsp;&nbsp;≡(▔﹏▔)≡</view>
				</view>
				<view v-else class="ForBox" v-for="(item,index) in cardList" :key="index">
					<view class="goodsStore" @click="goStore">
						<image src="/static/store.png" mode="scaleToFill"></image>
						{{item.goodsStore}}旗舰店
						<text class="text">〉</text>
					</view>
					<view class="goodsInfo">
						<view class="goodsInfo_radio">
							<checkbox-group @change="checkClick(item)">
								<checkbox :checked="item.checked" color="#ff8037" style="transform:scale(0.8);" />
							</checkbox-group>
						</view>
						<view class="goodsInfo_img">
							<image :src="item.goodsImg" mode="scaleToFill"></image>
						</view>
						<view class="goodsInfo_goodstitle">
							<view class="goodsInfo_goodstitle_goodsName">{{sliceWord(item.goodsName,18)}}</view>
							<view class="goodsInfo_goodstitle_size">尺码:&nbsp;&nbsp;{{item.size}}</view>
							<view class="goodsInfo_goodstitle_discount">
								{{item.discount}}折热销
							</view>
							<view class="goodsInfo_goodstitle_goodsPrice_number">
								<view class="goodsInfo_goodstitle_goodsPrice">
									<text>￥</text>
									{{item.goodsPrice}}
								</view>
								<view class="goodsInfo_goodstitle_number">
									x{{item.number}}
								</view>
							</view>
						</view>

					</view>
                        
                      
				</view>
				<view class="over" v-if="cardList.length!==0">暂无更多啦···</view>
				  <view style="height: 140rpx;"></view>
				
			</view>
			<view class="btnBox" v-if="cardList.length!==0">
				<view class="btnBox_right">
					<view class="radio">
						<checkbox-group @tap="checkAll">
							<checkbox :checked="allChecked" color="#ff8037" style="transform:scale(0.8);" />
						</checkbox-group>
					</view>
					<view class="txt">全选</view>
				</view>
				<view class="btnBox_left" v-if="cardList.length>0">
					<view class="btnBox_left_money">
						合计:&nbsp;
						<text class="icon">￥</text>
						<text class="money" v-if="totalPrice<0 ||totalPrice==0">{{0}}</text>
						<text class="money" v-else-if="totalPrice>0">{{(totalPrice).toFixed(1)}}</text>
					</view>
					<view class="btnBox_left_btn" @click="carPay">
						<button plain class="btn" style="border: none;">结算</button>
					</view>
				</view>
			</view>
		</view>
       
	</view>
</template>

<script>
	import {
		FormatTime
	} from '@/utils/index.js'
	import {
		sliceWord
	} from '@/utils/index.js';
	export default {
		data() {
			return {
				statusHeight: 0,
				color: 'red',
				cardList: [],
				prePayList: [],
				allChecked: false,
				totalPrice: 0,
				isLogin:false,

			}
		},
		//
		onShow() {
			this.getSystemdata()
			this.cardList = []
			// console.log(this.cardList, 'this.cardList');
			this.cardList = uni.getStorageSync('cardList')
			// console.log(this.cardList, 'this.cardList');
			this.isLogin=uni.getStorageSync('nickname')?true:false
			console.log(this.isLogin,'this.isLogin=');

		},
		onLoad() {
			
			
			
		},
		onHide() {
			if (this.allChecked) {
				this.allChecked = false
			}
			this.cardList.map((item)=>{
				return item.checked==true
			})
			this.totalPrice = 0

		},
		methods: {
			FormatTime,
			sliceWord,
			tologin(){
				uni.switchTab({
					url:'/pages/my/my'
				})
			},
			goStore() {
				uni.$showMsg('功能开发中···', 'none', 2000)
			},
			// 结算按钮
			carPay() {
				const checkList = []
				const index=[]
				this.cardList.map((item, i) => {
					if (item.checked == true) {
						this.cardList.splice(i,1,0)
						
						// uni.setStorageSync('cardList', this.cardList)
						// return checkList.push(item)
						checkList.push(item)
					}
					
				})
				this.cardList=this.cardList.filter((i)=>{
					return i!=0
				})
				uni.setStorageSync('cardList', this.cardList)

				
				
				console.log('cardList',this.cardList);
				uni.setStorageSync('checkList', checkList)
				if(uni.getStorageSync('checkList').length>0){
					uni.navigateTo({
						url:'/views/carPay/carPay'
					})
				}else{
                         uni.$showMsg('请选择需要购买的商品','none',1000)
				}
				
				
				
			},
			getSystemdata() {
				uni.getSystemInfo({
					success: res => {
						// console.log(res);
						this.width = res.windowWidth
						this.statusHeight = res.statusBarHeight
					}
				});
			},
			checkClick(item) {
				uni.showLoading({
					title: '加载中'
				})
				item.checked = !item.checked
				uni.hideLoading()
				if (!item.checked) {
					this.allChecked = false
					this.totalPrice -= item.number * item.goodsPrice
				} else {
					this.totalPrice += item.number * item.goodsPrice
					const goods = this.cardList.every(item => {
						return item.checked == true
					})
					if (goods) {
						this.allChecked = true
					} else {
						this.allChecked = false
					}
					// for(let i=0;i<this.cardList.length;i++){
					// 	if(this.cardList[i].checked==true){
					// 		this.allChecked = true
					// 	}else{
					// 		this.allChecked = false
					// 	}
					// }
					// 	this.cardList.forEach(item => {
					// 		if(item.checked==true){
					// 			this.allChecked = true
					// 		}else{
					// 			this.allChecked = false
					// 		}
					// })
				}
			},
			checkAll() {
				uni.showLoading({
					title: '加载中'
				})
				this.allChecked = !this.allChecked
				uni.hideLoading()
				if (this.allChecked) {
					this.totalPrice = 0
					this.cardList.map(item => {
						item.checked = true
						this.totalPrice += item.number * item.goodsPrice
					})
				} else {
					this.cardList.map(item => {
						item.checked = false
						this.totalPrice = 0
					})
				}
			}

		},

	}
</script>

<style scoped lang="scss">
	@import './car.scss';
</style>
<style>
	page {
		background-color: #f2f2f6;
	}
</style>
