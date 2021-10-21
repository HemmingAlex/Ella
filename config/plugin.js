module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      upload: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: "N0DFXIGSyHFE0GEgayK42gC50FNtHRsAkis+pdJW",
          secretAccessKey: "AKIAUS43QHS75NILWEPE",
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
