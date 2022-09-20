require("dotenv").config();
const http = require("http");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/user");
const jobsRoutes = require("./routes/jobs");
const categoryRoutes = require("./routes/category");
const companyRoutes = require("./routes/company");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// all new routes will be here
app.use("/app", homeRoutes);
app.use("/user", userRoutes);
app.use("/job", jobsRoutes);
app.use("/category", categoryRoutes);
app.use("/company", companyRoutes);
app.use("/auth", authRoutes);

// server configuration
const server = http.createServer(app);
const PORT = process.env.SERVER_PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
