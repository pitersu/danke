<template>
  <div class="about">
    <Head />   
    <div class="swip" v-for="item in details" :key="item.id">
      <!-- <DetailSwiper /> -->
       <img :src="item.photos" alt="">
    </div>
    <div class="roomName" v-for="item in details" :key="item.id">
      <h1> {{item.title}}</h1>
      <em>{{item.mz}}</em>
    </div>
    <div class="room-detail-title" v-for="item in details" :key="item.id">
      <span>{{item.environment}}</span>
    </div>
    <div class="room-detail-price">
      <div class="room-detail-price-list">
        <label>月租金</label>
        <span v-for="item in details" :key="item.id">
          {{item.jg}}
          <em>元/月</em>
        </span>
      </div>
    </div>
    <div class="serverphone">
      <a href="tel:400-067-8569">
        <em>咨询电话:</em>
        400-067-8569
      </a>
    </div>
    <div class="detail-list-box">
      <div class="detail-list">
        建筑面积：约10㎡（以现场勘察为准）
        <span class="detail-list_on1">朝向：南</span>
      </div>

      <div class="detail-list">
        户型：3室1卫
        <b class="methodroom-rent">合</b>
        <span class="detail-list_on2">楼层：15/21层</span>
      </div>
    </div>
    <div class="room-position">
      <label>
        区域：
        <a
          href="https://www.danke.com/room/bj?search_text=%E6%9C%9D%E9%98%B3%E5%8C%BA"
          class="room-detail-sq"
          target="_blank"
        >朝阳区</a>
        <a
          href="https://www.danke.com/room/bj?search_text=%E4%B8%9C%E5%9D%9D%E4%B8%AD%E8%A1%97"
          class="room-detail-sq"
          target="_blank"
        >东坝中街</a>
        <a
          href="https://www.danke.com/room/bj?search_text=%E4%B8%9C%E6%B3%BD%E5%9B%AD"
          class="room-detail-sq"
          target="_blank"
        >东泽园</a>
      </label>
      <label for>地铁</label>
      <label for>编号：123270-C</label>
      <label for>
        付款：
        <a href="/zhuanti/20170821instalment" class="instalment">可支持分期月付</a>
        [不收中介费]
      </label>
    </div>
    <!-- //房屋标配 -->
    <div class="room-set">
      <div class="room-set-name">房屋标配</div>
      <div class="room-set-box">
        <div class="room-set-list">
          <img src="//public.danke.com.cn/public-20171123-Fit4o3_ZQIEVojXFg1k0eyt-4ytP" />
          <span>床</span>
        </div>
        <div class="room-set-list">
          <img src="//public.danke.com.cn/public-20171123-FrYFDpZlpF4no-kfliDa0F5WOJbd" />
          <span>WIFI</span>
        </div>
        <div class="room-set-list">
          <img src="//public.danke.com.cn/public-20171123-Fu3H3dZA87uIWy7lnhCCy7YPzh48" />
          <span>洗衣机</span>
        </div>
        <div class="room-set-list">
          <img src="//public.danke.com.cn/public-20171123-FlMAOzbw4EGZ4ZCdlvMe9Dhgs-ue" />
          <span>空调</span>
        </div>
        <div class="room-set-list">
          <img src="//public.danke.com.cn/public-20171123-FhnOPpkUtLogeN-wFMr5zrm__bc3" />
          <span>智能锁</span>
        </div>
      </div>
    </div>
    <!-- //我的室友 -->
    <div class="room-set">
      <div class="room-set-name">我的室友</div>
      <div class="room-firend">
        <table cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
              <td>
                <b>A房间</b>
                <span>约 13㎡</span>
              </td>
              <td>
                <b class="red">2230 元/月</b>
                <span>阳台</span>
              </td>
              <td>
                <a href="https://www.danke.com/room/1294450198.html">可出租</a>
              </td>
            </tr>
            <tr>
              <td>
                <b>B房间</b>
                <span>约 7㎡</span>
              </td>
              <td>
                <b>男</b>
                <span></span>
              </td>
              <td>
                <em>已出租</em>
              </td>
            </tr>
            <tr>
              <td>
                <b>C房间</b>
                <span>约 10㎡</span>
              </td>
              <td>
                <b class="red">2030 元/月</b>
                <span></span>
              </td>
              <td>
                <p>本房间</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- //付款方式 -->
    <div class="room-set">
      <div class="room-set-name">
        <em class="room-set-open" @click="showv">付款说明</em>付款方式
      </div>
      <div class="room-method">
        <table cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
              <th>付款方式</th>
              <th>服务费</th>
              <th>维修金</th>
              <th>押金</th>
              <th>租金</th>
            </tr>
            <tr>
              <td>
                年付
                <em>最划算</em>
              </td>
              <td>
                168元/年&nbsp;
                <p style="text-decoration: line-through;display: inline">1704元</p>
                <p style="color: #FF4C5A;text-align: center">为您节省1536元</p>
              </td>
              <td>240元/年</td>
              <td>2030元</td>
              <td>2030元</td>
            </tr>
            <tr>
              <td>
                半年付
                <em></em>
              </td>
              <td>
                1356元/年&nbsp;
                <p style="text-decoration: line-through;display: inline">1704元</p>
                <p style="color: #FF4C5A;text-align: center">为您节省348元</p>
              </td>
              <td>240元/年</td>
              <td>2030元</td>
              <td>2030元</td>
            </tr>
            <tr>
              <td>
                季付
                <em></em>
              </td>
              <td>
                1788元/年&nbsp;
                <p style="text-decoration: line-through;display: inline"></p>
                <p style="color: #FF4C5A;text-align: center"></p>
              </td>
              <td>252元/年</td>
              <td>2130元</td>
              <td>2130元</td>
            </tr>
            <tr>
              <td>
                分期月付
                <em></em>
              </td>
              <td>
                1704元/年&nbsp;
                <p style="text-decoration: line-through;display: inline"></p>
                <p style="color: #FF4C5A;text-align: center"></p>
              </td>
              <td>240元/年</td>
              <td>2030元</td>
              <td>2030元</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- //结束 -->
    <!-- 猜你喜欢 -->
    <div class="room-set-name"><b></b>猜你喜欢</div>
   <div class="youlike">
    <a href="//www.danke.com/room/1149243454.html"><img src="https://public.danke.com.cn/public-20180607-FqCJ88uGsEduWjqJ1Y4IbcoA44kF-roomPcList.jpg"><span>东坝中街 东泽园 次卧 朝南 B室</span><label>2090元</label><p>朝阳区 / 约7平米</p></a><a href="//www.danke.com/room/40939056.html"><img src="https://public.danke.com.cn/public-20190527-Fh_10xlGBNE98xLjRpu5T7fjuaLJ-roomPcList.jpg"><span>东坝中街 东泽园 主卧 朝东南 B室</span><label>2060元</label><p>朝阳区 / 约11平米</p></a><a href="//www.danke.com/room/270311703.html"><img src="https://public.danke.com.cn/public-20181229-FkZGSjiY8mpX_qdAQJMTa_RVG9yS-roomPcList.jpg"><span>东坝中街 东泽园 次卧 朝南 B室</span><label>1930元</label><p>朝阳区 / 约7平米</p></a></div>


    <mt-popup
  v-model="popupVisible"
  modal="true"
  position="top"
  closeOnClickModal="true" class="opentext">
            <div class="room-set-name">
              <b></b>服务费+维修金说明<em class="close" @click="showv">X</em></div>
            <p>更好的居住体验，更便捷高质量的服务，更舒适的生活。“一点付出，百倍享受。”蛋壳公寓现推出：</p>
            <span>服务费：</span>
            <p>仅需支付房屋月租价格的7%，便可享受高速宽带服务、400客诉热线、管家服务等优质服务。</p>
            <span>维修金：</span>
            <p>仅需支付房屋月租价格的1%，便可超值享受主体维修、电器维修、水暖维修、电路维修、灯具维修、橱柜维修、锁具维修（具体维修内容以房屋租赁合同为准）。</p>
            <div class="room-set-name"><b></b>押金说明</div>
            <span>押金的用途：</span>
            <p>用于担保租客及时、足额支付租金等其他费用；用于租客未完整履行合同给蛋壳造成损害时的赔偿。</p>
            <span>押金的返还：</span>
            <p>租赁关系终止时，租客依约返还了租赁物、缴清全部款项等，且并无其它不履行合同义务情形的，蛋壳应返还押金或已扣除损害赔偿后的余额。</p>
</mt-popup>
  <!-- 公共底部 -->
  <publicfooter />
  </div>
</template>
<script>
import { Popup } from 'mint-ui';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import DetailSwiper from "@/components/DetailSwiper.vue"; //详情页轮播组件
import Head from "@/components/Head.vue"; //头部组件
import  publicfooter from "@/components/publicfooter.vue";//公共底部
export default {
  data() {
    return {
      popupVisible:false,
     details: []
    };
  },
  components: {
    Head,
    DetailSwiper,
    publicfooter
  },
   created(){
        this.$axios.get("http://localhost:3000/list",{
          params:{
            room_id:this.$route.params.id
          }
        }).then((res)=>{
      this.details = res.data
      // console.log(res.data) 
        })
  },
  methods: {
    showv(){
      this.popupVisible =!this.popupVisible
    }
  },
};
</script>
<style lang="scss" scoped>
.asd{
  width: 2rem;
  height: 2rem;
  border:0.02rem solid red;
  background: #3dbcc6;
}
.swip {
  width: 100%;
  height: 5.625rem;
  background: #ccc;
  img{
    width: 100%;
    height:100%;
  }
}
.roomName {
  width: 100%;
  overflow: hidden;
  margin: 0 0 0 0rem;
  padding: 0.15rem 0;
  border-bottom: 0.02rem solid #e4e8eb;
  position: relative;
  h1 {
    float: left;
    width: 4.85rem;
    line-height: 0.55rem;
    font-size: 0.38rem;
    color: #333;
    text-align: left;
    font-weight: 400;
    margin-left: 0.5rem;
  }
  em {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    margin-top: -0.19rem;
    line-height: 0.38rem;
    font-size: 0.2rem;
    color: #3dbcc6;
    background: #f2fefe;
    padding: 0 0.2rem;
    border-radius: 0.19rem;
    font-style: normal;
  }
}
.room-detail-title {
  display: block;
  overflow: hidden;
  margin: 0.2rem 0.32rem;
  span {
    float: left;
    padding: 0 0.13rem 0 0;
    line-height: 0.34rem;
    border: 0.04rem solid #efefef;
    font-size: 0.2rem;
    color: #959d9f;
    border-radius: 0.16rem;
  }
}
.room-detail-price {
  overflow: hidden;
  margin: 0 0.32rem;
  .room-detail-price-list {
    float: left;
    width: 3.15rem;
    label {
      float: left;
      line-height: 0.65rem;
      width: 1rem;
      font-size: 0.24rem;
      color: #999;
      font-weight: 400;
    }
    span {
      color: #ff7966;
      font-size: 0.48rem;
      font-weight: 700;
      line-height: 0.65rem;
      display: block;
      margin: 0 0 0 1.1rem;
      em {
        font-weight: 400;
        font-size: 0.24rem;
      }
    }
  }
}
.serverphone {
  overflow: hidden;
  margin: 0.2rem 0.32rem;
  border: 0.04rem solid #3dbcc6;
  a {
    display: block;
    font-size: 0.32rem;
    color: #3dbcc6;
    height: 0.85rem;
    font-weight: 700;
    line-height: 0.85rem;
    text-decoration: none;
    em {
      float: left;
      font-size: 0.2rem;
      margin: 0 0.1rem 0 1.55rem;
      line-height: 0.85rem;
      font-weight: 400;
    }
  }
}
.detail-list-box {
  overflow: hidden;
  margin: 0 0 0 0.32rem;
  padding: 0 0 0.2rem;
  border-bottom: 0.02rem solid #e4e8eb;
  display: flex;
  flex-direction: column;
  position: relative;
  .detail-list {
    float: left;
    width: 60%;
    line-height: 0.42rem;
    font-size: 0.24rem;
    color: #666;
  }
  .detail-list_on1 {
    display: block;
    position: absolute;
    top: 0rem;
    left: 18.5em;
    width: 40%;
    float: right;
  }
  .detail-list_on2 {
    display: block;
    position: absolute;
    top: 0.4rem;
    left: 18.5em;
    width: 40%;
    float: right;
  }
}
.detail-list b {
  display: inline-block;
  width: 0.4rem;
  line-height: 0.36rem;
  margin: 0 0 0 0.2rem;
  color: #fff;
  text-align: center;
  font-size: 0.2rem;
  -webkit-border-radius: 0.04rem;
  -moz-border-radius: 0.04rem;
  border-radius: 0.04rem;
  font-weight: 700;
}
.methodroom-rent {
  background: #77d0d7;
}
.room-position {
  overflow: hidden;
  padding: 0.2rem 0.2rem 0.32rem 0.3rem;
  border-bottom: 0.2rem solid #f7f8f9;
  label {
    display: block;
    line-height: 0.42rem;
    font-size: 0.24rem;
    color: #666;
    a {
      display: inline-block;
      margin: 0 0.15rem 0 0;
      color: #37545e;
      text-decoration: underline;
    }
  }
}

.room-set {
  overflow: hidden;
  border-bottom: 0.4rem solid #f7f8f9;
  .room-set-name {
    display: block;
    padding: 0.2rem 0 0 0.64rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    font-weight: 700;
  }
  .room-set-box {
    display: block;
    overflow: hidden;
    margin: 0.2rem 0.64rem 0;
  }
  .room-set-list {
    float: left;
    width: 20%;
    margin: 0 0 0.5rem;
    text-align: center;
    img {
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      margin: 0 auto;
      text-align: center;
    }
    .room-set-list span {
      // display: block;
      text-align: center;
      line-height: 1.1rem;
      font-size: 0.12rem;
      color: #666;
    }
  }
}
//我的室友
.room-set {
  overflow: hidden;
  border-bottom: 0.4rem solid #f7f8f9;
}
.room-set-name {
  display: block;
  padding: 0.4rem 0 0 0.64rem;
  line-height: 1.3rem;
  font-size: 0.28em;
  font-weight: 700;
}
.room-firend {
  margin: 0 0 0.45rem 0.32rem;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.room-firend table td:nth-child(1) {
  width: 1.6rem;
}

.room-firend table td {
  padding: 0.2rem;
  border-bottom: 0.02rem solid #e4e8eb;
}
.room-firend table td b {
  display: block;
  font-size: 0.24rem;
  color: #666;
  font-weight: 700;
  line-height: 0.4rem;
}
.room-firend table td span {
  display: block;
  font-size: 0.24rem;
  color: #666;
  line-height: 0.4rem;
  float: left;
}
.room-firend table td b.red {
  color: #ff4c59;
}
.room-firend table td b {
  display: block;
  font-size: 0.24rem;
  font-weight: 700;
  line-height: 0.4rem;
}
.room-firend table td a {
  color: #ff4c59;
  background: #ffebec;
}
.room-firend table td a,
.room-firend table td em,
.room-firend table td p {
  display: block;
  font-size: 0.24rem;
  width: 1.04rem;
  text-align: center;
  height: 0.38rem;
  border-radius: 0.19rem;
}
.room-firend table td em {
  color: #fff;
  background: #c2c2c7;
}
.room-firend table td p {
  color: #3dbcc6;
  background: #ebfffb;
}
//代宽
.room-set-open {
  float: right;
  margin: 0 0.32rem 0 0;
  padding: 0 0.2rem 0 0;
  font-size: 0.24rem;
  color: #333;
  line-height: 0.65rem;
  background: url(//public.danke.com.cn/public-20171122-Fu0wZFuoHqN006ZpH6utgF6Jj0k-)
    no-repeat right center;
}
.room-method {
  padding: 0.2rem 0;
}
.room-method table th:nth-child(1) {
  padding: 0 0 0 0.32rem;
  text-align: left;
  font-weight: 700;
  width: 1.9rem;
}
.room-method th {
  color: #666;
  font-size: 0.24rem;
  height: 0.85rem;
  border-bottom: 0.02rem solid #e4e8eb;
}
.room-method table td:nth-child(1) {
  padding: 0 0 0 0.32rem;
  text-align: left;
  font-weight: 700;
  width: 1.9rem;
}
.room-method td,
.room-method th {
  color: #666;
  font-size: 0.24rem;
  height: 0.85rem;
  border-bottom: 0.02rem solid #e4e8eb;
}
.room-method td em {
  display: inline-block;
  color: #fff;
  font-size: 0.15rem;
  margin: 0 0 0 0.15rem;
  width: 0.85rem;
  line-height: 0.28rem;
  background: #ff4c59;
  text-align: center;
  border-radius: 0.14rem;
}
// 猜你喜欢
.room-set-name {
    display: block;
    padding: 0.2rem 0 0 0.32rem;
    line-height: 0.65rem;
    font-size: 0.28rem;
    font-weight: 700;
}
.room-set-name b {
    float: left;
    margin: 0.2rem 0.2rem 0 0;
    background: #3dbcc6;
    height: 0.28rem;
    width: 0.04rem;
}
.youlike {
    display: block;
    overflow: hidden;
    padding: 0 0 0.4rem 0.32rem;
}
.youlike a {
    display: block;
    overflow: hidden;
    padding: 0.26rem 0;
    border-bottom: 0.02rem solid #e4e8eb;
}
.youlike a span {
    overflow: hidden;
    height: 1rem;
    line-height: 0.5rem;
    font-weight: 700;
    font-size: 0.32rem;
    color: #333;
    display: block;
    margin: 0 0.3rem 0 2.9rem;
}
.youlike a label {
    font-size: 0.28rem;
    color: #ff7966;
    font-weight: 700;
    line-height: 0.6rem;
    display: block;
    margin: 0 0.3rem 0 2.9rem;
}
.youlike a p {
    line-height: 0.42rem;
    font-size: 0.24rem;
    color: #666;
        display: block;
    margin: 0 0.3rem 0 2.9rem;
}
.youlike a img {
    float: left;
    width: 2.58rem;
    height: 1.95rem;
}
//模态窗
.opentext {
    margin: 0.5rem auto;
    padding: 0 0 0.3rem;
    width: 6.86rem;
    background: #fff;
}
.opentext p{
    padding: 0 0.3rem;
    clear: both;
    display: block;
    color: rgb(37, 147, 180);
    font-size: 0.24rem;
    line-height: 0.4rem;
        // font-weight: 400; 
    text-align: left;
}
 .opentext span {
    padding: 0 0.3rem;
    display: block;
    color: rgb(37, 147, 180);
    font-size: 0.24rem;
    line-height: 0.5rem;
        // font-weight: 700;
}
.close{
  float: right;
}

</style>