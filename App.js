


const divs = document.querySelector('#conteiner');
const btn_grade = document.querySelector('#btn-grade');
let autos = '';
let tam_grade = 0;

btn_grade.addEventListener('click', () => {
    while (divs.firstChild) {
        divs.removeChild(divs.firstChild);
    }
    
    tam_grade = prompt("Digite o tamanho da grade:");
    for(let l = 0; l < tam_grade; l++){
        for(let i = 0; i < tam_grade; i++){
            // criar grade, cada div é um quadrado
            const grade = document.createElement('div');
            grade.classList.add('grade');
            grade.onmouseover = () => {
                grade.style.border = "2px solid purple";
            };
            divs.appendChild(grade);
        }
        autos += 'auto '; 
    }

    // dividir a grade em colunas, cada 'auto' é uma coluna
    divs.style.gridTemplateColumns=autos;
    autos = '';
})