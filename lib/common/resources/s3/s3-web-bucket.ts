import { S3Config } from './s3.config';
import { Stack } from 'aws-cdk-lib';
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';

export const s3WebBucket = (stack: Stack, config: S3Config) =>
  new Bucket(stack, 'WebBucket', {
    bucketName: config.webBucketName,
    accessControl: BucketAccessControl.PRIVATE,
  });
