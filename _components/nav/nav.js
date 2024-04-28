//1024 px alatt mobilnezet, ha rakattintasz a menure nyiljon ki egészmenusre



function createNavMenu(whereToNav){
    var navBarHTML = `
        <nav class="main-nav">
            <ul class="nav-list">
                <li class="nav-item"><a class="nav-link" href="/webaruhaz/index.html">Főoldal</a></li>
                <li class="nav-item"><a class="nav-link" href="/webaruhaz/pages/termekek/termekek.html">Termékek</a></li>
                <li class="nav-item"><a class="nav-link" href="/webaruhaz/pages/kosar/kosar.html">Kosár</a></li>
            </ul>
        </nav>
    `;
    

    whereToNav.insertAdjacentHTML('afterbegin', navBarHTML);

};