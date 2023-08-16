/*
Autor: Jorge Marcelo
Data de Criação: 15/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Pegando elementos atravez do DOM*/ 
let texto = document.getElementById("texto");
let resultado = document.getElementById("resultado");

/*Variavel que limita os caracteres*/ 
let limite = 130;

/*Colocando o conteudo do resultado no HTML*/ 
resultado.textContent = 0 + "/" + limite;
let comprimento = texto.value.length;
resultado.textContent = comprimento + "/" + limite;

/*Função que fara a limitação*/
function limitador(evento){
evento.preventDefault();

/*Aplicando o limite*/ 
let comprimento = texto.value.length;
resultado.textContent = comprimento + "/" + limite;

/*Caso seja menor que o limite*/
if (comprimento < limite){
texto.style.borderColor = "white";
resultado.style.color = "white";
}

/*Caso seja igual que o limite*/ 
if (comprimento === limite){
texto.style.borderColor = "blue";
resultado.style.color = "blue";
}

/*Caso ultrapasse o limite*/
if (comprimento > limite){
texto.style.borderColor = "red";
resultado.style.color = "red";
}
}

/*Escutador de evento para o input do textarea*/
texto.addEventListener("input", limitador);


   
/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})


