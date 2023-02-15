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


var title=document.getElementsByClassName('title');

title[0].style.fontWeight = 'bold';

title[0].style.color="green";


