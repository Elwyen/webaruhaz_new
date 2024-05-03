const COMMENTS = [
    {
        id: '0',
        product_id: 1,
        comment: 'Delicious cakes, cupcakes, and cake balls! I love that you can customize the cupcake flavors and fillings to create just the cupcake you are craving!',
        name: 'Suzy',
    },
    {
        id: '1',
        product_id: 1,
        comment: 'Highly recommend it!!!',
        jovalasz: 'Négyszeresükre',
        name: 'Daniel',
    },
    {
        id: '2',
        product_id: 2,
        comment: 'This place has the best desserts I have ever had.',
        name: 'Patty',
    },
    {
        id: '3',
        product_id: 2,
        comment: 'Ordered regular and gluten free cupcakes several times and everything has always been amazing. Delicious cupcakes no matter what flavor.',
        name: 'Elen',
    },
    {
        id: '4',
        product_id: 3,
        comment: 'Amazing !! Ordering again for my daughters birthday now !',
        name: 'Vic',
    },
    {
        id: '5',
        product_id: 3,
        comment: 'The service was not satisfying. I give this place only 2 stars',
        name: 'Josh',
    },
];

let productIndex = -1

document.addEventListener("DOMContentLoaded", (event) => {
    initProduct()

    //navbar meghivasa
    createNavMenu(document.body);

});

function initProduct(){
    // Kinyerjük a product_indexet
    const currentUrl = window.location.href // Jelenlegi url
    const url = new URL(currentUrl) // Hozz létre egy URL objektumot
    const params = new URLSearchParams(url.search)
    productIndex = params.get('product_index') // Kérj le egy paramétert név alapján

    // Betöltjük a képet
    const imgContainer = document.querySelector("#image")
    const img = document.createElement("img")
    img.src = termekek[productIndex].kep
    imgContainer.append(img)

}

// const products = document.querySelectorAll('.product'); 

// products.forEach((product) => {
//     product.addEventListener('click', (event) => { 
//         const clickedProductId = event.target.id; // amire kattintok class termék annak az id-ját eltároljuk
//         console.log('Clicked Product ID:', clickedProductId); // az id-et ellenőrzöm

//         // Most, hogy megvan az id megjelenítjük a hozzátartozó hozzászólásokat

//         // Komment gombhoz klikk eseményt rendelünk

//         // Klikk esemény hatására kibővítjük a COMMENTS tömböt
//     });
// });

