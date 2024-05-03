//termeknev id termekleiras ertekels ár /kártyák, kosárba lehet rakni
// metodus ami létrehoz egy termekkartyat
// egy olyan metodus ami az elozo metodussal feltolti a kartyakat
//paraméterezzük fel a tömb alapján

$(()=>{
    //createNavMenu(document.body);

    $('body').append('<div id="termekek"></div>');

    createNavMenu(document.body);

    function createCard(i,j,k,l){
        // $('#termekek').append(`<div class = "termekkartya"></div>`).append(`<div class="termekkatya-img"></div>`).append
            const kartya = $(`<div>`).html(i).addClass('termekkartya');
            kartya.append(`<div class ="termekkartya-img"><img src="${j}"></div>`);
            kartya.append(`<a href="komment.html?product_index=${l}" class="comment">Vélemények</a>`);
            kartya.append(`<button class="kosarba">Kosárba</button>`);
            kartya.append(`<p>${k} Ft</p>`)
            $('#termekek').append(kartya)

    }

    function createCards(){
        for (let i = 0; i < termekek.length; i++) {
            createCard(termekek[i].nev,termekek[i].kep,termekek[i].ar, i);
            
        }
    }
    createCards();


})