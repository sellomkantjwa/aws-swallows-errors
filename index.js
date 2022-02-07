const {
    S3Client,
    HeadBucketCommand,
} = require('@aws-sdk/client-s3');


const input = {
    Bucket: 'a-bucket',
};
const command = new HeadBucketCommand(input);
const client = new S3Client({
    region: 'eu-west-1',
    credentials:{
        "accessKeyId":process.env.AWS_ACCESS_KEY_ID,
        "secretAccessKey": process.env.SECRET_ACCESS_KEY
    }
});

client.send(command, (err, data) => {
    console.log('after send');
    throw new Error('I am an error');
});
