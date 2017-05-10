/**
 * Created by 15050978 on 5/10/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 9988;
var router = express.Router();

router.post('/report', function (req, res) {
    var file = fs.createReadStream('./pdf/Calendar.pdf');
    var filename = 'Calendar.pdf';
    res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');
    file.pipe(res);
});

app.use('/', router);

app.listen(port);
console.log('API Gateway Mock happens on port ' + port);