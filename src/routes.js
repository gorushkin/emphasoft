const host = 'https://emphasoft-test-assignment.herokuapp.com';
const prefix = 'api/v1';

const routers = {
  login: () => [host, 'api-token-auth/'].join('/'),
  users: () => [host, prefix, 'users/',].join('/'),
  user: (id) => [host, prefix, 'users/', id].join('/'),
};

export default routers;