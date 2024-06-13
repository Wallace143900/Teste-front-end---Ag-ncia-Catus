const productList = [
    {
        poster: "./src/img/cadeira-red.png",
        description: "Aliquan congue nisl ele ac ligula convallis, luctus blandit augue.",
        priceCancel: "de R$ 582,90",
        price: "R$ 238,41",
        installments: "5x de R$ 47,68 sem juros"
    },
    {
        poster: "./src/img/Relogio-pulso.png",
        description: "Aliquan congue nisl ele ac ligula convallis, luctus blandit augue.",
        priceCancel: "de R$ 582,90",
        price: "R$ 238,41",
        installments: "5x de R$ 47,68 sem juros"
    },
    {
        poster: "./src/img/pa-lixo.png",
        description: "Aliquan congue nisl ele ac ligula convallis, luctus blandit augue.",
        priceCancel: "de R$ 582,90",
        price: "R$ 238,41",
        installments: "5x de R$ 47,68 sem juros"
    },
    {
        poster: "./src/img/poltrona_blue.png",
        description: "Aliquan congue nisl ele ac ligula convallis, luctus blandit augue.",
        priceCancel: "de R$ 582,90",
        price: "R$ 238,41",
        installments: "5x de R$ 47,68 sem juros"
    },
    {
        poster: "./src/img/sofa.png",
        description: "Aliquan congue nisl ele ac ligula convallis, luctus blandit augue.",
        priceCancel: "de R$ 582,90",
        price: "R$ 238,41",
        installments: "5x de R$ 47,68 sem juros"
    },
    {
        poster: "./src/img/bolsa-prada.png",
        description: "Aliquan congue nisl ele ac ligula convallis, luctus blandit augue.",
        priceCancel: "de R$ 582,90",
        price: "R$ 238,41",
        installments: "5x de R$ 47,68 sem juros"
    },
    {
        poster: "./src/img/cama.png",
        description: "Aliquan congue nisl ele ac ligula convallis, luctus blandit augue.",
        priceCancel: "de R$ 582,90",
        price: "R$ 238,41",
        installments: "5x de R$ 47,68 sem juros"
    }
];

let currentIndex = 0;

function createCard(object) {
    const productCard = document.createElement("div");
    const productPoster = document.createElement("img");
    const productDescription = document.createElement("p");
    const priceOff = document.createElement("s"); 
    const priceOffParagraph = document.createElement("p"); 
    const price = document.createElement("h3");
    const installment = document.createElement("h4");
    const buttonAddProduct = document.createElement("button");

    productPoster.src = object.poster;
    productPoster.alt = `poster do ${object.description}`;

    productDescription.innerText = object.description;
    priceOffParagraph.innerText = object.priceCancel; 
    price.innerText = object.price;
    installment.innerText = object.installments;
    buttonAddProduct.innerText = "Adicionar ao carrinho";

    productCard.className = "productCard";
    productPoster.classList.add("img-poster");
    productDescription.classList.add("product_description");
    priceOffParagraph.classList.add("product_value_riscado");
    priceOff.classList.add("product_value");
    price.classList.add("product_value_span");
    installment.classList.add("product_value");
    buttonAddProduct.classList.add("button_add_car");

    priceOff.appendChild(priceOffParagraph);

    productCard.append(productPoster, productDescription, priceOff, price, installment, buttonAddProduct);

    return productCard;
}

function renderCards(array, startIndex) {
    const productDiv = document.querySelector(".card-list");
    productDiv.innerHTML = ""; 
    const endIndex = startIndex + 4;
    for (let i = startIndex; i < endIndex && i < array.length; i++) {
        const currentObject = array[i];
        const card = createCard(currentObject);
        productDiv.appendChild(card);
    }
}

document.querySelector(".next").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex + 4 > productList.length) {
        currentIndex = 0; 
    }
    renderCards(productList, currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = productList.length - 4; 
    }
    renderCards(productList, currentIndex);
});

renderCards(productList, currentIndex);

function renderAllCards(array) {
    const productDiv = document.querySelector(".card-list");

   
    productDiv.innerHTML = "";

    
    array.forEach(product => {
        const card = createCard(product);
        productDiv.appendChild(card);
    });

    
    checkCardsToShow();
}


function checkCardsToShow() {
    const cardsShown = document.querySelectorAll('.card-list .card').length;
    const totalCards = productList.length;

    if (cardsShown < totalCards) {
        
        document.getElementById('verMaisBtn').style.display = 'block'; 
    } else {
        
        document.getElementById('verMaisBtn').style.display = 'none';
    }
}


document.getElementById('verMaisBtn').addEventListener('click', function() {
    
    const remainingCards = productList.length - document.querySelectorAll('.card-list .card').length;

    
    const cardsToShow = Math.min(remainingCards, 3);

    
    renderLastCards(cardsToShow);

    
    checkCardsToShow();
});


function renderLastCards(count) {
    const productDiv = document.querySelector(".card-list");

    
    const startIndex = productList.length - count;

    
    for (let i = startIndex; i < productList.length; i++) {
        const card = createCard(productList[i]);
        productDiv.appendChild(card);
    }
}


const initialRenderCount = 4;
renderAllCards(productList.slice(0, initialRenderCount));

document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contact-link');
    const footer = document.getElementById('footer');
    const header = document.querySelector('header');

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        footer.scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('transparent-header');
        } else {
            header.classList.remove('transparent-header');
        }
    });

    const menuIcon = document.getElementById('menu-icon');
    const modal = document.getElementById('menu-modal');
    const contactLinkModal = document.getElementById('contact-link-modal');

    
    modal.style.display = 'none';
    
    
    menuIcon.addEventListener('click', function () {
        if (modal.style.display === 'flex') {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'flex';
        }
    });
    
    
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    
    contactLinkModal.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'none'; 
        footer.scrollIntoView({ behavior: 'smooth' });
    });
});