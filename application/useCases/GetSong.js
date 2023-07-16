const database = require('../../repository/database/database');

exports.getSongUseCase = (id) => {
  const song = database.getSong(id);

  return song;
}