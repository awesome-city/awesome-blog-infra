import { S3Config } from '../resources/s3/s3.config';

export interface CommonConfig {
  phase: 'prd' | 'dev';
  s3: S3Config;
}
