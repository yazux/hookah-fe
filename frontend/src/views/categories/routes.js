import Categories from './views/categories/index.vue'
import Category from './views/category/index.vue'

export default {
  routes: [
    {
      path: '/category',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category
    }
  ]
}
