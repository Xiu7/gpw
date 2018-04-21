import Vue from 'vue'
import Router from 'vue-router'
import IndexProject from '@/components/IndexProject'
import IndexProcess from '@/components/IndexProcess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexProject',
      component: IndexProject
    },
    {
      path: '/index-project',
      name: 'IndexProject',
      component: IndexProject
    },
    {
      path: '/index-process',
      name: 'IndexProcess',
      component: IndexProcess
    }
  ]
})
