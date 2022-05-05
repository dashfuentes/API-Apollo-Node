const express = require("express");
const { ApolloServer } = require("apollo-server-express");
//resolvers
const { resolvers } = require( "./resolvers" );
const {typeDefs} =  require("./typeDefs")
//typeDefs
//db connection
const { connectDb } = require("./db");

const app = express();
connectDb();
app.get("/home", (req, res) => {
	res.send("welcome to my api");
});

async function start() {
	const apolloServer = new ApolloServer({
		typeDefs ,
	    resolvers
	});

	await apolloServer.start();
	apolloServer.applyMiddleware({ app, path: "/api" });

	app.listen(3000, () => {
		console.log("server listening");
	});
	
}

start();