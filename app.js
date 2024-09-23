const express = require(express);
const app = express();

app.get('/', (req, res) => {
  res.send("this is root page")
});
app.listen(3000);