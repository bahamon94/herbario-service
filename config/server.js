module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1333),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4101f51c6fab85a4b996a17dc5e645d9'),
    },
  },
});
