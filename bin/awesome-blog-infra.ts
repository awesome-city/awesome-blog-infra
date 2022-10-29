#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BackendStack } from '../lib/backend/resources/backend-stack';
import { BackendConfigPrd } from '../lib/backend/config/backend.config.prd';
import { BackendConfigDev } from '../lib/backend/config/backend.config.dev';
import { CommonStack } from '../lib/common/resources/common-stack';
import { CommonConfigPrd } from '../lib/common/config/common.config.prd';
import { CommonConfigDev } from '../lib/common/config/common.config.dev';

const app = new cdk.App();

const env = app.node.tryGetContext('env') as string;

const backendStack = new BackendStack(
  app,
  'AwesomeBlog-BackendStack',
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    stackName: 'awesome-blog-backend-stateful',
  },
  env === 'prd' ? BackendConfigPrd : BackendConfigDev
);

const commonStack = new CommonStack(
  app,
  'AwesomeBlog-CommonStack',
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    stackName: 'awesome-blog-backend-stateless',
  },
  env === 'prd' ? CommonConfigPrd : CommonConfigDev
);

backendStack.addDependency(commonStack);
