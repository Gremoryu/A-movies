// Version: 1.0
module.exports = function (app, databaseService) {
 
  /*....................Contenido Visual................*/

  app.get("/contenidoVisual", (request, response) => {
    databaseService
      .getVisualContent()
      .then((contenido) => {
        response.json(contenido);
      })
      .catch((e) => response.status(500).json(e));
  }
  );// Obtiene el contenido visual de la base de datos.

  app.get("/contenidoVisualBusqueda", (request, response) => {
    const { search } = request.query;
    databaseService
      .getContent_search(search)
      .then((contenido) => {
        response.json(contenido);
      })
      .catch((e) => response.status(500).json(e));
  }
  );// Obtiene la serie o pelicula especifica de la base de datos.

  app.get("/contenidoVisualPopular", (request, response) => {
    databaseService
      .getPopularContent()
      .then((contenido) => {
        response.json(contenido);
      })
      .catch((e) => response.status(500).json(e));
  }
  );// Obtiene el contenido popular de la base de datos.

  app.get("/contenidoVisualNuevo", (request, response) => {
    databaseService
      .getNewContent()
      .then((contenido) => {
        response.json(contenido);
      })
      .catch((e) => response.status(500).json(e));
  }
  );// Obtiene el contenido nuevo de la base de datos.

  app.get("/contenidoVisualTop", (request, response) => {
    databaseService
      .getTopContent()
      .then((contenido) => {
        response.json(contenido);
      })
      .catch((e) => response.status(500).json(e));
  }
  );// Obtiene el contenido top de la base de datos.

  app.get("/contenidoVisualSeries", (request, response) => {
    databaseService
      .getSeries()
      .then((contenido) => {
        response.json(contenido);
      })
      .catch((e) => response.status(500).json(e));
  }
  );// Obtiene las series de la base de datos.

  app.get("/contenidoVisualPeliculas", (request, response) => {
    databaseService
      .getMovies()
      .then((contenido) => {
        response.json(contenido);
      })
      .catch((e) => response.status(500).json(e));
  }
  );// Obtiene las peliculas de la base de datos.

};
