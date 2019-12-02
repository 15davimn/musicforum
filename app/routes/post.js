import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        var toReturn = [];
        toReturn.threadId = params.thread_id;
        return this.store.findAll('post').then(function(thePosts) {
        thePosts.forEach(function(item) {
            if (item.thread == params.thread_id) {
                toReturn.push(item);
            }
        });
        return toReturn;
    })
    //return this.store.query('post', { thread: params.thread_id });
    }
});
