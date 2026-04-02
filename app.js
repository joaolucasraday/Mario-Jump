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

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(express.json());

app.post('/api/auth/signup', async (req, res) => {
    const { username, password } = req.body;
    const fakeEmail = `${username.toLowerCase()}@mariojump.com`;

    const { data, error } = await supabase.auth.signUp({
        email: fakeEmail,
        password: password,
        options: { data: { display_name: username } }
    });

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Usuário criado", user: data.user });
});

app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    const fakeEmail = `${username.toLowerCase()}@mariojump.com`;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: fakeEmail,
        password: password,
    });

    if (error) return res.status(400).json({ error: "Usuário ou senha incorretos" });
    res.json({ message: "Logado", user: data.user });
});

app.listen(3000, ()=>{
    console.log(`Servidor rodando em http://localhost:${3000}`);
});