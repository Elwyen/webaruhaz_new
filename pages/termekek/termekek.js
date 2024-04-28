const termekek=[
    {
        nev:"Macaron",
        id:0,
        termekleiras: "xd",
        ertekeles: 4,
        ar: 15623,
        kep: `/webaruhaz/public/kepek/termekek/kep0.jpg`
    },
    {
        nev:"Rozsaszin nyomat",
        id:1,
        termekleiras: "xd",
        ertekeles: 2,
        ar: 12223,
        kep: `/webaruhaz/public/kepek/termekek/kep1.jpg`
    },
    {
        nev:"Rozsaszin csokis keksz",
        id:2,
        termekleiras: "xd",
        ertekeles: 5,
        ar: 1233,
        kep: `/webaruhaz/public/kepek/termekek/kep2.jpg`
    },
    {
        nev:"Rozsaszin egerkakis linzer",
        id:3,
        termekleiras: "xd",
        ertekeles: 4,
        ar: 1222223,
        kep: `/webaruhaz/public/kepek/termekek/kep3.webp`
    },
    {
        nev:"kis kedves sutemeny",
        id:4,
        termekleiras: "xd",
        ertekeles: 5,
        ar: 126563,
        kep: `/webaruhaz/public/kepek/termekek/kep4.webp`
    }
]
//termeknev id termekleiras ertekels ár /kártyák, kosárba lehet rakni
// metodus ami létrehoz egy termekkartyat
// egy olyan metodus ami az elozo metodussal feltolti a kartyakat
//paraméterezzük fel a tömb alapján
$(()=>{
    createNavMenu(document.body);

    $('body').append('<div id="termekek"></div>');

    function createCard(i,j,k){
        // $('#termekek').append(`<div class = "termekkartya"></div>`).append(`<div class="termekkatya-img"></div>`).append
            const kartya = $(`<div>`).html(i).addClass('termekkartya');
            kartya.append(`<div class ="termekkartya-img"><img src="${j}"></div>`);
            kartya.append(`<button class="kosarba">Kosárba</button>`);
            kartya.append(`<p>${k} Ft</p>`)
            $('#termekek').append(kartya)

        }

    function createCards(){
        for (let i = 0; i < termekek.length; i++) {
            createCard(termekek[i].nev,termekek[i].kep,termekek[i].ar);
            
        }
    }
    createCards();


})