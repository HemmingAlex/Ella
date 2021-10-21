const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    const config = parse("postgres://jdoncpluddjfaa:7887de41ba79590b53c0f24ad7b38e849b93a1a02979bfa394dc432b6385128e@ec2-54-220-195-236.eu-west-1.compute.amazonaws.com:5432/dbu4n2gel4kqe6");
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: config.host,
            post: config.port,
            database: config.database,
            username: config.user,
            password: config.password,
          },
          options: {
            ssl: false,
          },
        },
      },
    };
  }
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "sqlite",
          filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
};
