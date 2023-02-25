<template>
	<view class="rootBox">
		<view :style="{height:statusHeight+'px',backgroundColor:color}">
			<view class="content" :style="{paddingTop:statusHeight + 'px'}">
				<uni-nav-bar left-icon="left" left-text="返回" @clickLeft="back"  style="fontSize: 20rpx;">

					<view class="input-view">
						<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
						<input confirm-type="search" v-model="word" class="nav-bar-input" type="text" placeholder="输入搜索关键词"
							@confirm="confirm" />
					</view>
					<!-- <template v-slot:left>
						<view class="city" @click="search">
							搜索
						</view>
					</template> -->
				</uni-nav-bar>
			</view>
		</view>
		<view class="searchWord">
			<view class="text" v-if="searchWord.length>0">
			<view>搜索发现</view>
			<view class="text2" @click="remove">清除搜索记录</view>
			</view>
			<view class="searchWordflexbox">
				<view class="searchWordfor" v-for="(i,idx) in searchWord" :key="idx">
					<view class="word" @click="getWord(i)">{{i}}</view>
				</view>
			</view>
		</view>
		<view class="GoodsBox" v-if="list.length>0">
			<view class="goodsBox-inner-left-box">
				<view class="goodsBox" @click="toGoodsDetail(item)" v-for="(item,index) in list " :key="index">
					<view class="goodsBox-img">
						<image :src="item.goodsImg" mode="widthFix"></image>
					</view>
					<view class="goodsBox-title">
						{{item.goodsName}}
					</view>
					<view class="goodsBox-discount-saleCount">
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
		<view class="noGoods" v-else-if="!list.length">
			<image src="/static/no-goods.png" mode="scaleToFill"></image>
			<p>≡(▔﹏▔)≡ &nbsp;这里什么都没有哦</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				word:'',
				statusHeight: 0,
				color: 'white',
				Allgoods: [],
				list: [],
				searchWord:[],
				// i:'',
				// j:'',
			}
		},
		onLoad() {
			this.getSystemdata()
			this.Allgoods = uni.getStorageSync('Allgoods')
			this.searchWord=uni.getStorageSync('searchWord')||[]

		},
		methods: {
			back() {
							uni.navigateBack({
								delta: 1
							})
						},
			getSystemdata() {
				uni.getSystemInfo({
					success: res => {
						console.log(res);
						this.width = res.windowWidth
						this.statusHeight = res.statusBarHeight
					}
				});
			},
			search(){
				this.confirm()
			},
			remove(){
			 this.searchWord=[]
			  uni.removeStorageSync('searchWord')	
			},
			confirm(e) {
				console.log('e', e.detail.value);
				this.searchWord.push(e.detail.value)
				this.searchWord=[...new Set(this.searchWord)]
				uni.setStorageSync('searchWord',this.searchWord)
				let Allgood = []
				this.list = []
				for (let i = 0; i < this.Allgoods.length; i++) {
					Allgood.push(this.Allgoods[i])
				}
				for (let i = 0; i < Allgood[0].length; i++) {

					if (Allgood[0][i].goodsName.indexOf(e.detail.value) > 0) {

						this.list.push(Allgood[0][i])
					}
				}
				console.log('list', this.list);
			},
			getWord(item){
				this.word=item
				let Allgood = []
				this.list = []
				for (let i = 0; i < this.Allgoods.length; i++) {
					Allgood.push(this.Allgoods[i])
				}
				for (let i = 0; i < Allgood[0].length; i++) {
				
					if (Allgood[0][i].goodsName.indexOf(item) > 0) {
				
						this.list.push(Allgood[0][i])
					}
				}
				
			},
			toGoodsDetail(item){				
				uni.navigateTo({
					url:'/views/goods/goodsDetail?goodsId='+item.goodsId
				})				
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		z-index: 9999;
	}
    .searchWord{
	margin-top: 110rpx;
	width: 98%;
	margin-left: 20rpx;
	.text{
		display: flex;
		font-size: 28rpx;
		.text2{
			font-size: 24rpx;
			background-color:#e99b00;
			color: white;
			padding: 7rpx;
			border-radius: 10rpx;
			margin-left: 100rpx;
		}
		
	}
	.searchWordflexbox{
		margin-top: 10rpx;
		display:flex;
		flex-wrap: wrap;
		.searchWordfor{
			margin-right: 20rpx;
			margin-bottom: 10rpx;
			.word{
				background-color:#e99b00;
				color: white;
				font-size: 24rpx;
				min-width: 50rpx;
				text-align: center;
				padding: 10rpx;
				border-radius: 10rpx;
			}
		}
	}
	}
	.noGoods {
		width: 100%;
		margin-top: 100rpx;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;

		image {
			margin-top: 70rpx;
			border-radius: 20rpx;
			width: 200rpx;
			height: 200rpx
		}

		p {
			margin-top: 50rpx;
			font-size: 30rpx;
			color: #55aaff;
		}
	}

	.GoodsBox {
		width: 98%;
		margin:0 auto;
		// background-color: cornflowerblue;
		// 
		
		.goodsBox-inner-left-box {
			margin-top: 40rpx;
			flex-wrap: wrap;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.goodsBox {
				width:49% ;
				background-color: #ffffff;
				border-radius: 10rpx;
				margin-bottom: 20rpx;

				.goodsBox-img {
					display: flex;
					align-items: center;
					justify-content: center;
					image {
						border-radius: 10rpx 10rpx 0 0;
						width: 100%;
						height: 300rpx;
					}
				}

				.goodsBox-title {
					font-size: 24rpx;
					margin-left: 20rpx;
					font-weight: 600;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.goodsBox-discount-saleCount {
					margin-top: 10rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.goodsBox-discount {
						width: 80rpx;
						text-align: center;
						margin-left: 20rpx;
						font-size: 20rpx;
						color: coral;

						font-weight: 600;
						background-color: white;
						border: 3rpx solid coral;
						letter-spacing: 3rpx;
						border-radius: 10rpx;
					}

					.goodsBox-saleCount {
						margin-right: 20rpx;
						font-size: 20rpx;
						color: gray;
						font-weight: 600;


					}
				}

				.goodsBox-price {
					margin-top: 5rpx;
					margin-left: 20rpx;
					color: coral;
					font-size: 39rpx;
					font-weight: 600;

					.price-icon {
						font-size: 24rpx;
					}

					.Oprice {
						color: grey;
						margin-left: 15rpx;
						font-size: 24rpx;
						text-decoration: line-through;
					}
				}

				.goodsBox-rank {
					margin-bottom: 20rpx;
					margin-left: 20rpx;
					margin-top: 10rpx;
					font-size: 20rpx;
					height: 30rpx;
					background-color: #ffffff;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #e99b00;
					width: 300rpx;
					border-radius: 5rpx;
					font-weight: 600;

					image {
						width: 30rpx;
						height: 30rpx;
					}
				}

			}
		}

		.bottom-box {
			width: 100%;
			margin-left: 10rpx;
			background-color: white;
			border-radius: 10rpx;

			image {
				width: 100%;
				height: 300rpx;
				border-radius: 10rpx;
			}
		}
	}

	.goodsBox-inner-right {
		height: 100%;
		width: 49%;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.top-box {
			width: 100%;
			margin-right: 10rpx;
			background-color: white;
			border-radius: 10rpx;
			margin-bottom: 10rpx;

			image {
				width: 100%;
				height: 280rpx;
				border-radius: 10rpx;
			}
		}

		.goodsBox-inner-right-box {
			background-color: white;
			margin-bottom: 10rpx;
			width: 100%;
			border-radius: 10rpx;

			.goodsBox {
				margin-top: 0;
				display: block;
				width: 100%;

				.goodsBox-img {
					width: 100%;

					image {
						border-radius: 10rpx 10rpx 0 0;
						width: 100%;
						height: 400rpx;

					}
				}

				.goodsBox-title {
					font-size: 24rpx;
					margin-left: 20rpx;
					font-weight: 600;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.goodsBox-discount-saleCount {
					margin-top: 10rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.goodsBox-discount {
						width: 80rpx;
						text-align: center;
						margin-left: 20rpx;
						font-size: 20rpx;
						color: coral;

						font-weight: 600;
						background-color: white;
						border: 3rpx solid coral;
						letter-spacing: 3rpx;
						border-radius: 10rpx;
					}

					.goodsBox-saleCount {
						margin-right: 20rpx;
						font-size: 20rpx;
						color: gray;
						font-weight: 600;

					}
				}

				.goodsBox-price {
					margin-top: 5rpx;
					margin-left: 20rpx;
					color: coral;
					font-size: 39rpx;
					font-weight: 600;

					.price-icon {
						font-size: 24rpx;

					}

					.Oprice {
						color: grey;
						margin-left: 15rpx;
						font-size: 24rpx;
						text-decoration: line-through;

					}
				}

				.goodsBox-rank {
					margin-bottom: 20rpx;
					margin-left: 20rpx;
					margin-top: 10rpx;
					font-size: 20rpx;
					height: 30rpx;
					background-color: #ffffff;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #e99b00;
					width: 300rpx;
					border-radius: 5rpx;
					font-weight: 600;

					image {
						width: 30rpx;
						height: 30rpx;

					}
				}

			}
		}

	}

	$nav-height: 30px;

	.box-bg {
		background-color: #F5F5F5;
		padding: 5px 0;
	}
   .uni-navbar-btn-text{
	   font-size: 20rpx;
   }
	.city {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		margin-left: 4px;
	}

	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		// width: 500rpx;
		flex: 1;
		background-color: #f8f8f8;
		height: $nav-height;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: $nav-height;
		margin-right: 10px;
	}

	.input-uni-icon {
		line-height: $nav-height;
	}

	.nav-bar-input {
		height: $nav-height;
		line-height: $nav-height;
		/* #ifdef APP-PLUS-NVUE */
		width: 370rpx;
		/* #endif */
		padding: 0 5px;
		font-size: 12px;
		background-color: #f8f8f8;
	}
</style>
<style>
	page {
		background-color: #f2f2f6;
	}
</style>
