'use strict';

import app from 'healthcheck';
import configure from 'qconf';

const
  config = configure(),
  port = config.get('healthcheck-port') || 3001;

app.listen(port, function () {
  app.log.info(`Listening on port ${port}`);
});
