import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),

    test: "five",
    //user: this.get('store').findRecord('user', this.get('model').user)
});
