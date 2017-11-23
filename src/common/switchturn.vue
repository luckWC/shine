<template>
 	<div class="switch" v-bind:class="{'open':open}" @click="turn">
 		<i></i>
 	</div>
</template>

<script>
export default {
  name: 'switch',
  data () {
    return {
      open: false
    }
  },
  methods: {
	turn (){
		this.open=!this.open
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
/*@import "../../static/css/demo.less";*/
	.switch{width:43px; height:25px; border-radius:13px; background:#ccc; position:relative;i{display:block; width:23px; height:23px; border-radius:50%; background:#fff; position:absolute; z-index:20; top:1px; left:1px; transition:all 0.5s;}
	}
	.open{background:#f15a4a;
		>i{left:19px;}
	}
</style>