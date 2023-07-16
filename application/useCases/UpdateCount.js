const database = require('../../repository/database/database')

exports.updateCountUseCase = (id) => {
  const updatedSong = database.updateCount(id);

  return updatedSong;
}