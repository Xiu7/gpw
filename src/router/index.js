import Vue from 'vue'
import Router from 'vue-router'
import IndexProject from '@/components/IndexProject'
import IndexProcess from '@/components/IndexProcess'
import MonitorMap from '@/components/MonitorMap'
import MonitorCondition from '@/components/MonitorCondition'
import HistoryShow from '@/components/HistoryShow'

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
    },
    {
      path: '/monitor-map',
      name: 'MonitorMap',
      component: MonitorMap
    },
    {
      path: '/monitor-condition',
      name: 'MonitorCondition',
      component: MonitorCondition
    },
    {
      path: '/history-show',
      name: 'HistoryShow',
      component: HistoryShow
    }
  ]
})
