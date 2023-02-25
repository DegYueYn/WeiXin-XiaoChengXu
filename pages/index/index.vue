<template>
	<view class="content">
		<view class="content-header" :style="{height:statusHeight+ 133 +'px',backgroundColor:color}">
			<view class="flex-box-title" :style="{paddingTop:statusHeight + 'px'}">
				<p class="title1">品牌特卖 100%正品</p>
				<p class="title2">品牌授权 58元免邮 退换无忧</p>
			</view>
			<view class="search" @click="toSearch">
				<uni-easyinput disabled prefixIcon="search" suffixIcon="camera" v-model="value" placeholder="请输入商品"
					@iconClick="onClick()"></uni-easyinput>
			</view>
			<view class="flex">
				<view class="flex-box" v-for="(item,index) in tabList " :key="index">
					<view class="flex-box-tar" @click="click(item,index)" :class="activeIndex==index?'active':''">{{item.title}}</view>
				</view>			
			</view>
		</view>
		<view class="goodsBox" v-if="goodsList.length>0">
		   <view class="goodsBox-inner">
			   <view class="goodsBox-inner-left" >
				   <view class="goodsBox-inner-left-box" v-for="(item,index) in goodsLeftList " :key="index">
					   <view class="goodsBox" @click="toGoodsDetail(item)">
						   <view class="goodsBox-img">
							   <image :src="item.goodsImg" mode="widthFix"></image>
						   </view>
						   <view class="goodsBox-title">
							   {{item.goodsName}}
						   </view>
						   <view class="goodsBox-discount-saleCount" >
							   <view class="goodsBox-discount">{{item.discount}}折价</view>
							   <view class="goodsBox-saleCount">月销 {{item.saleCount}}</view>
						   </view>
						   <view class="goodsBox-price">
						   	<text class="price-icon">￥</text>
							{{item.salePrice}}
							<text class="Oprice">￥{{item.marketPrice}}</text>
						   </view>
						   <view class="goodsBox-rank">
							   <image src="/static/cup.png" mode="scaleToFill"></image>
							   {{item.rank}}
						   </view>
					   </view>
				   </view>
                   <view class="bottom-box" @click="toGoodsDetail('ad')">
					   <image src="/static/bottom.png" mode="scaleToFill" ></image>
				   </view>
			   </view>
			  <view class=" goodsBox-inner-right" >
				  <view class="top-box" @click="toGoodsDetail('ad')">
					  <image src="/static/top.png" mode="aspectFill"></image>
				  </view>
				  <view class="goodsBox-inner-right-box" v-for="(item,index) in goodsRightList " :key="index">
				  					 
									  <view class="goodsBox" @click="toGoodsDetail(item)">
				  						   <view class="goodsBox-img">
				  							   <image :src="item.goodsImg" mode="widthFix"></image>
				  						   </view>
				  						   <view class="goodsBox-title">
				  							   {{item.goodsName}}
				  						   </view>
				  						   <view class="goodsBox-discount-saleCount" >
				  							   <view class="goodsBox-discount">{{item.discount}}折价</view>
				  							   <view class="goodsBox-saleCount">月销 {{item.saleCount}}</view>
				  						   </view>
				  						   <view class="goodsBox-price">
				  						   	<text class="price-icon">￥</text>
				  							{{item.salePrice}}
				  							<text class="Oprice">￥{{item.marketPrice}}</text>
				  						   </view>
				  						   <view class="goodsBox-rank">
				  							   <image src="/static/cup.png" mode="scaleToFill"></image>
				  							   {{item.rank}}
				  						   </view>
				  					   </view>
				  </view>			   			
			   </view>
		   </view>
			
		</view>
		<view class="noGoods" v-else-if="!goodsList.length">
			<image src="/static/no-goods.png" mode="scaleToFill"></image>
			<p>商品正在火速上架中...</p>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				width: 0,
				height: 0,
				statusHeight: 0,
				color: '#6f9bc8',
				goodsList:[],
				goodsLeftList:[],
				goodsRightList:[],
				tabList: [{
						id: 0,
						title: '推荐',
						color: '#6f9bc8'
					},
					{
						id: 1,
						title: '数码',
						color: '#394fa8'
					},
					{
						id: 2,
						title: '女装',
						color: '#ff1966'
					},
					{
						id: 3,
						title: '男装',
						color: '#246995'
					},
					{
						id: 4,
						title: '家居',
						color: '#b69d7e'
					},
					{
						id: 5,
						title: '运动',
						color: '#ff651e'
					},
					{
						id: 6,
						title: '母婴',
						color: '#fd9cab'
					},
					{
						id: 7,
						title: '食品',
						color: '#69be68'
					},
					{
						id: 8,
						title: '宠物',
						color: '#83c8ef'
					},
					{
						id: 9,
						title: '鞋子',
						color: '#ff4d8d'
					},
					{
						id: 10,
						title: '饰品',
						color: '#a4171c'
					},



				]
			}
		},
		onLoad() {	
			this.getSystemdata()
			this.getList(0)
		},
		onShow() {
		},
		methods: {
			// 获取系统信息
			getSystemdata() {
				uni.getSystemInfo({
					success: res => {
						// console.log(res);
						this.width = res.windowWidth
						this.statusHeight = res.statusBarHeight
					}
				});
			},
			// 去搜索页
			toSearch(){
				uni.navigateTo({
					url:'/views/search/search'
				})
			},
			//去商品详情页
			toGoodsDetail(item){
				// console.log(item);
				if(item=='ad'){
					uni.$showMsg('广告位招租中......','none',2000)
				}else {
				uni.navigateTo({
					url:'/views/goods/goodsDetail?goodsId='+item.goodsId
				})
				}
				
			},
			//获取商品列表
			getList(item){				
				uni.request({
					url:"/api/getList",
					data:{
						"id":item
					},
					success:res=>{
						if(res.data==undefined) return
						let Allgoods=[]
						this.goodsList=res.data.goodsList
				        Allgoods.push(this.goodsList)
						uni.setStorageSync('Allgoods',Allgoods)
						console.log('Allgoods',Allgoods);
						this.goodsList.filter(v=>{
							if(v.flex=='left'){
								this.goodsLeftList.push(v)
							}else
							this.goodsRightList.push(v)						
							})
						// console.log(this.goodsLeftList);
						// console.log(this.goodsRightList);
					}
				})
				
			},
			//搜索框
			onClick(item) {
				// console.log(item);
				if (item == 'suffix') {
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择
						success: function(res) {
							uni.$showMsg('按图搜索功能待开发中......', 'none', 2000)
						},
						fail: function() {
							uni.$showMsg('您已取消授权', 'none', 2000)

						}
					});

				} else {
					uni.$showMsg('去搜索页面', 'none', 2000)
				}
			},
			//初始化商品列表
			init(){
				this.goodsList=[]
				this.goodsLeftList=[]
				this.goodsRightList=[]
			},
			//商品分类tabbar
			click(item, index) {
				this.activeIndex = index
                this.getList(index)
				this.init()

			},

		}
	}
</script>

<style scoped lang="scss">
	@import './index.scss'
</style>
