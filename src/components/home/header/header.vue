<template>
	<div>
		<div class="header">
			<ul>
				<li>
					<router-link to="/home/follow">关注</router-link>
				</li>
				<li>
					<router-link to="/home/recommend">推荐</router-link>
				</li>
				<li>
					<router-link to="/home/newest">最新</router-link>
				</li>
			</ul>
		</div>
		<div class="border10"></div>
		<router-view></router-view>
	</div>
</template>
<script>

</script>
<style lang="less">
	.header{width:100%; background:#f15a4a; padding:15px 0 5px;
		ul{width:250px; display:table; margin:0px auto 0px;
			li{display:table-cell;
				a{display:block; color:#fff; font-size:18px; text-align:center;}
				a:after{content:""; display:block; margin:6px auto 0; width:23px; height:2px; background:"";}
				.router-link-active:after{background:#fff;}
			}
			
		}
	}
</style>












