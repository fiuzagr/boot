// Vendor
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import map from 'lodash/map';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';

// local
import logger from 'logger';

const getServeSettings = context => {
  logger.info('Getting serve settings...');

  const args = map(context.args._, arg => arg.replace(/\//g, '.'));
  const serveSettings = map(args, arg => {
    const sett = get(context.settings, arg);
    return typeof sett === 'function' ? sett(cloneDeep(context)) : sett;
  });

  logger.debug(serveSettings);

  return Promise.resolve({
    ...context,
    serveSettings
  });
};

export default (context = {}) =>
  getServeSettings(context).then(
    ({ serveSettings, paths }) =>
      new Promise(resolve => {
        logger.info('Serving...');

        const host = serveSettings[0].devServer.host;
        const port = serveSettings[0].devServer.port;

        // webpack dev server
        serveSettings[0].entry['devServerClient'] = [
          paths.boot.modules +
            '/webpack-dev-server/client?' +
            `http://${host}:${port}/`
        ];

        // create server
        const server = new WebpackDevServer(
          webpack(serveSettings[0]),
          serveSettings[0].devServer
        );

        server.listen(host, port, () =>
          logger.info(`Listening on ${host}:${port}`)
        );

        resolve();
      })
  );
