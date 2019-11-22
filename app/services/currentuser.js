import Service from '@ember/service';

export default Service.extend({

    user: null,

    setUser(newUser) {
        this.set('user', newUser);
    }
});
