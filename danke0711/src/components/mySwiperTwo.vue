<template>
    <div class="swiper-container1">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in lists" :key="index">
                <img :src="item.image" alt="">
                <div class="sqlist-text" >
                    <label>{{item.title}}</label>
                    <span>{{item.sub_title}}</span>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    data() {
        return {
            lists:[]
        }
    },
    created() {
        this.$axios.get("/dk/web-api/home-page/home-data",{
            params:{
                city_id:1
            }
        }).then((res)=>{
            this.lists=res.data[1].data;
            // console.log(this.lists)
        })
    },
    watch: {
        lists(){
            this.$nextTick(()=>{
                var mySwiper1 = new Swiper('.swiper-container1',{
                    slidesPerView : 2.8,
                    spaceBetween : 110, 
                    //spaceBetween : '10%',按container的百分比
                })       
            })
        }
    },
    mounted() {
        
    },
}
</script>
<style lang="scss" scoped>
    img{
        width: 2.8rem;
        height: 1.56rem;
    }
    .swiper-slide{
        position:relative;
    }
    .sqlist-text{
        width:2.8rem;
        position: absolute;
        bottom:0;
        background: #000;
        opacity: .7;
        height: 0.4rem;
        white-space: nowarp;
        label{
            // float: left;
            color: #fff;
            line-height: 0.4rem;
            padding-left: 0.01rem;
            font-size: 0.3rem;
        }
        span{
            padding: 0.15rem 0 0 0.15rem;
            line-height: 0.25rem;
            font-size: 0.08rem;
            color: #fff;
        }
    }

</style>
