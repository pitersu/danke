import Vue from 'vue';
import { Toast } from 'mint-ui';
Vue.directive("scroll",(el,binding)=>{ 
  var dis = Number(el.getAttribute("dis"));
  el.addEventListener("scroll",()=>{
    var st = el.scrollTop;
    // console.log(st)
  if(st>dis){
    Toast({
      message: '已经到底啦',
      position: 'bottom',
      duration: 2000
    });
  }
    	else{
      
    	}
  })
})
