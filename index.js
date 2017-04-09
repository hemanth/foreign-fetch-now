'use strict';
const express = require('express');
const app = express();
const foreignFetchMiddleware = require('foreign-fetch-middleware');

app.use(foreignFetchMiddleware('./fsw.js'));

app.get('/roll', (req, res) => {
  res.setHeader('Origin-Trial', 'Akh5zCpupNXdH+XT72gbrXNCqRqP70eOiMKQFoqr9Ob6WUY4AWMBhTOpeEcUG8EWyQCOPQtHwi7gj/eOvqQ6QwQAAABfeyJvcmlnaW4iOiAiaHR0cHM6Ly9mb3JlaWduLWZldGNoLm5vdy5zaDo0NDMiLCAiZmVhdHVyZSI6ICJGb3JlaWduRmV0Y2giLCAiZXhwaXJ5IjogMTQ3ODYyNzIwOH0=');
  res.send(Math.round(Math.random() * 6));
});

app.listen(process.env.PORT || 8080, () => {});