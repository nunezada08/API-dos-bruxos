import express from "express";
import dados from "./src/data/data.js";

const app = express();
const { bruxos, casas, varinhas, animais, pocoes} = dados

const serverPort = 3003

app.get("/", (req, res) => {
  res.send("Vamos de Harry Potter");
});

app.get("/bruxos", (req, res) => {
  if(bruxos.length > 0) {
        res.status(200).json(bruxos);
    } else {
        res.status(404).json({
            mensagem: "Bruxos não encontrado"
        })
    }
});

app.get("/casas", (req, res) => {
  if(casas.length > 0) {
        res.status(200).json(casas);
    } else {
        res.status(404).json({
            mensagem: "nenhuma casa encontrada"
        })
    }
});

app.get("/varinhas", (req, res) => {
  if(varinhas.length > 0) {
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma varinha encostrada"
        })
    }
});

app.get("/animais", (req, res) => {
  if(animais.length > 0) {
        res.status(200).json(animais);
    } else {
        res.status(404).json({
            mensagem: "Nenhum animal encontrado"
        })
    }
});

app.get("/pocoes", (req, res) => {
  if(pocoes > 0) {
        res.status(200).json(pocoes);
    } else {
        res.status(404).json({
            mensagem: "nenhuma poção encontrada"
        })
    }
});

app.get("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bruxo = bruxos.find(b => b.id === id);

    if(bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            mensagem: "Bruxo não encontrado"
        })
    }
});

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome
    nome = nome.toLowerCase()

    const nomeFiltrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

    if(nomeFiltrados) {
        res.status(200).json(nomeFiltrados);
    } else {
        res.status(404).json({
            mensagem: "Bruxo não encontrado"
        })
    }
});

app.listen(serverPort, () => {
  console.log(`🧙‍♂️ API dos Bruxos está no ar em http://localhost:${serverPort} !`);
});

