const database = require('../../repository/database/database');

const { v4: uuidv4 } = require('uuid');

exports.addSongUseCase = (song) => {
  const newSong = {
    id: uuidv4(),
    title: song.title,
    artist: song.artist,
    url: song.url,
    count: 0,
  }

  const updatedPlaylist = database.addSong(newSong);

  return updatedPlaylist;
}