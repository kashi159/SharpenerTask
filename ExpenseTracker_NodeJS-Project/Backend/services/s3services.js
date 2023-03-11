const AWS = require('aws-sdk');

const uploadToS3= (data, filename)=> {
    const BUCKET_NAME = 'expensetrackerapp159';
    const IAM_USER_KEY = 'AKIA2DHNOY74GHAXP5TK';
    const IAM_USER_SECRET = '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';
  
    let s3bucket = new AWS.S3({
      accessKeyId: IAM_USER_KEY,
      secretAccessKey: IAM_USER_SECRET
    });
  
    return new Promise((resolve, reject) => {
      var params = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Body: data,
        ACL: 'public-read'
      };
      s3bucket.upload(params, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.Location);
        }
      });
    });
  }

  module.exports = {
    uploadToS3
  }