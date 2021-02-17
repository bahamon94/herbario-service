module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'herbario_BD'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'herbario.123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
// postgres://udjdtsogmoxlid:3bbc63fd557e6a9280affc92dad47ce8cf8d2e1e279c2073c23d746f080e1107@ec2-34-230-167-186.compute-1.amazonaws.com:5432/d4tji06482q16i