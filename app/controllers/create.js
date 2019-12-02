import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['thread'],
    thread: null,

    actions: {
        submit() {
            console.log(this.get('thread'));
        }
    }
});
