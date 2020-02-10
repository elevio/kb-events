const express = require('express');

const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');

// TODO: in `fe` if dev mode point events to here...
// This is just a stub for event tracking
app.post('/events', (req, res) => {
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
