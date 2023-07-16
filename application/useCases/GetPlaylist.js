const database = require('../../repository/database/database')

exports.getPlaylistUseCase = () => {
  const playlist = database.getPlaylist();
  return playlist;
}