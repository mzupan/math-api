import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const { num1, num2 } = JSON.parse(event.body);

  const result = num1 + num2;

  return {
    statusCode: 200,
    body: JSON.stringify({ result }),
  };
}