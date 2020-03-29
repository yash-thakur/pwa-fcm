import GuestRoutes from './pages/guest';

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
      ...GuestRoutes,
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
