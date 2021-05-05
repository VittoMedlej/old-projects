const list = document.querySelectorAll("LI");
let i;


for (i = 0; i < list.length; i++)
    {
const span = document.createElement("SPAN");
const txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
list[i].appendChild(span);
}


const close = document.querySelectorAll(".close");
let z;
for (z = 0; z < close.length; z++) {


close[z].addEventListener("click", () => {
    const list = document.querySelector("LI");
    list.remove();

})
}


const ul = document.querySelector('ul');

ul.addEventListener('click', (ev) => {

if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
}

})

const newElement = () => {
  
    const li = document.createElement('LI');

    const inputted = document.querySelector('#myInput').value;
    console.log(inputted);
  const adde = document.createTextNode(inputted);
  li.appendChild(adde)

  document.getElementById("myUL").appendChild(li);



  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  const close = document.querySelectorAll(".close");
  let z;
  for (z = 0; z < close.length; z++) {

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('closed');
        }


})

  }
  
}



const removeAll = () => {

    const lista = document.querySelector('#myUL');

  lista.innerHTML = '';

}




const fun = () => {


const bla = document.querySelectorAll('.active');

    bla.forEach(eve => {

        eve.addEventListener('click', function() {

this.classList.toggle('fucked');
});

    });
    

}



let myfirstPromise = new Promise((accpet , reject) => { //resolved//accpet
// do what im supposed to do 


shitsDone = false; //or true

if (shitsDone) {
accpet(`result or something ,can be used in .then() method`);
}else {
  reject(`shit and unsuccesful`);
}
});
myfirstPromise.then((resulta) => { //resulta is the accpet(`resutl`);

  // only excuted when the promise is resolved
  console.log(`and thew ${resulta}`);
}).catch(f=>{
// excuted when the promise is rejected 
// console.log(`the promise was ${f}`);
});
// console.log(myfirstPromise);




let my2ndPromise = new Promise((a,r) => {
a(`resolved nigga`);
});
// console.log(my2ndPromise);  resolved with no arrguments
// directly resolved
//no need to wait
//normal is clean the room then resolve or reject ,but here right away reslove 

const texting = () => {
  return new Promise( (resolve ,failed) => {
resolve(`the first shit is done`)
  });
};
const texting2 = (e) => {
  return new Promise( (resolve ,failed) => {
resolve(`half the full job is dne`)
  });
};

const texting3 = (e) => {
  return new Promise( (resolve ,failed) => {
resolve(`youve done all the shit ,congrats heres ur icecream`)
  });
};

texting().then(() => { // i have to add texting() coz im calling a function
  // and then .then() it
texting2();
}).then(() => {
 texting3();
}).then(() => {
//console.log(`all methods ,promises are done and resolved`);
})

// fire them all at the same time
Promise.all([texting(), texting2(), texting3()]).then(() => {
 // console.log(`all done at the same time`);
});
 // array of functions ,intresting
 Promise.race([texting(), texting2(), texting3()]).then(() => {
 // console.log(`one of them is finished ,any`);
});
//.race is do the thing when any ,1 of them are done


// advanced promise 

// const advanced = (buy) => {
//   return new Promise((a,r) =>{

//     if (buy === 'gun'){
//       a(`accpected ,take da moneeh`);
//     } else {
//       r(`fuckin hell ,why would u buy that`);
//     };
//   });
// };
// const kindOF = (type) => {
// return new Promise((a,r) => {
// if (type === 'ak47' || 'm16' || 'glock') {
//   a(`good choice`);
// } else {
// r(`badd bad shit`);
// };
// });
// };
// advanced('gun').then((e) =>{
// console.log(`${e} ,buy best out there`);
// }).catch(e =>{ 
// console.log(`${e} ,go buy a gun bitch`);
// });

// async function work() { // put my awaited fucntions in 1 async function
// // call ur functions
// const adv = await advanced('gun')
// console.log(`shity gun`);
// const response = await kindOF('m16')
// console.log();
//  // code should wait until this is done
// };
// work()
 
const print = (what) => {

  console.log(`${what} printed`);
};

async function write() {
try {
  await print('first');
  console.log(`shit`);
  await print(`second`);
  await print('last');

  
}
catch(err) {
  console.log(`${err} haha`);
}
 
}
write()
