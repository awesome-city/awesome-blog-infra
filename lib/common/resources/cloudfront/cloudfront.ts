import { NestedStack, NestedStackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CloudfrontConfig } from './cloudfront.config';

export class Cloudfront extends NestedStack {
  constructor(scope: Construct, id: string, props: NestedStackProps, config: CloudfrontConfig) {
    super(scope, id, props);

    const webBucket = Bucket.fromBucketName(scope, 'WebBucket', 'aws-blog-');

    const identity = new OriginAccessIdentity(scope, 'OriginAccessIdentity', {
      comment: ``,
    });
  }
}
