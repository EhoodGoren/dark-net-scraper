const express = require('express');
const cors = require('cors');
const postsRouter = require('./backend/routers/postsRouter');

const port = 8080;
const app = express();

app.use(cors());
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
