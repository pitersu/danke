<template>
    <div class="swiper-container3">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in lists2" :key="index" @click="godetail(item.room_id)">
                <img :src="item.image" alt="">
                <div class="hezu-list" >
                    <div class="local-list"><p>{{item.title}}</p></div>
                    <label><b>{{item.image_title}}</b> 元 / 月</label> 
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
            lists2:[]
        }
    },
    created() {
        this.$axios.get("/dk/web-api/home-page/home-data",{
            params:{
                city_id:1
            }
        }).then((res)=>{
            this.lists2=res.data[4].data;
            // console.log(res)
        })
    },
    watch: {
        lists2(){
            this.$nextTick(()=>{
                var mySwiper3 = new Swiper('.swiper-container3',{
                    slidesPerView : 1.8,
                    spaceBetween : 50, 
                    //spaceBetween : '10%',按container的百分比
                })       
            })
        }
    },
     methods: {
         godetail(id){//到详情页面
        this.$router.push('/detail/'+id)//编程式导航方式跳转
            },
    },
}
</script>
<style lang="scss" scoped>

img{
    width: 4rem;
    height: 2.95rem;
}
.hezu-list{
    width: 4rem;
    height: 0.8rem;
    .local-list{
        height: 0.4rem;
        width: 4rem;
        p{
            white-space: nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
            font-size:0.28rem;
        }
    }
    label{
        color:#999;
        b{
            color: #ff7966;
            font-weight: 700;
            font-size:0.28rem;

        }
    }
}
</style>
