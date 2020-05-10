export default {
  path: '/denglu/forget',
  component: r =>  require.ensure([], () => r(require('./forget.vue')), 'forget'),
};
