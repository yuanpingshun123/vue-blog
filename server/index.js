//引入koa
import koa from 'koa'
// 实例化koa
const app = new koa()

//生成服务器
app.listen(3000,()=>{
    console.log("node is ok")
})