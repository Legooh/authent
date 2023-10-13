const bcrypt = require("bcrypt");

// Dados de usuário de exemplo (poderiam ser armazenados em um banco de dados)
const users = [];

const isRegisterPage = window.location.pathname.includes("register.html");

async function handleRegistration() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    // ... lógica de registro com bcrypt

    if (isRegisterPage) {
        // Redirecionar para a página de login após o registro bem-sucedido
        showMessage("Registro bem-sucedido. Agora faça login.");
        window.location.href = "login.html";
    }
}

async function handleLogin() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // ... lógica de login com bcrypt

    if (!isRegisterPage) {
        // Redirecionar para a página de registro após o login bem-sucedido
        showMessage(`Bem-vindo, ${username}!`);
        window.location.href = "register.html";
    }
}
