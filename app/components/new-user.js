import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    
    store: service(),
    currentuser: service(),

    actions: {
        submit() {
            const currentuser = this.get('currentuser');
            const store = this.get('store');
            const user = store.createRecord('user', {
                id: this.get('username'),
                password: this.get('password'),
                icon: this.get('icon'),
                tag: this.get('tag')
            });
            user.save();
            currentuser.setUser(user);
            console.log(currentuser.user)
            //setTimeout(function(){window.location.replace('/')}, 0);
        }
    }
});
