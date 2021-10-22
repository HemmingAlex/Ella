module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: "https://ellaphotos.herokuapp.com/",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e93f03069e0ca427a9d938277927078e'),
    },
  },
});
