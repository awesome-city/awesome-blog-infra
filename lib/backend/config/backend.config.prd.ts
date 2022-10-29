import { BackendConfig } from './backend.config';

export const BackendConfigPrd: BackendConfig = {
  phase: 'prd',
  dynamodb: {
    object_table_name: 'aws_blog_object_table',
    object_table_name_output: 'aws_blog_object_table_name',
    relation_table_name: 'aws_blog_relation_table',
    relation_table_name_output: 'aws_blog_relation_table_name',
  },
};
