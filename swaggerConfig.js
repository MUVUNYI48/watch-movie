import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',//specification ( OpenAPI version)
        info: {
            title: 'WATCH-VIDEO ',
            version: '1.0.0',
            description: 'API documentation of WATCH-VIDEO Project '
        },
        servers: [
            {
                url:"http://localhost:8080",
            },
            {
                url:"https://watch-video.onrender.com",
            },
        ]
    },
    apis: ['./src/routes/*.js'],
}



export const swaggerSpec = swaggerJSDoc(options);

// module.exports=swaggerSpec;