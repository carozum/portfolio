/**
 * Challenge: Create an event listener
 * - Find the two elements with the .backpack__strap class.
 * - Create a function to output the strap length form.
 * - Iterate through each item with the .backpack__strap class.
 * - Capture the value of the data-side attribute to indicate the strap side.
 * - Create a form element.
 * - Populate the form with an input and a submit button.
 * - Add event listener to each of the strap length forms.
 * - Update strap length value with value submitted from form.
 */

import backpackObjectArray from "./components/data.js";

const main = document.querySelector(".maincontent");
const message = "Cooool";


// ************************* create navBar
const mainNav = document.createElement("nav");
const mainNavList = document. createElement("ul");

mainNavList.innerHTML = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Contact</a></li>
`;
mainNav.classList.add("main-nav");
mainNav.append(mainNavList);

document.querySelector(".siteheader").append(mainNav);


// ******************* create the call back function lidToggle with parameters

const lidToggle = function(event, message, button){
  // console.log(this.parentElement.id)
  // console.log(backpackObjectArray)
  //console.log(event)

  // **** when clicked, displays the correct message on the button 
  // we are dealing with DOM elements
  button.innerText === "Open lid" 
    ? button.innerText = "Close lid" 
    : button.innerText = "Open lid";
  console.log(message)

  // **** when button clicked, display the correct status in the parent status element
  // we are dealing with DOM elements
  let status = button.parentElement.querySelector(".backpack__lid span");
  status.innerText === "open" 
    ? status.innerText = "close" 
    : status.innerText = "open";
  
  // **** update in data the lidStatus.
  // we are dealing with JS object inside data array of objects. 

  // ** identify the Id of the backpack we are currently working on
  let currentObject =  backpackObjectArray.find(
    ({id}) => id === button.parentElement.id
    );
  
  // update the status of this backpack in the data backpackObjectArray
  currentObject.lidOpen === false 
    ? currentObject.lidOpen = true 
    : currentObject.lidOpen =false;

 }


// ******************** create Articles section with each backpack

//** map through the array of objects and make a new array of elements
const allBackpack = backpackObjectArray.map((itemObject) =>{
  // itemObject holds a single object

  // create new article
  const newArticle = document.createElement("article");
  
  // set article id and class
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", itemObject.id);

  // set article content
  const content = `
    <figure class="backpack__image">
      <img src=${itemObject.image} alt="" loading="lazy" />
    </figure>
    <h3 class="backpack__name">${itemObject.name}</h3>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        itemObject.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        itemObject.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${itemObject.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets" data-side="left">Number of pockets:<span> ${
        itemObject.pocketNum
      }</span> inches</li>
      <li class="packprop backpack__strap" data-side="right">Left strap length:<span> ${
        itemObject.strapLength.left
      } inches</span> inches</li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        itemObject.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span>${
        itemObject.lidOpen?"open":"close"} </span></li>
    </ul>
    <button class="lid-toggle" >Open lid</button>
  `;
  newArticle.innerHTML = content;

   // adding event listener on the lidOpen /lidClose Button
  const button = newArticle.querySelector(".lid-toggle");
  button.addEventListener("click", (event) => {
    lidToggle(event, message, button)
  });

  return newArticle;

});

allBackpack.forEach((item) => {
  main.append(item);
});

