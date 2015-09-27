'use strict';

import test from 'blue-tape';
import supertest from 'supertest';
import app from 'healthcheck';
import fs from 'fs';
import root from 'rootrequire';
import pkg from `${root}/package.json`;

const
  buildPath = `${root}/config/BUILD`,
  build = fs.readFileSync(buildPath, 'utf8').trim();

export default function client () {

  test('Healthcheck server', (assert) => {
    supertest(app)
      .get('/version')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        const
          body = JSON.parse(res.text),
          name = pkg.name,
          version = pkg.version;

        assert.error(err, 'Should not return an error.');

        assert.equal(name, body.name,
          'Should return app name');

        assert.equal(version, body.version,
          'Should return app version');

        assert.equal(build, body.build,
          'Should return app build hash');

        assert.end();
      });
  });

}
