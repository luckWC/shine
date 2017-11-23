import Vue from 'vue';
import Router from 'vue-router';
import header from '@/components/home/header/header.vue';
import follow from '@/components/home/content/follow.vue';
import details from '@/components/home/content/details.vue';
import recommend from '@/components/home/content/recommend.vue';
import findheader from '@/components/find/header/findheader.vue';
import findhot from '@/components/find/content/findhot.vue';
import news from '@/components/news/news.vue';
import my from '@/components/my/my.vue';
import edit from '@/components/my/edit.vue';
// import newest from '@/components/home/content/newest.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'',
      redirect: '/home'
    },
    {
      path:'/home',
      component:header,
      children:[
        {
          path:'/home',
          redirect: '/home/follow'
          //component: follow
        },
        {
          path: 'follow',
          name: 'follow',
          component: follow,
          children:[
            {
              path:'details',
              component:details
            }
          ]
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend
        }
      ] 
    },
    {
      path:'/find',
      component:findheader,
      children:[
        {
          path:'/find',
          redirect:'/find/hot'
        },
        {
          path:'hot',
          name:'findhot',
          component:findhot
        }
      ]
    },
    {
      path:'/news',
      component:news
    },
    {
      path:'/my',
      component:my,
      children:[
        {
          path:'edit',
          component:edit
        }
      ]
    }
  ]
})






















