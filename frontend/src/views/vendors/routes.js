import Vendors from './views/vendors/index.vue'
import Vendor  from './views/vendor/index.vue'

export default {
  routes: [
    {
      path: '/vendor',
      name: 'Vendors',
      component: Vendors,
      children: [
        {
          path: '/vendor/:id',
          name: 'Vendor',
          component: Vendor
        }
      ]
    }
  ]
}
