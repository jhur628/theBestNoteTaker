// Require modules
const { application } = require('express');
const express = require('express');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Have "/" be index.html
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);



// logs a link to the app
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);