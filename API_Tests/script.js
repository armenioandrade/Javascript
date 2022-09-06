
const url = 'https://catfact.ninja/fact';
const resapi = document.getElementById('resapi');
var JSONgatos = fetch(url)
.then( (response) => response.json())
.then((data)=> resapi.innerHTML = `JSON GATOS ${JSON.stringify(data)}` )
.catch( (error) => console.log(error));


let botao = document.getElementById("formatando")
botao.addEventListener("click", loadJSONGatos())
let escreva = document.getElementById("escreva")
function loadJSONGatos(){
    return fetch(url)
.then( (response) => response.json())
.then((data)=> escreva.innerHTML = `${JSON.stringify(data)}` )
.catch( (error) => console.log(error));
}




