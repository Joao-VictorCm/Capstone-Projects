import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".css")) {
        res.set("Content-Type", "text/css");
      }
    },
  })
);


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
    const text1 = req.body["nota1"]
    res.render("index.ejs", {post1 : text1})
})

app.listen(port, () =>{
    console.log(`servidor rodando na porta: ${port}`)
})