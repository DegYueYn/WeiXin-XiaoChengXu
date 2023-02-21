<template>
	<view class="addAddress">
		<view class="consignee">
			<view class="consigneer">收货人</view>
			<view class="input">
				<input type="text" placeholder="收件人名称" v-model.trim="name" />
			</view>
		</view>
		<view class="consignee">
			<view class="consigneer">手机号码 </view>
			<view class="input ">
				<input type="number" placeholder="手机号" maxlength="11" v-model.trim="phone" />
				
			</view>
		</view>
		<view class="consignee">
			<view class="consigneer">所在地区 </view>
			<view class="input phoneNumber" @click="show_popup">
				<input type="text" disabled v-model="address" placeholder="省、市、区、街道"  />
				<image src="/static/address/address.png" mode="scaleToFill" ></image>
			</view>
		</view>
		<view class="consignee">
			<view class="consigneer">详细地址 </view>
			<view class="input ">
				<textarea  v-model.trim="addArea" placeholder="小区楼栋/乡村名称" />
			</view>
		</view>
		<view class="consigne">
			<view class="consigneer">设为默认收货地址 </view>
			<view >
				<u-switch space="2" v-model="value"  activeColor="#f9ae3d" size="50" inactiveColor="rgb(230, 230, 230)"></u-switch>
			</view>
		</view>
		<view class="del" v-if="index" >
			<view @click="delAddress(index)">删除该地址</view>
		</view>
		<view class="btn">
			<button plain type="default" style="border: none;" @click="saveAddress">保存地址</button>
		</view>
		<linkAddress
		        ref="linkAddress"
		        :height="height"
		        @confirmCallback="confirmCallback()"
				catchtouchmove="true"
		    >
		</linkAddress>

		
	</view>

</template>

<script>
	import linkAddress from './xuan-linkAddress/xuan-linkAddress.vue';
	import  {isMobile} from '@/utils/index.js';
	export default {
		components:{
		    linkAddress,
		},
		data() {
			return {
				value: false,
				name:'',
				phone:'',
				height:'',
				address:'',
				addArea:'',
				op:'',
				index:'',
				
			}
		},
		onLoad(e) {		
			// console.log(e.index);
			this.index=e.index
			
			if(e.item){
				// console.log(JSON.parse(e.item),'item');
				this.op = JSON.parse(e.item)
				this.name=this.op.name
				this.phone=this.op.phoneNumber
				this.address=this.op.address
				this.addArea=this.op.addArea
				this.value=this.op.isDefaultAddress
			}
			
			
		},
		methods: {
			isMobile,
			show_popup() {
				this.height = '750rpx';
			    this.$refs.linkAddress.show();
			    },
			 saveAddress(){			 
				if(!this.name || !this.address ||! this.addArea){
					uni.$showMsg('请注意检查每项是否必填？','none',2000)
					return
				}else if(!isMobile(this.phone)){
					uni.$showMsg('请正确填写手机号码','none',2000)
					return
				}
				if(this.index){
					let addressList =uni.getStorageSync("address")
					// console.log(addressList[this.index],'addressList');
					const addressInfo={
						"name":this.name,
						"phoneNumber":this.phone,
						"address":this.address,
						"addArea":this.addArea,
						"isDefaultAddress":this.value,
					}
					addressList.splice( this.index,1,addressInfo)
					uni.removeStorageSync('address')
					uni.setStorageSync('address',addressList)
					uni.$showMsg('修改成功','none',1000)
					setTimeout(()=>{
						uni.navigateTo({
							url:'/views/address/address'
						})
					},1500)				
				}else{
					// console.log(2);
					if(!this.value && !uni.getStorageSync("address")){
						uni.showModal({
							title:'是否将此地址设为默认地址？',
							icon:'none',
							success:res=>{
								if(res.confirm){
									this.value=true
								}
								const addressInfo=[{
									"name":this.name,
									"phoneNumber":this.phone,
									"address":this.address,
									"addArea":this.addArea,
									"isDefaultAddress":this.value,
								}]
								uni.setStorageSync('address',addressInfo)
								uni.$showMsg('保存成功','none',1000)
								setTimeout(()=>{
									uni.navigateTo({
										url:'/views/address/address'
									})
								},1500)															
							}
						})
					}
					if(uni.getStorageSync("address").length>0){
						const addressInfo={
							"name":this.name,
							"phoneNumber":this.phone,
							"address":this.address,
							"addArea":this.addArea,
							"isDefaultAddress":this.value,
						}
						let addressList =uni.getStorageSync("address")
						// console.log(addressList,'addressList1');
						addressList.push(addressInfo)
						uni.setStorageSync('address',addressList)
						uni.$showMsg('保存成功','none',1000)
						setTimeout(()=>{
							uni.navigateTo({
								url:'/views/address/address'
							})
						},1500)
					
					}
					
				}
				

								
			},
			delAddress(e){
				uni.showModal({
					title:'确定删除该地址吗?',
					icon:'none',
					success:res=>{
						if(res.confirm){
							let addressList =uni.getStorageSync("address")
							addressList.splice(e,1)
							console.log(addressList,'addressList');
							uni.setStorageSync('address',addressList)
							uni.$showMsg('删除成功','none',1000)
							setTimeout(()=>{
								uni.navigateTo({
									url:'/views/address/address'
								})
							},1500)
						}
					}
				})
				
				
				
			},

			confirmCallback(){
			let ad =uni.getStorageSync('commit_address')
			// console.log(ad,'ad');
			this.address=ad.province+''+ad.district+''+ad.city
			}
			

		}
	}
</script>

<style scoped lang="scss">
	.addAddress {
		background-color: white;

		.consignee {
			display: flex;
			align-items: center;
			margin: 20rpx;
			height: 100rpx;
			// background-color: cornflowerblue;
			.consigneer{
				width: 160rpx;
				font-weight: 600;
				// text-align: center;				
			}
			.input{
				background-color:#eeeeee;
				padding: 10rpx;
				margin-left: 20rpx;
				width: calc(100% - 200rpx);
				// border: 2rpx solid coral;
				border-radius: 10rpx;
				color: black;
				font-size: 26rpx;
				input{
					width: 90%;
					height: 30rpx;
					padding: 5rpx;
				}
				image{
					width: 30rpx;
					height: 30rpx;
				}
				textarea{
					height: 100rpx;
					width: 480rpx;
				}
				
			}
			.phoneNumber{
				display: flex;
				justify-content: space-between;
				align-items: center;
				
			}
		}
		
	.del{
		margin: 20rpx;
		width: 80%;
		text-align: center;
		line-height: 92rpx;
		background-color: #bdb7bc;
		margin: 0 auto;
		border-radius: 50rpx;
		margin-top: 50rpx;
		
	}
		.consigne{
			display: flex;
			align-items: center;
			justify-content: space-between;			
			margin: 20rpx;
			margin-top: 50rpx;
			font-weight: 600;
		}
		.btn{
			width: 80%;
			margin: 0 auto;
			margin-top: 80rpx;
			button{
				color: white;
				letter-spacing: 2rpx;
				border-radius: 100rpx;
				background-color: #FBDA61;
				background-image: linear-gradient(65deg, #FBDA61 0%, #FF5ACD 100%);

				
			}
		}
	}
</style>
