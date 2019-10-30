/*Você armazrna uma referencia ao seu elemento <img> na variável myImage.*/
let myImage = document.querySelector('img');
/*Em seguida, você torna o onclick propriedade do manipulador de eventos dessa variável igual a uma
função sem nome (uma função anonima). Agora, toda vez que esse elemento é clicado: */
myImage.onclick = function () {
    //Você recupera o valor do atributo da imagem src
    mySrc = myImage.getAttribute ('src');
    //Você usa uma condicional para verificar se o valor de src é igual ao caminho para a imagem original:
    if (mySrc === 'images/firefox-icon.png'){
        //Se for, altera o valor de src para o caminho da 2 imagem, forcando a outra imagem a ser carregada dentro do elemento <img>
        myImage.setAttribute ('src','images/firefox-icon-nova.png');
    }else{
        //Se não estiver  (o que significa que já deve ter sido alterado), o valor de src volta ao caminho da imagem original.
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');//pegamos o valor atribuido ao elemento button
let myHeading = document.querySelector('h1');//pegamos o valor atribuido ao elemento h1

function setUserName(){//criamos a função setUserName
    let myName = prompt('Digite seu nome.');//Com o uso da função prompt(), solicitamos o nome do usuário
    /*ao digitar e precionar OK, salvamos este dado no navegador com o uso da API localStorage.
    *com o uso da função setItem() criamos um item chamado name e que recebe o valor da variavel myName, que foi digitado pelo usr.*/
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla é legal', + myName;//Com textContent definimos o novo valor da var concatenado com o nome do usr.
}

if (!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, '+ storedName;
}

