<template>
	<div class="findhot">
		<div class="banner img">
			<a href="javascript:;" style="background-image:url(../../../../static/img/findbanner.jpg)"></a>
		</div>
		<div class="list">
			<hot-list v-for="(v,i) in msg" v-bind:hot="v"></hot-list>
		</div>
	</div>
</template>
<script>
import hotlist from './hotlist.vue';
export default {
  name: 'findhot',
  components:{
    'hot-list': hotlist
  },
  data (){
    return {
      msg: ''
    }
  },
  computed : {
    
  },
  created (){
    this.$http.get('/api/hot').then(function (data) {
        this.msg = data.body.data;
        console.log(this.msg);
      })
  }
}
</script>
<style lang="less">
	.findhot{
		.banner{width:100%; height:170px;}
		.list{padding:0 15px; box-sizing:border-box;}
	}
</style>












