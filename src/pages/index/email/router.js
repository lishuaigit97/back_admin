export default {
  path: '/email',
  component: r =>  require.ensure([], () => r(require('./email.vue')), 'email'),
};
