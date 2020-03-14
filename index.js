const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hi node served through docker');
});

app.listen(8080, ()=>{
    console.log('listening 8080')
})