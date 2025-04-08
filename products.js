let product = {
    title: "Student Laptop",
    description: "A powerful laptop for all your needs.",
    price: "$1200",
    stock: "In Stock",
    images: ["Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic5.jpg",
            "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic4.jpg",
            "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic3.jpg",
            "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic2.jpg",
            "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic1.jpg",
        ],
    specs: {
        cpu: "Intel Core i7",
        ram: "16GB DDR4",
        storage: "512GB SSD",
        graphics: "NVIDIA GeForce RTX 3060",
        screen: "15.6\" FHD"
    }
};

let imagesHtml = product.images.map(img => `<img src="${img}" alt="${product.title}">`).join('');

let specsHtml = Object.entries(product.specs).map(([key, value]) => {
    let iconClass = '';
    switch (key) {
        case 'cpu':
            iconClass = 'fa-microchip';
            break;
        case 'ram':
            iconClass = 'fa-memory';
            break;
        case 'storage':
            iconClass = 'fa-hdd';
            break;
        case 'graphics':
            iconClass = 'fa-gamepad'; // Example icon
            break;
        case 'screen':
            iconClass = 'fa-desktop';
            break;
        default:
            iconClass = 'fa-info-circle'; // Default icon
    }
    return `<div class="spec-item"><i class="fas ${iconClass}"></i> <span>${key.toUpperCase()}: ${value}</span></div>`;
}).join('');

let card = document.createElement('div');
card.classList.add('product-card');
card.innerHTML = `
    <div class="product-slider">
        <div class="product-slider-images">
            ${imagesHtml}
        </div>
        <div class="slider-nav">
            <button onclick="prevSlide(this.parentElement.parentElement)">❮</button>
            <button onclick="nextSlide(this.parentElement.parentElement)">❯</button>
        </div>
    </div>
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <p class="price">${product.price}</p>
    <p class="stock">${product.stock}</p>
    <div class="product-specs">
        <h4>Specifications</h4>
        ${specsHtml}
    </div>
`;

// Assuming you have a container element with the ID 'product-container'
document.getElementById('product-container').appendChild(card);

// You'll also need the JavaScript functions for the slider (prevSlide and nextSlide)
function prevSlide(slider) {
    const images = slider.querySelector('.product-slider-images');
    // Implement your logic to move to the previous image
    console.log("Previous slide");
}

function nextSlide(slider) {
    const images = slider.querySelector('.product-slider-images');
    // Implement your logic to move to the next image
    console.log("Next slide");
}