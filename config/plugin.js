module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      upload: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: "AKIAUS43QHS7Q32CHRZP",
          secretAccessKey: shhhhhh,
          region:"eu-west-2",
          params: {
            Bucket: "ellathephotographer",
          },
        },
      },
    };
  }
  return {
      
  }
};
