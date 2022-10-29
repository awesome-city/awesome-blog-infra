import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BackendConfig } from '../config/backend.config';
import { DynamodbNestedStack } from './dynamodb/dynamodb-nested-stack';
import { lambdaForClient } from './lambda/lambda-for-client';

export class BackendStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps, config: BackendConfig) {
    super(scope, id, props);

    const dynamodbStack = new DynamodbNestedStack(this, 'dynamodb-stack', props, config.dynamodb);
    lambdaForClient(this, config);
  }
}
