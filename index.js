const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolver");

const conectarDB = require("./config/db");

//conectar  a la base de datos
conectarDB();

//servidor | colocar abajo para evitar undefined | Se le pasan typeDefs y resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Servidor listo en la url ${url}`);
});
