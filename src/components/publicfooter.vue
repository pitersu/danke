<template>
  <div>
      <!-- 公共底部 -->
    <div class="footer">
    <div class="f-about">
        <a href="">了解蛋壳</a>
        <span></span>
        <a href="">联系我们</a>
        <span></span>
        <a href="">加入蛋壳</a>
    </div>
    <div class="f-server-link">
        <a href="tel:4001-551-551">
            <label>客服热线：</label>
            <span>4001-551-551</span>
            <label>（9:00 ~ 21:00）</label>
        </a>
    </div>
    <div class="f-logo">
        <p>让租房变得简单和快乐</p>
        <span>© 2019 蛋壳公寓 沪ICP备18043153号-1</span>
    </div>
</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  // 底部
.footer {
    padding: 0.3rem 0.32rem 1rem;
    overflow: hidden;
    background: #3f4141;
}
.f-about {
    display: none;
    padding: 0.4rem 0 0 1.58rem;
}
.f-about a {
    color: #fff;
    font-size: 0.2rem;
    line-height: 0.22rem;
    float: left;
}
.f-about span {
    width: 0.2rem;
    height: 0.22rem;
    margin: 0 0.48rem;
    background: #fff;
    float: left;
}
.f-server-link {
    display: block;
    margin: 0.4rem 0.32rem 0;
    background: #535656;
    border-radius: 0.04rem;
}
.f-server-link a {
    display: block;
    overflow: hidden;
    line-height: 0.76rem;
    text-align: center;
    color: #fff;
}
.f-logo {
    display: block;
    padding: 0.9rem 0 0.2rem;
    background: url(//public.danke.com.cn/public-20180101-FvKj9OJ_iw6vApf3aktfSGV-1tdQ) no-repeat center 0.22rem;
}
.f-logo p {
    display: block;
    color: #666;
    text-align: center;
    font-size: 0.20rem;
    line-height: 0.32rem;
    font-weight: 400;
}
.f-logo span {
    display: block;
    text-align: center;
    color: #666;
    font-size: 0.16rem;
    line-height: 0.28rem;
}
</style>