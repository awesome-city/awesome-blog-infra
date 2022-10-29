import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import { DynamodbConfig } from './dynamodb.config';

export const dynamodbObjectTable = (stack: Stack, config: DynamodbConfig) =>
  new Table(stack, 'ObjectTable', {
    tableName: config.object_table_name,
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
