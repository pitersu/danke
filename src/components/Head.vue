<template>
  <div class="hello">
    <img src="//public.danke.com.cn/public-20171231-FsRYcCtsOytIYH7C5nZCiLvaWQ1H" class="img">
    <div class="dw" @click="toggle">
      <i class="iconfont icon-dingweiweizhi"></i>
      <span >{{city}}</span>
      <i class="iconfont icon-arrowdown"></i>
    </div>
      <div class="city" v-show="flag">
        <ul>
          <li v-for="item in cities" :key="item.id" @click="changeCity(item.name)" >{{item.name}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data(){
    return{
      cities:[],
      flag:true
    }
  },
  created(){
      this.$axios.get("/dk/web-api/base-configure/city-list").then((res)=>{
        this.cities = res.data
      });
      this.city = sessionStorage.getItem("cityt")||"北京"
  },
  methods: {
    toggle(){
      this.flag=!this.flag;
    },
    changeCity(name){
         sessionStorage.setItem("cityt",name);
         location.reload();
    }
  },
}
</script>
<style  lang="scss" scoped>
  .hello{
    height: 0.88rem;
    width: 100%;
    background: #3dbcc6;
    position: relative;
  }
  .img{
    display: inline-block;
    width: 1.8rem;
    height: 0.38rem;
    position: absolute;
    left: 0.5rem;
    top: 0.2rem;
  }
  .dw{
    position: absolute;
    left: 2.5rem;
    top: 0.2rem;
    width: 1.28rem;
    height: 0.38rem;
    padding: 0rem 0.2rem;
    text-align: center;
    line-height: 0.38rem;
    font-size: 0.02rem;
    color: #3dbcc6;
    background: #fff;
    border: 0;
    border-radius: 0.19rem;
   
  }
  .city{
    position: absolute;
    top:0.6rem;
    left:2.5rem; 
    width: 1.44rem;
    height: 3.46rem;
    border: 0.02rem solid rgba(0,0,0,.15);
    box-shadow: 0 0.06rem 0.12rem rgba(0,0,0,.175);
    background: #fff;
  }
  .iconfont{
    font-size: 0.1rem;
  }
  .icon-dingweiweizhi{
    float: left;
  }
  .icon-arrowdown{
    float:right;
  }
  ul{
    padding: 0rem 0.2rem;
  }
</style>
