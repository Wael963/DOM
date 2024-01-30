
function increment(event){
    var quantité=event.target.parentNode.querySelector('span')
    console.log(event.target.parentNode.querySelector('span'))
    quantité.innerHTML=Number(quantité.innerHTML)+1
}

function decreaseQuntity(event){
    var quantité=event.target.parentNode.querySelector('span')
    console.log(event.target.parentNode.querySelector('span'))
    quantité.innerHTML=Number(quantité.innerHTML)-1
}

function removecart(event){
    event.target.parentNode.remove()
}
