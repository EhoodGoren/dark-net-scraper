const express = require('express');
const cors = require('cors');
const postsRouter = require('./routers/postsRouter');
const connectToDb = require('./controllers/connectToDb');

const port = 8080;
const app = express();

app.use(cors());
app.use('/posts', postsRouter);

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
    await connectToDb();
};
startServer();
