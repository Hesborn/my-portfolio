import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import TheHead from './components/theheader'
import TheFooter from './components/thefooter'


Vue.component('the-head',TheHead)
Vue.component('the-footer',TheFooter)


Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {path:'/',component: Home},
    {path:'/bio',component: Bio},
    {path:'/projects',component: Projects}
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')