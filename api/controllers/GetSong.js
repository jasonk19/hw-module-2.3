const { getSongUseCase } = require('../../application/useCases/GetSong');

exports.getSong = (req, res) => {
  const { id } = req.params;

  const song = getSongUseCase(id);

  res.status(200);
  res.json(song);
}