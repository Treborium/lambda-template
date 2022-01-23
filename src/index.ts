import {
  APIGatewayProxyEventV2 as ApiGatewayEvent,
  APIGatewayProxyStructuredResultV2 as ApiGatewayResponse,
} from "aws-lambda";

export const handler = async (
  event: ApiGatewayEvent
): Promise<ApiGatewayResponse> => {
  console.log("incoming event:", JSON.stringify(event));
  return main();
};

// TODO: Rename function appropriatly
export const main = async (): Promise<ApiGatewayResponse> => {
  return { statusCode: 200, body: "Successfull response from Lambda!" };
};
