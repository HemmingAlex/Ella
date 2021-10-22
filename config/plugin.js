module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      upload: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: "AKIAUS43QHS7Q32CHRZP",
          secretAccessKey: "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",
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
