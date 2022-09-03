module.exports = {
  apps: [
    {
      name: 'herbario-strapi',
      cwd: '/home/herbario/herbario-service',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: 'localhost', // database endpoint
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'herbario_BD', // DB name
        DATABASE_USERNAME: 'herbario', // your username for psql
        DATABASE_PASSWORD: 'herbario2022', // your password for psql
      },
    },
  ],
};
