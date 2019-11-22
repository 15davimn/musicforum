import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    store: service(),
    currentuser: service(),
	loginStatus: 'LOGGED OUT (Beware! Passwords not secured yet)',
	
    actions: {
        submit() {
            this.set('loginStatus', 'LOGGING IN.....');
            const store = this.get('store');
            try {
            store.find('user', this.get('username')).then(user => {
                if (user.password == this.get('password')) {
                    const currentuser = this.get('currentuser');
                    currentuser.setUser(user);
                    this.set('loginStatus', 'LOGGED IN!');
                    localStorage.setItem('user', user.id);
					setTimeout(function(){window.location.replace('/')}, 1500);
                } else { 
                    this.set('loginStatus',"Could not log in.");
                }
            }).catch(error => {
                this.set('loginStatus',"Could not log in.");
            })
            } catch(e) {
            }
        }
    }
});
