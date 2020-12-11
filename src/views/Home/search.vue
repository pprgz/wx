<template>
<div>
<div class="search"  >
                  <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconsearch"></use>
                  </svg>
                  <input type="text" placeholder="搜索明星、演出、场馆" >
                </div>
<button @click="go()">取消</button>
<div>
<p> 搜索推荐</p>
</div>
</div>


</template>
<script>
export default {
data(){
},
 data() {
    return {
      value: "1"
    };
  },
  //方法 函数写这里
  methods: {
 go:function(){
     this.$router.go(-1);
        }
   },
 //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
      toUpcase(value) {
          return value ? value.toUpperCase():''
      },
  },
//以下是生命周期
//组件创建之前  new操作符桥梁函数return 之前
  beforeCreate() {

  },
  //组件创建之后
  created() {

  },
  //页面渲染之前
  beforeMount() {

  },
  //页面渲染之后
  mounted() {

  },
  //页面销毁之前
  beforeDestroy() {

  },
  //页面销毁之后
  destroyed() {

  },
  //页面视图数据更新之前
  beforeUpdate() {

  },
  //页面视图数据更新之后
  updated() {

  },
  //组件路由守卫enter
  beforeRouteEnter(to, from, next) {
    next(vm => {});
    // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
  },
   //组件路由守卫update更新
  beforeRouteUpdate(to, from, next) {
    // 同一页面，刷新不同数据时调用，
    next();
  },
//组件路由守卫离开
  beforeRouteLeave(to, from, next) {
    // 离开当前路由页面时调用
    next();
  }
}
</script>
<style lang="scss">
button{
padding-right: 50px;
float:right;
border: none;
background-color: transparent;
}
input{
border: none;
background-color: transparent;
}
</style>