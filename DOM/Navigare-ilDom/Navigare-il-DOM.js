const html= document.documentElement
console.log(html);

const body= html.children[1];
console.log(body);

const ul= body.children[0]
console.log(ul);

const secondLi= ul.children[1]
console.log(secondLi);

const firstLi= secondLi.previousElementSibling
console.log(firstLi);
const thirdLi= secondLi.nextElementSibling
console.log(thirdLi);

const fatherUl= ul.parentElement
console.log(fatherUl);


