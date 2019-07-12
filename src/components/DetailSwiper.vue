<template>
  <div>
      <div class="swiper-container">
      <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in details" :key="item.id">
                <!-- <img v-for="(item2,index) in item.photos" :src="item2"  :key="index"/> -->
              <img :src="item.photos" alt="">
         </div>
    </div>
</div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
   data(){
    return{
        details:[]
    }
  },
   created(){
      this.$axios.get("http://localhost:3000/list").then((res)=>{
        this.details = res.data
         console.log(res.data.price)
      })
  },
  watch: {
    details(){//保证数据变了    保证dom 准备好了
    //使用nextTick 延迟回调函数
    this.$nextTick(()=>{
        var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
      },
  })       
    }) ;
    }
  },
}
</script>
<style lang="scss">
  .swiper-container {
  width: 100%;
  height: 5.625rem;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>