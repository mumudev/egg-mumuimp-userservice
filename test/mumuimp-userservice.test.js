'use strict';

const mock = require('egg-mock');

describe('test/mumuimp-userservice.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mumuimp-userservice-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mumuimpUserservice')
      .expect(200);
  });
});
