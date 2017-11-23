<template>
  <div>
    <router-view></router-view>
    <div class="home_footer">
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/find">发现</router-link>
        </li>
        <li>
          <router-link to="/add"></router-link>
        </li>
        <li>
          <router-link to="/news">消息</router-link>
        </li>
        <li>
          <router-link to="/my">我的</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../../static/css/demo.less";
  .home_footer{width:100%; position:fixed; bottom:0; left:0; height:50px; background:#fafafa;
    ul{display:table; width:100%;
      li{display:table-cell;
        a{display:block; color:#999; font-size:11px; text-align:center;}
      }
      li:nth-child(1){
        a:before{content:""; display:block; width:24px; height:24px; margin:0 auto; background:url("../../../static/img/home.png") no-repeat 50% 50%; background-size:100% 100%;}
        .router-link-active:before{background-image:url("../../../static/img/homeing.png");}
      }
      li:nth-child(2){
        a:before{content:""; display:block; width:24px; height:22px; margin:1px auto; background:url("../../../static/img/find.png") no-repeat 50% 50%; background-size:100% 100%;}
        .router-link-active:before{background-image:url("../../../static/img/finding.png");}
      }
      li:nth-child(3){width:24%; padding:7px 15px; box-sizing:border-box;
        a{height:36px; border-radius:5px; background:#ff6e74 url("../../../static/img/main.png") no-repeat 50% 50%; background-size:23px 23px;}
      }
      li:nth-child(4){
        a:before{content:""; display:block; width:20px; height:20px; margin:2px auto; background:url("../../../static/img/comment.png") no-repeat 50% 50%; background-size:100% 100%;}
        .router-link-active:before{background-image:url("../../../static/img/newsing.png");}
      }
      li:nth-child(5){
        a:before{content:""; display:block; width:20px; height:21px; margin:1px auto; background:url("../../../static/img/my.png") no-repeat 50% 50%; background-size:100% 100%;}
        .router-link-active:before{background-image:url("../../../static/img/mying.png");}
      }
    }
  }
  .home_footer:before{content:""; display:block; width:100%; height:1px; background:#d9d9dd; transfrom:scaleY(0.5);}
</style>
