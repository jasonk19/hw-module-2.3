const { addSongUseCase } = require('../../application/useCases/AddSong');

exports.addSong = (req, res) => {
  // new song name
  const { song } = req.body;

  const playlist = addSongUseCase(song);

  res.status(200);
  res.json(playlist)
}