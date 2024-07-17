const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const data = {
    message: "OK",
    data: {
      example: "Ini data JSON yang bisa kamu lihat",
    },
  };
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

module.exports = app;
