

function mandarInfo(e) {
    console.log('fov');
    
    e.preventDefault();

    const Nome = document.querySelector('#nome').value;
    const Email = document.querySelector('#Email').value;
    const Obs = document.querySelector('#Observacoes').value;

    
    const Tabela = document.querySelector('#corpo');
    Tabela.innerHTML += `
        <tr>
            <td>${Nome}</td>
            <td>${Email}</td>
            <td>Sim</td>
            <td>${Obs}</td>
        </tr>
    `;
}


let dias = 200; // Número de dias iniciais
const timerElement = document.getElementById('timer');

const atualizarCronometro = () => {
    if (dias > 0) {
        timerElement.textContent = `25d 3h ${dias}seg`;
        dias--;
    } else {
        clearInterval(intervalo);
        timerElement.textContent = "Tempo esgotado!";
    }
};

const intervalo = setInterval(atualizarCronometro, 1000); // Atualiza a cada segundo




document.querySelector('#formulario').addEventListener('submit', mandarInfo);
