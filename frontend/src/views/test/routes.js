import Test from './views/test'

export default {
  routes: [
    {
        path: '/test',
        name: 'Test',
        component: Test,
        children: []
    }
  ]
}
