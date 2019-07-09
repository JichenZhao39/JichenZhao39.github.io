import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import protocol1 from '@/components/protocol1.vue'
import protocol2 from '@/components/protocol2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/protocol1',
      name: 'protocol1',
      component: protocol1
    },{
      path: '/protocol2',
      name: 'protocol2',
      component: protocol2
    }
  ]
})
