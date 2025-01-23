// capturando as sections
const inputs = document.getElementsByTagName('section')[0];
const output = document.getElementsByTagName('section')[1];
const count = document.getElementsByTagName('section')[2];

// input id carta-texto
const divInputTexto = document.createElement('div');
divInputTexto.className = 'form-floating';
inputs.appendChild(divInputTexto);
const inputTexto = document.createElement('textArea');
inputTexto.id = 'carta-texto';
inputTexto.classList.add('form-control', 'h-25', 'align-self-center');

divInputTexto.appendChild(inputTexto);
const inputTextLabel = document.createElement('label');
inputTextLabel.htmlFor = inputTexto.id;
inputTextLabel.innerHTML = 'Por favor, digite o conteúdo do bilhete.';
divInputTexto.appendChild(inputTextLabel);

// output do bilhete-gerada e criando botão
const createP = document.createElement('p');
createP.id = 'carta-gerada';
createP.className = 'mt-4';
output.appendChild(createP);
const button = document.createElement('button');
button.id = 'criar-carta';
button.innerHTML = 'Gerar Bilhete';
button.classList.add('btn', 'btn-primary', 'btn-md', 'mt-2', 'align-self-end');
divInputTexto.appendChild(button);

// atribuindo span a cada palavra
button.addEventListener('click', () => {
  const words = inputTexto.value.split(' ').filter((i) => i);
  addContador.innerHTML = '';
  createP.innerHTML = '';
  for (let index = 0; index < words.length; index += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = words[index];
    const choice = [];
    const style = Math.floor(Math.random() * 3);
    if (style == 0) {
      choice.push('newspaper');
    } else if (style == 1) {
      choice.push('magazine1');
    } else if (style == 2) {
      choice.push('magazine2');
    } else {}

    const size = Math.floor(Math.random() * 3);
    if (size == 0) {
      choice.push('medium');
    } else if (size == 1) {
      choice.push('big');
    } else if (size == 2) {
      choice.push('reallybig');
    } else {}

    const rotate = Math.floor(Math.random() * 2);
    if (rotate == 0) {
      choice.push('rotateleft');
    } else if (rotate == 1) {
      choice.push('rotateright');
    } else {}

    const skew = Math.floor(Math.random() * 2);
    if (skew == 0) {
      choice.push('skewleft');
    } else if (skew == 1) {
      choice.push('skewright');
    } else {}
    createSpan.classList.add(...choice);
    createP.appendChild(createSpan);
  }
  const selectSpan = document.getElementsByTagName('span');
  for (let index = 0; index < selectSpan.length; index += 1) {
    selectSpan[index].addEventListener('click', (target) => {
      target.path[0].className = '';
      const choice = [];
      const style = Math.floor(Math.random() * 3);
      if (style == 0) {
        choice.push('newspaper');
      } else if (style == 1) {
        choice.push('magazine1');
      } else if (style == 2) {
        choice.push('magazine2');
      }

      const size = Math.floor(Math.random() * 3);
      if (size == 0) {
        choice.push('medium');
      } else if (size == 1) {
        choice.push('big');
      } else if (size == 2) {
        choice.push('reallybig');
      }

      const rotate = Math.floor(Math.random() * 2);
      if (rotate == 0) {
        choice.push('rotateleft');
      } else if (rotate == 1) {
        choice.push('rotateright');
      }

      const skew = Math.floor(Math.random() * 2);
      if (skew == 0) {
        choice.push('skewleft');
      } else if (skew == 1) {
        choice.push('skewright');
      }
      console.log(choice.toString().split(','));
      console.log(target.path[0].classList);
      target.path[0].classList.add(...choice);
    });
    addContador.innerHTML = 'Número de palavras: ' + selectSpan.length;
  }
  if (createP.innerHTML.length !== 0) {
    output.style.margin = '1.5%';
    output.style.padding = '2%';
    output.style.borderRadius = '10px';
    output.style.background = "url('images/bilhete-fundo.png') no-repeat";
    output.style.backgroundSize = '100% 100%';

  }
});

// contador
const addContador = document.createElement('p');
addContador.id = 'carta-contador';
count.appendChild(addContador);
