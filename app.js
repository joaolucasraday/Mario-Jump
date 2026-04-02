require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const port = 3000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const app = express();
app.use(express.json());

app.post('/score', async(req, res)=>{
    const { score } = req.body;

    if(!score) {
        return res.status(400).json({error: 'Houve um erro ao salvar seu score. Tente novamente'});
    }
})

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});