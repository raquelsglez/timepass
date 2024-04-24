const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    let text = `
      <h1>Bienvenido</h1>
      <p>${req.dataType}</p>
      <form action="/endroute" method="get">
        <button type="submit">Entrar</button>
      </form>
    `;
    
    let message = req.query.message;
    if (message) {
      text += `<p>${message}</p>`;
    };
  
    res.send(text);
});

module.exports = router;
