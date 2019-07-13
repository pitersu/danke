<template>
  <div>
    <header>
        <img src="//public.danke.com.cn/public-20180305-FiHjPnBXLjvIL4WE8oN9coIjEj-h" alt="">
        <div class="to-index" @click="toggle">
          <a href="" @click="toggle">首页</a>
        </div>
    </header>
    <div class="login">
      <div class="log">
        <div class="input1">  <input type="text" placeholder="请输入用户名"></div>
         <div class="input2">  <input type="password" placeholder="请输入密码"></div>
         <!-- <span class="error" v-show="flag">输入无效</span> -->
         <!-- <button class="bbq" @click="error">获取验证码</button> -->
      </div>
      <div class="bttn" @click="tip">登录</div><div class="bttn2" @click="gologup">去注册</div>
    </div>
    <div class="login-clause">
            登录即代表你同意<a href="/zhuanti/user-clause">《用户使用条款》</a>《<a target="_blank" href="/zhuanti/user-privacy">隐私保护政策</a>》
        </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        flag:false,
        name:'无效信息'
    }
  },
  methods:{
    toggle(){
        this.$router.push("home")
    },
      gologup(){
      this.$router.push("logup")
    },
    tip(){
       alert('你好' + this.name + '!')
    }
    // error(){
    //     this.flag = !this.flag
    // }
  }
}
</script> 
<style lang="scss" scopped>
  img{
    width: 100%;
  }
  .to-index {
    position: absolute;
    top: 0.28rem;
    left: 0.48rem;
    display: inline-block;
    width: 1.08rem;
    height: 1.08rem;
    margin-right: 0.32rem;
    border-radius: 50%;
    background: #fff url(//public.danke.com.cn/public-20180202-FtmNbHV0EwA33J9vBf4y7Y2N9jpo) no-repeat center;
    vertical-align: top;
}
.to-index a {
    top: 0.28rem;
    left: 1.48rem;
    position: absolute;
    font-size: 0.4rem;
    width: 0.8rem;
    color: rgb(255, 255, 255);
}
.login{
  height: 3.64rem;
  width: 7.5rem;
  margin-top:0.5rem;
  background: rgb(255, 255, 255);

}
.input1{
  text-align: center;
  width: 6.5rem;
  height: 1rem;
  border-bottom:0.02rem solid #d1d1d1;
   input{
    width: 6.5rem;
    height: 1rem;
    outline: none;
    border:none;
    background: url("../assets/user.png") no-repeat right;
  }
}
.input2{
  text-align: center;
  width: 6.5rem;
  height: 1rem;
  border-bottom:0.02rem solid #d1d1d1;
   input{
    width: 6.5rem;
    height: 1rem;
    outline: none;
    border:none;
    background: url("../assets/password.png") no-repeat right;
  }
}
input::placeholder{
      color:#bbbbbb;
      font-size: 0.28rem;
  }

.log{
  width: 6.5rem;
  height: 2.1rem;
  margin-left: 0.5rem;
  position: relative;
  // border:1px solid red;
}
.bttn{
  color: #fff;
  height: 0.8rem;
  width: 2rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.1rem;
  margin-top: 0.4rem;
  margin-left: 1.2rem;
  font-size: 0.34rem;
  float: left;
  background: -webkit-gradient(linear,0 0,0 bottom,from(#3fc2b5),to(#3dbcc6));
}
.bttn2{
  color: #fff;
  height: 0.8rem;
  width: 2rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.1rem;
  margin-top: 0.4rem;
  margin-left: 1.2rem;
  font-size: 0.34rem;
  float: left;
  background:#ccc;
}
.login-clause {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: 0.3rem;
    font-size: 0.24rem;
    color: #b5b5b5;
    text-align: center;
}
.login-clause a {
    color: #3dbcc6;
}
/* .bbq{
  outline: none;
  width: 1.86rem;
  height: 0.6rem;
  font-size: 0.32rem;
  text-align: center;
  color: #3dbcc6;
  background: 0 0;
  border:none;
  position: absolute;
  top: 1.4rem;
  left:5rem;
}
.error{
  color:red;
  font-size: 0.35rem

} */
</style>