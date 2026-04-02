require('dotenv').config();
const express = require('express');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

app.use(express.json());





app.listen(3000, ()=>{
    console.log(`Servidor rodando em http://localhost:${3000}`);
});