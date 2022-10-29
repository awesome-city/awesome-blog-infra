import { CfnOutput, NestedStack, NestedStackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { dynamodbObjectTable } from './dynamodb-object-table';
import { dynamodbRelationTable } from './dynamodb-relation-table';
import { DynamodbConfig } from './dynamodb.config';

export class DynamodbNestedStack extends NestedStack {
  constructor(scope: Construct, id: string, props: NestedStackProps, config: DynamodbConfig) {
    super(scope, id, props);

    const objectTable = dynamodbObjectTable(this, config);
    const relationTable = dynamodbRelationTable(this, config);

    new CfnOutput(this, 'objectTableNameOutput', {
      exportName: config.object_table_name_output,
      value: objectTable.tableName,
    });

    new CfnOutput(this, 'relationTableNameOutput', {
      exportName: config.relation_table_name_output,
      value: relationTable.tableName,
    });
  }
}
