const First = {
  template: '<div>First</div>'
}
const Second = {
  template: '<div>Second</div>'
}

const routes = [
  { path: '/first', component: First },
  { path: '/second', component: Second }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
