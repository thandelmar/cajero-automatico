const depositar = document.getElementById('depositar')
const retirar = document.getElementById('retirar')


depositar.addEventListener('click', (e) => {
    e.preventDefault() //--usar con form o submit
    let monto = document.getElementById('monto').value
    monto = parseInt(monto)
    let balance = document.getElementById('balance').innerHTML
    balance = parseInt(balance)
    //console.log(monto, typeof monto, monto > 50000)
    if (monto > 50000) {
        alert("no puedes depositar mas de 50000");
    } else { 
        console.log(balance)
        console.log(monto)
        const total = monto + balance
        document.getElementById('balance').innerText = total
        console.log(total)
    }
})

retirar.addEventListener('click', (e) => {
    let monto = document.getElementById('monto').value
    monto = parseInt(monto)
    let balance = document.getElementById('balance').innerHTML
    balance = parseInt(balance)
    if (monto < 10) {
        alert("no puedes depositar menos de 10")
    } else {
        console.log(balance)
        console.log(monto)
        const total = balance - monto
        document.getElementById('balance').innerText = total
        console.log(total)
    }
   
    
   // balance = (parseInt(balance.value)-parseInt(retirar.value))
})











//function retirar(){
   // maxretiro++;
        //if(maxretiro>=4) {
         //   swal ("No puedes hacer mas de 4 depósitos");
         //   location.href = "index.html"
        //}else{
         //   let balance = (parseInt(depositar.value)+parseInt(balance.value));
          //  swal ("retiro exitoso", "tu nuevo saldo de | "+newsaldo+" A la cuenta "+button+" Exito");
       // }
    

    




