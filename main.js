const usuario = document.getElementById('usuario')
const password = document.getElementById('password')
const button = document.getElementById('button')



button.addEventListener('click', (e) => {
    e.preventDefault()

if (usuario.value === 'Lizeth' && password.value === '1111') {
    window.location.href = "logined.html"  

//} else if (password < 1111 || password >1111) {
//} else if (password.value !== '1111') {
} else { 

    alert("Error de autenticación");

}

    
    


   

    console.log(usuario, password)
    
    
    
})












    
 
 