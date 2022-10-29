import { Fn, Stack } from 'aws-cdk-lib';
import { Function, Runtime, S3Code } from 'aws-cdk-lib/aws-lambda';
import { BackendConfig } from '../../config/backend.config';
import { Bucket } from 'aws-cdk-lib/aws-s3';

export const lambdaForClient = (stack: Stack, config: BackendConfig) => {
  return new Function(stack, 'ClientFunction', {
    functionName: 'awesome_blog_client',
    runtime: Runtime.PROVIDED_AL2,
    environment: {
      OBJECT_TABLE_NAME: config.dynamodb.object_table_name,
      RELATION_TABLE_NAME: config.dynamodb.relation_table_name,
    },
    code: new S3Code(Bucket.fromBucketName(stack, '', ''), 'd'),
    handler: 'lambdaHandler',
  });
};
