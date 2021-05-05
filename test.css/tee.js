const ja7sh = [
{namez: "bakara" ,id: "13"},
{namez : "ja7she", id : "3"},

];

const ja = new Array(ja7sh.length).fill({});
ja.forEach((nam ,idx) => {
   nam.naz = ja7sh[idx].namez;
nam.position = idx;
});
const ar = ja7sh.slice();
ar.forEach((obj,ind) => {

   obj.position = ind;
 
});