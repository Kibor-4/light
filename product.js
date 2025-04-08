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
        category: 'laptops',
        images: [
            "Stock/mACBOOK AIR 2015/PIC1.jpg",
            "Stock/mACBOOK AIR 2015/PIC2.jpg",
            "Stock/mACBOOK AIR 2015/PIC3.jpg",
            "Stock/mACBOOK AIR 2015/PIC4.jpg",
            "Stock/mACBOOK AIR 2015/PIC5.jpg"
        ],
        title: '2015 Macbook Air',
        description: 'intel core i5, 8GB RAM, 512GB SSD',
        price: 'KSh 50,000',
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
    category: 'laptops',
    images: [
        "Stock/lenovo thinkpad yoga 11e/pic5.jpg",
        "Stock/lenovo thinkpad yoga 11e/pic4.jpg",
        "Stock/lenovo thinkpad yoga 11e/pic3.png",
        "Stock/lenovo thinkpad yoga 11e/pic3.jpg",
        "Stock/lenovo thinkpad yoga 11e/pic2.jpg",
        "Stock/lenovo thinkpad yoga 11e/pic1.jpg",
    ],
    title: 'Lenovo Thinkpad 11e',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/hp1040 g3/pic4.webp",
        "Stock/hp1040 g3/pic4.jpg",
        "Stock/hp1040 g3/pic2.jpg",
        "Stock/hp1040 g3/pic1.jpg",
    ],
    title: 'HP Elitebook 1040 G3',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
       " Stock/HP X360 1030, G3/pic1.jpg",
        "Stock/HP X360 1030, G3/pic2.jpg",
        "Stock/HP X360 1030, G3/pic3.jpg",
        "Stock/HP X360 1030, G3/pic4.jpg",
        "Stock/HP X360 1030, G3/pic5.jpg",
    ],
    title: 'HP Elitebook X360 G3',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic5.jpg",
        "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic4.jpg",
        "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic3.jpg",
       " Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic2.jpg",
        "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic1.jpg",
    ],
    title: 'HP Probook 635 Ryzen G7',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic5.jpg",
        "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic4.jpg",
        "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic3.jpg",
        "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic2.jpg",
        "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic1.jpg",
        ],
    title: 'HP Probook 445 Ryzen G9',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
            "Stock/HP PROBOOK 440 G5/pic1.jpg",
            "Stock/HP PROBOOK 440 G5/pic2.webp",
            "Stock/HP PROBOOK 440 G5/pic3.jpg",
            "Stock/HP PROBOOK 440 G5/pic2.jpg",
            "Stock/HP PROBOOK 440 G5/pic4.jpg",
            "Stock/HP PROBOOK 440 G5/pic5.jpg",
            ],
    title: 'HP Probook 440 G5',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/HP ELITEBOOK 840 G5/pic4.jpg",
        "Stock/HP ELITEBOOK 840 G5/pic5.jpg",
        "Stock/HP ELITEBOOK 840 G5/pic3.jpg",
        "Stock/HP ELITEBOOK 840 G5/pic2.jpg",
        "Stock/HP ELITEBOOK 840 G5/pic1.jpg",
            ],
    title: 'HP Probook 840 G5',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/HP ELITEBOOK 840 G5/pic4.jpg",
        "Stock/HP ELITEBOOK 840 G5/pic5.jpg",
        "Stock/HP ELITEBOOK 840 G5/pic3.jpg",
        "Stock/HP ELITEBOOK 840 G5/pic2.jpg",
        "Stock/HP ELITEBOOK 840 G5/pic1.jpg",
            ],
    title: 'HP Probook 840 G5',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic5.jpg",
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic4.jpg",
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic3.jpg",
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic2.webp",
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic1.jpg",
            ],
    title: 'HP Elitebook 840 G2',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic5.jpg",
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic4.jpg",
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic3.jpg",
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic2.webp",
        "Stock\HP ELITEBOOK 840 G2, 5TH GEN\pic1.jpg",
            ],
    title: 'HP Probook 840 G2',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
       " Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic5.jpg",
        "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic4.png",
       " Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic3.jpg",
        "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic2.jpg",
        "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic1.jpg",
            ],
    title: 'HP Elitebok 830 X360 i5',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/HP 830 G5/pic1.jpg",
        "Stock/HP 830 G5/pic2.jpg",
        "Stock/HP 830 G5/pic3.jpg",
        "Stock/HP 830 G5/pic4.jpg",
        "Stock/HP 830 G5/pic5.jpg",
            ],
    title: 'HP Elitebok 830 G5',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/HP 745 G5,/pic1.jpg",
        "Stock/HP 745 G5,/pic2.jpg",
        "Stock/HP 745 G5,/pic3.jpg",
        "Stock/HP 745 G5,/pic4.jpg",
        "Stock/HP 745 G5,/pic5.jpg",
            ],
    title: 'HP Elitebok 745 G5',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/HP 830 G5/pic1.jpg",
        "Stock/HP 830 G5/pic2.jpg",
        "Stock/HP 830 G5/pic3.jpg",
        "Stock/HP 830 G5/pic4.jpg",
        "Stock/HP 830 G5/pic5.jpg",
            ],
    title: 'HP Elitebok 745 G6',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/HP 430, G5/pic1.jpg",
        "Stock/HP 430, G5/pic2.jpg",
        "Stock/HP 430, G5/pic3.jpg",
        "Stock/HP 430, G5/pic4.png",
        "Stock/HP 430, G5/pic5.jpg",
            ],
    title: 'HP Elitebok 430 G5',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/DELL 7390/pic1.jpg",
        "Stock/DELL 7390/pic2.jpg",
        "Stock/DELL 7390/pic3.jpg",
        "Stock/DELL 7390/pic4.jpg",
        "Stock/DELL 7390/pic5.jpg",
            ],
    title: 'DELL 7390',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/DELL 5490/pic1.jpg",
        "Stock/DELL 5490/pic2.jpg",
        "Stock/DELL 5490/pic2.png",
        "Stock/DELL 5490/pic3.jpg",
        "Stock/DELL 5490/pic4.jpg",
        "Stock/DELL 5490/pic5.jpg",
        "Stock/DELL 5490/pic6.jpg",
            ],
    title: 'DELL 5490',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
    "Stock/DELL 3300/pic1.jpg",
    "Stock/DELL 3300/pic2.jpg",
    "Stock/DELL 3300/pic3.jpg",
    "Stock/DELL 3300/pic4.jpg",
    "Stock/DELL 3300/pic5.jpg",
            ],
    title: 'DELL 330',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
},
{
    category: 'laptops',
    images: [
        "Stock/Acer Chromebook/pic4.webp",
        "Stock/Acer Chromebook/pic2.webp",
        "Stock/Acer Chromebook/pic 1.webp",
        "Stock/Acer Chromebook/pic3.webp",
            ],
    title: 'Acer Chromebook',
    description: 'Type-C cable',
    price: 'KSh 16,500',
    stock: 'In Stock:3'
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