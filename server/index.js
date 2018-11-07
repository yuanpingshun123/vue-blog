//引入koa
import koa from 'koa'
// import Router from 'koa-router'
// import bodyparser from 'koa-bodyparser'
// 实例化koa
const app = new koa()
// const router = new Router()
//生成服务器


// app.use(bodyparser())
// app.use(router.routes())

app.listen(3000,()=>{
    console.log("node is ok asd")
})