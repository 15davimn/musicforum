import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    thread: DS.attr(),
    postNumber: DS.attr('number'),
    content: DS.attr(),
    user: DS.attr()
});
