const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },

    filename: function( req, file, cb) {
        console.log(file);
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

app.use(cors());

app.get('/', function(req, res) {
    console.log('hello');
    res.send('Hello world');
});

app.post('/upload', upload.single('test'), function(req, res, next) {
    console.log(req.file.originalname);
    console.log(req.file.filename);
})

//start app
const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
);

