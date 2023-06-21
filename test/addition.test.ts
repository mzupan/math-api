import { handler } from '../src/handlers/addition';

describe('Addition Handler', () => {
  test('should add two numbers', async () => {
    const event = {
      body: JSON.stringify({
        num1: 5,
        num2: 10,
      }),
    };

    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        result: 15,
      }),
    };

    const result = await handler(event);
    
    expect(result).toEqual(expectedResponse);
  });
});