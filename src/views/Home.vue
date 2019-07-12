<template>
  <div class="home" ref="home" v-scroll dis="1725">
    <homehead />
    <div class="title-bg">
      <div class="title">
        <div class="form_bg">
          <img src="//public.danke.com.cn/public-20171228-FjTtnKSKO0QnS4PiivwOHIMZslgq" />
          <input
            type="text"
            name="search_text"
            class="form-control input"
            placeholder="输入您想住的区域，商圈或小区名称"
            value
            autocomplete="off"
          />
        </div>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="swiper">
      <mySwiper></mySwiper>
    </div>
    <!-- 返回顶部 -->
    <div class="go-top" @click="gotop">
      <img src="//public.danke.com.cn/public-20180102-Fgc87boN1vQeXEd7Lbwv_w1vj-AD" alt />
    </div>
    <!-- 选择列表 -->
    <div class="list">
      <ul>
        <li>
          <router-link to="/share">
            <img src="https://public.danke.com.cn/public-20180319-Fv-CS5LQX0-HuOrLTN_0xPELxwfL" alt />
            <span>合租</span>
          </router-link>
        </li>
        <li>
          <router-link to="/zmkm">
            <img src="https://public.danke.com.cn/public-20180319-FpCn5y1oJiqxcN3oyQdIgXaDh2oA" alt />
            <span>整租</span>
          </router-link>
        </li>
        <li>
          <router-link to="/join">
            <img src="https://public.danke.com.cn/public-20180319-FtStiZtciRuNxrVVNqwhmh8KSYhD" alt />
            <span>业主加盟</span>
          </router-link>
        </li>
        <li>
          <router-link to="custom">
            <img src="https://public.danke.com.cn/public-20181204-FopgEsrtTlQ528ELuxmxN4CRXx-6" alt />
            <span>房源定制</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 我们都住在这里 -->
    <div class="sq_area">
      <div class="box-title">
        <div class="box-title-fl fl">
          <span>我们都住在这里</span>
          <p>与你一起找寻不同的风景</p>
        </div>
        <div>
          <mySwiperTwo></mySwiperTwo>
        </div>
      </div>
    </div>
    <!-- 蛋壳合租 -->
    <div class="sq_area1">
      <div class="box-title">
        <div class="box-title-fl fl">
          <span>蛋壳合租</span>
          <p>高档家居 高品质合租公寓</p>
        </div>
        <div>
          <mySwiperThree></mySwiperThree>
        </div>
      </div>
    </div>
    <div class="sq_area1">
      <div class="box-title">
        <div class="box-title-fl fl">
          <span>蛋壳月租</span>
          <p>租期您定 月租月轻松</p>
        </div>
        <div>
          <mySwiperFour></mySwiperFour>
        </div>
      </div>
    </div>
    <!-- 蛋壳故事 -->
    <div class="danke_story">
      <div class="stroy_title" >
        <div class="title_word">我们不一样</div>
        <div class="title_dec">听他们的故事 结缘蛋壳</div>
        <div class="clear"></div>
      </div>
      <div class="story_detail">
        <div class="story_block" v-for="item in story" :key="item.id">
          <a key="01" href="https://www.danke.com/zhuanti/story?storyID=11">
            <img :src="item.image" />
            <div class="story_word">
              <span>{{item.tab}}</span>
              <p>{{item.intro}}</p>
            </div>
            <div class="clear"></div>
          </a>
        </div>
      </div>
    </div>
    <!-- //公共底部 -->
    <publicfooter />
  </div>
</template>

<script>
import mySwiper from "../components/mySwiper"; //轮播图组件
import homehead from "@/components/homehead.vue"; //头部组件
import mySwiperTwo from "../components/mySwiperTwo"; //轮播图组件二
import mySwiperThree from "../components/mySwiperThree"; //轮播图组件三
import mySwiperFour from "../components/mySwiperFour"; //轮播图组件四
import publicfooter from "@/components/publicfooter.vue"; //公共底部
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      story:[],
      vis: {
        flag: false
      }
    };
  },
  name: "home",
  components: {
    homehead,
    mySwiper,
    mySwiperTwo,
    mySwiperThree,
    mySwiperFour,
    publicfooter
  },
  methods: {
    gotop() {
      // console.log(this.$refs.home)
      this.$refs.home.scrollTop = 0;
    }
  },
created() {
        this.$axios.get("/dk/web-api/home-page/home-data",{
            params:{
                city_id:1
            }
        }).then((res)=>{
            this.story=res.data[5].data;
            // console.log(res.data[5].data)
        })
    },
};
</script>
<style lang="scss" scoped>
.home {
  position: fixed;
  top: 0rem;
  bottom: 0rem;
  right: 0;
  left: 0;
  overflow: auto;
}
.title-bg {
  position: relative;
  height: 0.94rem;
}
.title {
  box-sizing: border-box;
  z-index: 998;
  width: 100%;
  position: absolute;
  top: 0;
  height: 0.94rem;
  background: #f6f7f8;
  margin: 0;
  padding: 0 0.2rem;
}
.form_bg {
  display: block;
  width: 6rem;
  // position: relative;
  top: 0.88rem;
  left: 0.2rem;
  height: 0.7rem;
  padding-left: 0.9rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  background: #f6f7f8;
  margin-bottom: 0.3rem;
  margin-top: 0.1rem;
  img {
    position: absolute;
    left: 0.5rem;
    top: 0.2rem;
    width: 5%;
  }
  input {
    width: 100%;
    height: 0.7rem;
    line-height: 0.4rem;
    color: #000;
    margin-right: 0.125rem;
    border: 0;
    vertical-align: top;
    font-size: 0.24rem;
    border: none;
    background-color: #f6f7f8;
  }
}
.list {
  margin: 0.4rem 0.32rem;
  overflow: hidden;
  padding: 0 0 0.45rem;
  border-bottom: 1px solid #e4e8eb;
  li {
    width: 25%;
    float: left;
    text-align: center;
    a {
      width: 25%;
      text-align: center;
      img {
        width: 0.8rem;
        height: 0.8rem;
        margin: 0 auto;
      }
      span {
        position: relative;
        top: 0.2rem;
        color: #666;
      }
    }
  }
}
.sq_area {
  height: 3.8rem;
  border-bottom: 1px solid #ccc;
  padding: 0 0.32rem 0;
}
.box-title {
  overflow: hidden;
}
.box-title-fl {
  padding: 0.35rem 0;
  span {
    font-size: 0.36rem;
    color: #333;
    font-weight: 700;
  }
  p {
    font-size: 0.2rem;
    color: #999;
  }
}
.sq_area1 {
  height: 5.85rem;
  border-bottom: 1px solid #ccc;
  padding: 0 0.32rem 0;
}

.go-top {
  position: fixed;
  width: 0.84rem;
  height: 0.84rem;
  right: 0.32rem;
  bottom: 2rem;
  z-index: 14;
  img {
    width: 100%;
  }
}
// 蛋壳故事
.danke_story {
  margin: 0 0.32rem 0.4rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.stroy_title {
  border-bottom: 0.02rem solid #999;
}
.title_word {
  font-size: 0.36rem;
  font-weight: 700;
  float: left;
  padding: 0.35rem 0;
}
.title_dec {
  font-size: 0.2rem;
  color: #999;
  float: right;
  margin-top: 0.5rem;
}
.clear {
  clear: both;
}
.clear {
  height: 0.02rem;
  margin-top: -0.02rem;
  clear: both;
  line-height: 0.02rem;
  font-size: 0.02rem;
  overflow: hidden;
}
.story_detail {
  margin-top: 0.25rem;
}
.story_block {
  margin-bottom: 0.35rem;
}
</style>

