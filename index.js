const express = require('express');
const app = express();
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.listen(
  () =>  console.log("The API IS Running On https://api.mortexagsite.cyou")

)

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'hola shirto',
    size: 'smol'
  })
});

app.get('/mortdata', (req, res) => {
  res.status(200).send({
    mort: 'is fine',
    ahmed: 'is good',
    how_you: 'pretty fine',
    le_cheese: {
      mortad: "not good",
      gorga: 'acceptaple'
    }
  });
});

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  const { token } = req.headers;
  if (token != 'mortexag')
    res.status(418).send({ error: "you're not authorized to send on this api" })
  if (!logo) {
    res.status(418).send({ message: 'logo is required' })
  }

  res.send({
    tshirt: `shirto with your logo  "${logo}" and ID of ${id} `,
  });
});