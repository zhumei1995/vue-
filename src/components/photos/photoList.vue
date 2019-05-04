<template>
	<div>
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">

						<a class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in caseList" :key="item.url" >
							{{item.title}}
						</a>

					</div>
				</div>
			</div>

           



			<router-link class="photo-list" to="/home/PhotoInfo">
				<li v-for="item in PhotoList">
					<img v-lazy="item.img_url" >
					<div class="info">
						<h1 class="info-title">{{ item.title }}</h1>
						<div class="info-body">{{ item.zhaiyao }}</div>
					</div>
				</li>
			</router-link>

	</div>
</template>


<script>


import mui from '../../lib/mui/js/mui.min.js'
import { Toast } from "mint-ui";




export default {
  data() {
    return {
      caseList:[],
      PhotoList:[]
    };
  },

  mounted() {

    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 
    });
  },

  created(){
  	this.getcase();
  	this.getPhotoList();
  },
  methods: { 
  	getcase(){
  		var result = '{"status":0,"message":[{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"}]}';


  		var result1 = JSON.parse(result)

  		if(result1.status === 0){
  			result1.message.unshift({ title: "全部", id: 0 });
  			this.caseList = result1.message
  			
  		}else{
  		    Toast('数据加载失败');
  		}
  	},

  	getPhotoList(){
  		var result = '{"status":0,"message":[{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"},{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"}]}';

  		 var result1 = JSON.parse(result)

  		 if(result1.status === 0){
  		 	this.PhotoList=result1.message
  		 }else{
  		 	Toast('加载数据失败')
  		 }





  	}





  }
};

</script>


<style lang="scss" scoped>
* {
  touch-action: pan-y;
}


.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
      }
   }
  }



</style>