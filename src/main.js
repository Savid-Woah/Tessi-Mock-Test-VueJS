import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App); // Crea la instancia de la aplicación

app.use(router); // Agrega Vue Router como un complemento

app.mount('#app'); 



// router.beforeEach((to, from, next) => {

//     const token = localStorage.getItem('token');
  
//     if (!token) {
//       if (to.path !== '/login') {
//         next('/login');
//       } else {
//         next();
//       }
//     } else {
//       next();
//     }
// }); 

// ---------- Agregar ---------- funcionalidad para validar si el token es valido

function isTokenExpired(token) {

    const { exp } = JSON.parse(atob(token.split('.')[1]));
  
    const currentTime = Math.floor(Date.now() / 1000);
  
    const expirationTime = exp - (24 * 60 * 60);
  
    return currentTime > expirationTime;
}


