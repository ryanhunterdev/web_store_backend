const express = require("express");
const path = require("path");
const getRoutes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use("/api", getRoutes());

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});