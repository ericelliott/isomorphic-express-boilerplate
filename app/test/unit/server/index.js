'use strict';

import test from 'blue-tape';
import supertest from 'supertest';
import app from 'server';
import arrayIntersect from 'array-intersection';

export default function client () {

  test('Index page route', (assert) => {
    supertest(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        const
          body = res.text,

          contains = (response) => {
            return JSON.stringify(response).indexOf('Hello, world!') !== -1;
          };

        assert.error(err, 'Should not return an error.');

        assert.equal(contains(body), true,
          'Should contain the text, "Hello, World!"');

        assert.end();
      });
  });

  test('X-powered by header', (assert) => {
    supertest(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        const
          headers = res.headers,
          headerKeys = Object.keys(headers),
          keys = ['X-powered-by', 'x-powered-by', 'X-Powered-By'],
          intersection = arrayIntersect(keys, headerKeys);

        assert.error(err, 'Should not return an error.');

        assert.deepEqual(intersection, [],
          'Should not send x-powered-by headers');

        assert.end();

      });
  });

}
