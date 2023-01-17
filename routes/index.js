const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Uche Ajike');
});

routes.get('/another', (req, res) => {
  res.send('TG Nzenwa');
});

module.exports = routes;
