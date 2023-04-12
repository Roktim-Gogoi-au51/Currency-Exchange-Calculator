import express from "express"
import fetch from "node-fetch"
const app = express();
const apiKey = 'w3vPUpHgD3fJRvQGAeRfu6pBUgiZKy0T';
const port = 3000;
const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
        apikey: "w3vPUpHgD3fJRvQGAeRfu6pBUgiZKy0T"
    },
};

app.use(express.static("public"))

app.get('/symbols', (req, res) => {
    const url = `https://api.apilayer.com/exchangerates_data/symbols?apikey=${apiKey}`;
    fetch(url,requestOptions)
      .then(response => response.json())
      .then(data => {
        const result = data.symbols;
        res.json(result);
      })
      .catch(error => console.log('error', error));
  });
  
  app.get('/convert', (req, res) => {
    const url = `https://api.apilayer.com/exchangerates_data/convert?from=${req.query.from}&to=${req.query.to}&amount=${req.query.amount}&apikey=${apiKey}`;
    fetch(url,requestOptions)
      .then(response => response.json())
      .then(data => {
        const result = data.result;
        res.json(result);
      })
      .catch(error => console.log('error', error));
  });

app.listen(process.env.PORT || port, ()=>{
    console.log(`listening to port:${port}`)
})