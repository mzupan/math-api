import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';

import { Construct } from 'constructs';

export class MathApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the Lambda 
    const handler = new lambdaNodejs.NodejsFunction(this, 'AdditionHandler', {
      entry: 'src/handlers/addition.ts',
      handler: 'handler',
    });

    // Create the API Gateway
    const api = new apigateway.RestApi(this, 'AdditionAPI');

    // Define the API method to call the Lambda
    const resource = api.root.addResource('add');
    const integration = new apigateway.LambdaIntegration(handler);
    resource.addMethod('POST', integration);

    // Output the API URL after deployment to know where to access the API
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
    });
  }
}
