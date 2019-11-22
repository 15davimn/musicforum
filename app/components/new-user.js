import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    
    store: service(),

    actions: {
        submit() {
            const store = this.get('store');
            const user = store.createRecord('user', {
                id: this.get('username'),
                password: this.get('password'),
                icon: this.get('icon'),
                tag: this.get('tag')
            });
            user.save();
          localStorage.setItem('user', this.get('username'))
            window.location.replace('/');
        }
    }
});
