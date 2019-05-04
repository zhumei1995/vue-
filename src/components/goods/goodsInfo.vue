<template>
 <div class="goodsinfo-container">
       
       <transition
       @before-enter="beforeEnter"
       @enter="Enter"
       @after-enter="afterEnter">
       		<div class="ball" v-show="ballFlag" ref="ball"></div>
       </transition>


		<div class="mui-card" >
			<swipe :lunbotuList="lunbotuList" :isfull="true"></swipe>
		</div>
		<div class="mui-card" v-for="item in goodsLsit" :key="item.url">
			<div class="mui-card-header">商品名称标题</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价：<del>￥{{item.market_price}}</del>&nbsp;&nbsp;<span class="now_price">￥{{item.sell_price}}</span>
					</p>
					<p>购买数量：<numBox @getCount="getselectCount" :max="goodsLsit[0].stock_quantity"></numBox></p>
					<p>
					<mt-button type="primary" size="small">立即购买</mt-button>
					<mt-button type="danger" size="small" @click="addToShopCar()" >加入购物车</mt-button>

					</p>
				</div>
			</div>
		</div6
		<div class="mui-card" v-for="item in goodsLsit" :key="item.url">
			<div class="mui-card-header">{{item.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{item.goods_no}}</p>
					<p>库存情况：{{item.stock_quantity}}</p>
					<p>上架时间：{{item.add_time}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="goDesc()">图文介绍</mt-button>
				<mt-button type="danger" size="large" plain @click="goComment()">商品评论</mt-button>
			</div>
		</div>

 </div>
	


</template>



<script>
	import { Toast } from "mint-ui";
	import swipe from "../subcomponents/swipe.vue"
	import numBox from "../subcomponents/goodsinfo_numBox.vue"


	export default {
		data(){
		   return{
		   		lunbotuList:[],
		   		goodsLsit:[],
		   		ballFlag:false,
		   		selectedCount:1
		   };
		},

		created(){
			this.getLunbotu();
			this.getGoodsinfo();
		},
		methods:{
		   getLunbotu(){
		   	var result = '{"status":0,"message":[{"id":3,"title":"极度中文表弟","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":14,"title":"得i地点","add_time":"2015-03-16","zhaiyao":"的点点二五五都好","click":1,"img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554832295795&di=be185ecc66b4cd4568a3c5e91629c48c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F22%2F20120822155433_ZLnhS.jpeg"}]}';

		   	var results = JSON.parse(result)

		   	if(results.status === 0){
		   		this.lunbotuList = results.message	
		   	   Toast('加载成功');
		   	}else{
		   		Toast('加载失败')
		   	}

		   },

		   getGoodsinfo(){
		   		var result = '{"status":0,"message":[{"id":1,"title":"小米（Mi）小米Note 16G双网通版","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"stock_quantity":50,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg","goods_no":"sd1353647","sell_price":2195,"market_price":2499}]}';
		   		var result1 = JSON.parse(result)

			   if (result1.status === 0) {
		       	   this.goodsLsit = result1.message;
		       } else {
		       	   Toast("加载失败")
		       }
		   },
		   goDesc(){
		   		this.$router.push({name:"Goodsdesc"})
		   },
		   goComment(){
		   		this.$router.push({name:"Goodscomment"})
		   },
		   addToShopCar(){
		   		this.ballFlag=!this.ballFlag;
		   		var goodsinfo={
		   			id:this.goodsLsit[0].id,
		   			count:this.selectedCount,
		   			sell_price:this.goodsLsit[0].sell_price,
		   			selected:true,
		   			title:this.goodsLsit[0].title
		   		}

		   		this.$store.commit('addToCar',goodsinfo);
		   },
		   beforeEnter(el){
		   		el.style.transform="translate(0,0)"
		   },
		   Enter(el,done){
		   		el.offsetWidth;

		   		const ballPosition = this.$refs.ball.getBoundingClientRect();
		   		const badgePosition = document.getElementById("badge").getBoundingClientRect();
		   		const xDist = badgePosition.left - ballPosition.left;
		   		const yDist = badgePosition.top - ballPosition.top;

		   		el.style.transform=`translate(${xDist}px,${yDist}px)`;
		   		el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
		   		done();
		   },
		   afterEnter(el){
		   		this.ballFlag=!this.ballFlag;
		   },
		   getselectCount(count){
				this.selectedCount = count;
				
			}
		},
		
		components:{
			swipe,
			numBox
		}



	}




</script>




<style lang="scss" scoped>
.goodsinfo-container{
	background-color: #eee;
    overflow: hidden;

    .now_price {
	    color: red;
	    font-size: 16px;
	    font-weight: bold;
  }
	.mui-card-footer{
		display:block;
		button {
	      margin: 15px 0;
	    }
	}
	.ball{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		z-index: 99;
		top: 360px;
		left: 146px;
	}
}

</style>