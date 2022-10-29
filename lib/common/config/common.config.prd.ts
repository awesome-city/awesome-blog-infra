import { CommonConfig } from './common.config';

export const CommonConfigPrd: CommonConfig = {
  phase: 'prd',
  s3: {
    moduleBucketName: 'aws-blog-mdl',
    webBucketName: 'aws-blog-web',
    externalBucketName: 'aws-blog-ext',
  },
};
