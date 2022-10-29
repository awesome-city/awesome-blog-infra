import { CommonConfig } from './common.config';

export const CommonConfigDev: CommonConfig = {
  phase: 'dev',
  s3: {
    moduleBucketName: 'dev-aws-blog-mdl',
    webBucketName: 'dev-aws-blog-web',
    externalBucketName: 'dev-aws-blog-ext',
  },
};
