async function cadastrarUsuario(email, password, username) {
  const { data, error } = await window.supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username: username } // Isso ativa o seu TRIGGER SQL!
    }
  });

  if (error) alert("Erro: " + error.message);
  else alert("Usuário criado! Verifique seu email.");
}