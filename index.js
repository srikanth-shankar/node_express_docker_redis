const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server'
});
client.set('visits', 0);

app.get('/', (req, res) => {
  return client.get('visits', (err, value) => {
    res.send('Number of visits is ' + value);
    client.set('visits', parseInt(value) + 1);
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
