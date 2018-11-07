<template>
    <header>
          <ul>
            <li><a @click="button">首页</a></li>
            <li><a>关于我</a></li>
            <li><a>文章</a></li>
          </ul>
    </header>
</template>

<script>
import request from '../utils/request'

export default {
  name: 'HelloWorld',
  data () {
    return {
        text:'asdasdasd'
    }
  },
  methods:{
    button(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
      padding: 0;
      margin: 0;
    }

    ul li{
      list-style: none;
      display: inline-block;
      line-height: 50px;
      color: aliceblue;
      margin-left: 20px;
          cursor:pointer

    }

    header{
      background:black;
      height: 50px;
    }
</style>