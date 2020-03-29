export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/home'),
    seo: {
      title: 'Home | ReactPWA Demo',
      description: 'Feature set offered by ReactPWA with pluggable @pawjs plugins. ReactPWA is highly customizable and once can achieve anything as it is extendable',
    },
  },
];
