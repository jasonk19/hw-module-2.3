const { updateCountUseCase } = require('../../application/useCases/UpdateCount')

exports.updateCount = (req, res) => {
  const { id } = req.params;

  const updatedSong = updateCountUseCase(id);

  res.status(200);
  res.json(updatedSong);
}