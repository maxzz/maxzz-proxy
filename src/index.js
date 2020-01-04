const app = require('./app.js');

const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
