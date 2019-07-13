module.exports ={
  devServer:{
    proxy:{
      "/dk":{
        "target":"https://www.danke.com/",
        "changeOrigin":true,
        "pathRewrite":{
          "^/dk":"/"
        }
      }
    }
  }
}