//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);

 //GET ELEMENT BY ID //

//  var headerTitle=(document.getElementById("header-title"));
//  var header=(document.getElementById("main-header"));
//  console.log(headerTitle);
//  headerTitle.textContent="hello";
//  headerTitle.innerText="goodbye";
//  console.log(headerTitle.textContent);
//  console.log(headerTitle.innerText);
//  console.log(headerTitle.innerHTML);

//header.style.borderBottom='solid 3px blue';


// var title=document.getElementsByClassName('title');

// title[0].style.fontWeight = 'bold';

// title[0].style.color="green";

// var item=document.getElementsByClassName("list-group-item");
// item[2].style.backgroundColor='green';

// for(let i=0 ; i<item.length ; i++){
//     item[i].style.fontWeight='bold';
//     item[i].style.color='blue';
// }

//GET ELEMENT BY TAG NAME

// var li=document.getElementsByTagName('li');

// for(let i=0 ; i<li.length ; i++){
//     li[i].style.backgroundColor='lightgrey';
// }

//QUERY SELECTOR

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px grey';

// var input=document.querySelector('input');
// input.value='Hello World';

// var submit=document.querySelector('input[type="submit"]');

// submit.value='SEND';

// var item=document.querySelector('.list-group-item:nth-child(2)');
// item.style.color='blue';

//QUERY SELECTOR ALL

// var titles=document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent='HELLO';

// var item=document.querySelectorAll('li:nth-child(even)');

// for(let i=0 ; i<item.length ; i++){
//     item[i].style.backgroundColor='lightgrey';
// }

// var items=document.querySelectorAll('.list-group-item');
// items[1].style.backgroundColor='green';

// items[2].style.visibility='hidden';

// items[1].style.color='yellow';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(let i=0 ; i<odd.length ; i++){
//     odd[i].style.backgroundColor='lightgreen';
// }


var itemList=document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='yellow';


var newDiv=document.createElement('div');

newDiv.setAttribute('class' , 'container');
newDiv.setAttribute('style' , 'background-color:blue');

newDiv.textContent="hello world";

var container=document.querySelector('.container');
var h1=document.querySelector('#header-title');

container.insertBefore(newDiv,h1);

console.log(newDiv);

var newElement=document.createElement('li');
newElement.className='list-group-item';
newElement.style.fontWeight='bold';
newElement.style.color='orange';
newElement.style.fontFamily='sans-serif';
newElement.textContent='HELLO';

var ul=document.querySelector('#items');
var list=document.querySelector('.list-group-item');

ul.insertBefore(newElement , list);


