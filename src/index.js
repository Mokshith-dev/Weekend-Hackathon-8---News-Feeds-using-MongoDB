const express = require('express')
const app = express()
const port = 8080
const data = require('./data');
const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/newFeeds',(req,res) => {
    let limit = req.body.limit;
    let offset = req.body.offset;
    if(!limit) {
        limit = 10;
    }
    if(!offset) {
        offset=0;
    }
    let resArr = [];
    resArr = data.slice(offset,offset+limit);
    res.send(resArr);

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;