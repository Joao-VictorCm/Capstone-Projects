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

let anotacoes = [];

app.get('/', (req, res) => {
    res.render('index', { anotacoes });
});

app.post('/anotacoes', (req, res) => {
    const novaNota = req.body.nota;
    if (novaNota) {
        anotacoes.push(novaNota);
    }
    res.render("index.ejs")
});



app.listen(port, () =>{
    console.log(`servidor rodando na porta: ${port}`)
})