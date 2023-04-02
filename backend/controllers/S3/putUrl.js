const aws = require('aws-sdk')
const crypto = require('crypto')
let {promisify} = require("util");


const region = process.env.AWS_BUCKET_REGION
const bucketName = "testing-node-upload-22"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3(
    {
        region,
        accessKeyId,
        secretAccessKey,
        signatureVersion: 'v4'
    }
)

async function generateUploadURL(req,res){
    try {
        if(!req.user)
        {
            return res.status(404).send({status: "not ok"})
        }
    const rawBytes = crypto.randomBytes(16);
    const imageName = rawBytes.toString('hex')
    
    const params = ({
        Bucket : bucketName,
        Key : imageName,
        Expires : 60
    })
    
    const uploadURL = await s3.getSignedUrlPromise('putObject',params)

    //use different get and put methods from following docs link
    //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrlPromise-property

    if(uploadURL)
    {
        return res.status(200).send({status: "ok",url: uploadURL})
    }
} catch (err) {
    console.log(err);
}
}

module.exports = {generateUploadURL}
