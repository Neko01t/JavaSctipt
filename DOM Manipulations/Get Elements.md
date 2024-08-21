how to get elements from html 
Example HTML for manipulation

#index_HTML

```html
<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<div class="parentElement">
		<div class="Child1"></div>
		<div class="Child2"></div>
		<div class="Child3"></div>
		<div class="Child4"></div>
	</div>
</body>
<script src="Get_DOM.js"></script>
</html>
```

The HTML file contains A body tag which *div* as a  **Child** the child have 4 div children
First **div** have class `parentElement` 
First **div**'s Child elements have class as `Child1` `Child2` `Child3` `Child4` 
`Child1` have sibling element `Child2` similarly one child have its next element sibling to it
**Body**
	div.parentElement
		div.Child1
		div.Child2
		div.Child3
		div.Child4

## DOM JS

To get element we use document object to gets its element 
which is object of window 
window contain all related to things to browser 

#Get_DOM_JS

```JavaScript

let parentDIV = document.querySelector('.parentElement') // # We put CSS selector in querySelector it grabs the only first occurrences ONLY

let ChildDIV = parentDIV.children // # ChildDIV contains all the divs under parent DIV (its an Array like format )

  
  

console.log(parentDIV.firstElementChild) // logs the 1st child element of its own (1st CHild)

console.log(parentDIV.lastElementChild); // logs the lastt child element of its own (nth child)

console.log(ChildDIV.parentElement); // logs the parent element of CHildDiv

console.log(parentDIV)

console.log(ChildDIV)
```

In above Code the `ParentDIV` contains all the values including itself
you can get whole div using `querrySelector` or target its parent and get all values from it in Array format

Their are many other ways to select the Document objects 
such as:
- `document.getElementById('ID of tag')`
- `document.getElementsByClassName('class name if tag')`
- `document.querySelector('CSS selector first occurrence')`
- `document.getElementsByTagName('tagName')`
- `document.querySelectorAll('CSS selector  all occurrence')`
- `document.head \\ selects head tag`
- `document.body \\ selscts body tag`
- `documnt.title \\selects title tag`
(node list didn't understand yet )


# Create elements 

You can create any element using JavaScript
property: `document.createElement(' name of tag to create ')`

by using `.ClassName = 'put class to assgin ` you can give it new class
similarly `.id = 'put id you want to assgin`
their is another way to set the attribute of the tag 
`.SetAttrubutes('key' , 'value')`
key is attribute name like color, class ,src ... etc
value is what is give to key to apply to the tag like red, ClassName, "https://,"

```JavaScript

const new_Div_JS = document.createElement('div') // created a div element holds in an variable

new_Div_JS.className = 'JS_div'// sets a class in new div
new_Div_JS.id = 'JS_id' // stes a od in new div
new_Div_JS.setAttribute('title', 'This div was created by JS') // sets and attribute in new div
new_Div_JS.style.color = 'black'
new_Div_JS.style.backgroundColor = '#fff' // using .style to changes css property

new_Div_JS.innerHTML = 'JS DIV 1st : '
//1st way to assgin inner html of new div (this method removes the pre presented text in it)

const new_text = document.createTextNode('JS DIV 2nd : ') //create new node that holds a text value
new_Div_JS.appendChild(new_text)
// 2nd way to assign text inside the new div #RECOMMENDED METHOD BY (ChaiWithCode)

document.body.appendChild(new_Div_JS) // without appending it won't show on html doc appedn it to any tag as child or sibliing


```

The above example creates an Div element and gives it class and id using `.ClassName` and `.id` property

`.setAttribute('key','value')`  
it sets an attribute in html code

`.style` this method sets the CSS properties . To access the properties use dot and select the CSS property and set it

There are two ways to set inner text of any tag
- using `.innerHTML` it removes the already existed text or any child 
- using nodes 
  - 1st create a node that have text in it using `document.createTextNode('text you want to add)` and hold it in a variable
  - Then append it to div that you want to add text  using `.appendChild(var tht have tag in it or tag name )`
  - this method does not remove already existed text or child elements 
