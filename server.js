'use strict';
const Inert = require('inert');
const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

const provision = async () => {
	await server.register([
		{
			register: Inert,
		},		
	], (err) => {
		if (err) console.error(err);		
    });
}

// Start the server
async function start() {

    try {        
        await server.register({
            plugin: Inert
        });
            // Add the route
        server.route([
            {
                method: 'GET',
                path: '/hello',
                handler: function (request, h) {

                    return 'hello world';
                }
            },
            {
                method: 'GET',
                path: '/ang',
                handler: function (request, reply) {
                    return reply.file('dist/index.html');
                },

            },
            {
                method: 'GET',
                path: '/dist/{param*}',
                handler: {
                    directory: {
                        path: './dist',
                        listing: true,
                        index: false,
                    },
                },
            },
            {
                method: 'GET',
                path: '/angular',
                handler: async function (request, reply) {
                    const resp = await reply.redirect('/hello');
                    return resp;
                },
            },
            {
                method: 'GET',
                path: '/prod',
                handler: {
                    file: 'dist/index.html',
                },

            },
        ]);
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();