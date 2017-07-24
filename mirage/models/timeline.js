import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  timelineEvents: hasMany('timeline-event', { polymorphic: true })
});
