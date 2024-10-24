import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// DICAS: Use a documentação do axios e também a vídeo aula para ajudá-lo.
// https://axios-http.com/docs/post_example
// Use a documentação da API Secrets para descobrir o que cada rota espera e como trabalhar com ela.
// https://secrets-api.appbrewery.com/

//TODO 1: Adicione seu próprio token ao portador da lição anterior.
const yourBearerToken = "0035a9c5-8111-4b9f-af74-eb38d93f3cf7";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios para POST os dados de req.body para os servidores API de segredos.
  const result = await axios.post(API_URL+"/secrets", req.body, config);
  res.render("index.ejs", { content: JSON.stringify(result.data) })
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios para COLOCAR os dados de req.body nos servidores API de segredos.
  const result = await axios.post(API_URL+"/secrets", searchId, config);
  res.render("index.ejs", { content: JSON.stringify(result.data) })
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios para PATCH os dados de req.body para os servidores API de segredos.
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios para DELETE o item com searchId dos servidores da API de segredos.
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
