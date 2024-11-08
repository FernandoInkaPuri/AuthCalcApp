const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/calculate', (req, res) => {
  const { value1, value2, operation } = req.body;

  let result;

  switch (operation) {
    case 'sum':
      result = value1 + value2;
      break;
    case 'subtract':
      result = value1 - value2;
      break;
    case 'multiply':
      result = value1 * value2;
      break;
    case 'divide':
      if (value2 === 0) {
        return res.status(400).send('Não é possível dividir por zero');
      }
      result = value1 / value2;
      break;
    default:
      return res.status(400).send('Operação inválida');
  }
  res.send(`O resultado é ${result}`)
})

app.listen(port, () => {
  console.log(`Servidor inciado na porta ${port}`)
})
