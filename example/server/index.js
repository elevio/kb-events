const express = require('express');

const port = 8000;

const app = express();
app.use(express.json({ type: '*/*' }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');

app.post('/events', (req, res) => {
  console.log(req.body, '<<< events received');
  setTimeout(() => {
    res.sendStatus(200);
  }, 10);
});

// Add the TS output dir to the assets.
app.use('/assets', express.static('./lib'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
