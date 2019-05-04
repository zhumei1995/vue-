

import VueRouter from 'vue-router'

//导入路由模块组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'
import GoodsList from './components/goods/goodsList.vue'
import GoodsInfo from './components/goods/goodsinfo.vue'
import GoodsDesc from './components/goods/goodsDesc.vue'
import GoodsComment from './components/goods/goodsComment.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
  	{path: '/', redirect: '/home' },
  	{path: '/home', component: HomeContainer },
  	{path:'/member', component:MemberContainer},
  	{path:'/shopcar', component:ShopcarContainer},
  	{path:'/search', component:SearchContainer},
  	{path:'/home/newslist',component:NewsList},
  	{path:'/home/NewsInfo',component:NewsInfo},
    {path:'/home/photoList',component:PhotoList},
    {path:'/home/photoInfo',component:PhotoInfo},
    {path:'/home/goodsList',component:GoodsList},
    {path:'/home/goodsinfo',component:GoodsInfo},
    {path:'/home/goodsdesc',component:GoodsDesc,name:'Goodsdesc'},
    {path:'/home/goodscomment',component:GoodsComment,name:'Goodscomment'}


  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router