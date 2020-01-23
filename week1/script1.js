
// Select the h1 by its tag name and log it using dir 
console.dir(document.querySelector("h1"));



// Let's select the h2 element by its tag name and assign it to a variable:
const heading2 = document.querySelector("h2");
console.dir(heading2);



// This time the classList property is not empty, it has the value "heading2".
// Because the h2 element has a class, we can select it by its class.
const headingByClass = document.querySelector(".heading2");
console.dir(headingByClass);


// Let's select the ul by its id:
const list = document.querySelector("#list");
console.dir(list);

//The innerHTML property for list displays a string version of the HTML inside the ul.
// This diplays only one li element, the first one with the innerText value of "Dog".
const listItem = document.querySelector("li");
console.dir(listItem);

// To select all the li elements, use querySelectorAll:
//This displays a NodeList (a type of object) with all the li elements as properties.
const listItems = document.querySelectorAll("li");
console.dir(listItems);


// Loop over the NodeList using brackets to get each item.
// This will log each li element object.
for(let i =0; i < listItems.length; i++) {
    console.dir(listItems[i]);
}

//Use a for loop to log the innerText value of each li:
for(let i =0; i < listItems.length; i++) {
    console.dir(listItems[i].innerText);
}


//Manipulating the elements

// Select the h1 element and change its color property on its style object:
const heading1 = document.querySelector("h1")
heading1.style.color = "purple";

// Add a border:
heading1.style.border = "1px green solid";

// Add a background colour and some padding:
heading1.style.backgroundColor = "lightGray";
heading1.style.padding = "1em";

//If we select the div using the "div" selector and log its className property, we can see it's empty:
const div = document.querySelector("div");
console.log(div.className);

//add a class using the add method on the classList object:
div.classList.add("container");
console.log(div.className);

// add a second class:
div.classList.add("second-class");
console.log(div.className);

// innerText

// Use innerText to change the h1 element's text value:
const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Updated using innerText";

// update the text value of all the lis.
//use querySelectorAll because we want to select more than one element:

const allTheListItems = document.querySelectorAll("li");

// loop through all the li elements and change their innerText value
for(let i =0; i < allTheListItems.length; i++) {
    allTheListItems[i].innerText = i + " changed";
}

// innerHTML

// use innerHTML to change the h1's value:
// const pageHeading = document.querySelector("h1"); (We have already declared this in line 74)
pageHeading.innerHTML = "Updated using innerHTML";


//add HTML content to other elements using innerHTML
const container = document.querySelector("div");
container.innerHTML = `<p>
                        <b>Bold text:</b> unbolded text
                    </p>`;

//add an li to the ul element,
//by joining the existing innerHTML string value of the ul with a new string value containing the li:

// select the ul
// const List = document.querySelector("ul");

// get the existing HTML inside the ul element and assign it to a variable
const existingHTML = list.innerHTML;

// create the new li HTML
const newHTML = "<li>New item at the end</li>";

// set the ul's new HTML to the existing HTML plus the new HTML 
list.innerHTML = existingHTML + newHTML;


//same code with fewer lines of code:
// const List = document.querySelector("ul");;  (decklared in in line 104)
list.innerHTML = list.innerHTML + "<li>New item at the end</li>";

// put the new item at the beginning of the list by reversing the order of the two strings:
//const list = document.querySelector("ul");
list.innerHTML = "<li>New item at the beginning</li>" + list.innerHTML;

//Can add a class to the new element inside the string:
// const ulList = document.querySelector("ul"); 
// const newHTML = `<li class="red">
//                     New item at the end
//                 </li>`;

list.innerHTML = list.innerHTML + newHTML;

//use the shorthand += operator to add the new string to the existing string
list.innerHTML += newHTML;
