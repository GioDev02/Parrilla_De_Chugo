import express from 'express';

import { dirname,join } from 'path';    
import { fileURLToPath } from 'url';
import router from './routers/index.js';

const app = express();   

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views')); 
app.set('view engine', 'ejs');
app.use(router) ; 
//Para mi public
app.use(express.static(join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;
// app.get('/', (req, res) => { res.render('index')});
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
