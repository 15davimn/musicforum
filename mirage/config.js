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
        },
      },
      {
        type: 'threads',
        id: 'hip new tunes',
        attributes: {
          owner: 'cooluser4',
          posts: 3
        },
      }]
    };
  });

  this.get('/users', function () {
    return {
      data: [{
          type: 'user',
          id: 'cooluser4',
          attributes: {
            password: 'imsocool',
            url: 'https://www.pngkey.com/png/detail/21-213766_january-forum-contest-discord-server-logo-community-cool.png',
            bio: 'wassuuuuuuup'
          }
        },
        {
          type: 'user',
          id: 'marvelfan',
          attributes: {
            username: 'marvelfan',
            password: 'stevedeservedbetter',
            url: 'data:image/png;base64,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',
            bio: 'Friendly neighborhood marvel fan'
          }
        }
      ]
    };
  });

  this.get('/threads/songs', function () {
    return {
      data: {
        type: 'threads',
        id: 'songs',
        attributes: {
          owner: 'admin',
          posts: 21
        }
      }
    };
  });

  this.get('/posts', function() {
    return {
      data: [{
        type: 'posts',
        id: 1,
        attributes: {
          thread: 'songs',
          postnumber: 1,
          content: 'I think the Avengers theme is one of the best soundtrack pieces of all time.',
          user: 'marvelfan'
        }
      },
      {
        type: 'posts',
        id: 2,
        attributes: {
          thread: 'songs',
          postnumber: 2,
          content: 'Wait, no, the Thor theme!',
          user: 'marvelfan'
        }
      },
      {
        type: 'posts',
        id: 3,
        attributes: {
          thread: 'lyrics',
          postnumber: 1,
          content: 'I wish I could write.',
          user: 'marvelfan'
        }
      }]
    };
  });

  this.get('/api/posts?thread=songs', function() {
    return {
      data: [{
        type: 'posts',
        id: 1,
        attributes: {
          thread: 'songs',
          postnumber: 1,
          content: 'I think the Avengers theme is one of the best soundtrack pieces of all time.',
          user: 'marvelfan'
        }
      },
      {
        type: 'posts',
        id: 2,
        attributes: {
          thread: 'songs',
          postnumber: 2,
          content: 'Wait, no, the Thor theme!',
          user: 'marvelfan'
        }
      }]
    };
  });
}
