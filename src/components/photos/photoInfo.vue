<template>
  <div class="photoinfo-container" >
    <div  v-for="item in getPhotoInfoList" :key="item.title">
    <h3>{{item.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{item.add_time}}</span>
      <span>点击：{{item.click}}次</span>
    </p>
    
    <hr>


    <div class="thumbs">
      <img class="preview-img" >
    </div>


     <div class="content">{{item.zhaiyao}}</div>

    <cmt-box></cmt-box>
    </div>
  </div>
</template>

<script>

import common from "../subcomponents/common.vue";

export default {
  data() {
    return {
      getPhotoInfoList:[]
    };
  },
  created() {
    this.getPhotoInfo();

  },
  methods: {
     getPhotoInfo(){
       var result = '{"status":0,"message":[{"id":1,"title":"热销产品","add_time":"2015-04-16","zhaiyao":"的点点滴滴都好,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都,的点点滴滴都的点点滴滴都,","click":1,"img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"}]}';


      var result1 = JSON.parse(result)

      

      if(result1.status === 0){
        
        this.getPhotoInfoList = result1.message
        
      }else{
          Toast('数据加载失败');
      }
     }


  },

  components: {
    
    "cmt-box": common
  }

}


</script>









<style lang="scss" scoped>
  .photoinfo-container {
    padding: 3px;
    h3 {
      color: #26a2ff;
      font-size: 15px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }

    .content {
      font-size: 13px;
      line-height: 30px;
    }

    .thumbs{
      img{
        margin: 10px;
        box-shadow: 0 0 8px #999;
      }
    }
  }
  </style>
