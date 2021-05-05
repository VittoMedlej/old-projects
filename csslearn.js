const btns = document.querySelectorAll(".kab");
const about = document.querySelector(".tabs");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", e => {

 const id = e.target.dataset.id; //get data-id of each button ,e is the thing im clicking on ,if it has id it means that im clicking on the button

 if (id) { //if id exists :
 btns.forEach(btn => {
    btn.classList.remove("active"); // remove class of every button
    e.target.classList.add("active"); // add class to my current target ON CLICK
 });
   
 articles.forEach(article => {

    article.classList.remove("active");
    const something = document.getElementById(id);  // bring whatever im clicking on ,and add the class active to it
something.classList.add("active");
 });
 };
});
//////////////
const months = [
   "January",
    "Febuary",
   "March",
   "April",
    "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December", 
];
const days = [
   "Monday",
    "Tuesday",
   "Wendsday",
   "Thursday",
    "Friday",
   "Saturday",
   "Sunday",
];
const time = document.querySelectorAll(".time h3");
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
////
 let future = new Date(2021,2,18,12,55,0);
 /////
const year = future.getFullYear();
const hours = future.getHours();
const mins = future.getMinutes();
let month = future.getMonth();
month = months[month];
const date = future.getDate();
let day = future.getDay();
day = days[day];

giveaway.textContent = `GiveAway Ends On ${day} ${month} ${date} ${year}  ${hours}:${mins}pm` ;


const futuretime = future.getTime();
const gettime = () =>{

   let newdate = new Date().getTime();

const diff = futuretime - newdate;
// difference between now and end date


// time value
// 1s = 1000ms
// 1min = 60s 
// 1hr = 60min 
// 1day= 24hr
const OneDay = 86400000; // ms in 1 day
const OneHour = 3600000; // ms in 1 hr
const OneMin = 60000; // ms in 1 min
const OneSec = 1000; // ms in s
let dayDiff = diff/OneDay;
dayDiff = Math.floor(dayDiff); // get days difference /1.2 = 1
let hrDiff = Math.floor((diff % OneDay)/ OneHour);// time left from day / in 1 hr ,left from day hours devided by 1hr
let minDiff = Math.floor((diff % OneHour)/ OneMin); // time left from hours /mins leftover from hrs
let secDiff = Math.floor((diff % OneMin)/ OneSec); // time left from mins /sec leftover from hrs

const array = [dayDiff,hrDiff ,minDiff ,secDiff];
const format = (item) => { // if numbers are less than 10 add 0 infront of them
   if (item < 10)
 {
    return `0${item}`
 } 
 return item;
};
   time.forEach((item,index) => {

      item.innerHTML = format(array[index]);
   });
   if (diff < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h1>Hahhah fucker ,u won nothing</h1>`
   }

};

let countdown = setInterval(gettime, 1000); // function i want to excute //every 1000ms 
gettime();


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



// auto type project 0 help 
const gonna = "im auto typing this sentence";
const type = document.querySelector(".type");



let index = 0;

const run = () =>{
   if (index >= gonna.length) 
   {
      index = 0;
   }
 index++;
   let slic = gonna.slice(0 , index);

   type.innerHTML = slic;
   console.log();
  
};
setInterval(run, 100);



const slide = document.querySelectorAll(".slide");
const nex = document.querySelector(".nextBtn");
const prev =document.querySelector(".prevBtn");

slide.forEach((slide,index) => {
   slide.style.left = `${index * 100}%`;
});
let valo = 0

nex.addEventListener("click" , () => {
valo++;
if (valo >= slide.length) {
   valo = 0;
}
invoke();
});
prev.addEventListener("click" , () => {
   valo--;
   if (valo <= -1) {
      valo = slide.length -1; // array index 0
   }
   invoke();
   });


const invoke = () => {
slide.forEach(e=>{
e.style.transform = `translateX(-${valo * 100}%)`
});
};
console.log(valo);


  