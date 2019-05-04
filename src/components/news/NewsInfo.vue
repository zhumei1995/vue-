<template>


	<div class="newsinfo-container" >
	    <div v-for="item in NewsInfo" :key="item.title">
	    <h3 class="title">{{item.title}}</h3>
	    
	    <p class="subtitle">
	      <span>发表时间：{{item.id_time}}</span>
	      <span>点击：{{item.click}}次</span>
	    </p>

	    <hr>
	    <div class="content" v-html="item.content">{{item.content}}</div>
	    </div>

	    <common-box>评论内容</common-box>
	</div>

</template>



<script>
	import { Toast } from "mint-ui";

	import common from "../subcomponents/common.vue";

	export default{
		data(){
			return{
				NewsInfo :[]
			};
		},
		created(){
			this.getNewsInfo();
		},
		methods:{
			getNewsInfo(){
			var result = '{"status":0,"message":[{"id":3,"title":"极度中文表弟","id_time":"2015-04-16","click":1,"content":"<p>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br></p>"}]}';

			var result1 = JSON.parse(result)
			console.log(result1)
		   if (result1.status === 0) {
	       	   this.NewsInfo = result1.message;
	       	   
	       	   
	       } else {
	       	   Toast("加载失败")
	       }

		}
	 },

	components: {
    "common-box": common
  }
};





</script>



<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}

</style>