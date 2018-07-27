import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import logger from '@local/logger';

export default ({ parsedSettings }) =>
  new Promise(resolve => {
    logger.info('Serving...');

    const devServerConfig = parsedSettings[0].devServer;
    const host = devServerConfig.host;
    const port = devServerConfig.port;

    // webpack dev server
    parsedSettings[0].entry['devServerClient'] = [
      `webpack-dev-server/client?http://${host}:${port}/`
    ];

    // create server
    const server = new WebpackDevServer(
      webpack(parsedSettings[0]),
      devServerConfig
    );

    server.listen(port, host, () => {
      logger.info(`Listening on ${host}:${port}`);
      logger.info(`and external on ${devServerConfig.public}`);
    });

    resolve(server.close.bind(server));
  });
