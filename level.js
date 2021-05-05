const ham = document.querySelector(".ham");
const side = document.querySelector(".side");
ham.addEventListener("click" , () => {

    side.classList.toggle("toggled");
});
// menu

const menuItems = [
{
  img : "test.css/smg.jpg",
 title : "hangGun smg",
 cate : "smg",
 desc : "A submachine gun, abbreviat Thompson, the inventor of the Thompson submachine gun, to",
 price : 110,
},
{
    img : "test.css/eagle.jpg",
   title : "desert eagle",
   cate : "pistol",
   desc : "powerful shit ,used in csgo as a 1 tap machine ,its hardd to control and shit blblablalbalblbalbla blabl alblabl lblablachine gun, to",
   price : 250,
  },
  {
    img : "test.css/dumbgun.jpg",
   title : "dumb gun for idiots",
   cate : "pistol",
   desc : "its either u r a dumbass or u r rich and want to suicide ,either way its a win win for me ,im getting that shit back u know",
   price : 150,
  },
  {
    img : "test.css/product.jpg",
   title : "m4 with scope",
   cate : "rifle",
   desc : "The M4/M4A1 5.56mm Carbine is a lightweight, gas operated, air cooled, magazine fed, selective rate, shoulder fired weapon with a collapsible stock. ... The M4-series Carbine",
   price : 450,
  },
  {
    img : "test.css/sniper.jpg",
   title : "AWP ,AWM ,fn ,snipers",
   cate : "sniper",
   desc : "A sniper is a highly trained soldier who specializes in shooting targets with modified rifles from incredibly long distances. They're also adept in stealth, camouflage, infiltration, and observ",
   price : 1200,
  },
  {
    img : "test.css/svd.jpg",
   title : "deadly SVD",
   cate : "sniper",
   desc : "Since then, the Dragunov has become the standard squad support weapon of several countries, including those of the former Warsaw Pact.",
   price : 800,
  },
  {
    img : "test.css/tom.jpg",
   title : "Thompson gun",
   cate : "smg",
   desc : "33.7 in 860 mm M1928A1 with compensator 31.9 in M1/M1A1Barrel length	10.52 in (267 mm) 12 in (300 mm) (with Cutts",
   price : 699,
  },
  {
    img : "test.css/famas.jpg",
   title : "famas gun",
   cate : "rifle",
   desc : "The FAMAS (French: Fusil d'Assaut de la Manufacture d'Armes de Saint-Étienne or Assault rifle from the Saint-Étienne weapon factory is a bullpup assault rifle designed and manufactured in France by MAS (Manufacture d'Armes de Saint-Étienne) located in Saint-Étienne.",
   price : 355,
  },

];
const products = document.querySelector(".products");
const btnCont = document.querySelector(".button-section");
const kabss = document.querySelectorAll(".sort");
//on load run this 
window.addEventListener("DOMContentLoaded", () => {


  
    showItems(menuItems);
    displayBu();
    
});

const displayBu = () => {

    const filterbtns = document.querySelectorAll(".sort");
    filterbtns.forEach(btn => {
    
      // click event ,e is kabse 
        btn.addEventListener("click", (e) => {
          // cate = data-id : food ,tabe5 ,drinkswwww
        const cate = e.target.dataset.cate;
        console.log(cate);      
        const filtered = menuItems.filter((item) => {
        if (item.cate === cate) {
        return item;
            } 
        });
        console.log(filtered);
    if (cate === "all") {
        showItems(menuItems);
    } else {
        showItems(filtered);
    }
        });
        });
};
const navbody = document.querySelector(".navbodya");
const showItems = (par) => {
// map our par
let mapped = par.map(param => {
return `
<div class="pro">
<div class="imga">
    <img src="${param.img}" class="proimg">
</div>
<div class="inside">
    <h4 class="esmo">${param.title}</h4>
    <div class="price">${param.price}$
    </div>
    <p class="exp">
        ${param.desc}
    </p>
    <button class="addz">add to cart</button>
</div>
</div>`;

});
mapped = mapped.join("");
products.innerHTML = mapped;

const addz = document.querySelectorAll(".addz");

addz.forEach(e =>{
  e.addEventListener("click" ,e => {
const myList = {};
  let image = e.target.parentElement.parentElement.firstElementChild.firstElementChild.src;
   image = image.slice(66).replace("l", ".");
  let nama = e.target.parentElement.firstElementChild.textContent;  

  let price =  e.currentTarget.parentElement.firstElementChild.nextElementSibling.textContent;
  price = parseInt(price);

  myList.img = image;
  myList.name = nama;
  myList.price = price;


const created = document.createElement("DIV");
created.classList.add("itemm");

created.innerHTML = `
<div class="item-img">
    <img src=${myList.img} >
</div>
<div class="item-info">
    <h5>${myList.name}</h5>
    <p class="price">${myList.price}$</p>

</div>`;


navbody.appendChild(created);


  });
});
};


//cart 

const finallyz = document.querySelector(".finally");
const cart = document.querySelector(".cart");
const sidez = document.querySelector(".sidez");
const closed =   document.querySelector(".closed");
cart.addEventListener("click", ()=> {

  sidez.classList.toggle("toggledz");

});
closed.addEventListener("click", ()=> {

  sidez.classList.toggle("toggledz");

});

const p = document.querySelectorAll(".price");
const arr = [];
p.forEach(e => {

  const pp = e.textContent;
let ppe = parseInt(pp);
arr.push(ppe);
});
const total = document.querySelector(".total");

const rr = () => {
const newarr = arr.reduce((before,after)=>{
return before + after;
},0);
total.innerHTML = newarr;
};
rr();
const funa = () => {
  if (navbody.children.length < 3) {
  
    console.log(finallyz);
  }
  };
// items
const itemm = document.querySelectorAll(".itemm");
const nb = document.querySelector(".nb");
let arr2 = [];
itemm.forEach(e => {
  arr2.push(e);
  
});
const adesh = arr2.length;

nb.innerHTML = adesh;
// buttons 
const clear = document.querySelector(".clear")

clear.addEventListener("click" ,() => {
functioe();
});
const functioe = () => {
  itemm.forEach(e=>{
    e.remove();
  });
  nb.innerHTML = "";
  total.innerHTML = "";
  sidez.classList.toggle("toggledz");
  funa();
};
// menu get item 









