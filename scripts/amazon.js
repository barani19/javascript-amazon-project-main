import {cart,storagecart} from '../data/cart.js';
import {products} from '../data/products.js'
import { calucalteprice } from './utils/utils.js';
// const products = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4.5,
//         count: 87,
//     },
//     pricecents: 1090
// },
// {
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name : 'Intermediate Size Basketball',
//     rating: {
//         stars: 4.0,
//         count: 127,
//     },
//     pricecents: 2095
// },
// {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name : 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//         stars: 4.5,
//         count: 56,
//     },
//     pricecents: 799
// },
// ] 



let productHtml = ''
// create html using js for items
products.forEach((product)=>{
  productHtml +=`
  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${(product.rating.stars)*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${calucalteprice(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-cart "data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `
})

// create html using js for items
document.querySelector('.js-product-grid').innerHTML = productHtml

// add product to cart
function addtocart(productid){
  let curr ;
  cart.forEach((item)=>{
    if(item.productId === productid){
      curr = item
    }
  })
  if(curr){
    curr.quantity+=1
  }
  else{
   cart.push({
     productId: productid,
     quantity: 1
    })
    storagecart();
  }
}
export function cartquantity(cartQuantity){
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}
// update product item
function updatecartval(){
  let cartQuantity = 0;

    cart.forEach((item)=>{
        cartQuantity += item.quantity;
    })
    storagecart();
   cartquantity(cartQuantity);
}

// make button responsive
document.querySelectorAll('.js-add-cart').forEach((button)=>{
   button.addEventListener('click',()=>{
    let productid  = button.dataset.productId;
    console.log(button.dataset)
    addtocart(productid);
    console.log(cart)
    updatecartval();
   })
})


