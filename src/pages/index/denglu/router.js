export default {
  path: '/denglu',
  component: r =>  require.ensure([], () => r(require('./denglu.vue')), 'denglu'),
};
