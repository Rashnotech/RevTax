import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation generated with swagger-jsdoc',
    },
    servers: [
      {
        url: 'http://52.23.178.187',
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the files containing your JSDoc comments
};

const specs = swaggerJsdoc(options);

export default specs;

