export default function () {
  this.namespace = '/api';

  this.get('/threads', function () {
    return {
      data: [{
        type: 'threads',
        id: 'songs',
        attributes: {
          owner: 'admin',
          posts: 21
        }
      }, {
        type: 'threads',
        id: 'lyrics',
        attributes: {
          owner: 'admin',
          posts: 1
        }
      }]
    };
  });
}
