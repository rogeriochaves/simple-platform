const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const prometheus = require("prom-client");

const collectDefaultMetrics = prometheus.collectDefaultMetrics;
const register = prometheus.register;
collectDefaultMetrics({ register });

app.get("/", (_req, res) => res.send("<h1>It works!</h1>"));

app.get("/metrics", (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(register.metrics());
});

const userClicks = new prometheus.Counter({
  name: "user_clicks",
  help: "we generate fake user clicks for testing metrics",
});

setInterval(() => {
  userClicks.inc(Math.round(Math.random() * 10) + 1);
}, 5000);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
