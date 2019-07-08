const First = {
  template: '<div>foo</div>'
}
const Second = {
  template: '<div>bar</div>'
}

const routes = [
  { path: '/foo', component: First },
  { path: '/bar', component: Second }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
