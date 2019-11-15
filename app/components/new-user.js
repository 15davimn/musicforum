import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    
    store: service(),
    currentUser: service(),

    actions: {
        submit() {
            console.log(this.get('username'));
            const store = this.get('store');
            const user = store.createRecord('user', {
                id: this.get('username'),
                password: this.get('password'),
                icon: this.get('icon'),
                tag: this.get('tag')
            });
            console.log("We made the user");
            console.log(user);
            user.save();
            currentUser.setUser(user);
            console.log(currentUser.user.username);
        }
    }
});
