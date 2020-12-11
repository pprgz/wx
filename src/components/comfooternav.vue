
<template>
    <div class="footnav">
        <ul >
            <router-link to="/" active-class="active" tag="li" >
                <p >
                  <svg class="icon no" aria-hidden="true">
                    <use xlink:href="#iconhead2"></use>
                  </svg>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconshouye"></use>
                  </svg> 推荐</p>
            </router-link>
            <router-link to="/Rec" active-class="active" tag="li">
                <p><svg class="icon" aria-hidden="true">
        <use xlink:href="#iconpc-menpaio"></use>
                  </svg> 分类</p>
            </router-link>
            <router-link to="/cover" active-class="active" tag="li">
                <p><svg class="icon" aria-hidden="true">
        <use xlink:href="#iconfaxian"></use>
                  </svg>发现</p>
            </router-link>
            <router-link to="/message" active-class="active" tag="li">
                <p><svg class="icon" aria-hidden="true">
        <use xlink:href="#iconpinglun"></use>
                  </svg>消息</p>
            </router-link>
         <router-link to="/person" active-class="active" tag="li">
                <p><svg class="icon" aria-hidden="true">
        <use xlink:href="#iconperson"></use>
                  </svg>我的</p>
            </router-link>
        </ul>
    </div>
</template>

<script>

export default {
    //组件名字
  name: "comfooternav",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {

    color:{
        type: String,
        default:'#000'
    }
  },
  //组件注册
  components: {},
  // vue数据集中管理
  data() {
    return {
      value: "1",
    }
  },
  //方法 函数写这里
  methods: {

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
};
</script>

<style lang="scss" scoped >
p{
display: flex;
justify-items: center;
width: 60px;
position: relative;
.icon{
position: absolute;
text-align: center;
top: -16px;left: 6px;
}
}
.footnav {
  margin-top: 20px;
  margin-left: -20px;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    height: 40px;
    text-align: center;
    background: transform;
    color: #7a7e83;
    width: 100%;
    z-index: 1;
    ul {
        display: flex;
        align-items: center;
        li {
            flex: 1;
            height: 50px;
            &.active {
               color: red;
            }
            p {
                margin-top: 2px;
            }
            i {
                font-size: 20px;
            }
        }
    }
}
</style>


