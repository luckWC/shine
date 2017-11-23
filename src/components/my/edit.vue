<template>
	<div class="edit">
		<div class="header">
			<a href="javascript:;" @click="$router.go(-1)"></a>
			<h3>设置</h3>
		</div>
		<ul>
			<li>
				<a href="javascript:;">私信设置
					<arrow></arrow>
				</a>
			</li>
			<li>
				<a href="javascript:;">私信通知
					<switchturn></switchturn>
				</a>
			</li>
			<li>
				<a href="javascript:;">精彩内容推送
					<switchturn></switchturn>
				</a>
			</li>
			<li style="margin-top:10px;"> 
				<a href="javascript:;">地理位置公开
					<switchturn></switchturn>
				</a>
			</li>
			<li>
				<a href="javascript:;">谁可以看我的交友资料
					<arrow></arrow>
				</a>
			</li>
			<li style="margin-top:10px;">
				<a href="javascript:;">帮助
					<arrow></arrow>
				</a>
			</li>
			<li>
				<a href="javascript:;">清楚缓存
					<arrow></arrow>
				</a>
			</li>
			<li>
				<a href="javascript:;">用户协议
					<arrow></arrow>
				</a>
			</li>
			<li>
				<a href="javascript:;">当前版本
					<arrow></arrow>
				</a>
			</li>
			<li>
				<a href="javascript:;">私信设置
					<arrow></arrow>
				</a>
			</li>
		</ul>
		<div class="footer">
			<ol>
				<li>
					<a href="javascript:;">推荐好友</a>
				</li>
				<li>
					<a href="javascript:;">意见反馈</a>
				</li>
			</ol>
		</div>
	</div>	
</template>
<script>
import arrow from '../../common/arrow.vue';
import switchturn from '../../common/switchturn.vue';
export default {
  name: 'news',
  components:{
    'arrow': arrow,
    'switchturn':switchturn
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
	.edit{height:100%; background:#efeff4; position:absolute; top:0; left:0; width:100%; z-index:10;
		.header{width:100%; background:#f15a4a; padding:5px 0; position:relative;
			h3{font-size:18px; color:#fff; text-align:center; line-height:42px;}
			a{display:block; position:absolute; width:10px; height:18px; left:15px; top:18px; background:url(../../../static/img/arrow.png) no-repeat 50% 50%; background-size:10px 18px;}
		}
		ul{margin-top:10px;
			>li{background:#fff; padding:0 15px; box-sizing:border-box;
				>a{display:block; font-size:16px; color:#333; line-height:45px;
					>a{float:right; margin-top:17px;}
					>.switch{float:right; margin-top:10px;}
				}
				>a:after{content:""; display:block; width:100%; height:1px; background:#e5e5e5; transform:scaleY(0.5);
				}
			}
			>li:nth-child(3),>li:nth-child(5),>li:last-child{
				>a:after{display:none;}
			}
		}
		.footer{position:fixed; width:100%; left:0; bottom:0; background:#fff;
			ol{display:table; width:100%;
				li{display:table-cell;
					a{display:block; color:#2c2929; font-size:16px; line-height:50px; text-align:center; position:relative;}
				}
				li:first-child a:before{content:""; display:inline-block; width:1px; height:25px; background:#ccc; transform:scaleX(0.5); position:absolute; top:13px; right:0;}
			}
		}
	}
</style>