"use strict";


// ------ BURGER MENU--------//

let elHeader = $(".top-menu__nav")
let elBody = document.querySelector("body")
let elHamburger = $(".menu-button")

elHamburger.addEventListener("click", function(){
    elHeader.classList.toggle("active")
    elBody.classList.toggle("fixed")
})

// ------ BURGER MENU END--------//

// ------ GO-TOP BTN--------//

// const goTopBtn = $(".go-top");

// goTopBtn.addEventListener("click", goTop);
// window.addEventListener("scroll", trackScroll);

// function trackScroll(){
//     const offset = window.pageYOffset;
//     const coords = document.documentElement.clientHeight;
//     if(offset > coords) {
//         goTopBtn.classList.add("go-top-show");
//     } else {
//         goTopBtn.classList.remove("go-top--show");
//     }
// }

// function goTop() {
//     if (window.pageYOffset > 0) {
//         window.scrollBy(0, -75);
//         setTimeout(goTop, 0);
//     }
// }

// ------ GO-TOP BTN END--------//

// ------ NORMALIZE ALL PRODUCTS--------//

const Allproducts = products.map((products) => {
    return {
        name: products.name,
        class: products.class,
        price: products.price,
        imageName: products.image,
    };
});


// ------ NORMALIZE ALL PRODUCTS -------- //

// ------------ RENDER ALL PRODUCTS function ------------ //

function renderAllproducts() {
    Allproducts.forEach((el) => {
        const card = createElement(
            "div",
            "item",
            `
            <img class="item__img" src="./images/${el.imageName}.jpg" alt="${el.name}">
            <h2 class="item__name">${el.name}</h2>
            <p class="item__price">price ${el.price}</p>
            `
        );

        $(".site-hero__right").appendChild(card);
    });
}

renderAllproducts();

// ---------------- FIND FILMS FUNCTIONS ---------------- //

const findFilm = (regexp) => {
    return Allproducts.filter((item) => {
        return (
            item.name.match(regexp)
        );
    });
};

// --------------- FIND FILMS LISTENER ----------------- //

$("#submitForm").addEventListener("submit", () => {
    $(".site-hero__right").innerHTML = `<span class="loader"></span>`;

    const searchValue = $("#productName").value;

    const regexp = new RegExp(searchValue, "gi");

    const searchResult = findFilm(regexp);

    console.log(searchResult);

    setTimeout(() => {
        if (searchResult.length > 0) {
            searchResultsRender(searchResult);
            $('.card-res').classList.remove('d-none');

            if (searchResult.length == 1) {
                $('#res').innerHTML = `<strong >${searchResult.length}</strong> product found`;
            } else {
                $('#res').innerHTML = `<strong >${searchResult.length}</strong> products found`
            }

        } else {
            $('.card-res').classList.add('d-none');
            $('.site-hero__right').innerHTML = `<h1 class="text-center text-danger">product not found</h1>`;
        }
    }, 2000)
});

function searchResultsRender(data = []) {
    $(".site-hero__right").innerHTML = "";
    data.forEach((el) => {
        const card = createElement(
            "div",
            "item",
            `
            <img class="item__img" src="./images/${el.imageName}.jpg" alt="uzum">
            <h2 class="item__name">${el.name}</h2>
            <p class="item__price">price ${el.price}</p>
            `
        );

        $(".site-hero__right").appendChild(card);
    });
}

// -------------------------- DYNAMIC CATEGORIES ------------------------- //

// const dynamicCategory = () => {
//     let category = [];

//     AllMovies.forEach((e) => {
//         e.category.forEach((el) => {
//             if (!category.includes(el)) {
//                 category.push(el);
//             }
//         });
//     });

//     category.sort();
//     category.unshift("All");
//     category.forEach((el) => {
//         const option = createElement("option", "item-option", el);
//         $("#category").appendChild(option);
//     });
// };

// dynamicCategory();

// ------------------ SHOW MODAL  ------------------------------ //

// $(".wrapper").addEventListener("click", (e) => {
//     if (e.target.classList.contains("btn-primary")) {
//         const idMovie = e.target.getAttribute("data-read");
//         showModal(idMovie);
//         $('.modal-window').classList.remove('modal-hide');
//     }
// });


// function showModal(ID) {
//     const filmItem = AllMovies.filter((e) => {
//         return e.id == ID;
//     });

//     filmItem.forEach((e) => {

//         const row = createElement('div', 'row',
//             `<div class="col-md-4">
//                     <img src="${e.minIMG}" alt="cover" class="img-fluid">
//                  </div>
//                  <div class="col-md-6">
//                     <h4 class="text-primary">${e.title}</h4>
//                     <ul class="list-group">
//                        <li class="list-group-item">Rating: ${e.rating} </li>
//                        <li class="list-group-item">Year: ${e.year} </li>
//                        <li class="list-group-item">Runtime: ${e.time} </li>
//                        <li class="list-group-item">Category: ${e.category} </li>
//                     </ul>
//                  </div>
//                  <div class="col-md-12 mt-4">
//                     <h4 class="text-danger"> ${e.title} </h4>
//                     <p> ${e.summary}</p>
//              </div>`);
//         $('.modal-content').appendChild(row);
//     })
// }


// $('#close').addEventListener('click', () => {
//     console.log("ok");
//     $('.modal-window').classList.add('modal-hide');
//     $('.modal-content').innerHTML = "";
//     console.log("ok");
// })


// window.addEventListener('click', (e) => {

//     if (e.target.classList.contains('modal-window')) {
//         $('#close').classList.toggle('animate')
//         console.log("ok");
//     }

// })

// --------- SHOW MODAL ENDED -------------------- //