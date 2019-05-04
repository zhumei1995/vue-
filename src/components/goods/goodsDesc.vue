<template>
  <div class="goodsdesc-container">
    <h3>{{ info[0].title }}</h3>

    <hr>

    <div class="content" v-html="info[0].content"></div>

    <img :src="info[0].img_url">
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: []
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      var result = '{"status":0,"message":[{"id":3,"title":"极度中文表弟","id_time":"2015-04-16","click":1,"content":"<p>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br>极度中文表弟极度中文表弟极度中文表弟极度中文表弟极度中文表弟</br></p>","img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg"}]}';

			var result1 = JSON.parse(result)

		   if (result1.status === 0) {
	       	   this.info = result1.message;
	       	  
	       } else {
	       	   Toast("加载失败")
	       }

    }
  }
};
</script>

<style lang="scss">
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
     }
  }
}
</style>
