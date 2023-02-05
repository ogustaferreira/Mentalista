var numeroSecreto = Math.floor(Math.random() * (1001 - 1) + 1); // Código para armazenar um número inteiro entre 1 e 1000

var tentativas = 10;

while (tentativas > 0) {
    var chute = prompt(
        "Tente adivinhar um número entre 1 e 1000! Você tem " +
        tentativas +
        " tentativas. Digite 0 para sair."
    );
    if (chute == numeroSecreto) {
        alert("Você acertou! O número secreto é " + numeroSecreto);
        break;
    } else if (chute == 0) {
        alert("Até a próxima.");
        break;
    } else if (chute > numeroSecreto) {
        tentativas = tentativas - 1;
        alert(
            "Você errou! O número secreto é menor do que " +
            chute +
            ". Restam " +
            tentativas +
            " tentativas"
        );
    } else if (chute < numeroSecreto) {
        tentativas = tentativas - 1;
        alert(
            "Você errou! O número secreto é maior do que " +
            chute +
            ". Restam " +
            tentativas +
            " tentativas"
        );
    }
}

if (tentativas == 0) {
    alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto);
}
