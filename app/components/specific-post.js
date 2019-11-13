import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),

    init() {
        this._super(...arguments);
        this.findUser();
    },

    user: null,

    findUser() {
        const store = this.get('store');
        const id = this.get('model.user');
        store.find('user', id).then(foundUser => {
            this.set('user', foundUser);
        });
    }
    //user: this.get('store').findRecord('user', this.get('model').user)
});
