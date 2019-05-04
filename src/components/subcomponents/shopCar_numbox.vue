<template>
	<div class="mui-numbox" data-numbox-min='1' style="height:25px;" >
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change="countChanged" readonly/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>

</template>



<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
		mounted(){
			mui(".mui-numbox").numbox();
		},
		methods:{
			countChanged(){
				this.$store.commit("updateGoodsInfo", {
			        id: this.goodsid,
			        count: this.$refs.numbox.value
			      });

		}

	},
	props: ["initcount", "goodsid"]

};

</script>


<style>



</style>