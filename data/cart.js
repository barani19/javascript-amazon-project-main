export let cart = JSON.parse(localStorage.getItem('cart')) ||
[
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 2
    },
];

export function removecart(productId){
    let dcart = [];
  
    cart.forEach((product)=>{
       if(product.productId != productId){
        dcart.push(product);
       }
    })
    cart = dcart;
    storagecart();
  }

export function storagecart(){
    localStorage.setItem('cart',JSON.stringify(cart));
}