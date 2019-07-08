const First = {
  template: `<div>
               <h1>First</h1>
               <button @click="reset">reset</button>
               <input @keyup.enter="addItem" type=text/>
               <ul>
                 <li v-for="item in lists" :key="item.id">{{ item.val }}</li>
               </ul>
            </div>`,
  data: function(){
    return {
      lists: []
    }
  },
  created(){
    console.log('created: First')
    this.lists = JSON.parse(localStorage.getItem('lists'))
  },
  methods: {
    addItem(e){
      console.log('addItem: First')
      this.lists.push({
        val: e.target.value,
        id: (new Date()).getTime()
      })
      localStorage.setItem('lists', JSON.stringify(this.lists))
    },
    reset() {
      this.lists = [];
      localStorage.setItem('lists', JSON.stringify(this.lists))
    }
  }
}
const Second = {
  template: `<div>
               <h1>Second</h1>
            </div>`
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
