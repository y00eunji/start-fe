/*console.log(window.outerWidth); //윈도우 사이즈
console.log(window.name);
window.open("https://www.naver.com/");*/

//var debug = document.getElementById("debug");
//console.log(debug);

//var box = document.querySelector('.box');
/*var box = document.querySelector('#debug');
console.log(box);*/

// const div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
//
// document.body.appendChild(div);

//const s << <span></span>
// const s = document.createElement('span');
// const textNode = document.createTextNode('hello!');
// s.appendChild(textNode);
// document.querySelector('#debug').appendChild(s);

// const de = document.getElementById('debug');
// de.remove();

// const list = document.getElementById('list');
// console.log(list);
// list.removeChild(list.children[0]);

const at = document.querySelector('a');

at.addEventListener("click", function (event){
    console.log('11111');
    event.preventDefault();
})