const n = "Nayeem";
const express = require('express');
const app = express();
const port = 3000;

//
app.get('/', (req, res) => {
  //res.send('Hello gyus ');
  res.sendFile(__dirname + '/nayem.html');

});

//

app.listen(port, () => {
  console.log('Nayeem start❤️‍🩹');
});