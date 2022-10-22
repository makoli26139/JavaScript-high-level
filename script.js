'use strict'
const goods = [
    { id: 1, title: 'T-Short', brand: 'Nike', price: 200 },
    { id: 2, title: 'T-Short', brand: 'Adidas', price: 200 },
    { id: 3, title: 'T-Short', brand: 'Puma', price: 200 },
    { id: 4, title: 'T-Short', brand: 'Reebok', price: 200 },
    { id: 5, title: 'Shorts', brand: 'Nike', price: 250 },
    { id: 6, title: 'Shorts', brand: 'Nike', price: 200 },
    { id: 7, title: 'Shorts', brand: 'Adidas', price: 200 },
    { id: 8, title: 'Shorts', brand: 'Puma', price: 200 },
    { id: 9, title: 'Air-Max 97', brand: 'Reebok', price: 200 },
    { id: 10, title: 'Air-Max 97', brand: 'Nike', price: 250 },
    { id: 11, title: 'T-Short', brand: 'Reebok', price: 200 },
    { id: 12, title: 'Shorts', brand: 'Nike', price: 250 },

];

//const renderProduct = (title = 'Name products', brand = 'Name brands', price = 100, ...rest) => {
const renderProduct = (objProd) => {
    return `<div class="product-item">
    <h3 class = "titleStyle">${objProd.title}</h3>
    <h4 class = "brandStyle">${objProd.brand}</h4>
    <img src="https://picsum.photos/200">
    <p class = "priceStyle">${objProd.price}$</p>
    <button type="button" class="btn-buy">Buy Now</button>
    </div>
    `
};
const renderPage = list => {
    const productList = list.map(item => renderProduct(item));
    console.log(productList);
    let main = document.querySelector('main');
    main.querySelector('.flow').innerHTML = productList.join('');
};
renderPage(goods);










