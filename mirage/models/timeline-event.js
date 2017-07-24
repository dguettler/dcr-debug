import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  timeline: belongsTo(),
  timelineEvent: belongsTo('timeline-event', { inverse: 'timelineEvents' }),
  timelineEvents: hasMany('timeline-event', { inverse: 'timelineEvent' }) // This seems wrong... why can I not define the inverse as timelineEvent
});
