import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    owner: DS.attr(),
    posts: DS.attr('number')
});