<template>
	<view class="add">
		<view class="add-flex-box">
			<view class="add-for-box" v-for="(item,index) in addressList" :key="index" >
				<!-- 写个方法只取前三个  -->
				<view class="add-for-box-left" @click="chooseOne(item)">{{sliceWord(item.name,3)}}</view>
				<view class="add-for-box-middle" @click="chooseOne(item)">
					<view class="name_phone">
						<text class="name">{{item.name}}</text><text class="phone">{{item.phoneNumber}}</text>
						<view class="default" v-if="item.isDefaultAddress && index==0">默认</view>
					</view>
					<view class="address">
						{{item.address + item.addArea}}
					</view>
				</view>
				<view class="add-for-box-right" @click="toAdd('edit',item,index)">
					<image src="/static/address/edit.png" mode="scaleToFill" ></image>
				</view>
			</view>
		</view>
		<view class="Address" @click="toAdd('add')">新增地址</view>
		<view style="height: 20rpx;"></view>
	</view>
	
</template>

<script>
	import  {sliceWord} from '@/utils/index.js';
	export default {
		data() {
			return {
				addressList:[],
				index:''
				

			}
		},
		onLoad(op) {			
			 this.addressList=uni.getStorageSync('address')
			 console.log( this.addressList,' this.addressList');
			
		},
		onShow() {
			
		},
		
		methods: {
			sliceWord,
			chooseOne(e){
				        let pages = getCurrentPages();
						console.log('pages1',pages);
						pages.filter((v,i)=>{
							if(v.route=='views/goods/goodsDetail'){
								this.index= i
							}
							
						})
						
						// pages.splice(-1,0,pages[this.index])
						// console.log('pages2',pages);
					
						
						let nowPage = pages[ pages.length - 1];
						let prevPage = pages[this.index];
						console.log('prevPage',prevPage);
						prevPage.$vm.addressInfo =e ;
						 uni.navigateBack({                       
						 	    delta: pages.length-this.index-1
						 	});						
					}
					
			,
			toAdd(e,item,i){											
				// console.log(i,'i');
				if(e=='edit'){
					uni.navigateTo({
						url:'/views/address/add?item='+JSON.stringify(item)+'&index='+i
					})
				}else {
					uni.navigateTo({
						url:'/views/address/add'
					})
				}
				
			  
			},

		}
	}
</script>

<style scoped lang="scss">
	.add{
		background-color: #eeeeee;
		height: 100vh;
		box-sizing: border-box;		
		width: 100%;
		padding-top: 10rpx;
		.add-flex-box{
			background-color: white;
			width: 96%;
			margin: 0 auto;	
			border-radius: 10rpx;
			.add-for-box{
				display: flex;				
				justify-content: space-between;
				align-items: center;
				height: 180rpx;
				// background-color: cornflowerblue;
				.add-for-box-left{
					width: 10%;
					margin-left: 10rpx;
					line-height: 90rpx;
					text-align: center;
					width: 90rpx;
					background-color: #eedef0;
					color: #ff5703;
					letter-spacing: 1rpx;
					border-radius:50%; 
					font-size: 26rpx;
					
				}
				.add-for-box-middle{
					width: 80%;
					margin-left: 20rpx;
					font-size: 26rpx;
					.name_phone{
						display: flex;
						margin-bottom: 10rpx;
						.name{
							font-weight: 600;
							font-size: 30rpx;
						}
						.phone{
							margin-left: 10rpx;
							color: darkgray;
						}
						.default{
							margin-left: 20rpx;
							width: 80rpx;
							height: 30rpx;
							text-align: center;						
							background-color: red;
							color: white;
							font-size: 22rpx;
							padding: 5rpx;
							border-radius: 20rpx;
							
							
						}
					}
					.address{
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;  //使用自适应布局
						-webkit-line-clamp: 3;  //设置超出行数，要设置超出几行显示省略号就把这里改成几
						-webkit-box-orient: vertical;
					}
					
				}
				.add-for-box-right{
					width: 10%;
					// margin-left: 10rpx;
					display: flex;
					justify-content: center;
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
				
			}
		}
		
		.Address{
			position: fixed;
			line-height: 80rpx;
			background-color: #FBDA61;
			background-image: linear-gradient(65deg, #FBDA61 0%, #FF5ACD 100%);
			width: 60%;
			color: white;
			text-align: center;			
			bottom:20rpx;
			border-radius: 40rpx;
			margin: 0 auto;
			margin-bottom: 20rpx;
			margin-top: 40rpx;
			left:20% ;
			right:20%;
			
		}
	}


</style>
