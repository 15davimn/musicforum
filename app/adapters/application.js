import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://musicforumapi.herokuapp.com/api',
    headers: {
        'Accept': 'application/json'
    }
});
