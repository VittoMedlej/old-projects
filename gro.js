// select items and buttons 
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const submit= document.querySelector(".submit");
const grocery = document.querySelector("#grocery");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clear = document.querySelector(".clear");
const section = document.querySelector(".section-center");

//edit options (unclear currently);
let editElement;
let EditFlag = false;
let editID = "";



// functions 
const addItem = (e) => {
e.preventDefault(); // stops default submit behaviour
const val = grocery.value;
// we have 3 conditions 
// if val is NOT empty and NOT in edit mode (aka editflag == false) then : 

let id = new Date().getTime().toString();


section.addEventListener("click" , (e) => {
    const item = document.querySelectorAll(".grocery-item");
    
    if (item.length == 0) {
        container.classList.remove("show-container");
     }
    if (e.target.className == "remove") {
        const elementa = e.target.parentNode.parentNode;
        elementa.remove();
      const id = elementa.dataset.id;
        clearMe("Item Removed", "danger");
        setBack();
       //remove from storage 
        RemoveFromSTR(id);
    }; 
    if (e.target.className == "edit") { 
        // when clicking on edit btn
        const elementa = e.target.parentNode.parentNode; // element is parent of parent
 editElement = e.target.parentNode.previousElementSibling; // editElement reassigned to text ,selected sibling title
grocery.value = editElement.textContent; // get text ,and change its value to the current 
//parents text , input value = text content of the element i selected
EditFlag = true; // in edit mode ,reassigning the value of editflag when edit btn is clicked
editID = elementa.dataset.id; // edit id is equal to the parents id 
submit.textContent = "edit";
    }
});



if (Boolean(val) && EditFlag == false) { 
// can be done as if (val && ...) : if (val) returns true when val is not empty 
 // if (!val) means if value is EMPTY ,! === FALSE
// val is true and editflag is false:
// create element with class g-i and special id
const art = document.createElement("article");
art.classList.add("grocery-item");
// create attribute ,data-
const attr = document.createAttribute("data-id");
attr.value = id; // set attribute value data-id= (id)
art.setAttributeNode(attr);
art.innerHTML = `<p class="title">${val}
</p>
<div class="btn-container">
    <button type="button" class="edit">EDIT</button>
    <button  type="button" class="remove">X</button>
</div>`

list.appendChild(art); // append child
// const dele = document.querySelector(".remove");
// dele.addEventListener("click", () => {
   
// if (art.id === id) {
//     console.log("some");
// }
// });


// display alert
clearMe("Article Added","safe");
container.classList.add("show-container");
addtolocal(id ,val)
setBack();

} else if (Boolean(val) && EditFlag == true) { //Editflag can be set as {!EditFlag} aka if editflag IS 
//false
editElement.innerHTML = val; // my edited value = old value .renamed
clearMe("item value edited!" ,"safe");
editLocal(editID, val);

setBack();

} // condition 2 ,if value is NOT empty and editflag is true (in edit mode):
 else {
// else ,if value is empty return ERROR , WARNING ,ALERT

 clearMe("please enter something", "danger"); // RUN function that takes 2 parameter 


 };

};
let items = localStorage.getItem("list");

const RemoveFromSTR = (id) => {
    let items = getLocal();

 items = items.filter(e => {
 if (e.id !== id) { // filter our items (e). id if they dont match id aka parameter 
     return e,  // return item
     console.log(e);
 };
 localStorage.setItem("list", JSON.stringify(items));

});
    };
//function to clear the alerts
const clearMe = (text ,classname) => {
    alert.textContent = text;
    alert.classList.add(`${classname}`);

    setTimeout(()=>{
        alert.textContent = "";
        alert.classList.remove(`${classname}`);
    },2000)


};
//set back to defualt
const setBack = () => {
    grocery.value = "";
    submit.textContent = "submit"; 
     EditFlag = false;
     editID = "";

}
// edit local storage 

const editLocal = (id ,value) => {
};
// local storage
const addtolocal = (id, value) => {
    const values = {id,value};
// let items = localStorage.getItem("list")  condition
// items == null
// ? JSON.parse(localStorage.getItem("list")) //if true
// : []; // if false
// let items = localStorage.getItem("list") // condition ,if list exists :
// ? JSON.parse(localStorage.getItem("list")) // if it does ,parse list ,get the item and convert it into an object ,useable
// : []; // if it doesnt ,return empty array
//localStorage.removeItem("list")
getLocal();

items.push(values); // push values id ,val in the empty array
localStorage.setItem("list", JSON.stringify(items)); // put list with items inside ,put them in storage
};

// delete from local storage

// local storage function 
const getLocal = () => {
    if (!items) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("list")); // got it fucking done baby
    };
};
// add event listener:
form.addEventListener("submit",addItem);

//clear button 
clear.addEventListener("click" , () => {

    list.innerHTML = "";
    container.classList.remove("show-container")
});


// local storage shit setup ,and convert string to obj
// const localshit = document.querySelector(".localshit");
// const ar = [{
// id: "fuck",
// name : "ja7sh"
// },];
// // console.log(ar[0].id);
// const local = localStorage.setItem("info" , JSON.stringify(ar));
// const set = localStorage.getItem("info");
// console.log(set);
// const pare = JSON.parse(set);
// console.log(pare[0].name);

