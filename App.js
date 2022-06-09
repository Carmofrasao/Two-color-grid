



const divs = document.querySelector('#conteiner');

let autos = '';

for(let l = 0; l < 75; l++){
    for(let i = 0; i < 75; i++){
        // criar grade 75x75, cada div é um quadrado
        const grade = document.createElement('div');
        grade.classList.add('grade');
        divs.appendChild(grade);
    }
    autos += 'auto '; 
}
// dividir a grade em colunas, cada 'auto é uma coluna'
divs.style.gridTemplateColumns=autos;