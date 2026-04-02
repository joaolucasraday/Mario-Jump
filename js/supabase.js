// Função para Cadastrar
async function handleSignUp() {
    const user = document.getElementById('usernamme').value;
    const pass = document.getElementById('password').value;

    if (!user || !pass) return alert("Preencha todos os campos!");

    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Conta criada! Agora clique em ENTRAR.");
    } else {
        alert("Erro no cadastro: " + data.error);
    }
}

// Função para Logar
async function handleLogin() {
    const user = document.getElementById('usernamme').value;
    const pass = document.getElementById('password').value;

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Acesso autorizado!");
        localStorage.setItem('mario_user', JSON.stringify(data.user));
        fecharContainer(); // Fecha a janelinha de login
        // Aqui você pode liberar o botão de "Start" do jogo
    } else {
        alert("Falha no login: " + data.error);
    }
}