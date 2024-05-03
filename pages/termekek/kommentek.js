const COMMENTS = [
    {
        product_id: 0,
        comment: 'Delicious cakes, cupcakes, and cake balls! I love that you can customize the cupcake flavors and fillings to create just the cupcake you are craving!',
        name: 'Suzy',
        star: 5,
        image: 'people1.jpg',
    },
    {
        product_id: 1,
        comment: 'Highly recommend it!!!',
        jovalasz: 'Négyszeresükre',
        name: 'Daniel',
        star: 5,
        image: 'people2.jpg',
    },
    {
        product_id: 2,
        comment: 'This place has the best desserts I have ever had.',
        name: 'Patty',
        star: 4,
        image: 'people3.jpg',
    },
    {
        product_id: 3,
        comment: 'Ordered regular and gluten free cupcakes several times and everything has always been amazing. Delicious cupcakes no matter what flavor.',
        name: 'Elen',
        star: 4,
        image: 'people4.jpg',
    },
    {
        product_id: 0,
        comment: 'Amazing !! Ordering again for my daughters birthday now !',
        name: 'Vic',
        star: 5,
        image: 'people5.jpg',
    },
    {
        product_id: 4,
        comment: 'The service was not satisfying. I give this place only 2 stars',
        name: 'Vic',
        star: 5,
        image: 'people5.jpg',
    },
];

let productIndex = 0
let productId = 0

document.addEventListener("DOMContentLoaded", (event) => {
    initProduct()
    createComment()

    //navbar meghivasa
    createNavMenu(document.body);

});

function initProduct(){
    // Kinyerjük a product_indexet
    const currentUrl = window.location.href // Jelenlegi url
    const url = new URL(currentUrl) // Hozz létre egy URL objektumot
    const params = new URLSearchParams(url.search) // product_index=0
    productIndex = params.get('product_index') // product_index kulcshoz tartozó értéket kérjük le
    productId = termekek[productIndex].id

    // Betöltjük a képet, adunk neki classt
    const imgContainer = document.querySelector("#image")
    const img = document.createElement("img")
    img.src = termekek[productIndex].kep
    img.classList.add('rounded')
    img.classList.add('mt-3')
    img.classList.add('border')
    img.classList.add('border-light')
    img.classList.add('w-14r')
    imgContainer.append(img)

}

console.log(productIndex)

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

function createComment() {
    
    const commentContainer = document.querySelector("#comment")
    const commentsLength = COMMENTS.length
    console.log(commentsLength)

  COMMENTS.forEach((comment,index) => {
    if(comment.product_id == productId){
        const kep = "../../public/kepek/users/" + comment.image
        commentContainer.innerHTML += `<div class = "media border p-3 row rounded-pill rowmargin">
        <img src = "${kep}" class="mr-3 mt-3 rounded-circle col-sm-2 w-80"></img>
        <div class = "media-body col-sm-10">
        <h4>${comment.name}</h4>
        <p>${comment.comment}</p>
        </div>
        </div>`
    }
   

  })

  



   


}
