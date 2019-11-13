import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        /* var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log(this.response);
        };
        xhttp.open("GET", "http://localhost:8080/api/api/threads", true);
        xhttp.send(); */
        return this.store.findAll('thread');
    }
});
