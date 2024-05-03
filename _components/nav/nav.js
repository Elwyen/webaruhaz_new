//1024 px alatt mobilnezet, ha rakattintasz a menure nyiljon ki egészmenusre



function createNavMenu(whereToNav) {
    var navBarHTML = `
        <nav class="main-nav">
            <ul class="nav-list">
                <li class="nav-item"><a class="nav-link" href="/index.html">Főoldal</a></li>
                <li class="nav-item"><a class="nav-link" href="/pages/termekek/termekek.html">Termékek</a></li>
                <li class="nav-item"><a class="nav-link" href="/pages/kosar/kosar.html">Kosár</a></li>
            </ul>
        </nav>
    `;

    whereToNav.insertAdjacentHTML('afterbegin', navBarHTML);


    var mobileMenuButton = document.createElement('button');
    mobileMenuButton.textContent = 'Menu';
    mobileMenuButton.id = 'mobile-menu-button';
    whereToNav.insertAdjacentElement('afterbegin', mobileMenuButton);


    function toggleMenuVisibility() {
        var screenWidth = window.innerWidth;
        var navList = document.querySelector('.nav-list');
        
        if (screenWidth <= 1024) {

            navList.classList.add('hidden');
        } else {

            navList.classList.remove('hidden');
        }
    }

    toggleMenuVisibility();
    window.addEventListener('resize', toggleMenuVisibility);



    

    mobileMenuButton.addEventListener('click', function() {
        var navList = document.querySelector('.nav-list');
        navList.classList.toggle('show-menu');
        navList.classList.toggle('hidden')
    });

    window.addEventListener('load', function() {
        var screenWidth = window.innerWidth;
        var navList = document.querySelector('.nav-list');

        if (screenWidth <= 1024) {
            navList.classList.add('show-menu')
            whereToNav.insertAdjacentElement('afterbegin', mobileMenuButton);
        }
    });
    
}



// function createNavMenu(whereToNav) {
//     // Create navigation menu container
//     var navContainer = document.createElement('nav');
//     navContainer.classList.add('main-nav');
    
//     // Create list element for the navigation items
//     var navList = document.createElement('ul');
//     navList.classList.add('nav-list');
    
//     // Create individual navigation items
//     var menuItems = ["Főoldal", "Termékek", "Kosár"];
//     menuItems.forEach(function(itemText) {
//         var navItem = document.createElement('li');
//         navItem.classList.add('nav-item');
//         var navLink = document.createElement('a');
//         navLink.classList.add('nav-link');
//         navLink.href = '#' + itemText.toLowerCase();
//         navLink.textContent = itemText;
//         navItem.appendChild(navLink);
//         navList.appendChild(navItem);
//     });
    
//     // Append the navigation list to the container
//     navContainer.appendChild(navList);

//     // Create mobile menu button
//     var mobileMenuButton = document.createElement('button');
//     mobileMenuButton.textContent = 'Menu';
//     mobileMenuButton.id = 'mobile-menu-button';
//     mobileMenuButton.addEventListener('click', function() {
//         navList.classList.toggle('show-menu');
//         navList.classList.toggle('hidden')
        
//     });
//     navContainer.appendChild(mobileMenuButton);

//     // Insert the navigation menu into the specified element
//     whereToNav.appendChild(navContainer);
// }