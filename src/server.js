import React from 'react';

export default class Server {
  // eslint-disable-next-line
  apply(serverHandler) {
    serverHandler.hooks.beforeHtmlRender.tapPromise('DSNPreCache', async (Application) => {
      const { htmlProps: { head } } = Application;
      head.push(<meta key="meta-theme-color" name="theme-color" content="#209cee" />);
      //
    });

  }
}
