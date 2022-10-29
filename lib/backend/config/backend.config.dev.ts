import { BackendConfig } from './backend.config';

export const BackendConfigDev: BackendConfig = {
  phase: 'dev',
  dynamodb: {
    object_table_name: 'aws_blog_dev_object_table',
    object_table_name_output: 'aws_blog_dev_object_table_name',
    relation_table_name: 'aws_blog_dev_relation_table',
    relation_table_name_output: 'aws_blog_dev_relation_table_name',
  },
};
