import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    store: service(),
    currentuser: service(),
	loginStatus: 'LOGGED OUT',
	
    actions: {
        submit() {
            const store = this.get('store');
            try {
            store.find('user', this.get('username')).then(user => {
                if (user.password == this.get('password')) {
                    console.log("logged in!")
                    const currentuser = this.get('currentuser');
                    currentuser.setUser(user);
                    console.log(currentuser.get('user').id);
					this.set('loginStatus', 'LOGGING IN.....');
					setTimeout(function(){window.location.replace('create')}, 1500);
                } else { 
                    console.log("Could not log in.");
                }
            });
            } catch(e) {
                console.log("User not found!");
            }
        }
    }
});
