



const divs = document.querySelector('#conteiner');

let autos = '';

for(let l = 0; l < 75; l++){
    for(let i = 0; i < 75; i++){
        const grade = document.createElement('div');
        grade.classList.add('grade');
        divs.appendChild(grade);
    }
    autos += 'auto '; 
}

divs.style.gridTemplateColumns=autos;