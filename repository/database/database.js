const playlistData = require('../data/playlist');

exports.getPlaylist = () => {
  // Get playlist sorted by play count;
  return playlistData.sort((a, b) => b.count - a.count);
}

exports.getSong = (id) => {
  const song = playlistData.find((song) => song.id === id);

  return song;
}

exports.addSong = (song) => {
  playlistData.push(song);

  return playlistData;
}

exports.updateCount = (id) => {
  let songIndex = playlistData.findIndex((song) => song.id === id);

  playlistData[songIndex].count += 1;

  return playlistData[songIndex];
}