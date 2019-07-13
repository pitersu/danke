var express = require('express');
var router = express.Router();
var mongoose =require("../db/conn");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
//2.创建一个模型
const User = mongoose.model('user', { username: String ,password:String},'user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/user',(req,res)=>{//向前端提供用户名
	res.json({
		status:0,
		user:req.session.user 
	})
})
router.get("/quit",(req,res)=>{
	req.session.user=null;
	if(req.cookies.token){
		res.cookie("token","");
	}
	res.json({
		status:0
	})
})
router.post("/login",(req,res)=>{
	let {username,password} = req.body;
	var hash = crypto.createHmac('sha256', password)
                   .update('I love cupcakes')
									 .digest('hex');
	User.find({username,password:hash}).then((response)=>{
			
		if(response.length>0){
					req.session.user = username;
					//用户名和时间戳生成了一个令牌
					var token = jwt.sign({username,time:new Date().getTime()},"haha",{expiresIn:100});
					res.cookie("token",token);	//令牌存储到客户端的cookies里
											res.json({
											 status:0,  //登录成功
											 data:true
										 })
										}
										else{
											res.json({
												status:0,  //登录失败
												data:false
											})
										}	
	})
})

router.post("/reg",(req,res)=>{//users/reg
	 let {username,password} = req.body;
	 User.find({username}).then((response)=>{
	 	 if(response.length>0){
	 	 	res.json({
	 			status:-1
	 		})
	 	 }
	 	 else{
	 	 	var hash = crypto.createHmac('sha256', password)
                   .update('I love cupcakes')
                   .digest('hex');
	 	 	new User({username,password:hash}).save().then(()=>{
				 	res.json({
				 		status:0
				 	})
	 		})
	 	 }
	 })
	 
})   

module.exports = router;
