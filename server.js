const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
