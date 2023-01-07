//capturando as sections
const inputs = document.getElementsByTagName('section')[0];
const output = document.getElementsByTagName('section')[1];

//input id carta-texto
const inputTexto = document.createElement('input');
inputTexto.id = 'carta-texto';
inputs.appendChild(inputTexto);

//output da carta-gerada e criando botão
const createP = document.createElement('p');
createP.id = 'carta-gerada';
output.appendChild(createP);
const button = document.createElement('button');
button.id = 'criar-carta';
button.innerHTML = 'Criar Carta';
inputs.appendChild(button);


//atribuindo span a cada palavra
button.addEventListener('click', ()=>{
    const words = inputTexto.value.split(' ');
    for(let index =0; index < words.length; index+=1){
        let createSpan = document.createElement('span');
        createSpan.innerHTML = words[index];
        createP.appendChild(createSpan);
    }
})