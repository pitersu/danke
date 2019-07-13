<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                <a :href="item.url"><img :src="item.image" alt=""></a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    data() {
        return {
            list:[]
        }
    },
    created(){
        this.$axios.get("/dk/web-api/home-page/banner",{
            params:{
                city_id:1
            },
        }).then((res)=>{
            // console.log(res)
            this.list=res.data;
        })
    },
    watch: {
        list(){
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    },
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
                })        
            })
        }
    },
}
</script>
<style scoped>
.swiper-container{
    width:100%;
    height:100%;
}
.swiper-container img{
    width:100%;
    height: 100%;
}
.swiper-pagination-bullet-active{
    background:#fff;
}


</style>
