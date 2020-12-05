const express = require('express');
const { connection } = require('mongoose');
const app = express()
const port = 8080

const onePageArticleCount = 10
const {newsArticleModel} = require('./connector');

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/newFeeds', async (req,res) => {
    let limit = req.body.limit;
    let offset = req.body.offset;
    if(!limit) {
        limit = 10;
    }
    if(!offset) {
        offset=0;
    }

    let resArr = [];
    const data = await newsArticleModel.find();
    resArr = data.slice(offset,offset+limit);
    res.send(resArr);

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;