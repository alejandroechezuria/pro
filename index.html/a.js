
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
