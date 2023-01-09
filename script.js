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
    const words = inputTexto.value.split(' ').filter((i)=>{return i});
    if (words.length <= 0){
        createP.innerHTML = 'Por favor, digite o conteúdo da carta';
    } else {
    createP.innerHTML = '';
    for(let index =0; index < words.length; index+=1){
        let createSpan = document.createElement('span');
        createSpan.innerHTML = words[index];
        let choice = [];
        let style = Math.floor(Math.random() * 3);
        if(style == 0){
            choice.push('newspaper');
        } else if (style == 1){
            choice.push('magazine1');
        } else if (style == 2){
            choice.push('magazine2');
        }else {};

        let size = Math.floor(Math.random() * 3);
        if(size == 0){
            choice.push('medium');
        } else if (size == 1){
            choice.push('big');
        } else if (size == 2){
            choice.push('reallybig');
        }else {};

        let rotate = Math.floor(Math.random() * 2);
        if(rotate == 0){
            choice.push('rotateleft');
        } else if (rotate == 1){
            choice.push('rotateright');
        }else {};

        let skew = Math.floor(Math.random() * 2);
        if(skew == 0){
            choice.push('skewleft');
        } else if (skew == 1){
            choice.push('skewright');
        }else {};
        let test = choice.toString().split(',');
        createSpan.classList.add(...choice);
        createP.appendChild(createSpan);
    }}
});

//mensagem de instrução
if (createP.innerHTML.length <= 0){
    createP.innerHTML = 'Por favor, digite o conteúdo da carta';
}
