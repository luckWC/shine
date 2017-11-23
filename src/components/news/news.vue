<template>
	<div class="news">
		<div class="header">
			<h3>消息</h3>
			<a href="javascript:;">黑名单</a>
		</div>
		<ol>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="fl"></dd>
						<dd class="fl">聊天大厅</dd>
						<dd class="fr"><arrow></arrow></dd>
					</dl>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="fl"></dd>
						<dd class="fl">系统消息</dd>
						<dd class="fr"><arrow></arrow></dd>
					</dl>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="fl"></dd>
						<dd class="fl">投稿互动</dd>
						<dd class="fr"><arrow></arrow></dd>
					</dl>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="fl"></dd>
						<dd class="fl">粉丝关注</dd>
						<dd class="fr"><arrow></arrow></dd>
					</dl>
				</a>
			</li>
		</ol>
		<ul>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="img fl">
							<div style="background-image:url(../../../static/img/1.jpg)"></div>
						</dd>
						<dd class="fl">
							<h4>神界——菜鸟</h4>
							<p>美女你老公在家么？</p>
						</dd>
						<dd class="fr">
							<i>12-19</i>
							<i>16:51</i>
						</dd>
					</dl>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="img fl">
							<div style="background-image:url(../../../static/img/0.jpg)"></div>
						</dd>
						<dd class="fl">
							<h4>李万姬</h4>
							<p>我老公不在家快来吧！</p>
						</dd>
						<dd class="fr">
							<i>12-19</i>
							<i>16:51</i>
						</dd>
					</dl>
				</a>
			</li>
		</ul>
	</div>	
</template>
<script>
import arrow from '../../common/arrow.vue';
export default {
  name: 'news',
  components:{
    'arrow': arrow
  },
  data (){
    return {
      msg: ''
    }
  },
  props:["hot"]
}
</script>
<style lang="less">
	@import "../../../static/css/demo.less";
	.news{height:100%; background:#efeff4;
		.header{width:100%; background:#f15a4a; padding:5px 0; position:relative;
			h3{font-size:18px; color:#fff; text-align:center; line-height:42px;}
			a{display:block; font-size:15px; color:#fff; position:absolute; right:15px; top:0; line-height:52px;}
		}
		>ol{
			>li{padding:0px 15px; box-sizing:border-box; background:#fff;
				>a{display:block; padding:10px 0px;
					dl{
						dd{font-size:16px; color:#333; line-height:26px;}
						dd:nth-child(1){width:28px; height:28px; border-radius:10px; overflow:hidden;}
						dd:nth-child(2){margin-left:10px;}
					}
				}
			}
			>li:nth-child(1){
				>a{
					dl{
						dd:nth-child(1){background:#f3c246 url(../../../static/img/hall.png) no-repeat 50% 50%; background-size:15px 12px;}
					}
				}
			}
			>li:nth-child(1):after{content:""; display:block; width:100%; height:1px; transfrom:scaleY(0.5); background:#e5e5e5;}
			>li:nth-child(2){
				>a{
					dl{
						dd:nth-child(1){background:#4faef7 url(../../../static/img/system.png) no-repeat 50% 50%; background-size:11px 15px;}
					}
				}
			}
			>li:nth-child(3){margin-top:10px;
				>a{
					dl{
						dd:nth-child(1){background:#54b737 url(../../../static/img/submission.png) no-repeat 50% 50%; background-size:14px 13px;}
					}
				}
			}
			>li:nth-child(3):after{content:""; display:block; width:100%; height:1px; transfrom:scaleY(0.5); background:#e5e5e5;}
			>li:nth-child(4){
				>a{
					dl{
						dd:nth-child(1){background:#e66b66 url(../../../static/img/fans.png) no-repeat 50% 50%; background-size:15px 13px;}
					}
				}
			}
		}
		ul{margin-top:10px; padding:0 15px; box-sizing:border-box; background:#fff;
			>li{
				>a{display:block; padding:10px 0;
					>dl{
						>.img{width:50px; height:50px; border-radius:50%; overflow:hidden;}
						dd:nth-child(2){margin-left:10px; color:#333;
							h4{font-size:17px; line-height:30px; white-space:nowrap; text-overflow:ellipsis; .p-r(width,190); overflow:hidden;}
							p{font-size:12px; white-space:nowrap; text-overflow:ellipsis; .p-r(width,190); overflow:hidden;}
						}
						dd:nth-child(3){line-height:30px; font-size:12px; color:#999;
							i:last-child{margin-left:5px;}
						}
					}
				}
			}
			>li:after{content:""; display:block; width:100%; height:1px; transfrom:scaleY(0.5); background:#e5e5e5;}
			>li:last-child:after{display:none;}
		}
	}
</style>