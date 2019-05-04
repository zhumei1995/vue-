<template>
  <div class="goods-list">
    
    <div class="goods-item" v-for="item in goodsLsit" :key="item.url"  @click="getDetail()" >
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    
   

    <mt-button type="danger" size="large" >加载更多</mt-button>
  </div>
</template>

<script>

	import { Toast } from "mint-ui";


	export default{
		data(){
			return{
				goodsLsit :[]
			};
		},
		created(){
			this.getgoodsLsit();
		},
		methods:{
			getgoodsLsit(){
			var result = '{"status":0,"message":[{"id":1,"title":"小米（Mi）小米Note 16G双网通版","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"sell_price":2195,"market_price":2499,"stock_quantity":5000,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":2,"title":"小米（Mi）小米Note 16G双网通版","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"sell_price":2195,"market_price":2499,"stock_quantity":5000,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":3,"title":"小米（Mi）小米Note 16G双网通版","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"sell_price":2195,"market_price":2499,"stock_quantity":5000,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":4,"title":"小米（Mi）小米Note 16G双网通版","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"sell_price":2195,"market_price":2499,"stock_quantity":5000,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":5,"title":"小米（Mi）小米Note 16G双网通版","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"sell_price":2195,"market_price":2499,"stock_quantity":5000,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":6,"title":"小米（Mi）小米Note 16G双网通版","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"sell_price":2195,"market_price":2499,"stock_quantity":5000,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"}]}';

			var result1 = JSON.parse(result)
			
		   if (result1.status === 0) {
	       	   this.goodsLsit = result1.message;
	       	   
	       	   
	       } else {
	       	   Toast("加载失败")
	       }

		},

    getDetail(){
    	 this.$router.push({ path: "/home/goodsinfo/" });




    }



	 }

	
};




</script>

<style lang="scss" scoped>
	.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 260px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }

    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
