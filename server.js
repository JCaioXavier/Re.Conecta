const express = require('express');
const path = require('path');
const app = express();
const routes = require('./js/routes'); // Importa o teu ficheiro de rotas

// 1. Configurar para ler JSON nos pedidos (POST/PUT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Servir ficheiros estáticos (HTML, CSS, Imagens, JS do Frontend)
// Isto permite que o navegador encontre o style.css e as imagens
app.use(express.static(path.join(__dirname, '.')));

// 3. Usar as rotas da API
app.use(routes);

// 4. Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`Servidor Re.conecta ativo em: http://localhost:${PORT}`);
    console.log(`Pressione Ctrl+C para parar.`);
    console.log(`==========================================`);
});