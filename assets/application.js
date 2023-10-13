// Put your application javascript here

const store = Vue.reactive({
<<<<<<< HEAD
  state: {
    cartState: []
  },

  getCart() {
    axios.get('/cart.js')
      .then(response => {
        this.state.cartState.unshift(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
})

const miniCartState = Vue.reactive({
  hidden: true
})

const toggleMiniCart = {
  openCart() {
    miniCartState.hidden = !miniCartState.hidden
    menuState.hidden = true
  }
}

const menuState = Vue.reactive({
  hidden: true
})

const toggleMenu = {
  openMenu() {
    menuState.hidden = !menuState.hidden
    miniCartState.hidden = true
  }
}

const toggleClose = {
  closeAll() {
    miniCartState.hidden = true
    menuState.hidden = true
  }
}
=======
    state: {
        cartState: []
    },

    getCart() {
        axios.get('/cart.js')
          .then(response => {
               this.state.cartState.unshift(response.data) 
          })
          .catch(error => {
              console.log(error)
          })
    }     
})

//for minicart-slide
const miniCartState = Vue.reactive({
    hidden: true
})

const toggleMiniCart = {
    openCart() {
        miniCartState.hidden = !miniCartState.hidden
        menuState.hidden = true
    }
}

const menuState = Vue.reactive({
    hidden: true
})

const toggleMenu = {
    openMenu() {
        menuState.hidden = !menuState.hidden
        miniCartState.hidden = true
    }
}

const toggleClose = {
    closeAll() {
        miniCartState.hidden = true
        menuState.hidden = true
    }
}


>>>>>>> origin/2.0
