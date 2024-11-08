const options = {
    openapi: "OpenAPI 3",
    language: "en-US",
    disableLogs: false,
    autoHeaders: false,
    autoQuery: true,
    autoBody: true,

  };
  const generateSwagger = require("swagger-autogen")(options);
  
  const swaggerDocument = {
    info: {
      version: "1.0.0",
      title: "Node API",
      description: "Node API calls",
      contact: {
        name: "Node API",
        email: "info@node.in",
      },
    },
    host: "localhost:8000",
    basePath: "/",
    schemes: ["http","https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      {
        name: "node api",
        description: "Service API",
      },
    ],
    securityDefinitions: {},
    definitions: {
      "errorResponse.400": {
        code: 400,
        message:
        "The request was malformed or invalid. Please check the request parameters.",
      },
      "errorResponse.401": {
        code: 401,
        message: "Authentication failed or user lacks proper authorization.",
      },
      "errorResponse.403": {
        code: 403,
        message: "You do not have permission to access this resource.",
      },
      "errorResponse.404": {
        code: "404",
        message: "The requested resource could not be found on the server.",
      },
      "errorResponse.500": {
        code: 500,
        message:
        "An unexpected error occurred on the server. Please try again later.",
      },
    },
  };
  const swaggerFile= "./swagger.json";
  const apiRouteFile= ["./index.js"];
  generateSwagger(swaggerFile, apiRouteFile, swaggerDocument);