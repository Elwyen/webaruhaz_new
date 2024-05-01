const termekek=[
    {
        nev:"Macaron",
        id:0,
        termekleiras: "xd",
        ertekeles: 4,
        ar: 15623,
        kep: `/public/kepek/termekek/kep0.jpg`
    },
    {
        nev:"Rozsaszin nyomat",
        id:1,
        termekleiras: "xd",
        ertekeles: 2,
        ar: 12223,
        kep: `/public/kepek/termekek/kep1.jpg`
    },
    {
        nev:"Rozsaszin csokis keksz",
        id:2,
        termekleiras: "xd",
        ertekeles: 5,
        ar: 1233,
        kep: `/public/kepek/termekek/kep2.jpg`
    },
    {
        nev:"Rozsaszin egerkakis linzer",
        id:3,
        termekleiras: "xd",
        ertekeles: 4,
        ar: 1222223,
        kep: `/public/kepek/termekek/kep3.webp`
    },
    {
        nev:"kis kedves sutemeny",
        id:4,
        termekleiras: "xd",
        ertekeles: 5,
        ar: 126563,
        kep: `/public/kepek/termekek/kep4.webp`
    }
]

const cart = [...termekek]

createNavMenu(document.body);

// console.log(termekek)

function paying(){
    let osszar = 0;

    if (cart.length === 0) {
        alert("A kosár üres!");
    } else{
        cart.forEach(product =>{
            const cartItem = document.createElement('div');
            cartItem.classList.add('product');
            cartItem.innerHTML = 
            `
            <p>${product.nev}</p>
            <img src="${product.kep}">
            <p>Ár: $${product.ar}</p>
            `;
            
            osszar += product.ar;

            document.body.append(cartItem);
        })
    }

}

const payButton = document.getElementById('pay')
payButton.addEventListener('click', () =>{
    paying();
})