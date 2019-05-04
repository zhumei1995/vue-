<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.url">
				<router-link to='/home/NewsInfo'>
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h3>{{item.title}}</h3>
						<p class='mui-ellipsis'>
						    <span>发表时间：{{item.id_time}}</span>
	              			<span>点击：{{item.click}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>

</template>



<script>
	
	import { Toast } from "mint-ui";

	export default {
	  data() {
	    return {
	      newslist: [] // 新闻列表
	    };
	  },
	  created() {
	    this.getNewsList();
	  },
	  methods: {
	    getNewsList() {
	      var result = '{"status":0,"message":[{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":0,"title":"1季度多家房产暴跌50%，去库存促销战打响","id_time":"2015-11-12 12:12:12","zhaiyao":"1季度多家房产暴跌50%，去库存促销战打响","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"}]}';

	       var result1 = JSON.parse(result);

	       if (result1.status === 0) {
	       	   this.newslist = result1.message;

	       	   
	       } else {
	       	   Toast("加载失败")
	       }
	    }
	  }
	};







</script>



<style lang="scss" scoped>
.mui-table-view{
	li{
		h3{
			font-size:14px;
		}
		.mui-ellipsis{
			font-size:12px;
			color:blue;
			display:flex;
			justify-content: space-between;
		}
	}
}



</style>