<template>
	<div class="my">
		<div class="header">
			<h3>我的</h3>
			<a href="javascript:;" @click = "gotoAddress('/my/edit')">设置</a>
		</div>
		<router-view></router-view>
		<div class="myself">
			<div class="box clear">
				<div class="img fl">
					<div style="background-image:url(../../../static/img/0.jpg)"></div>
				</div>
				<ul>
					<li>
						<dl>
							<dd>罪剑</dd>
							<dd class="boy"></dd>
							<dd>
								<a href="javascript:;">签到有礼</a>
							</dd>
						</dl>
					</li>
					<li>北京</li>
					<li>
						<dl>
							<dd>
								<h5>66</h5>粉丝
							</dd>
							<dd>
								<h5>55</h5>关注
							</dd>
							<dd>
								<h5>888</h5>积分
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</div>
		<ul class="coin">
			<li>送出金币：10000</li>
			<li>获得金币：3541</li>
		</ul>
		<div class="border05"></div>
		<div class="article">	梦想还是要有的梦想还是要有的梦想还是要有的梦想还是要有的梦想还是要有的
		</div>
		<div class="border10"></div>
		<ol>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="fl"></dd>
						<dd class="fl">发帖评论</dd>
						<dd class="fr"><arrow></arrow></dd>
					</dl>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="fl"></dd>
						<dd class="fl">金币商城</dd>
						<dd class="fr"><arrow></arrow></dd>
					</dl>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="fl"></dd>
						<dd class="fl">我的钱包</dd>
						<dd class="fr"><arrow></arrow></dd>
					</dl>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="fl"></dd>
						<dd class="fl">金币任务</dd>
						<dd class="fr"><arrow></arrow></dd>
					</dl>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<dl class="clear">
						<dd class="fl"></dd>
						<dd class="fl">客服中心</dd>
						<dd class="fr"><arrow></arrow></dd>
					</dl>
				</a>
			</li>
		</ol>
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
  props:["hot"],
  methods: {
	gotoAddress(path){
		this.$router.push(path)
	}
  }
}
</script>
<style lang="less">
	@import "../../../static/css/demo.less";
	.my{height:100%; background:#efeff4;
		.header{width:100%; background:#f15a4a; padding:5px 0; position:relative;
			h3{font-size:18px; color:#fff; text-align:center; line-height:42px;}
			a{display:block; font-size:15px; color:#fff; position:absolute; right:15px; top:0; line-height:52px;}
		}
		.myself{padding:20px 15px 20px; box-sizing:border-box; background:#fff;
			.box{
				.img{width:90px; height:90px; border-radius:50%; overflow:hidden;}
				>ul{margin-left:100px;
					>li:nth-child(1){
						>dl{position:relative;
							>dd:nth-child(1){font-size:17px; color:#333;line-height:28px; display:inline-block;}
							>dd:nth-child(2){width:8px; height:10px; margin:7px 0 0 5px;display:inline-block;}
							>.girl{background:url(../../../static/img/girl.png) no-repeat 50% 50%; background-size:100% 100%;}
							>.boy{background:url(../../../static/img/boy.png) no-repeat 50% 50%; background-size:100% 100%;}
							>dd:nth-child(3){width:68px; height:28px; position:absolute; right:0;top:0;
								>a{display:block; line-height:26px; text-align:center; color:#f15a4a; font-size:14px; border-image:url(../../../static/img/f15a4a.png) 2; border-width:1px;}
							}
						}
					}
					>li:nth-child(2){font-size:13px; color:#666; position:relative; top:-3px;}
					>li:nth-child(3){margin-top:10px;
						>dl{position:relative; width:100%;
							>dd{text-align:center;font-size:14px; color:#999;
								>h5{text-align:center; font-size:14px; color:#333;}
							}
							>dd:nth-child(1){position:absolute; left:0; top:0;}		
							>dd:nth-child(3){position:absolute; right:10px; top:0;}
						}
					}
				}
			}
		}
		.coin{background:#fff; padding:0 15px 20px; box-sizing:border-box;
			>li{display:inline-block; font-size:14px; color:#333;}
			>li:last-child{margin-left:35px; font-weight:600;}
		}
		.article{width:100%; min-height:44px; padding:15px; box-sizing:border-box; word-break:break-all; background:#fff; font-size:14px; color:#666;}
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
			>li:after{content:""; display:block; width:100%; height:1px; transfrom:scaleY(0.5); background:#e5e5e5;}
			>li:nth-child(1){
				>a{
					dl{
						dd:nth-child(1){background:#f4b73f url(../../../static/img/commenticon.png) no-repeat 50% 50%; background-size:14px 15px;}
					}
				}
			}
			>li:nth-child(1):after,>li:nth-child(5):after{display:none;}
			>li:nth-child(2){margin-top:10px;
				>a{
					dl{
						dd:nth-child(1){background:#df6853 url(../../../static/img/coin.png) no-repeat 50% 50%; background-size:14px 15px;}
					}
				}
			}
			>li:nth-child(3){
				>a{
					dl{
						dd:nth-child(1){background:#54b4ef url(../../../static/img/wallet.png) no-repeat 50% 50%; background-size:14px 14px;}
					}
				}
			}
			>li:nth-child(4){
				>a{
					dl{
						dd:nth-child(1){background:#f1a764 url(../../../static/img/task.png) no-repeat 50% 50%; background-size:13px 15px;}
					}
				}
			}
			>li:nth-child(5){margin-top:10px;
				>a{
					dl{
						dd:nth-child(1){background:#5fcea6 url(../../../static/img/customer_service.png) no-repeat 50% 50%; background-size:14px 15px;}
					}
				}
			}
		}
	}
</style>