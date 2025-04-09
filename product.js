// product.js
function nextSlide(slider) {
    const images = slider.querySelector('.product-slider-images');
    const imageWidth = slider.offsetWidth;
    images.style.transform = `translateX(-${imageWidth}px)`;
    setTimeout(() => {
        images.appendChild(images.firstElementChild);
        images.style.transition = 'none';
        images.style.transform = 'translateX(0)';
        setTimeout(() => {
            images.style.transition = 'transform 0.5s ease';
        }, 10);
    }, 500);
}

function prevSlide(slider) {
    const images = slider.querySelector('.product-slider-images');
    const imageWidth = slider.offsetWidth;
    images.style.transition = 'none';
    images.style.transform = `translateX(-${imageWidth}px)`;
    images.prepend(images.lastElementChild);
    images.style.transform = 'translateX(0)';
    setTimeout(() => {
        images.style.transition = 'transform 0.5s ease';
        images.style.transform = `translateX(-${imageWidth}px)`;
    }, 10);
    setTimeout(()=>{
        images.style.transform = 'translateX(0)'
    }, 510)
}
// product.js

const productsData = [
    {
        category: 'accessories',
        images: [
            "Stock/Oraimo Space buds/pic1.webp",
            "Stock/Oraimo Space buds/pic2.webp",
            "Stock/Oraimo Space buds/pic3.webp",
            "Stock/Oraimo Space buds/pic4.webp",
            "Stock/Oraimo Space buds/pic5.webp",
            "Stock/Oraimo Space buds/pic6.webp",
            "Stock/Oraimo Space buds/pic7.webp",
            "Stock/Oraimo Space buds/pic8.webp",
            
        ],
        title: 'Oraimo Space Buds Pro',
        description: 'Listen to music you love unbothered',
        price: 'KSh 5,500',
        stock: 'In Stock: 1'
    },
     {
        category: 'accessories',
        images: [
            "Stock/Oraimo car charger/pic1.webp",
            "Stock/Oraimo car charger/pic2.webp"
        ],
        title: 'Oraimo Car charger',
        description: 'Car charger',
        price: 'KSh 700',
        stock: 'In Stock: 3'
    },
    {
        category: 'accessories',
        images: [
            "Stock/Oraimo Car Modulator/pic 1.webp",
            "Stock/Oraimo Car Modulator/pic 2.webp",
            "Stock/Oraimo Car Modulator/pic 1.webp"
        ],
        title: 'Oraimo Car modulator',
        description: 'Car charger',
        price: 'KSh 1,500',
        stock: 'In Stock: 1'
    },
    {
        category: 'accessories',
        images: [
        "Stock/Oraimo free pods Lite/pic1.webp",
        "Stock/Oraimo free pods Lite/pic2.webp",
        "Stock/Oraimo free pods Lite/pic3.webp",
        "Stock/Oraimo free pods Lite/pic4.webp",
        "Stock/Oraimo free pods Lite/pic5.webp",
        "Stock/Oraimo free pods Lite/pic6.webp",
        "Stock/Oraimo free pods Lite/pic7.webp",
        ],
        title: 'Oraimo Free Pods Lite',
        description: 'Listen to music you love unbothered',
        price: 'KSh 2,500',
        stock: 'In Stock: 1'
    },
    {
        category: 'accessories',
        images: [
            "Stock/Oraimo Halo 3 lite/pic6.webp",
            "Stock/Oraimo Halo 3 lite/pic5.webp",
            "Stock/Oraimo Halo 3 lite/pic4.webp",
            "Stock/Oraimo Halo 3 lite/pic3.webp",
            "Stock/Oraimo Halo 3 lite/pic2.webp",
            "Stock/Oraimo Halo 3 lite/pic 1.webp",
        ],
        title: 'Oraimo Free Pods Lite',
        description: 'Listen to music you love unbothered',
        price: 'KSh 350',
        stock: 'In Stock: 10'
    },
    {
        category: 'accessories',
        images: [
           "Stock/Oraimo Powercube(Normal charger)/pic3.webp",
            "Stock/Oraimo Powercube(Normal charger)/pic2.webp",
            "Stock/Oraimo Powercube(Normal charger)/pic1.webp",
        ],
        title: 'Oraimo Powercube',
        description: 'Normal charger',
        price: 'KSh 800',
        stock: 'In Stock:11'
    },
  {
    category: 'accessories',
    images: [
        "Stock/Oraimo Powerbank/10,000/pic8.webp",
        "Stock/Oraimo Powerbank/10,000/pic7.webp",
        "Stock/Oraimo Powerbank/10,000/pic6.webp",
        "Stock/Oraimo Powerbank/10,000/pic5.webp",
        "Stock/Oraimo Powerbank/10,000/pic4.webp",
        "Stock/Oraimo Powerbank/10,000/pic3.webp",
        "Stock/Oraimo Powerbank/10,000/pic2.webp",
        "Stock/Oraimo Powerbank/10,000/pic1.webp",
    ],
    title: 'Oraimo Powerbank',
    description: '10,000mAh',
    price: 'KSh 2,700',
    stock: 'In Stock:1'
},
{
    category: 'accessories',
    images: [
        "Stock/Oraimo Powerbank/20,000/pic9.webp",
        "Stock/Oraimo Powerbank/20,000/pic8.webp",
        "Stock/Oraimo Powerbank/20,000/pic7.webp",
        "Stock/Oraimo Powerbank/20,000/pic6.webp",
        "Stock/Oraimo Powerbank/20,000/pic5.webp",
        "Stock/Oraimo Powerbank/20,000/pic4.webp",
        "Stock/Oraimo Powerbank/20,000/pic3.webp",
        "Stock/Oraimo Powerbank/20,000/pic2.webp",
        "Stock/Oraimo Powerbank/20,000/pic1.webp"
    ],
    title: 'Oraimo Powerbank',
    description: '20,000mAh',
    price: 'KSh 4,000',
    stock: 'In Stock:1'
},
{
    category: 'accessories',
    images: [
       " Stock/Oraimo Necklace Lite/oraimo-necklacelite-1.webp",
        "Stock/Oraimo Necklace Lite/oraimo-necklacelite-2.webp",
        "Stock/Oraimo Necklace Lite/oraimo-necklacelite-3.webp",
        "Stock/Oraimo Necklace Lite/oraimo-necklacelite-4.webp",
       " Stock/Oraimo Necklace Lite/oraimo-necklacelite-5.webp",
       " Stock/Oraimo Necklace Lite/oraimo-necklacelite-6.webp",
        "Stock/Oraimo Necklace Lite/oraimo-necklacelite-7.webp",
        "Stock/Oraimo Necklace Lite/oraimo-necklacelite-8.webp",
        "Stock/Oraimo Necklace Lite/oraimo-necklacelite-9.webp",
        "Stock/Oraimo Necklace Lite/oraimo-necklacelite-10.webp",
        "Stock/Oraimo Necklace Lite/oraimo-necklacelite-11.webp",
    ],
    title: 'Oraimo Necklace lite',
    description: 'Listen to your music on the go ',
    price: 'KSh 2,250',
    stock: 'In Stock:1'
},

{
    category: 'accessories',
    images: [
        "Stock/Oraimo Iphone charger/pic6.webp",
        "Stock/Oraimo Iphone charger/pic5.webp",
        "Stock/Oraimo Iphone charger/pic4.webp",
        "Stock/Oraimo Iphone charger/pic3.webp",
        "Stock/Oraimo Iphone charger/pic2.webp",
        "Stock/Oraimo Iphone charger/pic1.webp",
    ],
    title: 'Oraimo Iphone lightning Cable',
    description: 'Iphone charger',
    price: 'KSh 500',
    stock: 'In Stock:12'
},
{
    category: 'accessories',
    images: [
        "Stock/Oraimo type c/pic 1.webp",
    ],
    title: 'Oraimo Type C',
    description: 'Type-C cable',
    price: 'KSh 450',
    stock: 'In Stock:8'
},
{
    category: 'accessories',
    images: [
       "Stock/Oraimo Watch 5 ULTRA/PIC2.webp",
        "Stock/Oraimo Watch 5 ULTRA/PIC3.webp",
        "Stock/Oraimo Watch 5 ULTRA/PIC4.webp",
        "Stock/Oraimo Watch 5 ULTRA/PIC5.webp",
        "Stock/Oraimo Watch 5 ULTRA/PIC6.webp",
        "Stock/Oraimo Watch 5 ULTRA/PIC7.webp",
        "Stock/Oraimo Watch 5 ULTRA/pic8.webp",
        "Stock/Oraimo Watch 5 ULTRA/pic9.webp",
        "Stock/Oraimo Watch 5 ULTRA/watch-5-lite-osw-804.webp",
    ],
    title: 'Oraimo Watch 5 Ultra',
    description: 'Type-C cable',
    price: 'KSh 3,500',
    stock: 'In Stock:1'
},
    
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.dataset.category = product.category;

    let imagesHtml = product.images.map(img => `<img src="${img}" alt="${product.title}">`).join('');

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
    `;

    return card;
}

function displayProducts(products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });
}

function filterProducts(category) {
    let filteredProducts = productsData;
    if (category !== 'all') {
        filteredProducts = productsData.filter(product => product.category === category);
    }
    displayProducts(filteredProducts);
}

// Initial display of all products
displayProducts(productsData);