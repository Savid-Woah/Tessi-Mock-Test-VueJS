<template>
  
      <router-view v-slot=" {Component}">
        <transition :name="transitionName" mode="out-in">  
          <component  :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */

.slide-enter-active
/* .slide-leave-active */{
  transition: opacity 1s, transform 0.5s;
}


.slide-enter-from
/* .slide-leave-to */{
  transform: translateX(100%);

  
}

.fade-enter-active
/* .slide-leave-active */{
  transition: opacity 1s, transform 0.5s ease;
}


.fade-enter-from
/* .slide-leave-to */{
  transform: translateX(-100%);
  
}

.up-enter-active
/* .slide-leave-active */{
  transition:  transform 0.5s;
}


.up-enter-from
/* .slide-leave-to */{

  transform: translateY(100%);

  
}

.down-enter-active
/* .slide-leave-active */{
  transition:  transform 0.6s;

}


.down-enter-from
/* .slide-leave-to */{

  transform: translateY(-100%);
  

  
}


</style>

<script>
export default {
  computed: {
    transitionName() {
      // Verificar si la ruta actual tiene la clase "product-view"
      const currentRoute = this.$route;
      if (currentRoute.meta.viewClass === 'product-view') {
        return 'slide'; // Aplicar la transición "slide" solo a la vista "user/product"
      } else if (currentRoute.meta.viewClass === 'index-view') {
        return 'fade'; // Aplicar la transición "fade" a las demás vistas
      } else if (currentRoute.meta.viewClass === 'review-view'){
        return 'down';
      }  else if (currentRoute.meta.viewClass === 'cart-view'){
        return 'up';
      }
      else {
        return 'default'; // Transición genérica para vistas sin clase específica
      }
    },
  },
};
</script>
