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

let anotacao = []

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const novaNota = req.body["nota1"]
    console.log(novaNota)
    anotacao.push(novaNota)

    const newID = novaNota["id"]
    console.log("id aqui " + newID)


    res.render("index.ejs", {teste: anotacao})
   
});
 


app.listen(port, () =>{
    console.log(`servidor rodando na porta: ${port}`)
})

