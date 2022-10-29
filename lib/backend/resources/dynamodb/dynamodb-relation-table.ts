import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import { BackendConfig } from '../../config/backend.config';
import {DynamodbConfig} from './dynamodb.config';

export const dynamodbRelationTable = (stack: Stack, config: DynamodbConfig) =>
  new Table(stack, 'RelationTable', {
    tableName: config.relation_table_name,
    partitionKey: {
      name: 'hashKey',
      type: AttributeType.STRING,
    },
    sortKey: {
      name: 'rangeKey',
      type: AttributeType.STRING,
    },
    timeToLiveAttribute: 'ttl',
    billingMode: BillingMode.PAY_PER_REQUEST,
    removalPolicy: RemovalPolicy.RETAIN,
  });
