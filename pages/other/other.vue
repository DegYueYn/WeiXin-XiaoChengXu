<template>
	<view class="content">

		
		<view class="titleBtn" @click="createGoodsPoster">绘制海报</view>
		<view class="canvasBox" v-if="canvasImg">
		    <view class="canvasItem">
		        <image mode="widthFix" style="width:500rpx;height:500rpx" :src="canvasImg"></image>
		    </view>
		    <view class="button" @click="onSaveImg">保存海报</view>
		</view>
		<!-- 海报 -->
		<canvas class="f__canvas" style="width:600px;height:730px"  canvas-id="firstCanvas" id="firstCanvas"></canvas>
		<!-- 二维码 -->
		<canvas class="f__canvas" style="width:300px;height:300px;" canvas-id="qrcode" id="qrcode"></canvas>
	</view>
</template>

<script>
	import _canvas from '@/uni_modules/fan-canvas/canvasUtils';// 加载万能绘制方法
	import { saveImg,qrcodeCanvas } from '@/uni_modules/fan-canvas/plugins/utils';// 需要保存图片和生成二维码可以引用此文件
	export default {
		data() {
			return {
			    // #ifndef H5
			    goodsImg:'https://img02.163.gg/img/96/66/75/966675-ieuskndmvo.jpg!YM0000',
			    // goodsImg:'https://api.yichengshi.cn/minImage/sx2/sx2IndexHeadBg.jpg',
			    // #endif
			    // #ifdef H5
			    // goodsImg:'/static/goods.jpg',
			    // #endif
			    
			    canvasImg:'',    //生成的海报图片
			    qrcodeImg:'',    //二维码本地图片
			    content:'canvas万能制作方法，新手简单入手，易学，一天掌握canvas制作。绘制矩形方法、加载图片方法、绘制圆形头像方法、绘制图片cover不变形、文本自定义换行超出省略、绘制圆角按钮等方法。组合起来用，基本海报都能绘制。',   //内容
				textImg:'',      //文本超出省略
			}
		},
		onLoad() {

		},
		onReady() {
		    this.createQrcode()
		},
		methods: {
			async createGoodsPoster() {
			    if(this.canvasImg){
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
				let family = " 'PingFang SC',tahoma,arial,'helvetica neue','hiragino sans gb','microsoft yahei',sans-serif";
				let ctx = uni.createCanvasContext('firstCanvas');
			    // 绘制矩形
				_canvas.fillRoundRect(ctx,0,0,cvsW,cvsH,20,"#ffffff");
			    // 同步加载图片
				var logo = await _canvas.getImageInfo(this.goodsImg);
				if(logo.path){
			        // save+clip+restore:防止图片超出边框显示--相当于overflow: hidden;
			        ctx.save();
			        ctx.clip(); //剪切--不允许超出矩形框
			        // 绘制商品图片
			        _canvas.drawImgCover(ctx, logo, 0, 0, cvsW, goodsH);
			        ctx.restore();
			        
			        // 价格符号
			        ctx.setFillStyle('#ff0036')
			        ctx.font = "24px" + family
			        ctx.fillText('￥', margin-5, 450)
			        // 价格
			        ctx.font = "40px" + family
			        ctx.fillText('39.99', 50, 450)
			        
			        // 绘制圆角按钮
			        // 参数：cxt、背景颜色、x坐标、y坐标、宽度、高度、圆角、文字、文字颜色、文字位置
			        ctx.font = '22px' + family
			        _canvas.drawButton(ctx, 'red', 165, 418, 170, 32, 16, '会员价￥29.99', '#ffffff', 'center')
			        // 简介-多行文字
					ctx.setFillStyle('#666666')
			        ctx.textAlign = 'left';
					var options = {
						font:"normal 26px"+family,     //设置字体
						ctx:ctx,
						word:that.content,      //文本
						maxWidth:540,           //最大宽度
						maxLine:2,              //最大行数--超出省略
						x:margin,               //x坐标
						y:450,                  //y坐标
						l_h:40                  //行高
					}
			        // 文本自定义换行
					_canvas.dealWords(options)
			        // 绘制圆形头像
			        _canvas.drawCircular(ctx, logo.path, margin, goodsH+margin+160, logo_w, logo_w);
			        // 名称
			        ctx.setFillStyle('#000000')
			        ctx.font = "bold 26px" + family
			        ctx.fillText('创作者：Aa.小凡', logo_w+margin+10, goodsH+margin+195)
			        // 简介
			        ctx.setFillStyle('#999999')
			        ctx.font = "normal 22px" + family
			        ctx.fillText('所有方法融合一起实战', logo_w+margin+10, goodsH+margin+235)
			        // 绘制二维码
			        ctx.drawImage(that.qrcodeImg, cvsW-margin-150, goodsH+margin+80+50, 150, 150);
			        // 绘制图片
					ctx.draw(false, function() {
						uni.canvasToTempFilePath({
							width: cvsW,
							height: cvsH,
							canvasId: 'firstCanvas',
							success(res) {
								uni.hideLoading();
								that.canvasImg = res.tempFilePath
							}
						},that)
					}, 500)
				}else{
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
				if(this.canvasImg){
					imgUrl = await this.canvasImg;
			        saveImg(imgUrl)
				}
			},
			// 创建二维码
			createQrcode(){
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
			                console.log(res,'createQrcode')
			            }
			        },that)
			    })
			}

		}
	}
</script>

<style lang="scss" scoped>
.content{
    padding-bottom: 200rpx;
}
.titleBtn{
    margin: 24rpx;
    width: 702rpx;
    padding: 20rpx 24rpx;
    background-color: #007AFF;
    color: #fff;
    font-size: 24rpx;
    text-align: center;
}
.f__canvas {
	width: 300rpx;
	height: 300rpx;
	position: fixed;
	top: -10000rpx;
	left: 0rpx;
}
.canvasBox{
    .canvasItem {
		border: 2rpx solid black;
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        justify-content: center;
        .img {
            width: 100%;
        }
    }
    .button {
        width: 300rpx;
        height: 80rpx;
        background: #fff;
        line-height: 80rpx;
        text-align: center;
        font-size: 28rpx;
        border-radius: 40rpx;
		border: 2rpx solid black;
        margin: 0 auto;
        margin-top: 20rpx;
    }
}
</style>

