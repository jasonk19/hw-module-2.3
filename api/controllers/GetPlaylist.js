const { getPlaylistUseCase } = require('../../application/useCases/GetPlaylist');

exports.getPlaylist = (req, res) => {
  const playlist = getPlaylistUseCase();

  res.status(200);
  res.json(playlist);
}