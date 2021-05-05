const hex = [
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B","C", "D", "E", "F"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color"); 

btn.addEventListener("click",() => {
let hexColor = "#";

for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * hex.length);
hexColor += hex[randomNumber];

} 
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})


//////project 2
let count = 0; //initial count
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btnz");

btns.forEach((btn) => {
btn.addEventListener("click", (e) => {
  const styles = e.currentTarget.classList;
  if (styles.contains("decrease")) {
  count--;
  }
  else if (styles.contains("increase")) {
    count++;
  } else {
    count = 0;
  }
  if (count > 0) {
    value.style.color = "green";
  }
  if (count === 0) {
    value.style.color = "black";
  }
  if (count < 0) {
    value.style.color = "red";
  }
  value.textContent = count;
  

})


});


const reviews = [
{
  id:1,
  name: "person1",
  job: "web dev",
  img : "per2.jpg",
  text: "asfasfasfasfasfafasfasfasf"
},
{
  id:2,
  name: "person1",
  job: "app developer",
  img : "person.jpg",
  text: "asfasfasfwervvvvvvvvvavxascasd avavs asf aasfasfafasfasfasf"
},
{
  id:3,
  name: "person1",
  job: "theif",
  img : "trump.jpg",
  text: "asfasfasfasf af asffsfassf asf asf asfasfafasfasfasf"
},
{
  id:4,
  name: "person1",
  job: "backend shit",
  img : "ane.jpg",
  text: "asfasfasfasfasfafasfasffafasfasfafasffafasfasfafasffafasfasfaasfasfafasfasffafasfasfafasffafasfasfafaasfasfafasfasffafasfasfafasffafasfasfafaasfasfafasfasffafasfasfafasffafasfasfafaasfasfafasfasffafasfasfafasffafasfasfafaasfasfafasfasffafasfasfafasffafasfasfafaasfasfafasfasffafasfasfafasffafasfasfafafasffafasfasfafasffafasfasfafasffafasfasfafasfafasfasfafasfasfafasfasfafasfasfasf"
},

];


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const pBtn = document.querySelector(".next");

const nextBtn = document.querySelector(".forward");
const Random = document.querySelector(".random-btn");


let currentItem = 0;


window.addEventListener("DOMContentLoaded", () => {

  showPerson();

});

const showPerson = () => {
const item = reviews[currentItem];

img.src = item.img;
author.textContent = item.author;
job.textContent = item.job;
info.textContent = item.text;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
   
  }
  showPerson();

});

pBtn.addEventListener("click", () => {
currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();

  });

  Random.addEventListener("click", () =>{

    currentItem = Math.floor(Math.random() * 4);
 showPerson();

  });
const kab = document.querySelector(".nav-toggle");
kab.addEventListener("click", () => {

  
  const links = document.querySelector(".links");
 links.classList.toggle("show-links");

});
/////////////
const pic = document.querySelector(".content");
const kabbe = document.querySelector(".ane");
const kabs = document.querySelector(".xe");
const blur = document.querySelector(".blur");



kabbe.addEventListener("click", () => {
pic.classList.toggle("showen");
blur.classList.toggle("blurz");
});

kabs.addEventListener("click" , () => {
  pic.classList.remove("showen");
  blur.classList.remove("blurz");
});

//////////////

const questions = document.querySelectorAll(".questions");
questions.forEach(question => {
  console.log(question);
const btt = question.querySelector(".qtn");
btt.addEventListener("click", () =>{

  questions.forEach(item => {
 if (item !== question) {
   item.classList.remove("showsht");
 }
  });

  question.classList.toggle("showsht");
});

});
////////////////////////////////////////////////////////////////////
// menu
const menu = [
{
  id : 1,
  title: "cake",
  category : "tabe5",
  price : 7.99,
  img : "aez.jpg",
  desc: "blasokfasokf oapskfa asof asfkasmf askfaos asf cks  cs casdmomf qr poaosf ffoo aora loeez kbak od",
},
{
  id : 2,
  title: "mjadara",
  category : "tabe5",
  price : 139,
  img : "bowl2.jpg",
  desc: "blasokfasokf oapskfa asof asfkasmf askfaos asf cks  cs casdmomf qr poaosf ffoo aora loeez kbak od",
},
{
  id : 3,
  title: "za3tar",
  category : "tabe5",
  price : 16999.99,
  img : "bowl3.jpg",
  desc: "blasokfasokf oapskfa asof asfkasmf askfaos asf cks  cs casdmomf qr poaosf ffoo aora loeez kbak od",
},
{
  id : 4,
  title: "jobne",
  category : "drinks",
  price : 16,
  img : "sora.jpg",
  desc: "blasokfasokf oapskfa asof asfkasmf askfaos asf cks  cs casdmomf qr poaosf ffoo aora loeez kbak od",
},
{
  id : 5,
  title: "bate5",
  category : "drinks",
  price : 6.99,
  img : "bowl5.jpg",
  desc: "blasokfasokf oapskfa asof asfkasmf askfaos asf cks  cs casdmomf qr poaosf ffoo aora loeez kbak od",
},
{
  id : 6,
  title: "beekun",
  category : "food",
  price : 1.99,
  img : "bowl6.jpg",
  desc: "blasokfasokf oapskfa asof asfkasmf askfaos asf cks  cs casdmomf qr poaosf ffoo aora loeez kbak od",
},
{
  id : 7,
  title: "5a5a",
  
  category : "tnen",
  price : 23,
  img : "jabel.jpg",
  desc: "blasokfasokf oapskfa asof asfkasmf askfaos asf cks  cs casdmomf qr poaosf ffoo aora d",
},
{
  id : 8,
  title: "foshk",
  category : "drinks",
  price : 1554.99,
  img : "trump.jpg",
  desc: "blasokfasokf oapskfa asofasd  asfkasmf askfaos asf cks  cs casdmomf qr ez kbak od",
},
{
  id : 9,
  title: "bleee3333",
  category : "food",
  price : 3.99,
  img : "bowl7.jpg",
  desc: "blasokfasokf oapskfa assadof asfkasmf askfaos asf cks  cs casdmomf qr poaosf ffoo aora loeez ",
},
{
  id : 9,
  title: "bleee3333",
  category : "shob3arefne",
  price : 3.555199,
  img : "bowl3.jpg",
  desc: "blasokfasokf oapskfa assadof asfkasmf askfaos asf cks  cs casdmomf qr poaosf ffoo aora loeez ",
},
];
const section = document.querySelector(".section-center");

// const buttonz = (array) => {
//   let showz = array.map((para) => {
//   return `<button type="button" class="filter-btn" data-id="${para}">
//  ${para}
// </button>`
//   });
//   showz = showz.join("");
//   btnsection.innerHTML = showz;
//   };
const btnsection = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", () => {


  displaymenu(menu);

displayBu();
});




// la kel kabse do :



const displaymenu = (menuItems) => {
  let display = menuItems.map((param) => {
    return `<article class="menu-item">
    <img src="${param.img}" alt="menu item" class="photo" />
    <div class="item-info">
      <header>
        <h4>${param.title}</h4>
        <h4 class="price">$${param.price}</h4>
      </header>
      <p class="item-text">
      ${param.desc}
      </p>
    </div>
  </article>`
  });
  display = display.join("");
  section.innerHTML = display;
};

const displayBu = () => {
  const btnsection = document.querySelector(".btn-container");
 const cato = menu.reduce( (allarray ,item) => {
   //always return value ,first parameter
   if (!allarray.includes(item.category)) { // if allarray does not include item.category ,[all,cates]
   allarray.push(item.category);
   }
return allarray;
 }, ["all"]);
 
 

 
const showbtnz = cato.map((para) => {
  return `<button type="button" class="filter-btn" data-id="${para}">
  ${para}
 </button>`
}).join("");
btnsection.innerHTML = showbtnz;


  const filterbtns = btnsection.querySelectorAll(".filter-btn");
  filterbtns.forEach(btn => {

    // click event ,e is kabse 
      btn.addEventListener("click", (e) => {
        // cate = data-id : food ,tabe5 ,drinks
      const cate = e.currentTarget.dataset.id;
      // filtered ,happenes on click on each button according to its id
    
      const filtered = menu.filter((item) => {
        // edit menu array item* 
        
      if (item.category === cate) {
        return `<h1>${item}</h1>`
      }
      });
    if (cate === "all") {
      displaymenu(menu);
    };
      });
      console.log(filtered);
    });
};



const play = document.querySelector(".play");
const vid = document.querySelector(".video-container");

const pause = document.querySelector(".pause");

play.onclick = () =>{
  vid.play();
}
pause.onclick = () => {
  vid.pause();
}


document.addEventListener('scroll', () =>{
  const navy = document.querySelector('.nav-center');
  let posi = window.scrollY;

  const links = document.querySelectorAll('.lis');

  
 if (posi >= 80) {

  navy.style.backgroundColor = 'black';
  navy.classList.add('fixedNav');
 } else {

   navy.style.backgroundColor = 'rgba(0, 0, 0, 0.26)';
   navy.classList.remove('fixedNav');
 }
});
const mybutton = document.querySelector('.scrollUp');
window.addEventListener('scroll', () =>{

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = 'none';
  }

});



mybutton.addEventListener('click', () =>{

  document.documentElement.scrollTop = 0;
});



// // how does reduce work?
// const test = [1, 2, 3, 4,];
// // simlar way 
// let plus = 0;
// for (let n of test) {
//    plus += n;
// };
// console.log(plus);
// // with reduce 
// const sum = test.reduce((prev, next) => {
//   return prev + next;
// }, 0);

// console.log(sum);


//////// tabs project /////////
const taby = document.querySelectorAll('.taby');
const articles = document.querySelector('.tab');
const kabset = document.querySelectorAll('.kobse');

articles.addEventListener('click' , e => {

 const type = e.target.dataset.type;

 if (type) { // if type is available ,if it is ,then im clicking on a button ,if im clicking on one 
  //then remove the class list from it
  kabset.forEach(kabse => {
    kabse.classList.remove('active'); // la kel kabse ,remove active class for all
    // add class active to the clicked button: 
    e.target.classList.add('active');
  });
 };
 taby.forEach( (tab) =>{

  tab.classList.remove('active');
  const something = document.getElementById(type);
  something.classList.add('active');
  
});
});

const text = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];
const form = document.querySelector(".generate"); // form
const amount = document.getElementById("amount"); // input
const lorem_text = document.querySelector(".lorem-text");
const kabste = document.querySelector(".sub");



form.addEventListener("submit" ,(e)=>{ // on submit ,add event 
  e.preventDefault(); // stop default behaviour
const val = parseInt(amount.value); // value = inputted number
const random = Math.floor(Math.random() * text.length ); // random number

if (val > 9 || isNaN(val) || val <= 0) { // isNaN is a function pass the value and returns boolean
// if any of these conditions are true:
  lorem_text.innerHTML = `<h1>${text[random]}</h1>`
} // diplay random paragraph
else { // if none of them are true
  let sliced = text.slice(0, val); // get the text array ,then take slice from it from index 0 to the inputted number (1-9) 
sliced = sliced.map( (e) => { 
// reassign the value of sliced : map the new array : e is each paragraph 
  return `<p>${e}</p>` // return each paragraph inside <p>
}).join(""); // remove the `` and shit
lorem_text.innerHTML = sliced; // display them
};

});