import { test } from 'qunit';
import moduleForAcceptance from 'dcr-debug/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /application', function(assert) {

  const timeline = server.create('timeline');
  const event = server.create('event', { timeline });

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
