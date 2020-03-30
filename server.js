'use strict';

var express = require('express');
var cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/ ' });
// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function(req, res) {
    res.json({ greetings: 'Hello, API' });
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
    console.log(req.file);
    res.json({
        filename: req.file.filename,
        size: req.file.size
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Node.js listening on port ${PORT}...`);
});
