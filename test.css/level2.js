const bodded = document.querySelector(".side-body");
const tog = document.querySelector(".tog");
const taa = document.querySelector(".taa");
const cart = document.querySelector(".cart");
const shop = document.querySelector(".shop");
cart.addEventListener("click" ,() => {
    shop.classList.toggle("downed")
        
    });
    
tog.addEventListener("click" ,() => {
bodded.classList.toggle("bodded")
    
});
taa.addEventListener("click" ,() => {
    bodded.classList.toggle("bodded")
        
    });

/// project numba 1 

// range


// products 

array = [
    {
        id : "firstObj",
        img : "gpu.jpg",
        name : "GPU 2080TI",
        price : 399,
    },
    {
        id : "2ndObj",
        img : "rgb.jpg",
        name : "cool cooler fan RGB",
        price : 50,
    },

    {
        id : "blaObj",
        img : "750.jpg",
        name : "VGA 750TI",
        price : 70,
    },

    {
        id : "thirdtObj",
        img : "keyboard.jpg",
        name : "RGB KEYBOARD",
        price : 99,
    },
    {
        id : "fourthObj",
        img : "faceee.jpg",
        name : "razor mouse",
        price : 100,
    },
    {
        id : "fifthObj",
        img : "product.jpg",
        name : "Headphones razor",
        price : 200,
    }, 
    {
        id : "sixObj",
        img : "case.jpg",
        name : "HP Case",
        price : 499,
    }, 

];

const range = document.querySelector(".range");
const value = document.querySelector(".value");


range.addEventListener("input", () => {

    let valval = range.value;
    value.innerHTML = `${valval}$`;
    
    getVal(valval);
   
});

window.addEventListener("DOMContentLoaded" , () => {
   
  
showItems(array);

})

const products = document.querySelector(".products");
const getVal = (priced) => {
 
    newfiltered = array.filter((e) =>{
    
        if (priced >= e.price) {
        
            return e
        }
        if(!priced || priced <= 49) {


            products.innerHTML =`<h1>Nothing Is that Cheap fucker</h1>` 
        }
        });

       let last = newfiltered.map(e => {

        return  `
        <article class="pro">
    <div class="pro-img">
    <img src="${e.img}" alt="">
    </div>
    <div class="pro-title">${e.name}
    </div>
    <div class="pro-price">${e.price}$</div>
    <button class="add-me">Add To Cart</button>
    </article>`
        


       });
     last = last.join("");

       products.innerHTML = last;

};
const ar2 = [];
const showItems = (arrays) =>{

  
    let mapped = arrays.map(e =>{

        return  `
        <article class="pro">
    <div class="pro-img">
    <img src="${e.img}" alt="">
    </div>
    <div class="pro-title">${e.name}
    </div>
    <div class="pro-price">${e.price}$</div>
    <button class="add-me">Add To Cart</button>
    </article>`
    }) ;
  mapped =  mapped.join("");
    products.innerHTML = mapped;
    const addBtn = document.querySelectorAll(".add-me");
    

    addBtn.forEach(e =>{
  
e.addEventListener("click" ,e=>{
    let imag = e.currentTarget.parentNode.firstElementChild.firstElementChild.src;
  
  let title = e.currentTarget.parentNode.children[1].textContent;

  let price =  e.currentTarget.parentElement.children[2].textContent;
  price = parseInt(price);
  imag = imag.slice(77);
title = title.replace(/\s+/g,'');

  const obk = {};

  obk.pricez = price;
  obk.image = imag;
  obk.title = title;

  
 ar2.push(obk);

 
ar2.forEach(e =>{

    localStorage.setItem("it",JSON.stringify(e))
});

 const getthem = (ar) => {

    let it = localStorage.getItem("it");
    console.log(it);
   let she =  JSON.parse();
   let arrayedOne = she.map(e=>{

   return ` <div class="added-product">
   <div class="product-phtot">
       <img src="${e.image}" class="image">
   </div>
<div class="product-info">
<h4 class="naame">${e.title}</h4>
<div class="price">${e.pricez}</div>

</div>
<button class="remove">Remove</button>
</div>`

   });
 arrayedOne.join("");
 shop.innerHTML = arrayedOne
 };
 getthem(ar2);
});
}); 
};


