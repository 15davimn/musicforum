import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    username: DS.attr(),
    password: DS.attr(),
    icon: DS.attr(),
    bio: DS.attr()
});
