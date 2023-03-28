import Vue from 'vue'
import Router from 'vue-router'
import AppView from './components/AppView.vue'
import Main from './components/Main.vue'
import DataForm from './components/DataForm.vue'
import Test from './components/Test.vue'

// import ClinicalOnly from './components/ClinicalOnly.vue'
// import AIAndClinicals from './components/AIAndClinicals.vue'
// import AIAndClinicalAndExplainability from './components/AIAndClinicalAndExplainability.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/app-view',
        name: 'app-View',
        component: AppView
    },
    {
      path: '/data-form',
      name: 'data-form',
      component: DataForm
    },
    {
      path: '/data-form2',
      name: 'data-form2',
      component: Test
    }
    // {
    //   path: '/aiAndClinicals',
    //   name: 'aiAndClinicals',
    //   component: AIAndClinicals
    // },
    // {
    //   path: '/aiAndClinicalAndExplainability',
    //   name: 'aiAndClinicalAndExplainability',
    //   component: AIAndClinicalAndExplainability
    // }
  ]
})
