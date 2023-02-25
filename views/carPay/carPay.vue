<template>
	<view class="Content">
		<view class="addAd" @click="toAddress">
			<view class="noaddress" v-if="addressInfo.length==0">+增加收货地址</view>
			<view class="hasaddress" v-else>
				<view class="image_address">
					<image src="/static/address/address.png" mode="scaleToFill"></image>
					<view class="address">
						<text>{{addressInfo.name}}</text>
						<text class="text">{{addressInfo.phoneNumber}}</text>
						{{ '&nbsp &nbsp'+addressInfo.address +'&nbsp &nbsp' +addressInfo.addArea }}
					</view>
					<view class="icon">切换地址 〉</view>
				</view>
			</view>
		</view>
		<view class="FlexBox">
			<view class="ForBox" v-for="(item,index) in checkList" :key="index">
				<view class="ForBox_StoreName">
					<image src="/static/store.png" mode="aspectFit"></image>
					<view class="StoreName">{{item.goodsStore}}旗舰店</view>
				</view>
				<view class="ForBox_GoodsName">
					<image :src="item.goodsImg" mode="scaleToFill"></image>
					<view class="GoodsNameBox">
						<view class="GoodsName">
							{{sliceWord(item.goodsName,15)}}
						</view>
						<view class="size">
							分类：{{item.size}}
						</view>
						<view class="number">
							<u-number-box @change="change(item,e)" :min="1" v-model="item.number"  button-size="50" color="#000000" bgColor="#55aaff"
								iconStyle="color: #000000"></u-number-box>
						</view>
					</view>
					<view class="GoodsPrice">
						<text>￥</text>
						{{item.goodsPrice}}
					</view>
				</view>
			    <view class="otherBox">
					<view class="express">
						<view>配送服务</view>
						<view>免邮</view>
					</view>
					<view class="express">
						<view>退换货服务</view>
						<view>七天无理由退换</view>
					</view>
					<view class="remark">
						<view>订单备注</view>
						<view class="input"><input  placeholder-class="placeholder_class" type="text" v-model="item.remark" placeholder="添加备注" /></view>
					</view>
				</view>
			</view>
		</view>
	   <view class="btnBox">
		   <view class="moeny">
			   <text class="money_1">共{{1}}件</text>
			   合计：
			   <text class="money_2">￥</text>
			   <text class="money_3">{{totalPrice}}</text>
		   </view>
		   <view class="btn" >
		   		<button type="default" plain="" style="border: none;" @click="pay">提交订单</button>	   
		   </view>
	   </view>
	   <u-popup style="height:800rpx" :show="show" mode="center" :closeOnClickOverlay="false"  :safeAreaInsetTop="true" :round="10"  >
	           <view class="paypwdtext">
	   			<view class="icon">
	   				<u-icon name="close" color="#7b7379" size="30" @click="close"></u-icon>
	   			</view>
	   			请输入支付密码					
	   		</view>				
	   		<view class="storeName">NY优品</view>
	   		<view class="paymoney"><text>￥</text>{{totalPrice}}</view>
	   		<u-line></u-line>
	   		<view class="payway">
	   			<view class="paytext">支付方式</view>
	   			<view class="paytype" @click="PAY">
	   				<image src="/static/goodsDetail/demaland.png" mode="scaleToFill" ></image>
	   				零钱通 ›						
	   			</view>
	   		</view>
	   		<view class="paypwd">
	   			<u-code-input  :focus="false"   v-model="pwd" mode="box" :space="16"  @finish="finish" :size="80"  :maxlength="6"  dot>											
	   			</u-code-input>				
	   		</view>
	   		<view style="height: 100rpx;"></view>				
	   </u-popup>
	</view>
</template>

<script>
	import {
		sliceWord
	} from '@/utils/index.js';
	export default {
		data() {
			return {
				pwd:'',
				show:false,
				checkList: [],
				addressInfo: [],
				number:1,
				remark:'',
				orderData:[],
			}
		},
		computed:{
			totalPrice(){
					var str=0;
					for(let i=0;i<this.checkList.length;i++){
						str+=this.checkList[i].goodsPrice*this.checkList[i].number						
					}
					return str.toFixed(2)							
		}
		},
		onLoad() {
			
			this.checkList = uni.getStorageSync('checkList')
			// console.log('this.checkList', this.checkList);
			let addressList = uni.getStorageSync('address')
			if (addressList.length > 0) {
				if (addressList[0].isDefaultAddress) {
					this.addressInfo = addressList[0]
				}
			}

		},
		methods: {
			sliceWord,
			change(item){
			// console.log(item);	
			},
			PAY(){
				uni.$showMsg('暂不支持其他方式支付！','none',2000)
			},
			toAddress() {
				uni.navigateTo({
					url: "/views/address/address"
				})
			},
			pay(){
				if(!this.addressInfo.name ||!this.addressInfo.phoneNumber||!this.addressInfo.address){
					uni.$showMsg('请完善收货地址信息！','none',2000)
					return
				}else{
					for(let i=0;i<this.checkList.length;i++){
						console.log(this.checkList[i]);
						const order={
							"goodsName":this.checkList[i].goodsName,
							"goodsPrice":this.checkList[i].goodsPrice,
							"goodsStore":this.checkList[i].storeName,
							"goodsImg":this.checkList[i].goodsImg,
							"address":this.addressInfo.address+this.addressInfo.addArea,
							"name":this.addressInfo.name,
							"number":this.checkList[i].number,
							"TotalPrice":this.checkList[i].goodsPrice * this.checkList[i].number,
							"size":this.checkList[i].size,
							"time":new Date().getTime(),
							"remark":this.checkList[i].remark,
							"phone":this.addressInfo.phoneNumber,				
						}
						if(!uni.getStorageSync('orderList')){
							let list=[]
							list.push(order)
							uni.setStorageSync('orderList',list)
							
						}else{
							let list =uni.getStorageSync('orderList')
							list.push(order)
							uni.setStorageSync('orderList',list)
							
						}								
					}				
					setTimeout(()=>{
					this.show=true
					
					uni.hideLoading()
					},1000)
					uni.showLoading({
						title:'支付中...',					
					})
				}						
			},
			close(){
				this.show=false
				uni.$showMsg('您已取消了支付','none',2000)
			},
			finish(e){
				setTimeout(()=>{
				this.show=false		
				let order=uni.getStorageSync('orderList')
				for(let i=0;i<this.checkList.length;i++){
					uni.request({
						url:"/api/order",
						data:{
							"order":order[order.length-i-1]
						},
						success:res=>{							
							this.orderData=res.data
							console.log('orderData',this.orderData);
							order[order.length-i-1].type='success'
						     uni.setStorageSync('orderList',order)
							 uni.hideLoading()
							 uni.reLaunch({
							 			url:'/views/goods/paySuccess?orderData='+JSON.stringify(this.orderData)
							 	})
						}
					})
				}
				console.log('order',order);				
				},1000)
				uni.showLoading({
					title:'支付中...',					
				})
				
			},

		}
	}
</script>


<style scoped lang="scss">
	@import './carPay.scss'
</style>

<style>
	page {
		background-color: #f2f2f6;
	}
	.placeholder_class{
		 font-family: 'Source Han Sans CN';
		 text-align: right;

	}
</style>
