<template>
	<view class="Content">
		<view class="Tab">
			<view class="Tab-flex">
				<view class="Tab-for" v-for="(i,idx) in tab" :key="idx">
					<view class="title" @click="clickTab(i)" :class="actIndex==idx?'active':''">{{i.title}}</view>
				</view>
			</view>
		</view>
		<view class="no" v-if="forList.length==0">
			<image src="/static/empty.png" mode="widthFix"></image>
			<text>这里什么都没有!</text>
		</view>
		<view class="orderList">
			<view class="orderList-flex">
				<view class="orderList-for" v-for="(i,idx) in forList" :key="idx">
					<view class="storeName">
						<image src="/static/store.png"></image>
						<view class="store">NY优品旗舰店</view>
						<view class="type" v-if="i.type=='success'">等待买家收货</view>
						<view class="type" v-else-if="!i.type">等待买家付款</view>
					</view>
					<view class="goodsInfo">
						<view class="img">
							<image :src="i.goodsImg" mode="widthFix"></image>
						</view>
						<view class="goodsinfo">
							<view class="name">{{i.goodsName}}</view>
							<view class="size">{{i.size}}</view>
							<view class="xieyi">七天无理由退换</view>
						</view>
						<view class="money">
							<view class="price">
								<text>￥</text>
								{{i.goodsPrice}}
							</view>
							<view class="num">X{{i.number}}</view>
						</view>

					</view>
					<view class="paymoney">
						<text class="paymoney_text">含运费险服务</text>
						<text
							class="paymoney_money">需付款<text>￥</text>{{Number(i.goodsPrice*i.number).toFixed(2)}}</text>
					</view>
					<view class="Btn" v-if="i.type=='success'">
						<button class="Btn1" plain type="default" disabled >延长收货</button>
						<button class="Btn1" plain type="default" disabled >查看物流</button>
						<button class="Btn2" plain type="default" @click="sureGetgoods(i)">确认收货</button>
					</view>
					<view class="btn" v-else-if="i.type=='sure'">
						<button class="btn3" plain type="default" disabled>已收货</button>
					</view>
					<view class="Btn" v-else>
						<button class="Btn1" plain type="default" disabled>修改地址</button>
						<button class="Btn1" plain type="default" @click="exit(i)">取消订单</button>
						<button class="Btn2" plain type="default" @click="pay(i,idx)">付款</button>
					</view>
					<u-popup style="height:800rpx" :show="show" mode="center" :closeOnClickOverlay="false"
						:safeAreaInsetTop="true" :round="10">
						<view class="paypwdtext">
							<view class="icon">
								<u-icon name="close" color="#7b7379" size="30" @click="close"></u-icon>
							</view>
							请输入支付密码
						</view>
						<view class="storeName">NY优品</view>
						<view class="paymoney"><text>￥</text>{{Number(totalPrice).toFixed(2)}}</view>
						<u-line></u-line>
						<view class="payway">
							<view class="paytext">支付方式</view>
							<view class="paytype" @click="PAY">
								<image src="/static/goodsDetail/demaland.png" mode="scaleToFill"></image>
								零钱通 ›
							</view>
						</view>
						<view class="paypwd">
							<u-code-input :focus="false" v-model="pwd" mode="box" :space="16" @finish="finish"
								:size="80" :maxlength="6" dot>
							</u-code-input>
						</view>
						<view style="height: 100rpx;"></view>
					</u-popup>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: {},
				pwd: '',
				totalPrice: 0,
				forList: [],
				allList: [],
				show: false,
				noPayList: [], //待付款
				goodsList: [], //待收货
				backMoneyList: [], //退款
				actIndex: 0,
				tab: [{
						id: 0,
						title: '全部'
					},
					{
						id: 1,
						title: '待付款'
					},
					{
						id: 2,
						title: '待收货'
					},
					{
						id: 3,
						title: '退款'
					},

				],
			}
		},
		onLoad(op) {
			this.allList = uni.getStorageSync('orderList')
			this.forList = this.allList
			this.actIndex = op.actIndex
			console.log('this.actIndex', this.actIndex);
			this.getlist()


		},
		onShow() {
            
			console.log('this.allList', this.allList);
		},

		methods: {
			sureGetgoods(e){
				var that =this
				console.log('eeeee',e);
				uni.showModal({					
					title:'是否确认收货?',
					success: function (res) {
							if (res.confirm) {
							   that.item=e
							   that.item.type='sure'
								that.allList = that.allList.filter(v => {
									return v.time !== e.time
								})
								that.allList.push(that.item)
								console.log('that.allList',that.allList);
								uni.setStorageSync('orderList',that.allList)
								that.getlist()
								uni.$showMsg('确认收货成功','none',2000)
							} else if (res.cancel) {
								
							}
						}
				})
				},
					// this.allList = this.allList.filter(v => {
					// 	return v.time !== this.item.time
					// })
					// this.item.type = 'success'
					// this.allList.push(this.item)
					// uni.setStorageSync('orderList', this.allList)
					// this.getlist()					
					// uni.hideLoading()
				
				
				// uni.showLoading({
				// 	title: '确认收货中···',
				// })
			
			PAY() {
				uni.$showMsg('暂不支持其他方式支付！', 'none', 2000)
			},
			close() {
				this.show = false
				uni.$showMsg('您已取消了支付', 'none', 2000)
			},
			exit(i){
				console.log('1',this.allList);
				var that =this
				uni.showModal({					
					title:'确认取消订单?',
					success: function (res) {
							if (res.confirm) {
								that.allList = that.allList.filter(v => {
									return v.time !== i.time
								})
								uni.setStorageSync('orderList',that.allList)
								that.getlist()
								uni.$showMsg('取消订单成功','none',2000)
							} 
						}
				})
			
			},
			pay(i, idx) {
				this.totalPrice = i.goodsPrice * i.number
				console.log('11111111', i, idx);
				if (!i.name || !i.address) {
					uni.$showMsg('请完善收货地址信息！', 'none', 2000)
					return
				} else {
					this.item = i
					setTimeout(() => {
						this.show = true
						uni.hideLoading()
					}, 1000)
					uni.showLoading({
						title: '支付中...',
					})
				}
			},
			finish(e) {
				setTimeout(() => {
					this.allList = this.allList.filter(v => {
						return v.time !== this.item.time
					})
					this.item.type = 'success'
					this.allList.push(this.item)
					uni.setStorageSync('orderList', this.allList)
					this.getlist()
					this.show = false
					this.item={}
					uni.hideLoading()
				}, 1000)

				uni.showLoading({
					title: '支付中...',
				})


			},
			getnoPayList() {
				this.noPayList = this.allList.filter((v) => {
					return !v.type
				})
				console.log('getnoPayList', this.noPayList);
			},
			getGoodsList() {
				this.goodsList = this.allList.filter((v) => {
					return v.type == 'success'
				})
				console.log('goodsList', this.goodsList);
			},
			getlist() {
				if (this.actIndex == 0) {
					this.forList = this.allList
				} else if (this.actIndex == 1) {
					this.getnoPayList()
					this.forList = this.noPayList
					console.log('this.noPayList',this.noPayList);
				} else if (this.actIndex == 2) {
					this.getGoodsList()
					this.forList = this.goodsList
					console.log('this.goodsList',this.goodsList);
					
				} else {
					this.forList = []
				}
			},
			clickTab(e) {
				this.actIndex = e.id
				if (e.id == 0) {
					this.forList = this.allList
				} else if (e.id == 1) {
					this.getnoPayList()
					this.forList = this.noPayList
				} else if (e.id == 2) {
					this.getGoodsList()
					this.forList = this.goodsList
				} else if (e.id == 3) {
					this.forList = []
				}
			}

		}
	}
</script>

<style scoped lang="scss">
	@import './order.scss'
</style>
<style>
	page {
		background-color: #f2f2f6;
	}
</style>
