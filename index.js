const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'page')));

const port = process.env.PORT || 3000;

app.length(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});