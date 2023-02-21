<template>
	<view class="goodsDetail">
		<!-- 商品轮播区 -->
		<view class="goodsDetail-swiper">
			<u-swiper :list="list" indicatorActiveColor="red" indicatorInactiveColor="#ffffff" indicator="true"
				autoplay="false" height="750rpx" imgMode="scaleToFill"></u-swiper>
		</view>
		<!-- 商品价格区 -->
		<view class="goodsDetail-money">
			<view class="goodsDetail-money-tag">{{goodsInfo.tag}}</view>
			<view class="goodsDetail-money-money">
				<text>￥</text>
				{{Number(goodsInfo.salePrice).toFixed(2)}}
			</view>
			<view class="goodsDetail-money-Omoney">
				<text>￥</text>
				{{goodsInfo.marketPrice}}
			</view>
			<view class="goodsDetail-money-other">
				<view class="goodsDetail-money-other-text">热卖中</view>
				<view class="goodsDetail-money-other-time" v-if="time>0">
					<u-count-down :time="time" @change="onChange" format="HH:mm:ss">
						<view class="time">
							<view class="time__custom">
								<text
									class="time__custom__item">{{ timeData.hours>10?timeData.hours:'0'+timeData.hours}}</text>
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
		<!-- 商品标题区 -->
		<view class="goodsDetail-title">
			<view class="goodsDetail-title-title">
				<view class="title">
					{{goodsInfo.goodsName}}
				</view>
				<view class="title-tag">
					<view class="title-tag-box" v-for="(item,index) in tagList" :key="index">
						<view>{{item.tag}}</view>
					</view>

				</view>
			</view>
			<view class="goodsDetail-title-share">
				<view class="goodsDetail-title-share-icon">
					<image v-if="!change" @click="changeIcon" src="/static/goodsDetail/star.png" mode="scaleToFill">
					</image>
					<image v-else @click="changeIcon" src="/static/goodsDetail/star-success.png" mode="scaleToFill">
					</image>
					<image @click="showDialog" src="/static/goodsDetail/wechat.png" mode="aspectFit"></image>
				</view>
				<view class="goodsDetail-title-share-text">
					<text>收藏</text>
					<text>分享</text>
				</view>
			</view>
		</view>
		<view class="goodsDetail-bottom">
			<view class="text">图文详情</view>
			<view class="goodsDetail-bottom-box" v-for="(item,index) in list" :key="index">
				<image :src="item" mode="widthFix"></image>
			</view>
		</view>
		<view class="goodsDetail-btn">
			<view class="goodsDetail-btn-left" v-for="(item,index) in btnList" :key="index">
				<view class="img">
					<image :src="item.icon" mode="scaleToFill" @click="goWhere(item)"></image>
				</view>
				<view class="name">{{item.name}}</view>
			</view>
			<view class="kefu">
				<button type="default" plain open-type="contact" style=" border: none;">
					<image class="kefu" src="/static/goodsDetail/service.png"></image>
					
				</button>
				<view>客服</view>
				
			</view>
			<view class="goodsDetail-btn-right">
				<view class="add" @click="openselectItem('add')" >加入购物车</view>
				<view class="buy" @click="openselectItem('buy')" >立即购买</view>
			</view>
			
		</view>
		<!-- 加入购物车 -->
		<uni-popup class="pop" type="bottom"  ref="selectItem"  safeArea backgroundColor="#eee" catchtouchmove="true" >
			<view class="MoneyItem">
				<image :src="goodsInfo.goodsImg"></image>
				<view class="money" ><text>￥</text>{{Number(goodsInfo.marketPrice*number).toFixed(2)}}</view>
				<view class="money money2" ><text>折后￥</text>{{Number(goodsInfo.salePrice*number).toFixed(2)}}</view>
			    <view class="colseIcon" >
					<u-icon name="close-circle" size="20px" @click="closeselectItem"></u-icon>
				</view>
			</view>
			<view class="addAd" @click="toAddress">
				+增加收货地址
			</view>
			<view class="classifyText">分类</view>
			<view class="classify" >				
				<view class="classifyFlexbox" v-for="(item,index) in list" :key="index" >
					<view class="img"@click="chooseItem(item,index)" :class="Itemindex==index?'active':''" ><image :src="item" ></image></view>
				    <!-- <view>{{`${index+1}`}}</view> -->
				</view>
			</view>
			<text class="classifyText">尺码</text>
			<view class="size">
				<view class="sizeFlexbox" v-for="(item,index) in sizeList" :key="index">
					<button type="default" plain  @click="chooseSize(item,index)" :class="Sizeindex==index?'activeClass':''">{{item.title}}</button>
				</view>
				
			</view>
			<view class="num">
				<view class="num-text">数量</view>				
				<view class="num-button">
					<view class="desc" @click="descNumber">-</view>
					<view class="input"><input type="number" v-model="number" /> </view>
					<view class="add" @click="addNumber">+</view>
				</view>
				
			</view>
			<view class="remark">
				<view>备注:</view>
				<input type="text" v-model="note" placeholder="给卖家留言" />
			</view>
			
			<view class="buyBox">
				<view class="buyNow">立即支付￥{{Number(goodsInfo.salePrice*number)}}</view>
			</view>
			
			
		</uni-popup>
		<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
			<view class="share-box">
				<text>分享</text>
				<view class="share-box-icon">
					<button class="btn" open-type="share">
						<image class="img" src="/static/goodsDetail/wechat.png" mode="aspectFit"></image>
					</button>
					<button class="btn" @click.self="createGoodsPoster" @touchmove.prevent @mousewheel.prevent>
						<image class="img" src="/static/goodsDetail/download.png" mode="aspectFit"></image>
					</button>
				</view>
				<view class="share-box-text">
					<text>分享给好友</text>
					<text>本地保存</text>
				</view>
				<view class="exit" @click="hideDialog">取消</view>
			</view>

		</uni-popup>
		<view class="canvasBox" v-if="canvasImg" catchtouchmove="true">
			<view class="canvasItem">
				<image mode="widthFix" style="width:500rpx;height:500rpx" :src="canvasImg"></image>
			</view>
			<view class="btn">
				<view class="button" @click="onSaveImg">保存海报</view>
				<view class="button" @click="onExitImg">取消</view>
			</view>

		</view>
		<!-- 海报 -->
		<canvas class="f__canvas" style="width:600px;height:730px" canvas-id="firstCanvas" id="firstCanvas"></canvas>
		<!-- 二维码 -->
		<canvas class="f__canvas" style="width:300px;height:300px;" canvas-id="qrcode" id="qrcode"></canvas>


	</view>
</template>

<script>
	import _canvas from '@/uni_modules/fan-canvas/canvasUtils'; // 加载万能绘制方法
	import {
		saveImg,
		qrcodeCanvas
	} from '@/uni_modules/fan-canvas/plugins/utils'; // 需要保存图片和生成二维码可以引用此文件

	export default {

		data() {
			return {
				number:1,
				sizeList:[
					{title:'S【建议100斤以内】'},
					{title:'M【建议100-115斤】'},
					{title:'L【建议115-130斤】'},
					{title:'XL【建议130-140斤】'},
					{title:'XXL【建议140-160斤】'},				
				],
				Itemindex:0,
				Sizeindex:0,
				goodsImg: '',
				canvasImg: '', //生成的海报图片
				qrcodeImg: '', //二维码本地图片
				content: '', //内容
				textImg: '', //文本超出省略
				change: false,
				goodsInfo: [],
				list: [],
				timeData: {},
				time: '',
				btnList:[{
					icon:'/static/goodsDetail/store.png',
					name:'店铺'
				},{
					icon:'/static/goodsDetail/car.png',
					name:'购物车'
				}],
				tagList: [{
						'tag': '购买得积分'
					},
					{
						'tag': '首单免邮'
					},
					{
						'tag': '七天无理由退换'
					}
				]
			}
		},
		onReady() {
			this.createQrcode()
		},
		onLoad(op) {
			this.getDetail(op.goodsId)


		},
		methods: {
			descNumber(){
				if(this.number<=1)
				{uni.$showMsg('不能再少了','none',2000)}
				else{
					this.number--
				}
			},
			addNumber(){
				this.number++
				
			},
			toAddress(){
				uni.navigateTo({
					url:"/views/address/address"
				})
			},
			
			//购买或购物车按钮
			openselectItem(item){
				if(item=='buy'){
					this.$refs.selectItem.open()
					
				}
			},
			// 选择尺寸
			chooseSize(e,i){
				this.Sizeindex=i
				console.log('尺寸',e.title);
				
			},
			// 选择分类
			chooseItem(e,i){
				console.log('分类',e);
				this.goodsInfo.goodsImg=e
				this.Itemindex=i
				
			},
			// 关闭购买弹窗
			closeselectItem(){
				this.$refs.selectItem.close()
			},
			
			//底部购买栏按钮
			goWhere(item){
				console.log(item);
				if(item.name=='店铺'){
					uni.$showMsg('查看店铺功能开发中...','none',2000)
				}else if(item.name=='客服'){
					
				} else if(item.name=='购物车'){
					uni.$showMsg('去购物车页面','none',2000)
				}
			},

			
				//点击微信分享出现的dialog
			showDialog() {
				this.$refs.share.open()
			},
			hideDialog() {
				this.$refs.share.close()
			},
             //获取详情
			getDetail(item) {
				uni.request({
					url: '/api/goodsDetail',
					data: {
						"goodsId": Number(item)
					},
					success: res => {
						console.log(res.data.goodsDetail);
						if (res.data.code == 200) {
							this.goodsInfo = res.data.goodsDetail
							this.goodsImg = this.goodsInfo.goodsImg
							// console.log('goodsImg', this.goodsImg);
							this.time = this.goodsInfo.expirationTime * 1000 - Number(new Date()
								.getTime())
							for (let img in res.data.goodsDetail.goodsDetail) {
								this.list.push(res.data.goodsDetail.goodsDetail[img].img)

							}
							console.log(this.list);

						}
					}
				})
			},
			changeIcon() {
				this.change = !this.change
				uni.$showMsg(`${this.change?'收藏成功':'已取消收藏'}`, 'none', 2000)
			},
			//倒计时
			onChange(e) {
				this.timeData = e
				// console.log(e);
			},
			async createGoodsPoster() {
			
				
				this.hideDialog()
				if (this.canvasImg) {
					return
				}
				var that = this;
			
				uni.showLoading({
					title: '海报生成中'
				});
				const cvsW = 600;
				const cvsH = 730;
				const goodsH = 400;
				const logo_w = 100;
				const margin = 30;
				let family =
					" 'PingFang SC',tahoma,arial,'helvetica neue','hiragino sans gb','microsoft yahei',sans-serif";
				let ctx = uni.createCanvasContext('firstCanvas');
				// 绘制矩形
				_canvas.fillRoundRect(ctx, 0, 0, cvsW, cvsH, 20, "#ffffff");
				// 同步加载图片
				var logo = await _canvas.getImageInfo(that.goodsImg);
				if (logo.path) {
					// save+clip+restore:防止图片超出边框显示--相当于overflow: hidden;
					ctx.save();
					ctx.clip(); //剪切--不允许超出矩形框
					// 绘制商品图片
					_canvas.drawImgCover(ctx, logo, 0, 0, cvsW, goodsH);
					ctx.restore();
			
					// 价格符号
					// ctx.setFillStyle('#ff0036')
					// ctx.font = "24px" + family
					// ctx.fillText('￥', margin - 5, 450)
					// 价格
					// ctx.font = "30px" + family
					// ctx.fillText(`会员价:${this.goodsInfo.salePrice}`, 50, 450)
			
					// 绘制圆角按钮
					// 参数：cxt、背景颜色、x坐标、y坐标、宽度、高度、圆角、文字、文字颜色、文字位置
					ctx.font = '22px' + family
					_canvas.drawButton(ctx, 'red', 65, 418, 170, 52, 16, `会员价:${this.goodsInfo.salePrice}`, '#ffffff',
						'center')
					// 简介-多行文字
					ctx.setFillStyle('#666666')
					ctx.textAlign = 'left';
					var options = {
						font: "normal 26px" + family, //设置字体
						ctx: ctx,
						word: that.goodsInfo.goodsName, //文本
						maxWidth: 540, //最大宽度
						maxLine: 2, //最大行数--超出省略
						x: margin, //x坐标
						y: 450, //y坐标
						l_h: 40 //行高
					}
					
					// 文本自定义换行
					_canvas.dealWords(options)
					// 绘制圆形头像
					_canvas.drawCircular(ctx, logo.path, margin, goodsH + margin + 160, logo_w, logo_w);
					// 名称
					ctx.setFillStyle('#000000')
					ctx.font = "bold 26px" + family
					ctx.fillText(`${uni.getStorageSync('nickname')} 为您推荐`, logo_w + margin + 10, goodsH + margin + 195)
					// 简介
					ctx.setFillStyle('#999999')
					ctx.font = "normal 22px" + family
					ctx.fillText('快来和我一起看看吧！', logo_w + margin + 10, goodsH + margin + 235)
					// 绘制二维码
					ctx.drawImage(that.qrcodeImg, cvsW - margin - 150, goodsH + margin + 80 + 50, 150, 150);
					// 绘制图片
					ctx.draw(false, function() {
						uni.canvasToTempFilePath({
							width: cvsW,
							height: cvsH,
							canvasId: 'firstCanvas',
							success(res) {
								uni.hideLoading();
								that.canvasImg = res.tempFilePath;
			
							}
						}, that)
					}, 500)
				} else {
					uni.hideLoading();
					uni.showToast({
						title: '海报制作失败',
						icon: 'none'
					});
				}
			},
			// 保存图片
			async onSaveImg() {
				let imgUrl = "";
				if (this.canvasImg) {
					imgUrl = await this.canvasImg;
			
					saveImg(imgUrl)
				}
			},
			onExitImg() {
				this.canvasImg = ''
			},
			// 创建二维码
			createQrcode() {
				var that = this
				qrcodeCanvas('qrcode', 'https://www.baidu.com', 600, 600);
				const ctx = uni.createCanvasContext('qrcode');
				ctx.draw(true, function() {
					uni.canvasToTempFilePath({
						width: 600,
						height: 600,
						canvasId: 'qrcode',
						success(res) {
							// 二维码本地图
							that.qrcodeImg = res.tempFilePath
							// console.log(res, 'createQrcode')
						}
					}, that)
				})
			},

		}
	}
</script>

<style scoped lang="scss">
	.time {
		margin-top: 20rpx;
		@include flex;
		align-items: center;

		&__custom {
			margin-top: 4px;
			width: 22px;
			height: 22px;
			// background-color: $u-primary;
			background-color: black;
			border-radius: 4px;
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
			color: white;
			padding: 0px 4px;
		}

		&__item {
			color: #606266;
			font-size: 15px;
			margin-right: 4px;
		}
	}

	.f__canvas {
		width: 300rpx;
		height: 300rpx;
		position: fixed;
		top: -10000rpx;
		left: 0rpx;
	}

	.canvasBox {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100vw;
		height: 100vh;
		background-color: rgba(159, 163, 169, .8);




		.canvasItem {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			margin-top: 200rpx;
			justify-content: center;

			.img {

				width: 100%;
				z-index: 99999;
			}
		}

		.btn {
			width: 600rpx;
			margin: 0 auto;
			display: flex;
			justify-content: center;

			.button {
				width: 200rpx;
				height: 80rpx;
				background: #fff;
				line-height: 80rpx;
				text-align: center;
			 font-size: 28rpx;
				border-radius: 40rpx;
				margin: 0 auto;
				margin-top: 20rpx;
			}

		}

	}

	@import './goodsDetail.scss'
</style>
