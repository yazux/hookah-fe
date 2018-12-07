import Login from './views/login/index.vue';
import Signup from './views/signup/index.vue';

export default {
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children: []
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      children: []
    }
  ]
}
