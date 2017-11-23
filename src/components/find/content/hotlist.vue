<template>
	<div class="hotlist">
		<ul class="clear">
			<li class="img fl">
				<div v-bind:style="{backgroundImage:'url(static/'+hot.logo+')'}"></div>
			</li>
			<li class="fl">
				<dl>
					<dd v-text="hot.title">淮滨热点</dd>
					<dd v-text="hot.area">淮滨，河南省信阳市下辖县</dd>
					<dd><i>{{hot.fans}}订阅</i>|<i>总帖数<span>{{hot.totlemessage}}</span></i></dd>
				</dl>
			</li>
			<li class="fr"><a href="javascript:;">订阅</a></li>
		</ul>
	</div>	
</template>
<script>
export default {
  name: 'hotlist',
  data (){
    return {
      msg: ''
    }
  },
  props:["hot"]
}
</script>
<style lang="less">
	@import "../../../../static/css/demo.less";
	.hotlist{width:100%;
		ul{width:100%; padding:10px 0;
			.img{width:50px; height:50px; border-radius:3px; overflow:hidden;}
			li:nth-child(2){margin-left:10px;
				dl{
					dd{.p-r(width,190); overflow:hidden; white-space:nowrap; text-overflow:ellipsis;font-size:12px; color:#999;}
					dd:nth-child(1){font-size:17px; color:#333; line-height:20px;}
					dd:nth-child(3){margin-top:5px; line-height:14px; color:#8c8c8c;
						i:nth-child(1){margin-right:5px; color:#999;}
						i:nth-child(2){margin-left:5px; color:#999;
							span{color:#f15a4a;}
						}
					}
				}
			}
			li:nth-child(3){width:55px; padding:10px 0;
				a{display:block; line-height:24px; text-align:center; font-size:15px; color:#999; border-width:3px; border-image:url(../../../../static/img/ccc.png) 6; box-sizing:border-box;}
			}
		}		
	}
	.hotlist:after{content:""; display:block; width:100%; height:1px; transform:scaleY(0.5); background:#e5e5e5;}
</style>