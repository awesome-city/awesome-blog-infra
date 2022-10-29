import { DynamodbConfig } from '../resources/dynamodb/dynamodb.config';

export interface BackendConfig {
  phase: 'prd' | 'dev';
  dynamodb: DynamodbConfig;
}
