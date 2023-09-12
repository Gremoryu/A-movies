// Description: Contiene las funciones para obtener los datos de la base de datos.
const databaseService = () => {
  const knex = require("knex")({
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB,
    },
  });// Conexión a la base de datos.

  const table_content = "visualcontent"; // Nombre de la tabla de contenido visual.

  const getSeries = async () => {
    try {
      const resultado = await knex(table_content).select().where("type", 0);
      return resultado;
    }
    catch (error) {
      console.error('Error al obtener las series:', error);
      return [];
    }
  }

  const getMovies = async () => {
    try {
      const resultado = await knex(table_content).select().where("type", 1);
      return resultado;
    }
    catch (error) {
      console.error('Error al obtener las peliculas:', error);
      return [];
    } 
  }

  const getVisualContent = async () => {
    try {
      const resultado = await knex(table_content).select();
      return resultado;
    }
    catch (error) {
      console.error('Error al obtener el contenido visual:', error);
      return [];
    } 
  };// Obtiene el contenido visual de la base de datos.

  const getPopularContent = async () => {
    try {
      const resultado = await knex(table_content).select().orderBy("views", "desc");
      return resultado;
    }
    catch (error) {
      console.error('Error al obtener el contenido popular:', error);
      return [];
    }
  };// Obtiene el contenido popular de la base de datos.

  const getNewContent = async () => {
    try {
      const resultado = await knex(table_content).select().orderBy("dateadded", "desc");
      return resultado;
    }
    catch (error) {
      console.error('Error al obtener el contenido nuevo:', error);
      return [];
    }
  }

  const getTopContent = async () => {
    try {
      const resultado = await knex(table_content).select().orderBy("clasificacion", "asc");
      return resultado;
    }
    catch (error) {
      console.error('Error al obtener el contenido top:', error);
      return [];
    }
  }

  const getContent_search = async (search) => {
    const resultado = await knex(table_content)
      .select()
      .where("nombre", search);
    return resultado;
  };// Obtiene la serie o pelicula especifica de la base de datos.

  return {
    getVisualContent,
    getContent_search,
    getPopularContent,
    getNewContent,
    getTopContent,
    getSeries,
    getMovies
  }; // Retorna las funciones.
};

module.exports = { databaseService }; // Exporta el módulo.
