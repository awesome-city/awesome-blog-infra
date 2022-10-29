import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import { CommonConfig } from '../config/common.config';
import { s3ModuleBucket } from './s3/s3-module-bucket';
import { s3ExternalBucket } from './s3/s3-external-bucket';
import { s3WebBucket } from './s3/s3-web-bucket';

export class CommonStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps, config: CommonConfig) {
    super(scope, id, props);

    s3ModuleBucket(this, config.s3);
    s3ExternalBucket(this, config.s3);
    s3WebBucket(this, config.s3);
  }
}
