// laptop.js
document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Enable lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.loading = 'lazy';
        });
    }

    // Updated products array
    const products = [
        {
            id: 1,
            title: "2015 Apple MacBook Air",
            description: "A sleek and powerful laptop for all your needs.",
            price: "KSh 53,000",
            category: "MacBook",
            images: [
                "Stock/mACBOOK AIR 2015/PIC1.jpg",
                "Stock/mACBOOK AIR 2015/PIC2.jpg",
                "Stock/mACBOOK AIR 2015/PIC3.jpg",
                "Stock/mACBOOK AIR 2015/pic4.jpg",
                "Stock/mACBOOK AIR 2015/pic5.jpg"
            ],
            specs: [
                "CPU: Intel Core i5 @ 1.6GHz",
                "RAM: 4GB DDR3",
                "Storage: 512GB SSD",
                "Graphics: Intel HD Graphics 6000",
                "Screen: 13.3 inch FHD"
            ]
        },
        {
            id: 2,
            title: "Lenovo ThinkPad Yoga 11e",
            description: "A versatile convertible laptop for work and play.",
            price: "KSh 16,500",
            category: "ThinkPad",
            images: [
                "Stock/lenovo thinkpad yoga 11e/pic5.jpg",
                "Stock/lenovo thinkpad yoga 11e/pic4.jpg",
                "Stock/lenovo thinkpad yoga 11e/pic3.png",
                "Stock/lenovo thinkpad yoga 11e/pic3.jpg",
                "Stock/lenovo thinkpad yoga 11e/pic2.jpg",
                "Stock/lenovo thinkpad yoga 11e/pic1.jpg"
            ],
            specs: [
                "CPU: Intel Celeron",
                "RAM: 4GB DDR4",
                "Storage: 128GB SSD",
                "Graphics: Intel Integrated HD Graphics",
                "Screen: 11.6 inch X360 Touchscreen"
            ]
        },
        {
            id: 3,
            title: "HP EliteBook 1040 G3",
            description: "A premium ultrabook for professionals.",
            price: "KSh 39,000",
            category: "HP Laptops",
            images: [
                "Stock/hp1040 g3/pic4.webp",
                "Stock/hp1040 g3/pic4.jpg",
                "Stock/hp1040 g3/pic2.jpg",
                "Stock/hp1040 g3/pic1.jpg"
            ],
            specs: [
                "CPU: Intel Core i7-6600U @ 2.6GHz",
                "RAM: 8GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: Intel HD Graphics 520",
                "Screen: 14 inch LED-backlit 16:9"
            ]
        },
        {
            id: 4,
            title: "HP ProBook 635 G7",
            description: "A reliable laptop for business and productivity.",
            price: "KSh 39,500",
            category: "HP Laptops",
            images: [
                "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic5.jpg",
                "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic4.jpg",
                "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic3.jpg",
                "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic2.jpg",
                "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic1.jpg"
            ],
            specs: [
                "CPU: AMD Ryzen 5 4500U @ 2.3GHz",
                "RAM: 16GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: AMD Radeon Graphics",
                "Screen: 13.3 inch FHD"
            ]
        },
        {
            id: 5,
            title: "HP ProBook 445 G9 Ryzen 7",
            description: "A high-performance laptop with touch capabilities.",
            price: "KSh 55,000",
            category: "HP Laptops",
            images: [
                "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic5.jpg",
                "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic4.jpg",
                "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic3.jpg",
                "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic2.jpg",
                "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic1.jpg"
            ],
            specs: [
                "CPU: AMD Ryzen 7 5825U", // Corrected from Intel Core i7
                "RAM: 16GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: AMD Radeon Graphics",
                "Screen: 14 inch FHD Touchscreen"
            ]
        },
        {
            id: 6,
            title: "HP ProBook 440 G5",
            description: "A durable laptop for everyday use.",
            price: "KSh 42,000",
            category: "HP Laptops",
            images: [
                "Stock/HP PROBOOK 440 G5/pic1.jpg",
                "Stock/HP PROBOOK 440 G5/pic2.webp",
                "Stock/HP PROBOOK 440 G5/pic3.jpg",
                "Stock/HP PROBOOK 440 G5/pic2.jpg",
                "Stock/HP PROBOOK 440 G5/pic4.jpg",
                "Stock/HP PROBOOK 440 G5/pic5.jpg"
            ],
            specs: [
                "CPU: Intel Core i5-8250U @ 1.6GHz", // Corrected typo
                "RAM: 8GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: Intel UHD Graphics 620",
                "Screen: 14.1 inch FHD"
            ]
        },
        {
            id: 7,
            title: "HP EliteBook 840 G5",
            description: "A secure and powerful business laptop.",
            price: "KSh 35,000",
            category: "HP Laptops",
            images: [
                "Stock/HP ELITEBOOK 840 G5/pic4.jpg",
                "Stock/HP ELITEBOOK 840 G5/pic5.jpg",
                "Stock/HP ELITEBOOK 840 G5/pic3.jpg",
                "Stock/HP ELITEBOOK 840 G5/pic2.jpg",
                "Stock/HP ELITEBOOK 840 G5/pic1.jpg"
            ],
            specs: [
                "CPU: Intel Core i5-8650U",
                "RAM: 8GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: Intel UHD Graphics 620",
                "Screen: 14 inch FHD"
            ]
        },
        {
            id: 8,
            title: "HP EliteBook 840 G2",
            description: "A cost-effective laptop for professionals.",
            price: "KSh 28,500",
            category: "HP Laptops",
            images: [
                "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic5.jpg",
                "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic4.jpg",
                "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic3.jpg",
                "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic2.webp",
                "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic1.jpg"
            ],
            specs: [
                "CPU: Intel Core i5-5300U",
                "RAM: 8GB DDR4",
                "Storage: 128GB SSD",
                "Graphics: Intel HD Graphics 5500",
                "Screen: 14 inch FHD"
            ]
        },
        {
            id: 9,
            title: "HP EliteBook 830 G7 X360",
            description: "A versatile convertible laptop for modern workflows.",
            price: "KSh 57,000",
            category: "HP Laptops",
            images: [
                "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic5.jpg",
                "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic4.png",
                "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic3.jpg",
                "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic2.jpg",
                "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic1.jpg"
            ],
            specs: [
                "CPU: Intel Core i5-10210U",
                "RAM: 16GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: Intel Iris Xe Graphics",
                "Screen: 13.3 inch FHD Touchscreen"
            ]
        },
        {
            id: 10,
            title: "HP EliteBook X360 1030 G3",
            description: "A premium convertible laptop for business.",
            price: "KSh 45,000",
            category: "HP Laptops",
            images: [
                "Stock/HP 830 G5/pic1.jpg",
                "Stock/HP 830 G5/pic2.jpg",
                "Stock/HP 830 G5/pic3.jpg",
                "Stock/HP 830 G5/pic4.jpg",
                "Stock/HP 830 G5/pic5.jpg"
            ],
            specs: [
                "CPU: Intel Core i7-8550U",
                "RAM: 16GB DDR4",
                "Storage: 512GB SSD",
                "Graphics: Intel UHD Graphics 620", // Corrected from RTX 3060
                "Screen: 13.3 inch FHD Touchscreen"
            ]
        },
        {
            id: 11,
            title: "HP EliteBook 745 G5",
            description: "A powerful AMD-based laptop for professionals.",
            price: "KSh 34,500",
            category: "HP Laptops",
            images: [
                
                "Stock/HP 745 G5,/pic4.jpg",
                "Stock/HP 745 G5,/pic3.jpg",
                "Stock/HP 745 G5,/pic2.jpg",
                "Stock/HP 745 G5,/pic1.jpg",
            ],
            specs: [
                "CPU: AMD Ryzen 7 PRO 2700U",
                "RAM: 8GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: AMD Radeon Vega 10 Graphics",
                "Screen: 14 inch FHD"
            ]
        },
        {
            id: 12,
            title: "HP ProBook 430 G5",
            description: "A compact laptop for business and travel.",
            price: "KSh 26,500",
            category: "HP Laptops",
            images: [
                "Stock/HP 430, G5/pic1.jpg",
                "Stock/HP 430, G5/pic2.jpg",
                "Stock/HP 430, G5/pic3.jpg",
                "Stock/HP 430, G5/pic4.png",
                "Stock/HP 430, G5/pic5.jpg"
            ],
            specs: [
                "CPU: Intel Core i5-8250U @ 1.6GHz",
                "RAM: 4GB DDR4",
                "Storage: 128GB SSD",
                "Graphics: Intel UHD Graphics 620",
                "Screen: 13.3 inch FHD"
            ]
        },
        {
            id: 13,
            title: "Dell Latitude 7390",
            description: "A reliable laptop for business professionals.",
            price: "KSh 36,000",
            category: "Dell Laptops",
            images: [
                "Stock/DELL 7390/pic1.jpg",
                "Stock/DELL 7390/pic2.jpg",
                "Stock/DELL 7390/pic3.jpg",
                "Stock/DELL 7390/pic4.jpg",
                "Stock/DELL 7390/pic5.jpg"
            ],
            specs: [
                "CPU: Intel Core i5-8250U @ 1.7GHz",
                "RAM: 8GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: Intel UHD Graphics 620",
                "Screen: 13.3 inch FHD"
            ]
        },
        {
            id: 14,
            title: "Dell Latitude 5490",
            description: "A powerful laptop for multitasking.",
            price: "KSh 40,500",
            category: "Dell Laptops",
            images: [
                "Stock/DELL 5490/pic1.jpg",
                "Stock/DELL 5490/pic2.jpg",
                "Stock/DELL 5490/pic2.png",
                "Stock/DELL 5490/pic3.jpg",
                "Stock/DELL 5490/pic4.jpg",
                "Stock/DELL 5490/pic5.jpg",
                "Stock/DELL 5490/pic6.jpg"
            ],
            specs: [
                "CPU: Intel Core i7-8650U @ 1.9GHz",
                "RAM: 16GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: Intel UHD Graphics 620",
                "Screen: 14 inch FHD"
            ]
        },
        {
            id: 15,
            title: "Dell Latitude 3300",
            description: "An affordable laptop for everyday use.",
            price: "KSh 21,600",
            category: "Dell Laptops",
            images: [
                "Stock/DELL 3300/pic1.jpg",
                "Stock/DELL 3300/pic2.jpg",
                "Stock/DELL 3300/pic3.jpg",
                "Stock/DELL 3300/pic4.jpg",
                "Stock/DELL 3300/pic5.jpg"
            ],
            specs: [
                "CPU: Intel Core i3-8145U",
                "RAM: 4GB DDR4",
                "Storage: 128GB SSD",
                "Graphics: Intel HD Graphics 620",
                "Screen: 13.3 inch HD"
            ]
        },
        {
            id: 16,
            title: "Acer Chromebook",
            description: "A lightweight laptop for web-based tasks.",
            price: "KSh 17,000",
            category: "Chromebook",
            images: [
                "Stock/Acer Chromebook/pic4.webp",
                "Stock/Acer Chromebook/pic2.webp",
                "Stock/Acer Chromebook/pic1.webp",
                "Stock/Acer Chromebook/pic3.webp"
            ],
            specs: [
                "CPU: Intel Celeron N4020",
                "RAM: 4GB LPDDR4",
                "Storage: 32GB eMMC",
                "Graphics: Intel HD Graphics 500",
                "Screen: 11.6 inch Touchscreen"
            ]
        },
        {
            id: 17,
            title: "Dell Latitude 7389",
            description: "A convertible laptop for flexibility.",
            price: "KSh 36,000",
            category: "Dell Laptops",
            images: [
                "Stock/Dell 7389/pic 1.png",
                "Stock/Dell 7389/pic2.png",
                "Stock/Dell 7389/pic3.png",
                "Stock/Dell 7389/pic4.jpg",
                "Stock/Dell 7389/pic5.jpg",
            ],
            specs: [
                "CPU: Intel Core i5-7200U",
                "RAM: 8GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: Intel UHD Graphics 620",
                "Screen: 13.3 inch FHD Touchscreen"
            ]
        },
        {
            id: 18,
            title: "HP ZBook 14u G5",
            description: "A mobile workstation for creative professionals.",
            price: "KSh 36,000",
            category: "HP Laptops",
            images: [
                "Stock/HP z book 14u G5/pic1.jpg",
                "Stock/HP z book 14u G5/pic2.jpg",
                "Stock/HP z book 14u G5/pic3.jpg",
                "Stock/HP z book 14u G5/pic4.jpg",
                "Stock/HP z book 14u G5/pic5.jpg"
            ],
            specs: [
                "CPU: Intel Core i5-8250U",
                "RAM: 8GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: Intel UHD Graphics 620",
                "Screen: 14 inch FHD"
            ]
        },
        {
            id: 19,
            title: "HP EliteBook 840 G4",
            description: "A secure laptop for business users.",
            price: "KSh 36,000",
            category: "HP Laptops",
            images: [
                "Stock/HP EliteBook 840, G4/pic4.jpg",
                "Stock/HP EliteBook 840, G4/pic3.jpg",
                "Stock/HP EliteBook 840, G4/pic2.jpg",
                "Stock/HP EliteBook 840, G4/pic1.jpg"
            ],
            specs: [
                "CPU: Intel Core i5-7300U",
                "RAM: 16GB DDR4",
                "Storage: 256GB SSD",
                "Graphics: Intel UHD Graphics 620",
                "Screen: 14 inch FHD"
            ]
        },
        {
            id: 20,
            title: "HP EliteBook 745 G6",
            description: "A high-performance AMD-based laptop.",
            price: "KSh 40,000",
            category: "HP Laptops",
            images: [
                "Stock/HP 745 g6/pic 1.jpeg",
                "Stock/HP 745 g6/pic2.jpg",
               " Stock/HP 745 g6/pic3.png",
                "Stock/HP 745 g6/pic4.jpg",
                "Stock/HP 745 g6/pic5.jpg",
            ],
            specs: [
                "CPU: AMD Ryzen 7 PRO 3700U",
                "RAM: 16GB DDR4",
                "Storage: 512GB SSD",
                "Graphics: AMD Radeon Vega 10 Graphics",
                "Screen: 14 inch FHD"
            ]
        },
        {
            id: 21,
            title: "HP EliteBook 830 G8",
            description: "Thin, light 13.3 business laptop, 11th Gen Intel Core, enhanced security features.",
            price: "KSh 55,000",
            category: "HP Laptops",
            images: [
               " Stock/HP Elitebook 830 g8/pix1.jpg",
                "Stock/HP Elitebook 830 g8/pic4.jpg",
                "Stock/HP Elitebook 830 g8/pic3.jpg",
                "Stock/HP Elitebook 830 g8/pic2.jpg",
            ],
            specs: [
                "CPU: intel i5 11th generation",
                "RAM: 8GB DDR4",
                "Storage: 512GB SSD",
                "Graphics: Intel UHD graphics",
                "Screen: 13.3 inch FHD"
            ]
        },
        {
            id: 22,
            title: "HP EliteBook 850 G7",
            description: "Thin, light 15.6 business laptop, 10th Gen Intel Core, enhanced security",
            price: "KSh 45,000",
            category: "HP Laptops",
            images: [
                "Stock/Hp elitebook 850 G7/pic4.jpg",
                "Stock/Hp elitebook 850 G7/pic3.jpg",
                "Stock/Hp elitebook 850 G7/pic2.jpg",
                "Stock/Hp elitebook 850 G7/pic1.jpg",
            ],
            specs: [
                "CPU: intel i5 10th generation",
                "RAM: 8GB DDR4",
                "Storage: 256GB SSD",
                "Graphics:  Intel UHD graphics",
                "Screen: 15.6 inch FHD"
            ]
        },
        {
            id: 23,
            title: "HP EliteBook 850 G6",
            description: "Robust, slim 15.6 business laptop, 8th Gen Intel Core, enhanced security features.",
            price: "KSh 42,000",
            category: "HP Laptops",
            images: [
                "Stock/Hp elitebook 850 G6/pic4.jpg",
                "Stock/Hp elitebook 850 G6/pic3.png",
                "Stock/Hp elitebook 850 G6/pic2.jpg",
                "Stock/Hp elitebook 850 G6/pic1.jpg",
            ],
            specs: [
                "CPU: intel i7 8th generation",
                "RAM: 816B DDR4",
                "Storage: 512GB SSD",
                "Graphics:  Intel UHD graphics",
                "Screen: 15.6 inch FHD"
            ]
        },
        {
            id: 23,
            title: "HP EliteBook 650 G5",
            description: "Slim, secure 15.6 business laptop, enhanced features, Intel Core i5..",
            price: "KSh 34,000",
            category: "HP Laptops",
            images: [
                "Stock/Hp Elitebook 650 G5/pic4.jpg",
                "Stock/Hp Elitebook 650 G5/pic3.jpg",
                "Stock/Hp Elitebook 650 G5/pic2.jpg",
                "Stock/Hp Elitebook 650 G5/pic1.jpg",
            ],
            specs: [
                "CPU: intel i5 8th generation",
                "RAM: 8GB DDR4",
                "Storage: 512GB SSD",
                "Graphics:Intel UHD graphics 620",
                "Screen: 15.6 inch FHD"
            ]
        },
        {
            id: 23,
            title: "HP Probook 650 G2",
            description: "Robust 15.6 business laptop, Intel Core i5, reliable performance for professionals.",
            price: "KSh 34,000",
            category: "HP Laptops",
            images: [
                "Stock/HP Probook 650 G2/pic4.jpg",
                "Stock/HP Probook 650 G2/pic3.jpg",
                "Stock/HP Probook 650 G2/pic2.jpg",
                "Stock/HP Probook 650 G2/pic1.jpg",
            ],
            specs: [
                "CPU: intel i5 6th generation",
                "RAM: 8GB DDR4",
                "Storage: 256GB SSD",
                "Graphics:Intel UHD graphics",
                "Screen: 15.6 inch FHD"
            ]
        },
        {
        id: 12,
            title: "HP ProBook 430 G5",
            description: "A compact laptop for business and travel.",
            price: "KSh 28,000",
            category: "HP Laptops",
            images: [
                "Stock/HP 430, G5/pic1.jpg",
                "Stock/HP 430, G5/pic2.jpg",
                "Stock/HP 430, G5/pic3.jpg",
                "Stock/HP 430, G5/pic4.png",
                "Stock/HP 430, G5/pic5.jpg"
            ],
            specs: [
                "CPU: Intel Core i5-8250U @ 1.6GHz",
                "RAM: 8GB DDR4",
                "Storage: 128GB SSD",
                "Graphics: Intel UHD Graphics 620",
                "Screen: 13.3 inch FHD"
            ]
        },

    ];

    // Generate product grid
    const productGrid = document.getElementById('productGrid');
    const loadingMessage = document.getElementById('loading-message');

    function createProductCards(productsToDisplay = products) {
        if (!productGrid) {
            console.error("Product grid element not found!");
            return;
        }
        if (loadingMessage) {
            loadingMessage.style.display = 'none';
        }
        productGrid.innerHTML = '';

        const itemListElement = [];

        productsToDisplay.forEach((product, index) => {
            const imagesHtml = product.images.map((img, imgIndex) => `
                <img src="${img}" alt="${product.title} image ${imgIndex + 1}" loading="lazy">
            `).join('');

            const specsHtml = `<ul>${product.specs.map(spec => `<li>${spec}</li>`).join('')}</ul>`;

            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
                <div class="product-slider">
                    <div class="product-slider-images">
                        ${imagesHtml}
                    </div>
                    <div class="slider-nav">
                        <button class="slider-btn" aria-label="Previous image" onclick="prevSlide(${index})">❮</button>
                        <button class="slider-btn" aria-label="Next image" onclick="nextSlide(${index})">❯</button>
                    </div>
                    <div class="slider-indicators">
                        ${product.images.map((_, imgIndex) => `
                            <span class="slider-indicator ${imgIndex === 0 ? 'active' : ''}" onclick="goToSlide(${index}, ${imgIndex})"></span>
                        `).join('')}
                    </div>
                </div>
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <div class="product-specs">
                    <h4>Specifications</h4>
                    ${specsHtml}
                </div>
            `;

            productGrid.appendChild(card);

            itemListElement.push({
                "@type": "Product",
                "name": product.title,
                "description": product.description,
                "url": `https://www.leadinglight.co.ke/product/${product.id}.html`,
                "image": product.images[0],
                "offers": {
                    "@type": "Offer",
                    "price": product.price.replace('KSh ', '').replace(',', ''),
                    "priceCurrency": "KES",
                    "availability": "https://schema.org/InStock"
                }
            });
        });

        // Update Schema.org JSON-LD
        const schemaElement = document.querySelector('script[type="application/ld+json"]');
        if (schemaElement) {
            const schemaData = JSON.parse(schemaElement.textContent);
            schemaData.mainEntity.itemListElement = itemListElement;
            schemaElement.textContent = JSON.stringify(schemaData, null, 2);
        }
    }

    // Slider state
    const sliderStates = products.map(() => ({ currentIndex: 0 }));

    // Slider functions
    window.prevSlide = (productIndex) => {
        const state = sliderStates[productIndex];
        const slider = document.querySelectorAll('.product-slider-images')[productIndex];
        const indicators = document.querySelectorAll('.slider-indicators')[productIndex].children;

        state.currentIndex = (state.currentIndex - 1 + products[productIndex].images.length) % products[productIndex].images.length;
        slider.style.transform = `translateX(-${state.currentIndex * 100}%)`;

        Array.from(indicators).forEach((indicator, index) => {
            indicator.classList.toggle('active', index === state.currentIndex);
        });
    };

    window.nextSlide = (productIndex) => {
        const state = sliderStates[productIndex];
        const slider = document.querySelectorAll('.product-slider-images')[productIndex];
        const indicators = document.querySelectorAll('.slider-indicators')[productIndex].children;

        state.currentIndex = (state.currentIndex + 1) % products[productIndex].images.length;
        slider.style.transform = `translateX(-${state.currentIndex * 100}%)`;

        Array.from(indicators).forEach((indicator, index) => {
            indicator.classList.toggle('active', index === state.currentIndex);
        });
    };

    window.goToSlide = (productIndex, slideIndex) => {
        const state = sliderStates[productIndex];
        const slider = document.querySelectorAll('.product-slider-images')[productIndex];
        const indicators = document.querySelectorAll('.slider-indicators')[productIndex].children;

        state.currentIndex = slideIndex;
        slider.style.transform = `translateX(-${state.currentIndex * 100}%)`;

        Array.from(indicators).forEach((indicator, index) => {
            indicator.classList.toggle('active', index === state.currentIndex);
        });
    };

    // Generate category list
    const categoryList = document.getElementById('category-list');
    if (!categoryList) {
        console.error("Category list element not found!");
        return;
    }

    function getCategories(products) {
        const categories = new Set(products.map(product => product.category));
        return ['All Products', ...categories];
    }

    const categories = getCategories(products);

    function generateCategoryList(categories) {
        const html = categories.map(category => `
            <li data-category="${category}">${category}</li>
        `).join('');
        categoryList.innerHTML = html;
    }

    generateCategoryList(categories);

    // Category filtering
    categoryList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedCategory = event.target.dataset.category;
            filterProducts(selectedCategory);
        }
    });

    function filterProducts(category) {
        if (category === 'All Products') {
            createProductCards(products);
        } else {
            const filteredProducts = products.filter(product => 
                product.category.toLowerCase() === category.toLowerCase()
            );
            createProductCards(filteredProducts);
        }
    }

    // FAQ toggle
    document.querySelectorAll('.faq-item h3').forEach(header => {
        header.addEventListener('click', () => {
            const faqItem = header.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Initial render
    createProductCards();
});