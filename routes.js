// This file was added by layer0 init.
// You should commit this file to source control.
const ONE_HOUR = 60 * 60;
const ONE_DAY = 24 * ONE_HOUR;

const {Router} = require('@layer0/core/router');

module.exports = new Router()
  .match('/assets/:path*', ({cache}) => {
    cache({
      edge: {
        maxAgeSeconds: ONE_DAY,
        forcePrivateCaching: true,
      },
      browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_DAY,
      },
    });
  })
  .match('/', ({cache}) => {
    cache({
      edge: {
        maxAgeSeconds: ONE_DAY,
      },
      browser: false,
    });
  })
  .match('/collections/:path*', ({cache}) => {
    cache({
      edge: {
        maxAgeSeconds: ONE_DAY,
      },
      browser: false,
    });
  })
  .match('/products/:path*', ({cache}) => {
    cache({
      edge: {
        maxAgeSeconds: ONE_DAY,
        forcePrivateCaching: true,
      },
      browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_DAY,
      },
    });
  })
  .fallback(({renderWithApp}) => renderWithApp());
