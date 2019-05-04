<template>
	<div>
	<!-- 轮播图区域 -->
 	<swipe :lunbotuList="lunbotuList" :isfull="true"></swipe>

    <!-- 九宫格 到 6宫格 的改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 ">
	    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    <router-link to="/home/newslist">
		            <img src="../../images/menu1.png" alt="">
		            <div class="mui-media-body">新闻资讯</div>
		     </router-link>
	  	</li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	    		<router-link to="/home/photoList">
		            <img src="../../images/menu2.png" alt="">
		            <div class="mui-media-body">图片分享</div>
	            </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	         <router-link to="/home/goodsList">
	            <img src="../../images/menu3.png" alt="">
	            <div class="mui-media-body">商品购买</div>
	          </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	            <img src="../../images/menu4.png" alt="">
	            <div class="mui-media-body">留言反馈</div></a></li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	            <img src="../../images/menu5.png" alt="">
	            <div class="mui-media-body">极品专区</div></a></li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	            <img src="../../images/menu6.png" alt="">
	            <div class="mui-media-body">联系我们</div></a></li>
	</ul> 
    </div>
</template>





<script>

	import { Toast } from "mint-ui";
	import swipe from "../subcomponents/swipe.vue"

	export default {
	  data() {
	    return {
	      lunbotuList: [] 
	    };
	  },
	  created() {
	    this.getLunbotu();
	  },
	  methods: {
	    getLunbotu() {
	       var result = '{"status":0,"message":[{"id":3,"title":"极度中文表弟","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":14,"title":"得i地点","add_time":"2015-03-16","zhaiyao":"的点点二五五都好","click":1,"img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554832295795&di=be185ecc66b4cd4568a3c5e91629c48c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F22%2F20120822155433_ZLnhS.jpeg"}]}';

	       result = JSON.parse(result);

	       if (result.status === 0) {
	       	   this.lunbotuList = result.message;
	       	   
	       } else {
	       	   Toast("加载失败")
	       }
	    }
	  },
	  components:{
	  	swipe
	  }
	};


</script>




<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body{
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}


</style>