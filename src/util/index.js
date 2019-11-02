import wepy from 'wepy'
//wepy 是个对象
const baseURL='https://uinav.com/api/public/v1'
//title,提示信息文章
//icon提示图标
wepy.baseToast = function(title="获取数据失败",icon="none"){
    wepy.showToast({
        title,
        icon
    })
}
//get请求
wepy.get = function(path,data={}){
 return wepy.request({
        url:baseURL+path,
        data
    })
}
//post
wepy.post = function(path,data={}){
    return wepy.request({
           url:baseURL+path,
           data,
           method:'post'
       })
   }