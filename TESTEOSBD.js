db.score.aggregate([
    {
      $lookup: {
        from: "player", // Nombre de la colección con la que deseas realizar la unión
        localField: "player", // Campo local en la colección "player" que coincide con el campo extranjero en la colección "score"
        foreignField: "_id", // Campo en la colección "score" que coincide con el campo local en la colección "player"
        as: "testrow" // Nombre del campo en el resultado donde se almacenarán los documentos coincidentes de la colección "score"
      }
    }
])

db.score.insertOne(
    {
        player: "662241783245a9f37cc934dd",
        score: 100,
        date: new Date()
    }
)
db.score.aggregate([
    {
      $lookup: {
        from: "player", // Nombre de la colección de la que deseas obtener información
        localField: "player", // Campo en la colección "score" que coincide con el campo local en la colección "player"
        foreignField: "_id", // Campo en la colección "player" que coincide con el campo local en la colección "score"
        as: "playerInfo" // Nombre del campo en el resultado donde se almacenarán los documentos coincidentes de la colección "player"
      }
    }
  ])
  