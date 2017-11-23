<template>
 <div class="details">
 	<div class="video">
 		<div class="head clear">
 			<a class="fl" href="javascript:;" @click="$router.go(-1)"></a>
			<a class="fr" href="javascript:;">举报</a>
 		</div>
 		<video v-bind:src="msg.video[0]" width="100%"></video>
 		<div class="foot clear">
 			<i class="fl">26.3万播放</i>
 			<i class="fr">0.33</i>
 		</div>
 	</div>
 	<ul class="list">
        <li class="clear">
          <div class="img">
            <div v-bind:style="{backgroundImage :'url(static/'+msg.headpic+')'}"></div>
          </div>
          <div class="name" v-text="msg.name"></div>
        </li>
        <li>
          <p v-text="msg.article"></p><i v-text="msg.tip"></i>
        </li>
        <li>
          <ul class="clear" v-if="msg.type=='pic'" v-bind:class="{one: msg.pic.length==1}">
            <li class="img" v-for="(v,i) in msg.pic">
              <a href="javascript:;" v-bind:style="{backgroundImage:'url(static/'+v+')'}"></a>
            </li>
          </ul>
        </li>
        <li>
          <ol class="clear">
            <li class="fl">
              <a class="fabulous" href="javascript:;" v-text="msg.fabulous"></a>
            </li>
            <li class="fl">
              <a class="decline" href="javascript:;" v-text="msg.damage"></a>
            </li>
            <li class="fl">
              <a class="comment" href="javascript:;" v-text="msg.comment"></a>
            </li>
            <li class="fr">
              <a class="share" href="javascript:;" v-text="msg.share"></a>
            </li>
          </ol>
        </li>
    </ul>
 	<p>{{this.$route.query.num}}</p>
 </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: this.$route.query.num
    }
  },
  props: ['val'],
  methods: {
	gotoAddress(){
		console.log(this.val);
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../../../static/css/demo.less";
	.details{position:fixed; top:0; left:0; width:100%; height:100%; z-index:10;background:#fff;
		.video{width:100%; position:relative;padding:0;
			.head{width:100%; padding:5px 15px; position:absolute; z-index:15; top:15px; left:0; box-sizing:border-box;
				.fr{font-size:18px; color:#fff; text-align:center; line-height:20px;}
				.fl{display:block; width:10px; height:18px; background:url(../../../../static/img/arrow.png) no-repeat 50% 50%; background-size:10px 18px;}
			}
			.foot{width:100%; padding:0 15px; position:absolute; z-index:15; bottom:0; left:0; box-sizing:border-box;background:rgba(0,0,0,0.2);height:20px;
				i{display:block; font-size:12px; color:#fff; line-height:20px;}
			}
		}
	}
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
