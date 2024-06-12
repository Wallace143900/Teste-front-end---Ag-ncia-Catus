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
    }
];

let currentIndex = 0;

function createCard(object) {
    const productCard = document.createElement("div");
    const productPoster = document.createElement("img");
    const productDescription = document.createElement("p");
    const priceOff = document.createElement("s"); // Crie o elemento s (risco)
    const priceOffParagraph = document.createElement("p"); // Crie um elemento p para conter o preço riscado
    const price = document.createElement("h3");
    const installment = document.createElement("h4");
    const buttonAddProduct = document.createElement("button");

    productPoster.src = object.poster;
    productPoster.alt = `poster do ${object.description}`;

    productDescription.innerText = object.description;
    priceOffParagraph.innerText = object.priceCancel; // Defina o texto do preço dentro do parágrafo
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

    // Adicione o parágrafo ao elemento risco
    priceOff.appendChild(priceOffParagraph);

    productCard.append(productPoster, productDescription, priceOff, price, installment, buttonAddProduct);

    return productCard;
}

function renderCards(array, startIndex) {
    const productDiv = document.querySelector(".card-list");
    productDiv.innerHTML = ""; // Limpa os cards existentes
    const endIndex = startIndex + 4; // Mostra 4 cards
    for (let i = startIndex; i < endIndex && i < array.length; i++) {
        const currentObject = array[i];
        const card = createCard(currentObject);
        productDiv.appendChild(card);
    }
}

document.querySelector(".next").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex + 4 > productList.length) {
        currentIndex = 0; // Volta ao início se passar do fim da lista
    }
    renderCards(productList, currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = productList.length - 4; // Vai para o fim se passar do início da lista
    }
    renderCards(productList, currentIndex);
});

// Renderiza os primeiros 4 cards ao carregar a página
renderCards(productList, currentIndex);
