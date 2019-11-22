import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

    store: service(),

    actions: {
        submit() {
            const store = this.get('store');
            const user = localStorage.user;
            const id = this.get('id');
            const thread = store.createRecord('thread', {
                id: id,
                owner: user
            });
            thread.save().catch(error => {
                window.location.replace('/');
            });
        }
    }
});
