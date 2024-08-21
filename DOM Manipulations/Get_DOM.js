let parentDIV = document.querySelector('.parentElement') // # We put CSS selector in querySelector it grabs the only first occurrences  ONLY
let ChildDIV = parentDIV.children // # ChildDIV contains all the divs under parent DIV (its an Array like format )


console.log(parentDIV.firstElementChild) // logs the 1st child element of its own (1st CHild)
console.log(parentDIV.lastElementChild); // logs the lastt child element of its own (nth child)
console.log(ChildDIV.parentElement); // logs the parent element of CHildDiv
console.log(parentDIV)
console.log(ChildDIV)

// Create Elememts 

const new_Div_JS = document.createElement('div') // created a div element holds in an variable
new_Div_JS.className = 'JS_div'// sets a class in new div
new_Div_JS.id = 'JS_id' // stes a od in new div
new_Div_JS.setAttribute('title', 'This div was created by JS') //  sets and attribute in new div
new_Div_JS.style.color = 'black'
new_Div_JS.style.backgroundColor = '#fff' // using .style to changes css property 

new_Div_JS.innerHTML = 'JS DIV 1st  : '
//1st way to assgin inner html of new div (this method removes the pre presented text in it)

const new_text = document.createTextNode('JS DIV 2nd : ') //create new node that holds a text value
new_Div_JS.appendChild(new_text)
// 2nd way to assign text inside the new div #RECOMMENDED METHOD BY (ChaiWithCode)

document.body.appendChild(new_Div_JS) // without appending it won't show on html doc appedn it to any tag as child or sibliing