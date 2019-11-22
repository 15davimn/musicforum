import Controller from '@ember/controller';

export default Controller.extend({

    user: null,

    loggedInMessage: "Not logged in",

    init() {
        this._super(...arguments);
        const user = localStorage.user;
        this.set('user', user);
        console.log(user);
        if (user) {
            this.set('loggedInMessage', "Welcome " + user + "!");
        }        
    },

    actions: {
        logout() {
            console.log("logging out...");
            localStorage.clear();
            window.location.replace('/');
        }
    }
});
