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
{
    category: 'accessories',
    images: [
        "Stock/blue t h gamepad/pic3.webp",
        "Stock/blue t h gamepad/pic2.jpg",
        "Stock/blue t h gamepad/pic1.jpg",
    ],
    title: 'Bluetooth Gamepad',
    description: 'Bluetooth Gaming Pad',
    price: 'KSh 1,800',
    stock: 'In Stock:1'
},
{
    category: 'accessories',
    images: [
        "Stock/samsung 25w pd adapter/pic3.jpg",
        "Stock/samsung 25w pd adapter/pic2.jpg",
        "Stock/samsung 25w pd adapter/pic1.jpg",
    ],
    title: 'samsung 25w pd adapter',
    description: 'samsung 25w pd adapter',
    price: 'KSh 2,400',
    stock: 'In Stock:9'
},
{
    category: 'accessories',
    images: [
        "Stock/samsung 45w pd adapter/pic3.jpg",
        "Stock/samsung 45w pd adapter/pic2.jpg",
       " Stock/samsung 45w pd adapter/pic1.jpg",
    ],
    title: 'samsung 45w pd',
    description: 'samsung 45w pd',
    price: 'KSh 4,000',
    stock: 'In Stock:3'
},
{
    category: 'accessories',
    images: [
        "Stock/samsung travel adapter/pic2.jpg",
        "Stock/samsung travel adapter/pic1.jpg",
    ],
    title: 'samsung travel adapter',
    description: 'samsung travel adapter',
    price: 'KSh 3,700',
    stock: 'In Stock:1'
},
{
    category: 'accessories',
    images: [
        "Stock/samsung usb c to usb c cable 3a/pic3.jpg",
        "Stock/samsung usb c to usb c cable 3a/pic2.jpg",
        "Stock/samsung usb c to usb c cable 3a/pic1.jpg",
    ],
    title: 'samsung usb c to usb c ',
    description: 'samsung usb c to usb c ',
    price: 'KSh 800',
    stock: 'In Stock:3'
},
{
    category: 'accessories',
    images: [
        "Stock/samsung wireless battery pack 10000mah/pic1.jpg",
        "Stock/samsung wireless battery pack 10000mah/pic2.jpg",
        "Stock/samsung wireless battery pack 10000mah/pic3.jpg",
            ],
    title: 'samsung wireless battery pack 10000mah ',
    description: 'samsung wireless battery pack 10000mah ',
    price: 'KSh 7,000',
    stock: 'In Stock:3'
},
{
    category: 'accessories',
    images: [
        "Stock/sandisk 32gb/pic1.jpg",
        "Stock/sandisk 32gb/pic2.jpg",
        "Stock/toshiba 32gb/pic2.jpg",
        "Stock/toshiba 32gb/pic1.jpg",

            ],
    title: 'Flashdisk ',
    description: '32GB ',
    price: 'KSh 1,500',
    stock: 'In Stock:4'
},
{
    category: 'accessories',
    images: [
        "Stock/hp 64gb/pic2.jpg",
        "Stock/hp 64gb/pic1.jpg",

            ],
    title: 'HP Flashdisk ',
    description: '64GB ',
    price: 'KSh 2,000',
    stock: 'In Stock:2'
},
{
    category: 'accessories',
    images: [
        "Stock/ex uk keyboard/pic2.jpg",
        "Stock/ex uk keyboard/pic1.jpg",

            ],
    title: 'X-UK keyboard ',
    description: 'Keyboard ',
    price: 'KSh 700',
    stock: 'In Stock:24'
},
{
    category: 'accessories',
    images: [
        "Stock/ex uk mouse/pic3.jpg",
        "Stock/ex uk mouse/pic2.jpg",
        "Stock/ex uk mouse/download.jpg",

            ],
    title: 'X-UK Mouse ',
    description: 'Keyboard ',
    price: 'KSh 500',
    stock: 'In Stock:19'
},
{
    category: 'accessories',
    images: [
        "Stock/harddrive laptop/pic2.jpg",
        "Stock/harddrive laptop/pic1.jpg",

            ],
    title: 'Laptop HDD ',
    description: '500GB ',
    price: 'KSh 4,000',
    stock: 'In Stock:4'
},
{
    category: 'accessories',
    images: [
        "Stock/harddrive pc/pic2.jpg",
        "Stock/harddrive pc/pic1.jpg",
           ],
    title: ' PC Harddrive ',
    description: '8Gb,250GB',
    price: 'KSh 4,000',
    stock: 'In Stock:19'
},
{
    category: 'accessories',
    images: [
        "Stock/havit gamenote h2002d/pic1.jpg",
           ],
    title: ' Havit Gamenote',
    description: 'Gaming Headphones',
    price: 'KSh 7,000',
    stock: 'In Stock:2'
},
{
    category: 'accessories',
    images: [
        "Stock/havit h628bt/pic1.jpg",
        "Stock/havit h628bt/pic2.jpg",
           ],
    title: ' Havit headphones',
    description: 'Headphones',
    price: 'KSh 2,200',
    stock: 'In Stock:5'
},
{
    category: 'accessories',
    images: [
        "Stock/havit sk885bt/pic3.jpg",
        "Stock/havit sk885bt/pic2.jpg",
        "Stock/havit sk885bt/pic1.jpg",
           ],
    title: ' Havit bluetooth speaker',
    description: 'RGB bluetooth speaker',
    price: 'KSh 4,000',
    stock: 'In Stock:5'
},
{
    category: 'accessories',
    images: [
        "Stock/Apple 60 W usb c/pic 1.png",
        "Stock/Apple 60 W usb c/pic2.png",
           ],
    title: ' Apple 60W USB C',
    description: 'Charger',
    price: 'KSh 800',
    stock: 'In Stock:5'
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