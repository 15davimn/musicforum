import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    store: service(),

    init() {
        this._super(...arguments);
        this.setUser();
    },

    icon: null,

    setUser() {
        const store = this.get('store');
        const user = this.get('model.owner');
        store.find('user', user).then(foundUser => {
            this.set('icon', foundUser.icon);
        });
    }

});

