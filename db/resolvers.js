const Usuario = require("../models/Usuario");

//resolver van hacer siempre funciones
const resolvers = {
  Query: {
    obtenerCurso: () => "Algo",
  },
  Mutation: {
    nuevoUsuario: async (_, { input }) => {
      console.log(input);

      const { email, password } = input;

      // Revisar si el usuario ya esta registrado
      const existeUsuario = await Usuario.findOne({ email });
      if (existeUsuario) {
        throw new Error("El usuario ya esta registrado");
      }

      //Hashear su password

      try {
        //Guardarlo en la BD
        const usuario = new Usuario(input);
        usuario.save(); //Save in DB
        return usuario;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
