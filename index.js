document.addEventListener("DOMContentLoaded", () => { // Garante que o código será executado apenas quando o DOM estiver totalmente carregado

    class ValidadorDeSenhas { // Define a classe ValidadorDeSenhas
        constructor() {
            // Seleciona os elementos do formulário pelo ID
            this.name = document.querySelector("#name"); // Campo de entrada para o nome
            this.password = document.querySelector("#password"); // Campo de entrada para a senha
            this.email = document.querySelector("#email"); // Campo de entrada para o e-mail
            this.button = document.querySelector("#button"); // Botão de envio
        }

        GetAutenticate() {
            // Adiciona um evento ao botão quando ele for clicado
            const Botao = this.button;

            Botao.addEventListener("click", (e) => {
                e.preventDefault(); // Previne que o formulário seja enviado, impedindo o recarregamento da página

                // Obtém os valores dos campos e remove espaços em branco no início e no final
                const Name = this.name.value.trim(); // Valor do campo nome
                const Password = this.password.value.trim(); // Valor do campo senha
                const Email = this.email.value.trim(); // Valor do campo e-mail

                // Regex para validar o formato de e-mail
                const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

                // Regex para validar a senha (mínimo de 8 caracteres, com uma letra maiúscula, um número e um caractere especial)
                const PasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

                try {
                    // Verifica se o campo nome está vazio
                    if (!Name) {
                        alert("Campo Nome é obrigatório");
                    }

                    // Verifica se o campo e-mail está vazio
                    if (!Email) {
                        alert("Campo e-mail é obrigatório");
                    }

                    // Verifica se o campo senha está vazio
                    if (!Password) {
                        alert("Campo Senha é obrigatório");
                    }

                    // Verifica se o e-mail está no formato correto usando a regex
                    if (!Email.match(emailRegex)) {
                        alert("Seu e-mail deve conter o símbolo '@' e terminar com '.com'");
                    }

                    // Verifica se a senha cumpre os critérios de complexidade usando a regex
                    if (!Password.match(PasswordRegex)) {
                        alert("Sua senha deve conter: 1 caractere especial, 1 letra maiúscula e 1 número!");
                    }

                    // Se todas as validações passarem, exibe no console os valores de nome, senha e e-mail
                    else {
                        console.log(`${Name}\n ${Password}\n ${Email}\n`);
                        alert("Verificação foi um sucesso");
                    }
                } catch (error) {
                    // Captura e exibe erros no console, caso ocorram
                    console.log(`Algo de errado aconteceu: ${error}`);
                }
            });

            return; // Finaliza o método GetAutenticate
        }
    }

    const Validador = new ValidadorDeSenhas(); // Cria uma instância da classe ValidadorDeSenhas
    Validador.GetAutenticate(); // Chama o método para iniciar a validação ao clicar no botão
});
