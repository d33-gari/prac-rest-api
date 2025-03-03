const express = require('express'); // Adding brackets after 'require' to intiialise it as a funciton.
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
  PORT
)

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'shirt',
    size: 'large'
  });
});

app.post('/tshirt/:id', (req, res) => {
  const {id} = req.params;
  const {logo} = req.body;

  if (!logo) {
    res.status(418).send({message: 'We need a logo'});
  }

  res.send({
    tshirt: `T-shirt with logo ${logo} and ID of ${id}`,
  })
});