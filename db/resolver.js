//resolver van hacer siempre funciones
const resolvers = {
  Query: {
    obtenerCurso: () => "Algo",
  },
  Mutation: {
    nuevoUsuario: () => "Creando nuevo usuario",
  },
};

module.exports = resolvers;
