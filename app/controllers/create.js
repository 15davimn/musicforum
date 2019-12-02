import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    queryParams: ['thread'],

    thread: null,

    user: localStorage.user,

    store: service(),

    actions: {
        submit() {
            const thread = this.get('thread');
            const post = this.get('post');
            const user = this.get('user');
            const store = this.get('store');
            const newPost = store.createRecord('post', {
                id: 88,
                thread: thread,
                content: post,
                user: user
            });
            newPost.save().catch(error => {
                window.location.replace('/');
            });
        }
    }
});
