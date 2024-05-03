// const cart = [...termekek]

window.addEventListener('load', () => {
    const mentettKosar = localStorage.getItem('kosar');
    if (mentettKosar) {
        cart = JSON.parse(mentettKosar);
        // frissitKosar();
    }
    kosarElemek();
});

let osszar = 0;
var cart = [];
const cartItem = document.createElement('div');

createNavMenu(document.body);


// console.log(termekek)

function kosarElemek(){


    cart.forEach(product =>{
        const cartItem = document.createElement('div');
        cartItem.classList.add('product');
        cartItem.innerHTML = 
        `
        <p>${product.nev}</p>
        <img src="${product.kep}">
        <p>Ár: ${product.ar} Ft</p>
        `;
        
        osszar += product.ar;

        document.body.append(cartItem);
    })
}

function paying(){

    if (cart.length === 0) {
        alert("A kosár üres!");
    } else{
        alert(osszar);
        cart.length = 0;
        localStorage.removeItem('kosar');
        document.querySelector('.product').innerHTML = "";
    }

}

const payButton = document.getElementById('pay')
payButton.addEventListener('click', () =>{
    paying();

})