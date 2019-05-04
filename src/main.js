// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)


//导入vuex
import Vuex from 'vuex'
//安装
Vue.use(Vuex)


var car = JSON.parse(localStorage.getItem('car') || '[]')

//注册
var store = new Vuex.Store({
	state:{//调用方法：this.$store.state.***
		car:car//存放购物车数据：{id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false
		
	},
	mutations:{//调用方法：this.$store.commit('方法名'，唯一的参数)
		addToCar(state,goodsinfo){
			//分两种状况：1，如果已经加入过购物车，只需改变数量即可
			//2.未加入购物车的加入即可
		var flag = false
		state.car.some(item => {
		        if (item.id == goodsinfo.id) {
		          item.count += parseInt(goodsinfo.count)
		          flag = true
		          return true
		        }
      		})
				if(!flag){
					state.car.push(goodsinfo)
				}
			localStorage.setItem('car',JSON.stringify(state.car))
		},
		updateGoodsInfo(state,goodsinfo){
			//修改购物车中商品的数量值
			state.car.some(item => {
		        if (item.id == goodsinfo.id) {
		          item.count = parseInt(goodsinfo.count)
		          return true
		        }
		      })
		      // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
		      localStorage.setItem('car', JSON.stringify(state.car))
		},
		removeFromcar(state,id){
			//根据id从store中的购物车中删除数据
			state.car.some((item, i) => {
		        if (item.id == id) {
		          state.car.splice(i, 1)
		          return true;
		        }
		      })
		      // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
		      localStorage.setItem('car', JSON.stringify(state.car))
		},
	    updateGoodsSelected(state, info) {
		      state.car.some(item => {
		        if (item.id == info.id) {
		          item.selected = info.selected
		        }
		      })
		      // 把最新的 所有购物车商品的状态保存到 store 中去
		      localStorage.setItem('car', JSON.stringify(state.car))
		    }
	},
	getters:{//调用方法：this.$store.getters.***
		getAllCount(state) {
			var c = 0;
			state.car.forEach(item => {
			c += item.count
			})
			return c
		}, 
		getGoodsCount(state){
			var o = {}
			state.car.forEach(item => {
		        o[item.id] = item.count
		      })
		      return o
		},
	    getGoodsSelected(state) {
		      var o = {}
		      state.car.forEach(item => {
		        o[item.id] = item.selected
		      })
		      return o
		},
		getGoodsCountAndAmount(state) {
	      var o = {
	        count: 0, // 勾选的数量
	        amount: 0 // 勾选的总价
	      }
	      state.car.forEach(item => {
	        if (item.selected) {
	          o.count += item.count
	          o.amount += item.sell_price * item.count
	        }
	      })
	      return o
	    }
		
	}
});


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-UI 中的组件   
/*import { Header, Swipe, SwipeItem,Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload)*/

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router, // 1.4 挂载路由对象到 VM 实例上
  store//挂载
})