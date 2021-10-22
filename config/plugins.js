module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      upload: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: "dt6mvxx9u",
          api_key: "249732929916245",
          api_secret: "FViuQkJvcY23fjB-y1GW8cXees8",
        },
      },
    };
  }
  return {};
};
