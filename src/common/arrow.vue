<template>
	<a href="javascript:;" class="arrow"></a>
</template>
<script>
export default {
  name: 'arrow',
}
</script>
<style lang="less">
	@import "../../static/css/demo.less";
	.arrow{display:inline-block; width:10px; height:10px; border-right:1px solid #999; border-bottom:1px solid #999; transform:scaleY(0.8) rotate(-45deg);}
</style>