fetch('./products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();  // Parse the JSON response
    })
    .then(products => {
        // Select the div where products will be displayed
        const productList = document.getElementById('product-list');
       
        // Loop over each product and create HTML content
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');  // Add a class for styling
            
            // Insert product content into the div
            productDiv.innerHTML = `
            <div class = "productimage"><img src="${product.image}" alt="${product.name}"></div>
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
                <button> Add To Cart</button>
            `;
            // Append the new product div to the product list container
            productList.appendChild(productDiv);
        });
   })
   .catch(error => {
       console.error('There was an error fetching the products:', error);
   });