import { Router } from "express";
import { title } from "process";
const router = Router(); ; 
router.get('/', (req, res) => { res.render('index',{title:'inicio'})});  
router.get('/about', (req, res) => { res.render('SobreNosotros',{title:'Sobre Nosotros '})});
router.get('/contact', (req, res) => { res.render('Contactanos',{title:'Contacto'})});
router.get('/promociones', (req, res) => { res.render('Promociones',{title:'Promociones'})});
router.get('/combos',(req,res)=>{res.render('Combos',{title:'Combos'})});

router.get('/platos',(req,res)=>{res.render('Platos',{title:'Platos'})});
router.get('/bebidas',(req,res)=>{res.render('Bebidas',{title:'Bebidas'})});
router.get('/login',(req,res)=>{res.render('Login',{title:'Login'})});
export default router ;