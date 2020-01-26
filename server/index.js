const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const dir = path.resolve(__dirname, '../', 'client', 'public');

app.use(express.static(dir));

// app.get('/api/checkout/:id', (req, res) => {
//   // do something
// });

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}.`);
});
