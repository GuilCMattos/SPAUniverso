export class Router {
  routes = {}

  add(routeName, page) { 
    this.routes[routeName] = page
  }


   route(event) { 
    event = event || window.event
    event.preventDefault() // Cancela os eventos
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }
  
   handle() { 
    // pathname é geralmente a / onde está localizado a página
    const { pathname }  = window.location  // Ele pega um bgl que esqueci mas ajuda
    const route = this.routes[pathname] || this.routes[404]
    
    
    
    fetch(route)
    .then(data =>  data.text())
    .then(value => {
  
      document.querySelector('#app').innerHTML = value
    })
  
    
    
  }
}