fetch('https://raw.githubusercontent.com/asoferr/json1/refs/heads/main/e-comerce.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.imagem}" alt="${product.nome}">
                <div class="product-info">
                    <h3>${product.nome}</h3>
                    <p class="price">${product.preco}</p>
                    <p class="description">${product.descricao}</p>
                    <a href="#" class="button">Comprar Agora</a>
                </div>
            `;
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar os produtos:', error));
