<template>
  <div class="follow">
    <dl>
      <dd v-for="(v,i) in msg">
        <router-link :to="{path:'/home/follow/details',query:{num:v}}">
        <!-- <dd v-for="(v,i) in msg" v-link :to="{path: '/home/follow/details', query:{val: v}}"> -->
          <ul class="list">
            <li class="clear">
              <div class="img">
                <div v-bind:style="{backgroundImage :'url(static/'+v.headpic+')'}"></div>
              </div>
              <div class="name" v-text="v.name"></div>
            </li>
            <li>
              <p v-text="v.article"></p><i v-text="v.tip"></i>
            </li>
            <li>
              <ul class="clear" v-if="v.type=='pic'" v-bind:class="{one: v.pic.length==1}">
                <li class="img" v-for="(v,i) in v.pic">
                  <a href="javascript:;" v-bind:style="{backgroundImage:'url(static/'+v+')'}"></a>
                </li>
              </ul>
              <div v-if="v.type=='video'">
                <video v-bind:src="v.video[0]" controls="controls" width="100%"></video>
              </div>
            </li>
            <li>
              <ol class="clear">
                <li class="fl">
                  <a class="fabulous" href="javascript:;" v-text="v.fabulous"></a>
                </li>
                <li class="fl">
                  <a class="decline" href="javascript:;" v-text="v.damage"></a>
                </li>
                <li class="fl">
                  <a class="comment" href="javascript:;" v-text="v.comment"></a>
                </li>
                <li class="fr">
                  <a class="share" href="javascript:;" v-text="v.share"></a>
                </li>
              </ol>
            </li>
          </ul>
          <div class="border10"></div>
        </router-link>
      </dd>
    </dl>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'follow',
  data (){
    return {
      msg: ''
    }
  },
  computed : {
    
  },
  created (){
    this.$http.get('/api/list').then(function (data) {
        this.msg = data.body.data;
        console.log(this.msg);
      })
  },
  methods: {
    gotoAddress(path){
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../../../static/css/demo.less";
  .list>li:nth-child(1){width:100%; padding:15px 15px; box-sizing:border-box; 
    .img{width:40px; height:40px; float:left; border-radius:50%; overflow:hidden;}
    .name{margin-left:45px; font-size:15px; color:#666; line-height:40px;}
  }
  .list>li:nth-child(2){width:100%; padding:0 15px; box-sizing:border-box; word-break:break-all; font-size:16px; color:#333;
    p{display:inline;}
    i{display:inline-block; font-size:11px; color:#666; border:1px solid #ccc; border-radius:3px; text-align:center; line-height:16px; padding:0 4px; white-space:nowrap; margin-left:5px;}
  }
  .list>li:nth-child(3){width:100%; padding:8px 4%; box-sizing:border-box;
    ul{width:100%;
      >li{float:left; width:32%; margin-right:2%; .p-r(height,110); .p-r(margin-bottom,6)}
      >li:nth-child(3n){margin-right:0;}
    }
    .one{width:100%;
      >li{width:100%; .p-r(height,165);}
    }
  }
  .list>li:nth-child(4){width:100%; padding:0 15px 15px; box-sizing:border-box;
    >ol>li:nth-child(1),>ol>li:nth-child(2){margin-right:10%;}
    >ol>li:nth-child(4){position:relative; top:-3px;}
    >ol>li>a{display:block; font-size:14px; color:#999; height:20px; line-height:20px;}
    >ol>li>a:before{content:""; display:inline-block; margin-right:3px; position:relative; top:3px;}
    >ol>li>.fabulous:before{width:16px; height:16px; background:url("../../../../static/img/fabulous.png") no-repeat 50% 50%; background-size:100% 100%;}
    >ol>li>.decline:before{width:16px; height:16px; background:url("../../../../static/img/fabulous.png") no-repeat 50% 50%; background-size:100% 100%; transform:rotate(180deg);}
    >ol>li>.comment:before{width:17px; height:15px; background:url("../../../../static/img/comment.png") no-repeat 50% 50%; background-size:17px 15px;}
    >ol>li>.share:before{width:19px; height:17px; background:url("../../../../static/img/share.png") no-repeat 50% 50%; background-size:100% 100%; top:5px;}
  }
</style>
