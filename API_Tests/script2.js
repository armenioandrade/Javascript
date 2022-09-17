
const url = 'https://catfact.ninja/fact';
const resapi = document.getElementById('resapi');
fetch(url)
    .then((response) => response.json())
    .then((data) =>
        resapi.innerHTML = JSON.stringify(data))
    .catch((error) => console.log(error));


const url2 = 'https://www.boredapi.com/api/activity';
const api2 = document.getElementById('api2');
fetch(url2)
    .then((response) => response.json())
    .then((objData) => myTable(objData))
    .catch((error) => console.log(error));


function myTable(obj) {
    api2.innerHTML = 'Activity: ' + obj.activity + '<br>';
    api2.innerHTML += 'Type: ' + (obj.type) + '<br>';
    api2.innerHTML += 'Price: ' + obj.price + '<br>';
    api2.innerHTML += 'Participants: ' + obj.participants;
}

let fieldname = document.getElementById('fieldname')
fieldname.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("btnNome").click()
    }
})


function getName() {
    let fieldname = document.getElementById('fieldname').value;
    let palavra = fieldname;
    if(fieldname.includes(" ") === true){
        console.log("contem espaco")
        palavra = fieldname.replace(" ", "%20")
    }
    console.log(palavra)
    return palavra;

}

function fetchNome(nome) {
    console.log("var getname "+getName())
    fetch('https://api.agify.io/?name=' + getName())
        .then((response) => response.json())
        .then((objData) => showNome(objData))
        .catch((error) => console.log(error));
        eraseFields()
    }
    
    function showNome(nome){
    let resNome = document.getElementById('resNome')
    resNome.innerHTML = 'Nome: ' + nome.name + '<br>';
    resNome.innerHTML += 'Idade: ' + nome.age + '<br>';
    resNome.innerHTML += 'Contador de Pesquisas: ' + nome.count + '<br>';
    

}
function eraseFields(){
    fieldToErase = document.getElementById('fieldname').value = ''
}

