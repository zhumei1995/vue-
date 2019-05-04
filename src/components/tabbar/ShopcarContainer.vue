<template>
<div class="shopcar-container">
	<div class="goods-list">

		<div class="mui-card" v-for="(item, i) in goodslist" :key="item.url">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]"  @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554832295795&di=be185ecc66b4cd4568a3c5e91629c48c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F22%2F20120822155433_ZLnhS.jpeg">

						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="price">￥{{item.sell_price}}</span>

								<numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>

								<a href="#" @click.prevent="remove(item.id,i)">删除</a>

							</p>
						</div>
					</div>
				</div>
			</div>


		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="mui-card-content-inner jiesuan">
						<div class="left">
				              <p>总计（不含运费）</p>
				              <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件， 总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
			            </div>
				             <mt-button type="danger">去结算</mt-button>
					</div>
					</div>
				</div>
			</div>


	</div>



</div>
</template>





<script>

import {Toast} from 'mint-ui'
import numbox from "../subcomponents/shopCar_numbox.vue";

export default {
	data(){
		return{
			goodslist:[]
		};
	},
	created() {
	    this.getGoodsList();
	  },	
    methods:{
		getGoodsList() {
			var idArr = [];
			this.$store.state.car.forEach(item => idArr.push(item.id,item.title,item.sell_price));
			// 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
			if (idArr.length <= 0) {
			return;
			}
	      
	      var result = '{"status":0,"message":[{"id":1,"title":"华为（HUAWEI）荣耀16G4版双核","sell_price":2199,"thumb_path":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":2,"title":"华为（HUAWEI）荣耀16G4版双核","sell_price":2199,"thumb_path":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":3,"title":"华为（HUAWEI）荣耀16G4版双核","sell_price":2199,"thumb_path":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"}]}';

			var result1 = JSON.parse(result)

			if(result1.status === 0){
				
				this.goodslist = result1.message;
				
			}else{
				Toast('加载失败')
			}
	    },
	    remove(id,index){
	    	this.goodslist.splice(index,1);
	    	this.$store.commit('removeFromcar',id);
	    },
	    selectedChanged(id,value){
	    	this.$store.commit("updateGoodsSelected", { id, selected: value });
	    }


	},
	components:{
		numbox
	}




}
 


</script>




<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 55px;
      height:55px;

    }
    h1 {
      font-size: 13px;
      margin-bottom:10px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    padding:10px;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
    .left{
    	margin-right:5px;
    }
  }
}

</style>