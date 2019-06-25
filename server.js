const express = require('express');
const app = express()
const port = 3000;
 
app.get('/', function (req, res) {
  res.send('Oba')
})
 
app.listen(port, function () {
  console.log(`server running in" + ${port}`);
});