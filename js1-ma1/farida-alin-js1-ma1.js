// question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

// question 2

const heading = document.querySelector("h3");

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");

// question 5

const paragraphs = document.querySelectorAll("p");

// question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// question 7

const cats = [
    {
        name: "Blob",
        age: 10,
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catFunction (catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
};
catFunction(cats);

// question 8

function catFunction (catArray) {
    let name = "";
    for (let i = 0; i < catArray.length; i++) {
        name = `<h5>${catArray[i].name}</h5>`;
        console.log(name);
        
    }
    //  return name;
};
catFunction(cats);


// question 9

// catFunction(cats);
// resultsContainer.innerHTML = name;



// question 10



// function catFunction (catArray) {
//     let name = "";
//     let ageMissing = "Age Uknown"; 

//     for (let i = 0; i < catArray.length; i++) {
         
//     if(catArray[i].age) {
//
//         catArray[i].age;
//     } else {
//         let ageMissing = "Age Uknown"; 
//     }

//         name = `<div>
//                 <h5>${catArray[i].name}</h5>
//                 <p>${catArray[i].age}</p>
//                 </div>`;

//         console.log(name);
        
//     }
    
// };

// catFunction(cats);

















