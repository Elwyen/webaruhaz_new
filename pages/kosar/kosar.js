window.addEventListener('load', () => {
    cart = getKosar();
    kosarElemek();
});

let osszar = 0;
let cart = [];
const cartItem = document.createElement('div');

createNavMenu(document.body);

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
        alert(osszar + " Ft. Köszönjük a vásárlást!");
        cart.splice(0);
        clearKosar();
        const elementList = document.querySelectorAll('.product');
        elementList.forEach(function(element) {
            element.innerHTML = "";
        });
    }

}

const payButton = document.getElementById('pay')
payButton.addEventListener('click', () =>{
    paying();

})