let products = [
    {
        title: " 2015 Apple Macbook Air",
        description: "A powerful laptop for all your needs.",
        price: "KSh:53,000",
        
        images: [
            "Stock/mACBOOK AIR 2015/PIC1.jpg",
            "Stock/mACBOOK AIR 2015/PIC2.jpg",
            "Stock/mACBOOK AIR 2015/PIC3.jpg",
            "Stock/mACBOOK AIR 2015/pic4.jpg",
            "Stock/mACBOOK AIR 2015/pic5.jpg",
        ],
        specs: {
            cpu: "Intel Core i5 @1.6GHz ",
            ram: "4GB DDR3",
            storage: "512GB SSD",
            graphics: " Intel HD Graphics 6000",
            screen: "13.3 inch FHD"
        }
    },
        {
        title: "Lenovo Thinkpad Yoga 11e",
        description: "A powerful laptop for all your needs.",
        price: "KSh:16,500", // Consider adding currency
        
        images: [
            "Stock/lenovo thinkpad yoga 11e/pic5.jpg",
            "Stock/lenovo thinkpad yoga 11e/pic4.jpg",
            "Stock/lenovo thinkpad yoga 11e/pic3.png",
            "Stock/lenovo thinkpad yoga 11e/pic3.jpg",
            "Stock/lenovo thinkpad yoga 11e/pic2.jpg",
            "Stock/lenovo thinkpad yoga 11e/pic1.jpg",
        ],
        specs: {
            cpu: "Intel Celeron",
            ram: "4GB DDR4",
            storage: "128 GB SSD",
            graphics: "Intel Integrated HD Graphics",
            screen: "11.6 X360, Touchscreen"
        }
    },
    {
        title: "HP EliteBook 1040 G3",
        description: "A powerful laptop for all your needs.",
        price: "KSh:39,000", // Consider adding currency
        
        images: [
            "Stock/hp1040 g3/pic4.webp",
            "Stock/hp1040 g3/pic4.jpg",
            "Stock/hp1040 g3/pic2.jpg",
            "Stock/hp1040 g3/pic1.jpg",
        ],
        specs: {
            cpu: "Intel® Core™ i7 i7-6600U 2.6 GHz",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            graphics: "Intel® HD Graphics 520",
            screen: "35.6 cm (14) LED backlight 16:9",
        }
    },
        {
        title: "HP PROBOOK 635 G7",
        description: "A powerful laptop for all your needs.",
        price: "KSh:39,500", // Consider adding currency
        
        images: [
            "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic5.jpg",
            "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic4.jpg",
            "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic3.jpg",
            "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic2.jpg",
            "Stock/HP PROBOOK 635 G7 Ryzen 16256 ssd/pic1.jpg",
        ],
        specs: {
            cpu: "AMD Ryzen 5 4500U @2.3 GHz",
            ram: "16GB DDR4",
            storage: "256GB SSD",
            graphics: "AMD Radeon Graphics",
            screen: " 13.3 INCH FHD"
        }
    },
    {
        title: "HP PROBOOK 445 G9 Ryzen 7",
        description: "A powerful laptop for all your needs.",
        price: "KSh:55,000", // Consider adding currency
       
        images: [
           "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic5.jpg",
            "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic4.jpg",
            "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic3.jpg",
            "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic2.jpg",
            "Stock/HP PROBOOK 445 G9 Ryzen 7 16256 ssd touch screen/pic1.jpg",
        ],
        specs: {
            cpu: "Intel Core i7", // This doesn't match the title "Ryzen 7" - please verify
            ram: "16GB DDR4",
            storage: "256GB SSD",
            graphics:"AMD Radeon Graphics",
            screen: "14inch FHD"
        }
    },
    {
        title: "HP PROBOOK 440 G5",
        description: "A powerful laptop for all your needs.",
        price: "KSh:42,000", // Consider adding currency
        
        images: [
            "Stock/HP PROBOOK 440 G5/pic1.jpg",
            "Stock/HP PROBOOK 440 G5/pic2.webp",
            "Stock/HP PROBOOK 440 G5/pic3.jpg",
            "Stock/HP PROBOOK 440 G5/pic2.jpg", // Duplicate image path
            "Stock/HP PROBOOK 440 G5/pic4.jpg",
            "Stock/HP PROBOOK 440 G5/pic5.jpg",
        ],
        specs: {
            cpu: "Intel Core i5-8500h, 8th generation", // Typo? Should it be i5-8250U as in other similar models?
            ram: "8GB DDR4",
            storage: "256GB SSD",
            graphics: "Intel Integrated UHD 620",
            screen: "14.1 inch FHD"
        }
    },
    {
        title: "HP ELITEBOOK 840 G5",
        description: "A powerful laptop for all your needs.",
        price: "KSh:35,000", // Consider adding currency
        
        images: [
            "Stock/HP ELITEBOOK 840 G5/pic4.jpg",
            "Stock/HP ELITEBOOK 840 G5/pic5.jpg",
            "Stock/HP ELITEBOOK 840 G5/pic3.jpg",
            "Stock/HP ELITEBOOK 840 G5/pic2.jpg",
            "Stock/HP ELITEBOOK 840 G5/pic1.jpg",
        ],
        specs: {
            cpu: "Intel Core i5-8650U ",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            graphics: "Intel UHD 620.", // Note the trailing dot
            screen: "14-inch FHD"
        }
    },
    {
        title: "HP ELITEBOOK 840 G2",
        description: "A powerful laptop for all your needs.",
        price: "KSh:28,500", // Consider adding currency
        
        images: [
            "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic5.jpg",
            "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic4.jpg",
            "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic3.jpg",
            "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic2.webp",
            "Stock/HP ELITEBOOK 840 G2, 5TH GEN/pic1.jpg",
        ],
        specs: {
            cpu: "Intel Core i5-5300U",
            ram: "8GB DDR4",
            storage: "128GB SSD",
            graphics: "Intel HD 5500",
            screen: " 14inch FHD " // Note the extra space at the end
        }
    },
    {
        title: "HP ELITEBOOK 830 G7 X360 ", // Duplicate title
        description: "A powerful laptop for all your needs.",
        price: "KSh: 57,000", // Consider adding currency
        
        images: [
            " Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic5.jpg", // Note the leading space in the path
            "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic4.png",
            "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic3.jpg",
            "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic2.jpg",
            "Stock/HP ELITEBOOK 830 G7 X360 core i 5 10th gen 16512/pic1.jpg",
        ],
        specs: {
            cpu: "Intel Core i5",
            ram: "16GB DDR4",
            storage: "256GB SSD",
            graphics: "Intel Iris Xe Graphics",
            screen: "13.3inch diagonal FHD"
        }
    },
    {
        title: "HP X360 1030 G3", // Duplicate title
        description: "A powerful laptop for all your needs.",
        price: "KSh:45,000", // Consider adding currency
        
        images: [
            "Stock/HP 830 G5/pic1.jpg",
            "Stock/HP 830 G5/pic2.jpg",
            "Stock/HP 830 G5/pic3.jpg",
            "Stock/HP 830 G5/pic4.jpg",
            "Stock/HP 830 G5/pic5.jpg",
        ],
        specs: {
            cpu: "Intel Core i7",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            graphics: "NVIDIA GeForce RTX 3060", // High-end GPU for a "general" powerful laptop? Verify target audience.
            screen: "15.6\" FHD"
        }
    },
    {
        title: "HP Elitebook 745 G5",
        description: "A powerful laptop for all your needs.",
        price: "KSh:34,500", // Consider adding currency
        
        images: [
            "Stock/HP 745 G5,/pic1.jpg", // Note the comma in the path
            "Stock/HP 745 G5,/pic2.jpg", // Note the comma in the path
            "Stock/HP 745 G5,/pic3.jpg", // Note the comma in the path
            "Stock/HP 745 G5,/pic4.jpg", // Note the comma in the path
            "Stock/HP 745 G5,/pic5.jpg", // Note the comma in the path
        ],
        specs: {
            cpu: "AMD Ryzen™ 7 PRO",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            graphics: "AMD Radeon™ Vega 10 Graphics",
            screen: "14 inch FHD"
        }
    },
    {
        title: "HP Probook 430 G5",
        description: "A powerful laptop for all your needs.",
        price: "KSh:28,000", // Consider adding currency
        
        images: [
            "Stock/HP 430, G5/pic1.jpg", // Note the comma in the path
            "Stock/HP 430, G5/pic2.jpg", // Note the comma in the path
            "Stock/HP 430, G5/pic3.jpg", // Note the comma in the path
            "Stock/HP 430, G5/pic4.png", // Note the comma in the path
            "Stock/HP 430, G5/pic5.jpg", // Note the comma in the path
        ],
        specs: {
            cpu: " Intel Core i5-8250U @1.6GHz", // Note the leading space
            ram: "8GB DDR4",
            storage: "128GB SSD",
            graphics: "Intel UHD Graphics 620",
            screen: "13.3inch Full HD " // Note the trailing space
        }
    },
    {
        title: "DELL 7390",
        description: "A powerful laptop for all your needs.",
        price: "KSh:36,000", // Consider adding currency
        
        images: [
            "Stock/DELL 7390/pic1.jpg",
            "Stock/DELL 7390/pic2.jpg",
            "Stock/DELL 7390/pic3.jpg",
            "Stock/DELL 7390/pic4.jpg",
            "Stock/DELL 7390/pic5.jpg",
        ],
        specs: {
            cpu: "Intel Core i5 @1.70GHz",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            graphics: "Intel® UHD Graphics 620",
            screen: "13.3inch(33.8cm) " // Note the trailing space
        }
    },
    {
        title: "DELL 5490",
        description: "A powerful laptop for all your needs.",
        price: "KSh:40,500", // Consider adding currency
        
        images: [
            "Stock/DELL 5490/pic1.jpg",
            "Stock/DELL 5490/pic2.jpg",
            "Stock/DELL 5490/pic2.png", // Mixed image types
            "Stock/DELL 5490/pic3.jpg",
            "Stock/DELL 5490/pic4.jpg",
            "Stock/DELL 5490/pic5.jpg",
            "Stock/DELL 5490/pic6.jpg",
        ],
        specs: {
            cpu: "Intel Core i7 @1.90GHz",
            ram: "16GB DDR4",
            storage: "256GB SSD",
            graphics: "Intel® UHD Graphics 620",
            screen: " 14 inches (35.56 cm)" // Note the leading space
        }
    },
    {
        title: "DELL 3300",
        description: "A powerful laptop for all your needs.",
        price: "KSh:21,600", // Consider adding currency
        
        images: [
            "Stock/DELL 3300/pic1.jpg",
            "Stock/DELL 3300/pic2.jpg",
            "Stock/DELL 3300/pic3.jpg",
            "Stock/DELL 3300/pic4.jpg",
            "Stock/DELL 3300/pic5.jpg",
        ],
        specs: {
            cpu: "Intel® Core™ i3 processor",
            ram: "4GB DDR4",
            storage: "128GB SSD",
            graphics: " Integrated: Intel® HD 620 Graphics", // Note the leading space
            screen: "13.3 inches (33.78 cm) " // Note the trailing space
        }
    },
    {
        title: "Acer Chromebook",
        description: "A powerful laptop for all your needs.",
        price: "KSh:17,000", // Consider adding currency
        
        images: [
            "Stock/Acer Chromebook/pic4.webp",
            "Stock/Acer Chromebook/pic2.webp",
            "Stock/Acer Chromebook/pic 1.webp", // Note the space in the filename
            "Stock/Acer Chromebook/pic3.webp"
        ],
        specs: {
            cpu: "Intel Celeron",
            ram: "4GB",
            storage: "32GB SSD",
            graphics: "Intel HD Graphics 500",
            screen: "11.6 inch Touchscreen"
        }
    },
      {
        title: "DELL 7389",
        description: "A powerful laptop for all your needs.",
        price: "KSh:36,000", // Consider adding currency
        
        images: [
            "Stock/Dell 7389/pic 1.png", // Note the space in the filename
            "Stock/Dell 7389/pic2.png",
            "Stock/Dell 7389/pic3.png",
            "Stock/Dell 7389/pic4.jpg",
            "Stock/Dell 7389/pic5.jpg",
        ],
        specs: {
            cpu: "Intel Core \u00A0i5 7th gen", // Note the non-breaking space
            ram: "8GB DDR4",
            storage: "256GB SSD",
            graphics: "Intel® UHD Graphics 620",
            screen: "13.3” FHD (1920x1080) Touch X30"
        }
    },
    
    {
        title: "HP Zbook 14u G5",
        description: "A powerful laptop for all your needs.",
        price: "KSh:36,000", // Consider adding currency
        
        images: [
            "Stock/HP z book 14u G5/pic1.jpg", // Note the lowercase 'z'
            "Stock/HP z book 14u G5/pic2.jpg", // Note the lowercase 'z'
            "Stock/HP z book 14u G5/pic3.jpg", // Note the lowercase 'z'
            "Stock/HP z book 14u G5/pic4.jpg", // Note the lowercase 'z'
            "Stock/HP z book 14u G5/pic5.jpg", // Note the lowercase 'z'
        ],
        specs: {
            cpu: "Intel Core \u00A0i5 8th gen", // Note the non-breaking space
            ram: "8GB DDR4",
            storage: "256GB SSD",
            graphics: "Intel® UHD Graphics 620",
            screen: "35.6 cm (14) Full HD"
        }
    },
    {
        title: "HP EliteBook 840 G4",
        description: "A powerful laptop for all your needs.",
        price: "KSh:36,000", // Consider adding currency
       
        images: [
            "Stock/HP EliteBook 840, G4/pic4.jpg", // Note the comma
            "Stock/HP EliteBook 840, G4/pic3.jpg", // Note the comma
            "Stock/HP EliteBook 840, G4/pic2.jpg", // Note the comma
            "Stock/HP EliteBook 840, G4/pic1.jpg", // Note the comma
        ],
        specs: {
            cpu: "Intel Core i5-7300U",
            ram: "16GB DDR4",
            storage: "256GB SSD",
            graphics: "Intel® UHD Graphics 620",
            screen: "35.6 cm (14) Full HD"
        }
    },

];


// Function to create product cards
function createProductCards() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;

    // Clear existing content
    productGrid.innerHTML = '';

    // Create a card for each product
    products.forEach(product => {
        let imagesHtml = product.images.map(img => `<img src="${img}" alt="${product.title}">`).join('');

        let specsHtml = Object.entries(product.specs).map(([key, value]) => {
            let iconClass = '';
            switch (key) {
                case 'cpu': iconClass = 'fa-microchip'; break;
                case 'ram': iconClass = 'fa-memory'; break;
                case 'storage': iconClass = 'fa-hdd'; break;
                case 'graphics': iconClass = 'fa-gamepad'; break;
                case 'screen': iconClass = 'fa-desktop'; break;
                default: iconClass = 'fa-info-circle';
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
                    <button class="slider-btn" onclick="prevSlide(this)">❮</button>
                    <button class="slider-btn" onclick="nextSlide(this)">❯</button>
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
    });
}

// Improved slider functions
function prevSlide(button) {
    const slider = button.closest('.product-slider');
    const imagesContainer = slider.querySelector('.product-slider-images');
    const firstImage = imagesContainer.firstElementChild;

    imagesContainer.style.transition = 'transform 0.5s ease';
    imagesContainer.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        imagesContainer.style.transition = 'none';
        imagesContainer.appendChild(firstImage.cloneNode(true));
        imagesContainer.removeChild(firstImage);
        imagesContainer.style.transform = 'translateX(0)';
    }, 500);
}

function nextSlide(button) {
    const slider = button.closest('.product-slider');
    const imagesContainer = slider.querySelector('.product-slider-images');
    const lastImage = imagesContainer.lastElementChild;

    imagesContainer.style.transition = 'none';
    imagesContainer.insertBefore(lastImage.cloneNode(true), imagesContainer.firstChild);
    imagesContainer.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        imagesContainer.style.transition = 'transform 0.5s ease';
        imagesContainer.style.transform = 'translateX(0)';
        setTimeout(() => {
            imagesContainer.removeChild(lastImage);
        }, 500);
    }, 10);
}

// Filter function (example)
function filterProducts(category) {
    // In a real implementation, you would filter the products array
    console.log(`Filtering by: ${category}`);
    createProductCards(); // Re-render with filtered products
}

// Initialize the page
document.addEventListener('DOMContentLoaded', createProductCards);