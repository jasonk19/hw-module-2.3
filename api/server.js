const express = require('express');
const { getSong } = require('./controllers/GetSong');
const { addSong } = require('./controllers/AddSong');


const startServer = () => {
  const app = express();
  
  const { getPlaylist } = require('./controllers/GetPlaylist');
  const { updateCount } = require('./controllers/UpdateCount');
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  app.get('/', (req, res) => {
    res.status(200)
    res.json({
      status: 'Healthy'
    })
  })
  
  app.get('/playlist', getPlaylist);
  app.post('/playlist', addSong);
  app.get('/playlist/:id', getSong);
  app.put('/playlist/:id', updateCount);
  
  app.listen(5000, () => {
    console.log('Server started on port 5000')
  })
}

module.exports = startServer