export default {
  path: '/page2',
  component: r =>  require.ensure([], () => r(require('./page2.vue')), 'page2'),
};
