
let Nome=document.getElementById('Nome')
let Assunto=document.getElementById('Assunto')
let email=document.getElementById('email')
let error= document.getElementById('error')
error.style.color='red';


function enviarFormulario() {
    console.log('enviando')
    let messagemError = [ ];
   

 if (Nome.value==null || Nome.value=='') {
     messagemError.push('digite seu nome ')
     
 }
 if (Assunto.value== null || Assunto.value=='') {
    
        messagemError.push('escriba Asunto')
 }
 if (email.value.search('@')== -1||email.value == null || email.value =='') {
    messagemError.push('email @ invali ') 
     
 }
    
   

    error.innerHTML = messagemError.join(' , ')

    return false;
}








let portafolio = document.querySelector("#portafolio");
fetch("https://api.github.com/users/alejandroechezuria/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.length);
    let cont = 0;
    for (cont = 0; cont < data.length; cont++) {
      portafolio.innerHTML += `
      
      <li class="nuevos">
      
      <a href="${data[cont].html_url}" target="blank_"> ${data[cont].name} </a>
      
      </li>
   `;
    }
  });






