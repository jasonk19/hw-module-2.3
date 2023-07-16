const { addSongUseCase } = require('../../application/useCases/AddSong');

exports.addSong = (req, res) => {
  // new song name
  const { title, artist, url } = req.body;

  const playlist = addSongUseCase({title, artist, url});

  res.status(200);
  res.json(playlist)
}